<template>
  <div>
    <div class="body" style="position: relative">
      <div
        class="no-notifications"
        v-if="!isThereNotification && isPageLoaded"
      >{{$t("allNotifications.noNotifications")}}</div>
      <div v-if="!isPageLoaded">
        <LoadingPage style="left:0; right:0; top:0; bottom:0; position:absolute;"></LoadingPage>
      </div>
      <div class="container" v-if="isThereNotification && isPageLoaded">
        <h1>{{$t("allNotifications.title")}}</h1>
        <div>
          <div
            class="border"
            v-for="(notification, index) in allNotifications"
            :key="index"
            :class="{'new-notification': notification.accepted === false && notification.declined === false && notification.isJobStillAvailable == true}"
          >
            <!-- For job notifications -->
            <div
              class="flex"
              v-if="notification.isJobNotification == true"
              @click="navigateToJobNotification(notification)"
            >
              <div class="image-initials">
                <div v-if="notification.avatar">
                  <img class="avatar" :src="notification.avatar" />
                </div>
                <div class="initials" v-if="!notification.avatar">{{notification.initials}}</div>
              </div>
              <div class="row-column">
                <div class="flex-grow">
                  <span class="color">
                    <b>{{$t("allNotifications.jobNotification")}}:</b>
                  </span>
                  <span>
                    <span v-if="typeOfInspector == 'Vehicle'">{{$t("generic.vehicle")}}</span>
                    <span v-if="typeOfInspector == 'Home'">{{$t("generic.home")}}</span>
                    {{$t("allNotifications.inspectionJobAt")}} {{notification.jobSummary.address}},
                    {{notification.jobSummary.city}}, {{notification.jobSummary.zipCode}}
                    {{$t("generic.on")}} {{notification.jobSummary.inspectionDate | formatDate}}
                  </span>
                  <div class="time">{{notification._id | objectIdToDate | toGetRelativeTime}}</div>
                </div>
                <div class="interested-decline-btn">
                  <button
                    class="btn-interested"
                    v-if="notification.accepted === false && notification.declined === false && notification.isJobStillAvailable == true"
                    @click.stop="showAccept(notification)"
                  >{{$t("buttons.iAmInterested")}}</button>
                  <button
                    class="btn-decline"
                    v-if="notification.accepted === false && notification.declined === false  && notification.isJobStillAvailable == true"
                    @click.stop="showDecline(notification)"
                  >{{$t("buttons.decline")}}</button>
                </div>
              </div>
            </div>
            <!-- For general notifications -->
            <div
              class="flex"
              v-if="!notification.isJobNotification"
              @click="navigateToDetails(notification)"
            >
              <div class="image-initials">
                <div v-if="notification.meta.avatar">
                  <img class="avatar" :src="notification.meta.avatar" />
                </div>
                <div
                  class="initials"
                  v-if="!notification.meta.avatar"
                >{{notification.meta.initials}}</div>
              </div>
              <div class="flex-grow">
                <span class="color">
                  <b>{{$t('generic.availableInspector')}}:</b>
                </span>
                <span>{{$t("accountDashboard.recentNotifications.inspectorIsAvailable", {fullName: notification.meta.fullName, sequenceId: notification.orderSequenceId})}}</span>
                <div class="time">{{notification._id | objectIdToDate | toGetRelativeTime}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="load-more" style="position: relative">
          <span v-if="!isLoadMoreLoaded && hideLoadMore" @click="loadMore()">{{$t("buttons.loadMore")}}</span>
          <div v-if="isLoadMoreLoaded">
            <LoadingPage
              style="left:0; right:0; top:0; bottom:0; position:absolute;"
              :width="20"
              :height="20"
              :borderWidth="2"
              :background="'none'"
            ></LoadingPage>
          </div>
        </div>
      </div>
      <AcceptJob
        v-if="isAcceptVisible"
        @close="hideAccept()"
        :orderId="id"
        :jobSummary="summary"
        :notificationId="notificationId"
      ></AcceptJob>
      <DeclineJob
        v-if="isDeclineVisible"
        @close="hideDecline()"
        :orderId="id"
        :notificationId="notificationId"
      ></DeclineJob>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import moment from "moment";
import socket from "../socketio-client";
import AcceptJob from "./modals/AcceptJob.vue";
import DeclineJob from "./modals/DeclineJob.vue";
import LoadingPage from "./loadingComponents/LoadingPage.vue";

export default {
  components: {
    LoadingPage,
    AcceptJob,
    DeclineJob
  },
  data() {
    return {
      userId: "",
      id: "",
      notificationId: "",
      summary: "",
      isAcceptVisible: false,
      isDeclineVisible: false,
      jobNotifications: [],
      interestedInspectors: [],
      activityLog: [],
      allNotifications: [],
      numberOfNotifications: 50,
      isLoadMoreLoaded: false,
      hideLoadMore: true,
      isPageLoaded: false,
      isThereNotification: false
    };
  },

  methods: {
    showAccept(notification) {
      this.isAcceptVisible = true;
      this.id = notification.orderId;
      this.notificationId = notification._id;
      this.summary = notification.jobSummary;
    },
    hideAccept() {
      this.isAcceptVisible = false;
      this.loadNotifications();
    },
    showDecline(notification) {
      this.isDeclineVisible = true;
      this.id = notification.orderId;
      this.notificationId = notification._id;
    },
    hideDecline() {
      this.isDeclineVisible = false;
      this.loadNotifications();
    },

    navigateToDetails(notification) {
      if (notification.typeOfNotification == "Available Inspector") {
        this.$router.push(
          `/${this.$i18n.locale}/account/order-details/${notification.meta.orderId}`
        );
      }
    },

    navigateToJobNotification(notification) {
      this.$router.push(
        `/${this.$i18n.locale}/inspector/inspector-job-notification?notification=${JSON.stringify({
          orderId: notification.orderId,
          notificationId: notification._id
        })}`
      );
    },

    loadNotifications() {
      socket.emit("loadAllNotifications", {
        userId: localStorage.getItem("userId"),
        isInspector: JSON.parse(localStorage.getItem("isInspector")),
        numberOfNotifications: this.numberOfNotifications
      });

      socket.on("allNotifications", data => {
        if (data.length != 0) {
          this.isThereNotification = true;
        }
        this.allNotifications = data;
        this.isPageLoaded = true;
        //To regiter the current time as the notification last seen at the back end
        const date = new Date();
        axios
          .post("/users/notificationLastSeen", { date })
          .then(res => {
            localStorage.setItem("notificationLastSeen", res.data);
            this.$store.dispatch("fetchNoOfUnseenNotifications");
            this.isLoadMoreLoaded = false;

            if (this.numberOfNotifications > this.allNotifications.length) {
              this.hideLoadMore = false;
            }
          })
          .catch(error => {
            console.log(error.response);
          });
      });
    },

    loadMore() {
      this.isLoadMoreLoaded = true;
      this.numberOfNotifications = this.numberOfNotifications + 50;
      this.loadNotifications();
    }
  },

  computed: {
    typeOfInspector() {
      return this.$store.getters.typeOfInspector;
    }
  },

  created() {
    this.loadNotifications();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 100%;
  min-height: 370px;
  justify-content: center;
  display: flex;
  background-color: lightblue;
}

.no-notifications {
  padding-top: 20px;
  color: #212259;
  font-size: 15px;
  text-align: center;
  width: 100%;
}

.container {
  width: 100%;
  max-width: 900px;
  margin-left: 20px;
  margin-right: 20px;
}

h1 {
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 22px;
}

.border {
  background-color: white;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  width: 100%;
}

.border:first-child {
  border-top: 1px solid #ccc;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.border:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.new-notification {
  background-color: aliceblue;
}

.border:hover {
  background-color: #e6e6e6;
}

.flex {
  padding: 10px;
  text-align: left;
  display: flex;
  cursor: pointer;
}

.row-column {
  text-align: left;
  flex: 1;
  display: flex;
}

.flex-grow {
  text-align: left;
  word-break: break-all;
  flex: 1;
}

.image-initials {
  padding-right: 10px;
}

.avatar,
.initials {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: block;
}

.initials {
  border: 1px solid #ccc;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;
}

.time {
  padding-top: 5px;
  font-size: 12px;
}

.color {
  color: darkorange;
}

.interested-decline-btn {
  margin-top: 3px;
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
}

.btn-interested,
.btn-decline,
.btn-see-details {
  font-size: 13px;
  color: white;
  outline: none;
  border: none;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
}

.btn-interested {
  width: 125px;
  margin-right: 20px;
  color: white;
  background-color: rgb(2, 167, 240);
  border: 2px solid rgb(2, 167, 240);
}

.btn-interested:hover {
  color: green;
  background-color: white;
  border: 2px solid green;
}

.btn-decline {
  width: 80px;
  color: rgb(2, 167, 240);
  background-color: white;
  border: 2px solid rgb(2, 167, 240);
}

.btn-decline:hover {
  color: red;
  background-color: white;
  border: 2px solid red;
}

.btn-see-details {
  width: 100px;
  color: rgb(2, 167, 240);
  background-color: white;
  border: 2px solid rgb(2, 167, 240);
}

.btn-see-details:hover {
  color: white;
  background-color: rgb(2, 167, 240);
  border: 2px solid rgb(2, 167, 240);
}

.load-more {
  height: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.load-more span {
  color: darkblue;
  font-weight: bold;
  cursor: pointer;
}

.load-more span:hover {
  color: #212259;
  text-decoration: underline;
}

@media screen and (max-width: 1050px) {
  .body {
    padding-bottom: 10px;
  }
}

@media screen and (max-width: 620px) {
  .body {
    padding-top: 10px;
    padding-bottom: 5px;
  }

  h1 {
    font-size: 18px;
    padding-bottom: 5px;
  }

  .row-column {
    flex-direction: column;
  }

  .interested-decline-btn {
    margin-top: 10px;
    margin-left: 0px;
  }

  @media screen and (max-width: 460px) {
    .body {
      padding-top: 0px;
      padding: 5px;
      background-color: white;
    }

    .no-notifications {
      border-radius: 6px;
      border: 1px solid #ccc;
    }

    h1 {
      padding: 10px;
    }

    .container {
      margin: 0px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }

    .avatar,
    .initials {
      width: 50px;
      height: 50px;
    }

    .border {
      border-bottom: 1px solid #ccc;
      border-left: none;
      border-right: none;
    }

    .border:first-of-type {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }

    .border:last-of-type {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
}
</style>