<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <div class="modal__header__content">{{$t('modals.rescheduleOrder.title')}}</div>
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit.prevent="onSubmit()">
            <!-- <p
              v-if="isInspectorApproved == true && (isLessThan24AndMoreThan12LeftToJob)"
            >You can cancel the booking, you will not be refunded since an inspector has been matched and it is less than 24 hours left before the inspection. However, you can reschedule the booking with the same inspector if it is more than 12 hours left or your e-wallet will be credited.</p>
            <p
              v-if="isInspectorApproved == true && isLessThan12HoursLeftToJob"
            >You can cancel the booking, but the money will not be refunded since an inspector has been booked and it is less than 12 hours left before the inspection.</p>
            <p
              v-if="isInspectorApproved == false || isMoreThan24HoursLeftToJob "
            >You can cancel the booking and receive full refund if it is either more than 24 hours left before the start of the inspection or at anytime so long as no inspector has been accepted by you.</p>-->
            <div class="date-time" :class="{invalid: $v.inspectionDateTime.$error}">
              <label>{{$t('modals.rescheduleOrder.inspectionDateTime')}}</label>
              <Datepicker
                class="datepicker"
                v-model="inspectionDateTime"
                lang="en"
                type="datetime"
                format="[on] YYYY-MMMM-DD [at] HH:mm a"
                :minute-step="30"
                :time-picker-options="{ start: '06:00', step: '00:30', end: '17:00'}"
                :placeholder="$t('modals.rescheduleOrder.inspectionDateTime')"
                :disabled-date="(date)=>date < new Date().setHours(0,0,0,0)"
              ></Datepicker>
              <span
                v-if="!$v.inspectionDateTime.required && $v.inspectionDateTime.$error"
              >Inspection Date and Time is required.</span>
            </div>
            <div>
              <button class="reschedule-booking-btn">Reschedule Booking</button>
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
import { timeLeftToJob } from "../../utility";
import Datepicker from "vue2-datepicker";
import { required } from "vuelidate/lib/validators";
export default {
  components: {
    Datepicker
  },
  props: {
    openedOrder: ""
  },

  data() {
    return {
      inspectionDateTime: ""
    };
  },
  validations: {
    inspectionDateTime: {
      required
    }
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
    timeLeftToJob() {
      return (
        new Date(this.openedOrder.quotation.inspectionDateTime) - new Date()
      );
    },
    close() {
      this.$emit("close");
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      const orderData = {
        inspectionDateTime: this.inspectionDateTime
      };
      axios
        .patch(`/orders/reschedule/${this.$route.params.orderId}`, orderData)
        .then(res => {
          this.$emit("saved");
          this.$emit("close");
        })
        .catch(error => console.log(error.response));
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
  padding: 5px;
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
}

.datepicker {
  margin-top: 5px;
  width: 100%;
}

.date-time {
  padding-top: 5px;
  padding-bottom: 10px;
  width: 100%;
}

label {
  font-size: 14px;
  display: block;
  width: 100%;
}

.datepicker /deep/ input {
  font-size: 13px;
  padding: 9px;
  width: 100%;
  border-radius: 3px;
  border: none;
  outline: none;
  box-shadow: none;
  background-clip: padding-box;
  border: 1px solid #ccc;
  background-color: rgb(232, 240, 254);
}

.datepicker /deep/ input:focus {
  outline: none;
  border: 1px solid #212259;
  background-color: aliceblue;
}

.invalid label {
  color: red;
}

span {
  color: red;
  font-size: 12px;
}

.reschedule-booking-btn {
  color: white;
  font-size: 16px;
  padding: 9px 0px;
  margin-top: 8px;
  margin-bottom: 8px;
  outline: none;
  font-weight: bold;
  background: #2bc4e2;
  border: 2px solid #2bc4e2;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.reschedule-booking-btn:hover {
  color: #2bc4e2;
  border: 2px solid #2bc4e2;
  background: white;
}

/* For mobile: */
@media only screen and (max-width: 380px) {
  .modal__header__content {
    font-size: 19px;
  }
  .modal {
    padding: 10px 6px;
    border-radius: 6px;
    width: 100%;
  }
}
</style>

