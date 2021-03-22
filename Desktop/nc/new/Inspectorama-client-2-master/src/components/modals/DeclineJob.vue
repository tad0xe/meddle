<template>
  <div>
    <div class="modal-backdrop" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <div class="modal-header-content">{{$t('modals.declineJob.title')}}</div>
          <div class="btn-close-upper" @click="close()">x</div>
        </div>
        <div class="modal-body">
          <form class="modal-content" @submit.prevent="onSubmit">
            <p>
              {{$t('modals.declineJob.body')}}
            </p>
            <div>
              <button type="submit" class="signupbtn">{{$t('buttons.decline')}}</button>
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
import io from "socket.io-client";
export default {
  props: {
    orderId: "",
    notificationId: ""
  },
  data: function() {
    return {
      decline: true,
      userId: localStorage.getItem("userId"),
      socket: io("localhost:3000")
    };
  },
  methods: {
    close() {
      this.socket.emit("loadAllNotifications", {
        userId: this.userId,
        isInspector: JSON.parse(localStorage.getItem("isInspector"))
      });
      this.$emit("close");
    },
    onSubmit() {
      const formData = {
        decline: this.decline,
        orderId: this.orderId,
        notificationId: this.notificationId
      };
      axios
        .patch("/inspector_infos/me/decline_job", formData)
        .then(res => {
          this.close();
          this.$emit("declined");
        })
        .catch(error => console.log(error.response));
    }
  }
};
</script>

<style scoped >
* {
  box-sizing: border-box;
}

.modal-backdrop {
  position: fixed;
  padding: 5px;
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

.modal-header {
  display: flex;
  align-items: center;
}

.modal-header-content {
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
  display: inline-block;
}

.modal-footer {
  border-top: 1.5px solid #eeeeee;
}

.modal-body {
  font-size: 13px;
  padding-top: 5px;
  padding-bottom: 10px;
}

.signupbtn {
  background-color: #2bc4e2;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  margin-top: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 40px;
  box-sizing: border-box;
  font-size: 16px;
}

.signupbtn:hover {
  background-color: #07b9dd;
}

/* For mobile: */
@media only screen and (max-width: 380px) {
  .modal-header-content {
    font-size: 19px;
  }
  .modal {
    padding: 6px;
    border-radius: 6px;
    width: 100%;
  }
}
</style>


