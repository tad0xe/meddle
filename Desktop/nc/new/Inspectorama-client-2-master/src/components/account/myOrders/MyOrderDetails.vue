<template>
  <div>
    <div class="body" style="position: relative">
      <div v-if="!isPageLoaded">
        <LoadingPage style="left:0; right:0; top:0; bottom:0; position:absolute;"></LoadingPage>
      </div>
      <div class="container" v-if="isPageLoaded">
        <div class="container-left">
          <div class="top-title">
            <div class="mobile-dropdown" @click="activeState=!activeState">
              <i v-if="activeState" class="fa fa-angle-left"></i>
              <i v-if="!activeState" class="fa fa-angle-right"></i>
            </div>
            <div>
              <router-link :to="`/${$i18n.locale}/account/orders`">{{$t("buttons.goToMyOrders")}}</router-link>
            </div>
            <h1>
              {{$t('generic.orderId')}}:
              <span>&nbsp;{{openedOrder.sequenceId}}</span>
            </h1>
            <!-- <p>{{$t('generic.candidates')}}</p> -->
          </div>
          <div class="messageReport-header" v-if="openedOrder.acceptedInspector">
            <div
              :class="{'active-message-report': isMessagesVisible , 'u-dotted': !isMessagesVisible}"
              @click="showMessages"
            >
              <span>
                <strong>{{$t('generic.chat')}}</strong>
              </span>
            </div>
            <div
              :class="{'active-message-report': isReportDivVisible , 'u-dotted': !isReportDivVisible}"
              @click="showReport"
            >
              <span>
                <strong>{{$t('generic.report')}}</strong>
              </span>
            </div>
          </div>
          <div class="candidates">
            <!-- <p>{{$t('generic.candidates')}}</p> -->
            <div
              class="no-inspector-yet"
              v-if="!openedOrder.interestedInspectors.length && !openedOrder.acceptedInspector"
            >{{$t('myOrderDetails.noMatchedInspectorsYet')}}</div>
            <div
              class="inspector-container"
              v-if="openedOrder.interestedInspectors.length && !openedOrder.acceptedInspector"
            >
              <div
                class="inspector"
                v-for="(interestedInspector, index) in openedOrder.interestedInspectors"
                :key="index"
              >
                <div class="inspector-content">
                  <div class="inspector-image">
                    <div v-if="interestedInspector.avatar">
                      <img :src="interestedInspector.avatar" class="avatar" />
                    </div>
                    <div
                      class="initials"
                      v-if="!interestedInspector.avatar"
                      style="fontSize: 50px"
                    >{{interestedInspector.initials}}</div>
                  </div>
                  <div class="inspector-info">
                    <p
                      style="fontSize: 20px"
                    >{{interestedInspector.firstName}} {{interestedInspector.lastName}}</p>
                    <div class="flex padding">
                      <div>
                        <StarRating
                          :show-rating="false"
                          :star-size="15"
                          :padding="2"
                          :increment="0.1"
                          :read-only="true"
                          v-model="interestedInspector.inspectorInfo.averageCustomerRating.overallRating"
                        ></StarRating>
                      </div>
                      <div @click="showInspectorProfile(interestedInspector)">
                        <u class="link">{{$t('generic.viewProfile')}}</u>
                      </div>
                    </div>
                    <div>
                      <strong
                        style="fontSize: 20px"
                      >{{interestedInspector.inspectorInfo.averageCustomerRating.overallRating}}</strong>
                    </div>
                    <table>
                      <tr>
                        <td class="spaced">{{$t('myOrderDetails.customerReviews')}}:</td>
                        <td>
                          <b>{{interestedInspector.inspectorInfo.averageCustomerRating.numberOfReviews}}</b>
                        </td>
                      </tr>
                      <tr>
                        <td class="spaced">{{$t('myOrderDetails.jobsCompleted')}}:</td>
                        <td>
                          <b>{{interestedInspector.inspectorInfo.completedJobs}}</b>
                        </td>
                      </tr>
                      <tr v-if="interestedInspector.inspectorInfo.typeOfInspector == 'vehicle'">
                        <td class="spaced">{{$t('myOrderDetails.vehicleSpecilizations')}}:</td>
                        <td>
                          <b>
                            <span
                              v-for="(spec, index) in interestedInspector.inspectorInfo.areaOfSpecialization.vehicleSpecializations"
                              :key="index"
                            >
                              {{spec.vehicleType}}
                              <span
                                v-if="index < interestedInspector.inspectorInfo.areaOfSpecialization.vehicleSpecializations.length-1"
                              >&#8226;</span>
                            </span>
                          </b>
                        </td>
                      </tr>
                      <tr v-if="interestedInspector.inspectorInfo.typeOfInspector == 'vehicle'">
                        <td class="spaced">{{$t('myOrderDetails.brandSpecializations')}}:</td>
                        <td>
                          <b>
                            <span
                              v-for="(spec, index) in interestedInspector.inspectorInfo.areaOfSpecialization.brandSpecializations"
                              :key="index"
                            >
                              {{spec.brandType}}
                              <span
                                v-if="index < interestedInspector.inspectorInfo.areaOfSpecialization.brandSpecializations.length-1"
                              >&#8226;</span>
                            </span>
                          </b>
                        </td>
                      </tr>
                      <tr v-if="interestedInspector.inspectorInfo.typeOfInspector == 'Home'">
                        <td class="spaced">{{$t('myOrderDetails.areasOfSpecialization')}}:</td>
                        <td>
                          <b>
                            <span
                              v-for="(spec, index) in interestedInspector.inspectorInfo.areaOfSpecialization.homeInspectionSpecializations"
                              :key="index"
                            >
                              {{spec.specializationType}}
                              <span
                                v-if="index < interestedInspector.inspectorInfo.areaOfSpecialization.homeInspectionSpecializations.length-1"
                              >&#8226;</span>
                            </span>
                          </b>
                        </td>
                      </tr>
                      <tr>
                        <td class="spaced">{{$t('generic.languages')}}:</td>
                        <td>
                          <b>
                            <span
                              v-for="(langauageObj, index) in interestedInspector.inspectorInfo.languageProficiency"
                              :key="index"
                            >
                              {{langauageObj.language}} ({{langauageObj.proficiency}})
                              <span
                                v-if="index < interestedInspector.inspectorInfo.languageProficiency.length-1"
                              >&#8226;</span>
                            </span>
                          </b>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="accept-reject-btn">
                    <button
                      class="btn-accept"
                      type="button"
                      @click="showAccept(interestedInspector, openedOrder)"
                    >{{$t('buttons.accept')}}</button>
                    <button
                      class="btn-reject"
                      type="button"
                      @click="showReject(interestedInspector, openedOrder)"
                    >{{$t('buttons.reject')}}</button>
                  </div>
                </div>
              </div>
              <div class="red">
                <span class="fa fa-info-circle"></span>
                <span>{{$t('myOrderDetails.rejectingAnInspector')}}</span>
              </div>
            </div>
          </div>
          <div class="subchat" v-show="openedOrder.acceptedInspector && isMessagesVisible">
            <div class="subchat-content">
              <subChat :activeSummary="displayedSummary" @currentOrderId="checkIfCurrentOrder"></subChat>
            </div>
          </div>
          <div v-if="isReportDivVisible">
            <div class="report-not-ready" v-if="!openedOrder.isReportCompleted">
              <strong>{{$t('myOrderDetails.reportNotReadyYet')}}</strong>
              <br />
              {{$t('myOrderDetails.reportNotReadyYetBody')}}
            </div>
            <div v-if="openedOrder.isReportCompleted">
              <MainViewVehicleInspectionReport
                v-if="openedOrder.inspectionType == 'vehicle'"
                :orderId="orderId"
              ></MainViewVehicleInspectionReport>
              <MainViewHomeInspectionReport
                v-if="openedOrder.inspectionType == 'home'"
                :orderId="orderId"
              ></MainViewHomeInspectionReport>
            </div>
          </div>
        </div>
        <div class="container-right-body" :class="{backdrop: activeState}">
          <transition name="slide">
            <div class="container-right-content" v-if="activeState">
              <MyOrderSummary
                :openedOrder="openedOrder"
                :acceptedInspectorInfo="acceptedInspectorInfo"
                @initializeData="initializeData()"
              />
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div>
      <ViewInspectorProfile
        v-show="isInspectorProfileVisible"
        @close="hideInspectorProfile()"
        :selectedInspector="selectedInspector"
      ></ViewInspectorProfile>
      <AcceptInspector
        v-show="isAcceptVisible"
        @close="hideAccept()"
        @reloadParent="initializeData()"
        :orderId="orderId"
        :inspector="inspector"
      ></AcceptInspector>
      <RejectInspector
        v-show="isRejectVisible"
        @close="hideReject()"
        :orderId="orderId"
        :inspector="inspector"
      ></RejectInspector>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import socket from "../../../socketio-client";
