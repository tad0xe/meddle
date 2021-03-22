<template>
  <div>
    <div class="body">
      <div class="container">
        <div class="container-content">
          <h1>{{$t('inspectorJobNotification.title')}}</h1>
          <p v-show="!isJobStillAvailable">{{$t('inspectorJobNotification.jobNoMoreAvailable')}}</p>
          <p v-show="accepted == true"> {{$t('inspectorJobNotification.alreadyShownInterest')}}</p>
          <p v-show="declined == true">
            <span>{{$t('inspectorJobNotification.jobAlreadyDeclined')}}</span>
            <span v-show="isJobStillAvailable">
              <span>{{$t('inspectorJobNotification.wouldYouLike')}}</span>
              <button class="yes-btn" type="button" @click="onChangeToInterest">{{$t('buttons.yes')}}</button>
            </span>
          </p>
          <table v-show="isJobStillAvailable && !accepted">
            <tr>
              <td class="spaced">{{$t('inspectorJobNotification.jobDateTime')}}</td>
              <td>
                <strong>{{jobSummary.inspectionTime | formatDate}}</strong>
              </td>
            </tr>
            <tr>
              <td class="spaced">{{$t('inspectorJobNotification.jobLocation')}}</td>
              <td>
                <strong>{{jobSummary.address}} {{jobSummary.city}} {{jobSummary.zipCode}}</strong>
              </td>
            </tr>
            <tr>
              <td class="spaced">{{$t('inspectorJobNotification.jobDescription')}}</td>
              <td>
                <strong>{{jobSummary.jobDescription}}</strong>
              </td>
            </tr>
            <tr>
              <td class="spaced">{{$t('inspectorJobNotification.jobPay')}}</td>
              <td>
                <strong>{{jobSummary.jobPay.amount}} {{jobSummary.jobPay.currency}}</strong>
              </td>
            </tr>
            <tr>
              <td class="spaced"></td>
              <td>
                <button
                  type="button"
                  class="interested-btn"
                  @click="showAccept()"
                  v-show="accepted == false && declined == false"
                >{{$t('buttons.iAmInterested')}}</button>
                <button
                  type="button"
                  class="decline-btn"
                  @click="showDecline()"
                  v-show="accepted == false && declined == false"
                >{{$t('buttons.decline')}}</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <AcceptJob
          v-show="isAcceptVisible"
          @close="hideAccept()"
          @accepted="onAccepted()"
          :orderId="orderId"
          :jobSummary="jobSummary"
          :notificationId="notificationId"
        ></AcceptJob>
      </div>
      <div>
        <DeclineJob
          v-show="isDeclineVisible"
          @declined="onDeclined()"
          @close="hideDecline()"
          :orderId="orderId"
          :notificationId="notificationId"
        ></DeclineJob>
      </div>
    </div>
  </div>
</template>

<script>
import AcceptJob from "../../modals/AcceptJob.vue";
import DeclineJob from "../../modals/DeclineJob.vue";
import axios from "axios";
export default {
  components: {
    AcceptJob,
    DeclineJob
  },
  data() {
    return {
      isAcceptVisible: false,
      isDeclineVisible: false,
      orderId: "",
      jobSummary: {
        jobPay: {
          amount:"",
          currency:""
        }
      },
      notificationId: "",
      isJobStillAvailable: true,
      accepted: null,
      declined: null
    };
  },
  methods: {
    showAccept() {
      this.isAcceptVisible = true;
    },
    hideAccept() {
      this.isAcceptVisible = false;
    },
    showDecline() {
      this.isDeclineVisible = true;
    },

    hideDecline() {
      this.isDeclineVisible = false;
    },

    onAccepted() {
      this.$router.push("/all-notifications");
    },
    onDeclined() {
      this.$router.push("/all-notifications");
    },
    onChangeToInterest() {
      this.accepted = false;
    }
  },
  mounted() {
    const notification = JSON.parse(this.$route.query.notification);
    this.orderId = notification.orderId;
    this.notificationId = notification.notificationId;

    axios
      .get("/inspector_infos/me")
      .then(res => {
        const jobNotifications = res.data.jobNotifications;

        jobNotifications.forEach(element => {
          if (
            element.orderId == this.orderId &&
            element._id == this.notificationId
          ) {
            this.jobSummary = element.jobSummary;
            this.isJobStillAvailable = element.isJobStillAvailable;
            this.accepted = element.accepted;
            this.declined = element.declined;
          }
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  width: 100%;
  height: 100%;
  padding: 60px 70px;
  background-color: aliceblue;
  display: inline-block;
}

.container {
  border-radius: 5px;
  border: 1px solid #b6b1b1;
  background-color: white;
  width: 100%;
  display: inline-block;
}

.container-header {
  padding-top: 20px;
  padding-left: 20px;
}

h1 {
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 30px;
  text-align: center;
  border-bottom: 1px solid #b6b1b1;
}

p {
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}

table {
  left: 50%;
  transform: translateX(-50%);
  padding-top: 20px;
  padding-bottom: 20px;
  position: relative;
}

td {
  padding: 10px;
  text-align: left;
  vertical-align: top;
}

tr .spaced {
  width: 180px;
}

.yes-btn {
  margin-left: 5px;
  font-size: 13px;
  font-weight: bold;
  padding: 2px 7px;
  background-color: #ea7601;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  border: solid;
  border-color: #ed6502 #a04300 #a04300 #ed6502;
  opacity: 0.9;
}

.yes-btn:hover {
  opacity: 1;
}

.yes-btn:active {
  opacity: 0.95;
  border-color: #a04300 #ed6502 #ed6502 #a04300;
}

.interested-btn,
.decline-btn {
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 25px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  border: 2px solid rgb(2, 167, 240);
  border-radius: 5px;
  color: white;
  width: 145px;
  background-color: rgb(2, 167, 240);
}

.interested-btn {
  margin-right: 40px;
  color: white;
}
.decline-btn {
  color: rgb(2, 167, 240);
  background-color: white;
}

.interested-btn:hover {
  color: darkgreen;
  border: 2px solid darkgreen;
  background-color: white;
}

.decline-btn:hover {
  color: white;
  color: red;
  border: 2px solid red;
}

@media screen and (max-width: 920px) {
  .body {
    padding: 20px;
  }

  h1 {
    font-size: 26px;
  }

  @media screen and (max-width: 720px) {
    tr .spaced {
      width: auto;
    }

    table {
      width: 100%;
    }
  }
}

@media screen and (max-width: 620px) {
  .body {
    font-size: 14px;
    padding: 5px;
    padding-top: 0px;
    background-color: white;
  }

  .container {
    border-radius: 8px;
  }

  h1 {
    font-size: 20px;
  }

  p {
    padding-top: 20px;
    text-align: left;
  }

  table {
    left: 0px;
    transform: translateX(0%);
    padding-top: 15px;
    padding-bottom: 15px;
    position: static;
  }

  td {
    padding: 8px 5px;
  }

  .interested-btn,
  .decline-btn {
    width: 130px;
  }

  .interested-btn {
    margin-right: 30px;
    color: white;
  }

  /* For mobile phones: */
  @media screen and (max-width: 440px) {
    .interested-btn,
    .decline-btn {
      margin-top: 20px;
      margin-bottom: 20px;
      border-radius: 20px;
      width: 100%;
    }

    .decline-btn {
      margin-top: 0px;
    }
  }
}
</style>