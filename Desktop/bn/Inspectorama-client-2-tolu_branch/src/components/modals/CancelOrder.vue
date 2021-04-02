<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="modal__header__content">{{$t('modals.cancelOrder.title')}}</div>
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <div class="modal-body">
          <form class="modal-content"> 
            <p
              v-if="isInspectorApproved == true && (isLessThan24AndMoreThan12LeftToJob)"
            >{{$t('modals.cancelOrder.isLessThan24AndMoreThan12')}}</p>
            <p
              v-if="isInspectorApproved == true && isLessThan12HoursLeftToJob"
            >{{$t('modals.cancelOrder.isLessThan24')}}</p>
            <p
              v-if="isInspectorApproved == false || isMoreThan24HoursLeftToJob "
            > {{$t('modals.cancelOrder.isMoreThan24Hours')}}</p>
            
            <div>
              <button type="button" class="reschedule-booking-btn" @click.prevent="onReschedule">{{$t('buttons.rescheduleBooking')}}</button>
            </div>
            <div>
              <button type="button" class="cancel-booking-btn" @click.prevent="onCancel">{{$t('buttons.yesCancel')}}</button>
            </div>
          </form>
        </div>
        <footer class="modal-footer"></footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {timeLeftToJob} from "../../utility";
export default {
  props: {
    openedOrder: ""
  },

  data() {
    return {
      orderStatus: "Canceled"
    };
  },

  computed: {
     isMoreThan24HoursLeftToJob() {
      if (
        timeLeftToJob(this.openedOrder.quotation.inspectionDateTime) > 8.64e7
      ) {
        return true;
      } else {
        return false;
      }
    },
    isLessThan24AndMoreThan12LeftToJob() {
      if (
        timeLeftToJob(this.openedOrder.quotation.inspectionDateTime) < 8.64e7 &&
        timeLeftToJob(this.openedOrder.quotation.inspectionDateTime) > 4.32e7
      ) {
        return true;
      } else {
        return false;
      }
    },
    isLessThan12HoursLeftToJob() {
      if (
        timeLeftToJob(this.openedOrder.quotation.inspectionDateTime) < 4.32e7
      ) {
        return true;
      } else {
        return false;
      }
    },
    isInspectorApproved() {
      if (this.openedOrder.acceptedInspector) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    close() {
      this.$emit("close");
    },
    onCancel() {
      axios
        .patch(`/orders/cancel/${this.$route.params.orderId}`)
        .then(res => {
          this.$emit("saved")
          this.close()
        })
        .catch(error => console.log(error.response));
    },
    onReschedule(){
      this.$emit("openReschedule")
    }

    
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-family: sans-serif, Arial, Helvetica;
  padding: 15px;
  width: 360px;
}

.modal__header {
  display: flex;
  align-items: center;
}

.modal__header__content {
  flex: 1;
  font-size: 20px;
  font-weight: bold;
}

.btn-close-upper {
  font-weight: bold;
  border: 1.5px solid;
  cursor: pointer;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-close-upper:hover {
  color: red;
}

.modal-content {
  width: 100%;
  padding-top: 4px;
  display: inline-block;
}

p {
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: bold;
  color: brown;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  justify-content: flex-end;
  font-size: 13px;
}

.modal-body {
  font-size: 13px;
  padding-bottom: 10px;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
  justify-content: flex-end;
  font-size: 13px;
}

.reschedule-booking-btn,
.cancel-booking-btn {
  color: white;
  font-size: 16px;
  padding: 9px 0px;
  margin: 8px 0px;
  outline: none;
  font-weight: bold;
  background: #2bc4e2;
  border: 2px solid #2bc4e2;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.cancel-booking-btn:hover {
  color: red;
  border: 2px solid red;
  background: white;
}

.reschedule-booking-btn:hover {
  color: green;
  border: 2px solid green;
  background: white;
}

/* For mobile: */
@media only screen and (max-width: 380px) {
  .modal-backdrop {
    padding: 5px;
  }

  .modal__header__content {
    font-size: 19px;
  }
  .modal {
    padding: 5px;
    border-radius: 5px;
    width: 100%;
  }
}
</style>