import AcceptInspector from "../../modals/AcceptInspector.vue";
import RejectInspector from "../../modals/RejectInspector.vue";
import ViewInspectorProfile from "../../modals/inspectorProfiles/ViewInspectorProfile.vue";
import MyOrderSummary from "./MyOrderSummary.vue";
import MainViewVehicleInspectionReport from "../../reportViewTemplates/vehicleInspectionReport/MainViewVehicleInspectionReport.vue";
import MainViewHomeInspectionReport from "../../reportViewTemplates/homeInspectionReport/MainViewHomeInspectionReport.vue";
import SubChat from "../../inbox/SubChat.vue";
import axios from "axios";
import StarRating from "vue-star-rating";
import { timeLeftToJob } from "../../../utility";
import LoadingPage from "../../loadingComponents/LoadingPage.vue";
import { getUserAbridgedProfile } from "../../../utility";
import { translateValue } from "../../../utility";

export default {
  components: {
    AcceptInspector,
    RejectInspector,
    ViewInspectorProfile,
    MyOrderSummary,
    MainViewVehicleInspectionReport,
    MainViewHomeInspectionReport,
    SubChat,
    StarRating,
    LoadingPage
  },
  data() {
    return {
      activeState: true,
      orderId: this.$route.params.orderId,
      inspector: "",
      openedOrder: "",
      userId: localStorage.getItem("userId"),
      displayedSummary: {},
      selectedInspector: "",
      isAcceptVisible: false,
      isRejectVisible: false,
      isInspectorProfileVisible: false,
      isEditSellerInfoVisible: false,
      isEditVehicleInfoVisible: false,
      isCancelOrderVisible: false,
      isRescheduleOrderVisible: false,
      isReportDivVisible: false,
      isMessagesVisible: true,
      isPageLoaded: false,
      acceptedInspectorInfo: null,
      translateValue
    };
  },

  computed: {
    canCancelOrReschedule() {
      const timeLeft = timeLeftToJob(
        this.openedOrder.quotation.inspectionDateTime
      );
      const orderStatus = this.openedOrder.orderStatus;
      if (timeLeft > 4.32e7 || orderStatus == "Pending") {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    windowResize() {
      if (window.innerWidth <= 920) {
        this.activeState = false;
      } else {
        this.activeState = true;
      }
    },

    showAccept(interestedInspector, openedOrder) {
      this.isAcceptVisible = true;
      this.inspector = interestedInspector;
      this.orderId = openedOrder._id;
    },

    hideAccept() {
      this.isAcceptVisible = false;
    },

    showReject(interestedInspector, openedOrder) {
      this.isRejectVisible = true;
      this.inspector = interestedInspector;
      this.orderId = openedOrder._id;
    },

    hideReject() {
      this.isRejectVisible = false;
    },

    showInspectorProfile(interestedInspector) {
      this.isInspectorProfileVisible = true;
      this.selectedInspector = interestedInspector;
    },

    hideInspectorProfile() {
      this.isInspectorProfileVisible = false;
    },

    showEditSellerInfo(openedOrder) {
      this.isEditSellerInfoVisible = true;
      // localStorage.setItem("openedOrderId", openedOrder._id);
    },

    hideEditSellerInfo() {
      this.isEditSellerInfoVisible = false;
    },
    showEditVehicleInfo(openedOrder) {
      this.isEditVehicleInfoVisible = true;
      localStorage.setItem("openedOrderId", openedOrder._id);
    },

    hideEditVehicleInfo() {
      this.isEditVehicleInfoVisible = false;
    },

    showCancelOrder() {
      this.isCancelOrderVisible = true;
    },

    hideCancelOrder() {
      this.isCancelOrderVisible = false;
    },

    showRescheduleOrder() {
      this.isRescheduleOrderVisible = true;
    },

    hideRescheduleOrder() {
      this.isRescheduleOrderVisible = false;
    },

    openRescheduleInstead() {
      this.hideCancelOrder();
      this.showRescheduleOrder();
    },

    showMessages() {
      this.isReportDivVisible = false;
      this.isMessagesVisible = true;
      this.displayedSummary = {
        orderId: this.orderId
      };
    },

    checkIfCurrentOrder(value) {
      if (value != this.orderId) {
        this.$router.push(`/${this.$i18n.locale}/account/orders`);
      }
    },

    showReport() {
      this.isMessagesVisible = false;
      this.isReportDivVisible = true;
    },

    initializeData() {
      const orderId = this.$route.params.orderId;
      axios
        .get(`/orders/my_orders/${orderId}`)
        .then(async res => {
          this.openedOrder = res.data;
          this.isPageLoaded = true;
          if (res.data.acceptedInspector) {
            this.acceptedInspectorInfo = await getUserAbridgedProfile(
              res.data.acceptedInspector
            );
          }
          this.$nextTick(() => {
            this.showMessages();
          });
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },

  mounted() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
    this.initializeData();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.windowResize);
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100%;
  min-height: 370px;
}

.container {
  background-color: lightblue;
  padding: 50px;
  height: 100%;
  min-height: 620px;
  width: 100%;
  display: flex;
}

.subchat {
  padding-left: 12%;
  padding-right: 12%;
  background-color: aliceblue;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.subchat-content {
  background-color: white;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.container-left {
  width: 68%;
  border-radius: 5px;
  margin-right: 50px;
  background-color: white;
  border: 1px solid #ccc;
  display: inline-table;
}

.container-right-body {
  width: 28%;
  min-width: 300px;
}

.container-right-content {
  font-size: 14px;
  padding: 30px 20px;
  width: 100%;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #ccc;
  display: inline-table;
}

.mobile-dropdown {
  display: none;
}

.avatar,
.initials {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
}

.small-avatar,
.small-initials {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

.initials,
.small-initials {
  border: 1px solid #212259;
  color: #212259;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;
}

.small-initials {
  border: 1px solid orangered;
  color: orangered;
}

.flex {
  width: 100%;
  display: flex;
}

.flex-grow {
  padding-left: 20px;
  flex: 1;
}

.top-title h1 {
  font-size: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
}

.top-title p {
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.top-title h1,
.top-title p,
.inspector-container {
  padding-left: 15px;
  padding-right: 15px;
}

.messageReport-header {
  font-size: 12px;
  padding: 25px;
  color: #808080;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
}

.active-message-report {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  width: 70px;
  display: block;
  color: white;
  background-color: black;
  cursor: pointer;
}

.container-left .u-dotted {
  color: black;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  width: 70px;
  display: block;
  background-color: white;
  cursor: pointer;
}

.container-left .u-dotted span {
  border-bottom: 1.5px dotted black;
}

.candidates {
  width: 100%;
}

.inspector-container td {
  font-size: 12px;
  padding-top: 5px;
  vertical-align: top;
}

.padding {
  padding-top: 2px;
  padding-bottom: 2px;
}

tr .spaced {
  font-size: 13px;
}

.link {
  font-size: 13px;
  margin-left: 5px;
  cursor: pointer;
  color: dodgerblue;
}

.link:hover {
  color: blue;
}

.car,
.calendar,
.clock,
.car-side,
.map-marker,
.user {
  font-size: 22px;
  width: 30px;
  text-align: center;
}

.car {
  color: blue;
}

.calendar {
  color: green;
}

.clock {
  color: crimson;
}

.car-side {
  color: #2b89e2;
}

.map-marker {
  color: red;
}

.user {
  color: darkorange;
}

.inspector {
  width: 100%;
}

.red {
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: red;
}

.inspector-content {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  flex-wrap: wrap;
  display: flex;
}

.no-inspector-yet {
  color: red;
  padding: 20px;
  height: 200px;
}

.report-not-ready {
  padding: 30px 10px;
  line-height: 1.3;
  text-align: center;
}

.inspector-image {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  margin-right: 20px;
  float: left;
  vertical-align: middle;
}

.inspector-info {
  min-width: 250px;
  flex: 1;
}

hr {
  border: 0.5px solid #ccc;
}

.container-right-content .u-dotted {
  cursor: pointer;
  color: blue;
  border-bottom: 1.5px dotted blue;
}

.container-right-content .u-dotted:hover {
  color: darkblue;
  border-bottom: 1.5px dotted darkblue;
}

.container-right-content p {
  color: darkred;
}

.reschedule-booking-btn,
.cancel-booking-btn {
  color: white;
  font-weight: bold;
  background-color: dodgerblue;
  border: 2px solid dodgerblue;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  margin: 20px;
  padding: 10px;
}

.cancel-booking-btn {
  color: #2bc4e2;
  background-color: white;
  border: 2px solid #2bc4e2;
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

.accept-reject-btn {
  padding-top: 10px;
  display: flex;
  align-items: flex-start;
}

.btn-accept,
.btn-reject {
  color: white;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  padding: 10px 20px;
}

.btn-accept {
  margin-right: 20px;
  color: white;
  background-color: dodgerblue;
  border: 2px solid dodgerblue;
}

.btn-accept:hover {
  color: green;
  background-color: white;
  border: 2px solid green;
}

.btn-reject {
  color: dodgerblue;
  background-color: white;
  border: 2px solid dodgerblue;
}

.btn-reject:hover {
  color: red;
  background-color: white;
  border: 2px solid red;
}

@media only screen and (max-width: 1380px) {
  .container-right-content {
    padding: 25px 10px;
  }

  .container-right-content {
    font-size: 12.5px;
  }

  .flex-grow {
    padding-left: 10px;
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    padding: 20px;
  }

  .container-left {
    margin-right: 20px;
  }

  .subchat {
    padding-left: 8%;
    padding-right: 8%;
  }

  @media only screen and (max-width: 920px) {
    .container {
      padding: 5px;
      width: 100%;
      background-color: white;
      display: inline-block;
    }

    .container-left {
      width: 100%;
      margin: 0px;
      border-radius: 0px;
      display: inline-block;
    }

    .top-title h1 {
      padding-top: 5px;
      padding-bottom: 5px;
    }

    .top-title h1,
    .top-title p,
    .inspector-container {
      padding-left: 10px;
      padding-right: 10px;
    }

    .mobile-dropdown {
      margin-top: -1px;
      margin-left: -1px;
      cursor: pointer;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      background-color: white;
      border: 1px solid #ccc;
      display: inline-block;
      position: relative;
      z-index: 2;
    }

    .mobile-dropdown i {
      padding: 2px 5px;
      margin: 2px 5px;
      float: right;
      font-size: 22px;
      color: orangered;
    }

    .mobile-dropdown i:hover {
      color: darkred;
    }

    .container-right-body {
      top: 5px;
      right: 0px;
      position: absolute;
      overflow: hidden;
      align-items: flex-end;
      flex-direction: column;
      display: flex;
    }

    .backdrop {
      bottom: 0px;
      left: 0px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }

    .container-right-content {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      width: 300px;
    }

    .no-inspector-yet {
      padding: 20px 10px;
    }

    .slide-enter {
      opacity: 0;
    }

    .slide-enter-active {
      animation: slide-in 0.3s ease-out forwards;
    }

    .slide-leave-active {
      animation: slide-out 0.3s ease-out forwards;
    }

    @keyframes slide-in {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes slide-out {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100%);
      }
    }
  }
}

@media only screen and (max-width: 620px) {
  .top-title h1 {
    font-size: 18px;
  }

  .top-title p {
    font-size: 17px;
  }

  .subchat {
    padding-left: 0%;
    padding-right: 0%;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .inspector-content {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .btn-accept {
    margin-left: 0px;
  }

  @media only screen and (max-width: 450px) {
    .top-title h1 {
      font-size: 17px;
    }

    .top-title p {
      font-size: 16px;
    }

    .inspector-info {
      min-width: auto;
    }

    .btn-accept,
    .btn-reject {
      padding: 8px 18px;
    }
  }
}
</style>
