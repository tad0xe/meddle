<template>
  <div>
    <div
      class="body"
      style="position: relative"
      :class="{'loadding-background-width': !isPageLoaded}"
    >
      <div
        class="no-notifications"
        v-if="!isThereNotification && isPageLoaded"
      >{{$t('modals.notifications.noNotifications')}}</div>
      <div v-if="!isPageLoaded">
        <LoadingPage
          style="left:0; right:0; top:0; bottom:0; position:absolute;"
          :width="20"
          :height="20"
          :borderWidth="2"
        ></LoadingPage>
      </div>
      <div class="container" v-if="isThereNotification && isPageLoaded">
        <h1>{{$t('modals.notifications.yourNotifications')}}</h1>
        <div class="container-content">
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
                <div class="flex-grow">
                  <span class="color">
                    <b>{{$t("accountDashboard.recentNotifications.jobNotification")}}:</b>
                  </span>
                  <span>
                    <span v-if="typeOfInspector == 'Vehicle'">{{$t('generic.vehicle')}}</span>
                    <span v-if="typeOfInspector == 'Home'">'">{{$t('generic.home')}}</span>
                    {{$t('generic.inspection')}} {{$t("generic.at")}} {{notification.jobSummary.address}},
                    {{notification.jobSummary.city}}, {{notification.jobSummary.zipCode}}
                    {{$t("generic.on")}} {{notification.jobSummary.inspectionDate | formatDate}}
                  </span>
                  <div class="time">{{notification._id | objectIdToDate | toGetRelativeTime}}</div>
                </div>
              </div>
              <!-- For customer to see interested inspectors -->
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
        </div>
        <div class="see-all">
          <span @click="navigateToAllNotifications()">{{$t('generic.seeAll')}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
import socket from "../../socketio-client";
import LoadingPage from "../loadingComponents/LoadingPage.vue";

export default {
  components: {
    LoadingPage
  },
  data() {
    return {
      userId: "",
      id: "",
      notificationId: "",
      summary: "",
      jobNotifications: [],
      interestedInspectors: [],
      activityLog: [],
      allNotifications: [],
      numberOfNotifications: 10,
      isPageLoaded: false,
      isThereNotification: false
    };
  },

  watch: {
    "$i18n.locale"(to, fro) {
      this.loadNotifications()
    }
  },

  computed: {
    typeOfInspector() {
      return this.$store.getters.typeOfInspector;
    }
  },

  methods: {
    navigateToDetails(notification) {
      if (notification.typeOfNotification == "Available Inspector") {
        this.$router.push(
          `/${this.$i18n.locale}/account/order-details/${notification.meta.orderId}`
        );
      }
    },
    navigateToJobNotification(notification) {
      this.$router.push(
        `/${
          this.$i18n.locale
        }/inspector/inspector-job-notification?notification=${JSON.stringify({
          orderId: notification.orderId,
          notificationId: notification._id
        })}`
      );
      this.$emit("close");
    },

    navigateToAllNotifications() {
      this.$router.push(`/${this.$i18n.locale}/all-notifications`);
      this.$emit("close");
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
      });
    }
  },

  created() {
    this.loadNotifications()
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: Arial, Helvetica, sans-serif;
  min-width: 200px;
  width: 100%;
  display: table;
}

.loadding-background-width {
  padding-top: 15px;
  padding-bottom: 15px;
  width: 400px;
}

.container {
  width: 100%;
  display: inline-block;
}

.no-notifications {
  font-size: 13px;
  padding: 6px 10px;
  display: table;
}

h1 {
  font-size: 14px;
  font-weight: bold;
  padding-top: 5px;
  padding-left: 10px;
  padding-bottom: 10px;
  color: #212259;
  border-bottom: 1px solid #ccc;
}

.container-content {
  height: 100%;
  max-height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
  display: block;
}

.border {
  border-bottom: 1px solid #ccc;
}

.border:last-child {
  border-bottom: none;
}

.flex {
  padding: 10px;
  text-align: left;
  display: flex;
  cursor: pointer;
}

.flex:hover {
  background-color: #e6e6e6;
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
  width: 50px;
  height: 50px;
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

.see-all {
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 5px;
  text-align: center;
  border-top: 1px solid #ccc;
  width: 100%;
}

.see-all span {
  color: dodgerblue;
  font-weight: bold;
  cursor: pointer;
}

.see-all span:hover {
  color: blue;
  text-decoration: underline;
}

.new-notification {
  background-color: aliceblue;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media screen and (max-width: 420px) {
  .flex {
    padding: 5px;
  }

  .image-initials {
    padding-right: 6px;
  }
}
</style>