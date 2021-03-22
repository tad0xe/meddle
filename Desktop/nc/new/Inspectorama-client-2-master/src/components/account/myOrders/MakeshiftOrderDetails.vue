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
            <div class="flex">
              <div class="flex-grow">
                <h1>
                  {{$t('generic.orderId')}}:
                  <span>&nbsp;{{openedOrder.sequenceId}}</span>
                </h1>
              </div>
              <div>
                <router-link
                  tag="div"
                  class="primary-btn"
                  :to="`/${$i18n.locale}/account/orders`"
                >{{$t('buttons.goToMyOrders')}}</router-link>
              </div>
            </div>
          </div>
          <table>
            <tr>
              <td>
                <b>{{$t('generic.report')}}&nbsp;{{$t('generic.status')}}:&nbsp;</b>
              </td>
              <td>
                <span class="report-not-ready" v-if="!openedOrder.isReportCompleted">
                  <b>{{$t('myOrderDetails.reportNotReadyYet')}}</b>
                  {{$t('myOrderDetails.reportNotReadyYetBody')}}
                </span>
                <span
                  v-if="openedOrder.isReportCompleted"
                >{{$t("myOrderDetails.yourInspectionReportNowAvailable")}}</span>
              </td>
            </tr>
          </table>
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
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import socket from "../../../socketio-client";
import MyOrderSummary from "./MyOrderSummary.vue";
import axios from "axios";
import LoadingPage from "../../loadingComponents/LoadingPage.vue";
import { getUserAbridgedProfile } from "../../../utility";

export default {
  components: {
    MyOrderSummary,
    LoadingPage
  },
  data() {
    return {
      activeState: true,
      orderId: this.$route.params.orderId,
      inspector: "",
      openedOrder: "",
      selectedInspector: "",
      isReportDivVisible: false,
      isMessagesVisible: true,
      isPageLoaded: false,
      acceptedInspectorInfo: null
    };
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
        })
        .catch(error => {});
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
  background-color: #f7fafc;
  padding: 50px;
  height: 100%;
  min-height: 620px;
  width: 100%;
  display: flex;
}

.container-left {
  width: 68%;
  font-size: 15px;
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

table {
  padding: 20px 25px;
}

td {
  vertical-align: top;
}

.mobile-dropdown {
  display: none;
}

.top-title {
  padding: 10px 25px;
  border-bottom: 1px solid #b6b1b1;
}

.top-title h1 {
  color: #212259;
  font-size: 20px;
}

@media only screen and (max-width: 1380px) {
  .container-right-content {
    padding: 25px 10px;
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    padding: 20px;
  }

  .container-left {
    margin-right: 20px;
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

    .top-title,
    table {
      padding: 20px;
    }

    .top-title {
      padding-top: 0px;
    }

    .mobile-dropdown {
      margin-top: -1px;
      margin-left: -21px;
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
  .top-title,
  table {
    padding: 20px 10px;
  }

  .top-title {
    padding-top: 0px;
  }

  .mobile-dropdown {
    margin-top: -1px;
    margin-left: -11px;
  }

  /* @media only screen and (max-width: 450px) {
    .top-title h1 {
      font-size: 17px;
    }
  } */
}
</style>
