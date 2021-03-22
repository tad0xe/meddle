<template>
  <div>
    <div style="position: relative">
      <div v-if="isPageLoading1 || isPageLoading2 || isPageLoading3">
        <LoadingPage
          style="left:0; right:0; top:0; bottom:0; position:absolute;"
          :style="{height: containerLeftHeight + 'px'}"
        ></LoadingPage>
      </div>
      <div class="container" v-if="!isPageLoading1 && !isPageLoading2 && !isPageLoading3">
        <div class="container-header">{{$t("accountDashboard.title")}}</div>
        <div class="container-content">
          <div>
            <h3>{{$t("accountDashboard.recentActivities")}}</h3>
            <div style="overflow-x:auto;">
              <table>
                <tr v-for="(activity, index) in logActivities" :key="index">
                  <td style="width:35%;">{{activity.createdAt | toGetRelativeTime}}</td>
                  <td style="width:65%;">{{activity.activity}}</td>
                </tr>
              </table>
            </div>
          </div>
          <br />
          <div>
            <h3>{{$t("accountDashboard.recentOrders.title")}}</h3>
            <div style="overflow-x:auto;">
              <table v-if="myRecentOrders.length">
                <tr>
                  <th>{{$t("accountDashboard.recentOrders.orderId")}}</th>
                  <th>{{$t("accountDashboard.recentOrders.orderDate")}}</th>
                  <th>{{$t("accountDashboard.recentOrders.category")}}</th>
                  <th>{{$t("accountDashboard.recentOrders.inspectionDate")}}</th>
                  <th>{{$t("accountDashboard.recentOrders.status")}}</th>
                  <th>{{$t("accountDashboard.recentOrders.description")}}</th>
                </tr>
                <tr v-for="(order, index) in myRecentOrders" :key="index">
                  <td>{{order.sequenceId}}</td>
                  <td>{{order.createdAt | formatDate}}</td>
                  <td>{{translateValue(order.quotation.typeOfInspection, $t("dbDictionary.typeOfInspection"))}}</td>
                  <td>{{order.quotation.inspectionDateTime | showOnlyDate}}</td>
                  <td>{{translateValue(order.orderStatus, $t("dbDictionary.orderStatus"))}}</td>
                  <td>
                    <!-- <div v-if="order.inspectionType == 'Vehicle'"> -->
                    <div v-if="order.inspectionType == 'Vehicle'">
                      {{order.quotation.inspectedItemInfo.vehicleBrand}} {{order.quotation.inspectedItemInfo.vehicleModel}}
                      {{order.quotation.inspectedItemInfo.vehicleYear | showOnlyYear}} {{$t("generic.model")}}
                    </div>
                    <div v-if="order.inspectionType == 'Home'">
                      {{order.quotation.inspectedItemInfo.typeOfHome}}
                      {{$tc(
                      'generic.withNoOfRooms',
                      order.quotation.inspectedItemInfo.numberOfRooms,
                      {count: order.quotation.inspectedItemInfo.numberOfRooms}
                      )}}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div v-if="!myRecentOrders.length">
              <p>{{$t("accountDashboard.recentOrders.noRecentOrders")}}</p>
            </div>
          </div>
          <br />
          <div v-if="generalUserProfile.pro.isInspector">
            <h3>{{$t("accountDashboard.recentJobs.title")}}</h3>
            <div style="overflow-x:auto;">
              <table v-if="myRecentJobs.length">
                <tr>
                  <th>{{$t("accountDashboard.recentJobs.jobId")}}</th>
                  <th>{{$t("accountDashboard.recentJobs.orderDate")}}</th>
                  <th>{{$t("accountDashboard.recentJobs.inspectionDate")}}</th>
                  <th>{{$t("accountDashboard.recentJobs.status")}}</th>
                  <th>{{$t("accountDashboard.recentJobs.description")}}</th>
                </tr>
                <tr v-for="(job, index) in myRecentJobs" :key="index">
                  <td>{{job.sequenceId}}</td>
                  <td>{{job.createdAt | formatDate}}</td>
                  <td>{{job.quotation.inspectionDateTime | showOnlyDate}}</td>
                  <td>{{job.orderStatus}}</td>
                  <td>
                    <div v-if="job.inspectionType == 'Vehicle'">
                      {{job.quotation.inspectedItemInfo.vehicleBrand}} {{job.quotation.inspectedItemInfo.vehicleModel}}
                      {{job.quotation.inspectedItemInfo.vehicleYear | showOnlyYear}}
                    </div>
                    <div v-if="job.inspectionType == 'Home'">
                      {{job.quotation.inspectedItemInfo.typeOfHome}}
                      {{$tc(
                      'generic.withNoOfRooms',
                      job.quotation.inspectedItemInfo.numberOfRooms,
                      {count: job.quotation.inspectedItemInfo.numberOfRooms}
                      )}}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div v-if="!myRecentJobs.length">
              <p>{{$t("accountDashboard.recentJobs.noRecentJobs")}}</p>
            </div>
            <br />
          </div>
          <div>
            <h3>{{$t("accountDashboard.recentNotifications.title")}}</h3>
            <div v-if="myRecentNotifications.length">
              <div
                class="border"
                v-for="(notification, index) in myRecentNotifications"
                :key="index"
                :class="{'new-notification': notification.accepted === false && notification.declined === false && notification.isJobStillAvailable == true}"
              >
                <!-- For job notifications -->
                <div class="flex" v-if="notification.isJobNotification == true">
                  <div class="image-initials">
                    <div v-if="notification.avatar">
                      <img class="avatar" :src="notification.avatar" />
                    </div>
                    <div class="initials" v-if="!notification.avatar">{{notification.initials}}</div>
                  </div>
                  <div class="row-column">
                    <div class="flex-grow">
                      <span class="color">
                        <b>{{$t("accountDashboard.recentNotifications.jobNotification")}}:</b>
                      </span>
                      <span>
                        {{$t('generic.inspection')}} {{$t("generic.at")}}
                        {{notification.jobSummary.address}},
                        {{notification.jobSummary.city}}, {{notification.jobSummary.zipCode}}
                        {{$t("generic.on")}} {{notification.jobSummary.inspectionDate | formatDate}}
                      </span>
                      <div class="time">{{notification._id | objectIdToDate | showDateAndTime}}</div>
                    </div>
                  </div>
                </div>
                <!-- For customer to see interested inspectors -->
                <div class="flex" v-if="!notification.isJobNotification">
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
                    <!-- This notification.body from backend needs translation -->
                    <span>{{$t("accountDashboard.recentNotifications.inspectorIsAvailable", {fullName: notification.meta.fullName, sequenceId: notification.orderSequenceId})}}</span>
                    <div class="time">{{notification._id | objectIdToDate | showDateAndTime}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="!myRecentNotifications.length">
              <p>{{$t("accountDashboard.recentNotifications.noRecentNotifications")}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingPage from "../../loadingComponents/LoadingPage";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
import axios from "axios";
import socket from "../../../socketio-client";
import { translateValue } from "../../../utility";
export default {
  components: {
    LoadingPage
  },
  props: ["containerLeftHeight"],
  data() {
    return {
      isPageLoading1: true,
      isPageLoading2: true,
      isPageLoading3: true,
      logActivities: [],
      myRecentOrders: [],
      myRecentJobs: [],
      myRecentNotifications: [],
      numberOfNotifications: 5,
      translateValue
    };
  },

  computed: {
    ...mapGetters(["generalUserProfile"])
  },

  methods: {
    loadRecentActivities() {
      axios
        .get("/log_activities/me/recentActivities")
        .then(res => {
          this.logActivities = res.data;
          this.isPageLoading1 = false;
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    loadRecentNotifications() {
      socket.emit("loadAllNotifications", {
        userId: localStorage.getItem("userId"),
        numberOfNotifications: 5,
        isInspector: JSON.parse(localStorage.getItem("isInspector"))
      });

      socket.on("allNotifications", data => {
        this.myRecentNotifications = data;
      });
    },
    loadRecentOrders() {
      axios
        .get("/users/my_recent_orders")
        .then(res => {
          this.myRecentOrders = res.data;
          this.isPageLoading2 = false;
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    loadRecentJobs() {
      axios
        .get("/users/inspector/my_recent_jobs")
        .then(res => {
          this.myRecentJobs = res.data;
          this.isPageLoading3 = false;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },

  mounted() {
    this.$store.dispatch("fetchUser");
    this.loadRecentActivities();
    this.loadRecentNotifications();
    this.loadRecentOrders();
    this.loadRecentJobs();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  font-size: 14px;
  width: 100%;
  padding-bottom: 30px;
  border-radius: 5px;
  border: 1px solid #b6b1b1;
  background-color: white;
  display: inline-block;
}

.container-header {
  font-size: 26px;
  font-weight: bold;
  padding: 20px 30px;
  color: #212259;
  border-bottom: 1px solid #ccc;
}

.container-header,
.container-content {
  padding: 20px 30px;
}

h3 {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
}

table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

th {
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  background-color: #f2f2f2;
}

td {
  padding: 10px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f1ffff;
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
}

.new-notification {
  background-color: aliceblue;
}

/* .border:hover {
  background-color: #e6e6e6;
} */

.flex {
  padding: 10px;
  text-align: left;
  display: flex;
  /* cursor: pointer; */
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
.btn-decline {
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
  width: 120px;
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

@media only screen and (max-width: 840px) {
  .container-header {
    font-size: 22px;
  }
  .container-header,
  .container-content {
    padding: 20px;
  }

  h3 {
    font-size: 17px;
  }

  @media screen and (max-width: 620px) {
    .row-column {
      flex-direction: column;
    }

    .interested-decline-btn {
      margin-top: 10px;
      margin-left: 0px;
    }

    /* For mobile phones: */
    @media only screen and (max-width: 540px) {
      .container {
        border-radius: 0px;
        padding-bottom: 10px;
      }
      .container-header {
        padding: 20px 5px;
        font-size: 18px;
      }
      .container-content {
        padding: 20px 5px;
      }

      .avatar,
      .initials {
        width: 50px;
        height: 50px;
      }
    }
  }
}
</style>
