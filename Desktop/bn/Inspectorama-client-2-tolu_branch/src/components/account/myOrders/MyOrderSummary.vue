<template>
  <div>
    <div>
      <div class="flex">
        <div class="car">
          <i class="fas fa-car-alt"></i>
        </div>
        <div class="flex-grow">
          <span>
            {{$t('generic.created')}}:
            <strong>{{openedOrder.createdAt | formatDate}}</strong>
          </span>
          <br />
          <span>
            {{$t('myOrderDetails.type')}}:
            <strong>
              {{translateValue(
              openedOrder.quotation.typeOfInspection, $t("dbDictionary.typeOfInspection")
              )
              }}
            </strong>
          </span>
          <br />
          <span>
            {{$t('generic.status')}}:
            <strong>{{translateValue(openedOrder.orderStatus, $t('dbDictionary.orderStatus'))}}</strong>
          </span>
          <br />
          <span>
            {{$t('myOrderDetails.inspectionCost')}}:
            <strong>{{openedOrder.quotation.price.value}} {{openedOrder.quotation.price.currency}}</strong>
          </span>
        </div>
      </div>
      <br />
      <div class="flex">
        <div class="calendar">
          <i class="far fa-calendar-alt"></i>
        </div>
        <div class="flex-grow">
          <span>{{$t('generic.inspectionDate')}}:</span>
          <strong>
            <div>{{openedOrder.quotation.inspectionDateTime | showOnlyDate}}</div>
          </strong>
        </div>
      </div>
      <br />
      <div class="flex">
        <div class="clock">
          <i class="far fa-clock"></i>
        </div>
        <div class="flex-grow">
          <span>{{$t('generic.inspectionTime')}}:</span>
          <br />
          <strong>
            <span>{{openedOrder.quotation.inspectionDateTime | showOnlyTime}}</span>
          </strong>
        </div>
      </div>
      <br v-if="openedOrder.inspectionType == 'vehicle'" />
      <div class="flex" v-if="openedOrder.inspectionType == 'vehicle'">
        <div class="car-side">
          <i class="fas fa-car-side"></i>
        </div>
        <div class="flex">
          <div class="flex-grow">
            <span>{{$t('myOrderDetails.infoAboutVehicle')}}:</span>
            <strong>
              <div>
                {{openedOrder.quotation.vehicleBrand}} {{openedOrder.quotation.vehicleModel}}
                {{openedOrder.quotation.vehicleYear | showOnlyYear}}
              </div>
              <div>{{openedOrder.quotation.inspectedItemInfo.VIN}}</div>
            </strong>
          </div>
          <div>
            <span class="u-dotted" @click="showEditVehicleInfo(openedOrder)">{{$t('buttons.edit')}}</span>
          </div>
        </div>
      </div>
      <br v-if="openedOrder.inspectionType == 'Home'" />
      <div class="flex" v-if="openedOrder.inspectionType == 'Home'">
        <div class="car-side">
          <i class="fas fa-car-side"></i>
        </div>
        <div class="flex">
          <div class="flex-grow">
            <span>{{$t('myOrderDetails.infoAboutHome')}}:</span>
            <strong>
              <div>
                {{openedOrder.quotation.inspectedItemInfo.typeOfHome}}
                {{$tc('generic.withNoOfRooms',
                openedOrder.quotation.inspectedItemInfo.numberOfRooms,
                {count:openedOrder.quotation.inspectedItemInfo.numberOfRooms})}}
              </div>
            </strong>
          </div>
          <!-- <div>
                  <span class="u-dotted" @click="showEditVehicleInfo(openedOrder)">Edit</span>
          </div>-->
        </div>
      </div>
      <br />
      <div class="flex">
        <div class="map-marker">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="flex-grow">
          <span>{{$t('myOrderDetails.inspectionLocation')}}:</span>
          <strong>
            <div
              v-if="openedOrder.inspectionType == 'vehicle'"
            >{{openedOrder.inspectedItemInfo.vehicleInfo.street}}</div>
            <div
              v-if="openedOrder.inspectionType == 'home'"
            >{{openedOrder.inspectedItemInfo.homeLocation}}</div>
            <div>{{openedOrder.quotation.city}}, {{openedOrder.quotation.country}} {{openedOrder.quotation.zipCode}}</div>
          </strong>
        </div>
      </div>
      <br />
      <div class="flex" v-if="acceptedInspectorInfo">
        <div class="user">
          <div v-if="acceptedInspectorInfo.avatar">
            <img :src="acceptedInspectorInfo.avatar" class="small-avatar" />
          </div>
          <div
            style="fontSize: 15px"
            class="small-initials"
            v-if="!acceptedInspectorInfo.avatar"
          >{{acceptedInspectorInfo.initials}}</div>
        </div>
        <div class="flex-grow">
          <span>{{$t('myOrderDetails.inspectorInfo')}}:</span>
          <div v-if="acceptedInspectorInfo && openedOrder.acceptedInspector">
            <div>
              <strong>{{acceptedInspectorInfo.firstName}} {{acceptedInspectorInfo.lastName}}</strong>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="flex">
        <div class="user">
          <i class="fa fa-user-circle"></i>
        </div>
        <div class="flex">
          <div class="flex-grow">
            <span>{{$t('myOrderDetails.sellerInfo')}}:</span>
            <div v-if="openedOrder.sellerInfo">
              <strong>
                {{openedOrder.sellerInfo.sellerFirstName}} {{openedOrder.sellerInfo.sellerLastName}}
                <br />
                <span>{{openedOrder.sellerInfo.sellerEmailId}}</span>
                <br />
                <span>{{openedOrder.sellerInfo.sellerMobileNum.countryCode}} {{openedOrder.sellerInfo.sellerMobileNum.phoneNumber}}</span>
              </strong>
            </div>
          </div>
          <div>
            <span class="u-dotted" @click="showEditSellerInfo(openedOrder)">{{$t('buttons.edit')}}</span>
          </div>
        </div>
      </div>
      <div v-if="canCancelOrReschedule">
        <br />
        <hr />
        <div>
          <div class="primary-btn" @click="showRescheduleOrder">{{$t('buttons.rescheduleBooking')}}</div>
          <div
            class="primary-primary-btn"
            @click="showCancelOrder"
          >{{$t('buttons.cancelBooking')}} *</div>
        </div>
        <div>
          <p>* {{$t('myOrderDetails.youCanCancel')}}</p>
        </div>
      </div>
    </div>
    <EditSellerInfo
      v-if="isEditSellerInfoVisible"
      @close="hideEditSellerInfo()"
      @saved="initializeData()"
      :sellerInfo="openedOrder.sellerInfo"
    ></EditSellerInfo>
    <EditVehicleInfo
      v-if="isEditVehicleInfoVisible"
      @close="hideEditVehicleInfo()"
      @saved="initializeData()"
      :oldVIN="openedOrder.inspectedItemInfo.vehicleInfo.VIN"
    ></EditVehicleInfo>
    <CancelOrder
      v-show="isCancelOrderVisible"
      @close="hideCancelOrder()"
      :openedOrder="openedOrder"
      @saved="initializeData()"
      @openReschedule="openRescheduleInstead"
    ></CancelOrder>
    <RescheduleOrder
      v-show="isRescheduleOrderVisible"
      @close="hideRescheduleOrder()"
      :openedOrder="openedOrder"
      @saved="initializeData()"
    ></RescheduleOrder>
  </div>
</template>
<script>
import EditSellerInfo from "../../modals/editOrder/EditSellerInfo.vue";
import EditVehicleInfo from "../../modals/editOrder/editVehicleInspectionOrder/EditVehicleInfo.vue";
import CancelOrder from "../../modals/CancelOrder.vue";
import RescheduleOrder from "../../modals/RescheduleOrder.vue";
import { translateValue, timeLeftToJob } from "../../../utility";
export default {
  components: {
    EditSellerInfo,
    EditVehicleInfo,
    CancelOrder,
    RescheduleOrder
  },
  props: ["openedOrder", "acceptedInspectorInfo"],
  data() {
    return {
      isEditSellerInfoVisible: false,
      isEditVehicleInfoVisible: false,
      isCancelOrderVisible: false,
      isRescheduleOrderVisible: false,
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
    initializeData() {
      this.$emit("initializeData");
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
      //   localStorage.setItem("openedOrderId", openedOrder._id);
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
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.u-dotted {
  cursor: pointer;
  color: blue;
  border-bottom: 1.5px dotted blue;
}
.u-dotted:hover {
  color: darkblue;
  border-bottom: 1.5px dotted darkblue;
}
.small-avatar,
.small-initials {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}

.small-initials {
  border: 1px solid $dark-blue;
  color: $dark-blue;
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

.red {
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: red;
}

hr {
  border: 0.5px solid #ccc;
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
  .flex-grow {
    padding-left: 10px;
  }
}

@media only screen and (max-width: 1200px) {
  @media only screen and (max-width: 920px) {
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

    .backdrop {
      bottom: 0px;
      left: 0px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
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
  .btn-accept {
    margin-left: 0px;
  }

  @media only screen and (max-width: 450px) {
    .btn-accept,
    .btn-reject {
      padding: 8px 18px;
    }
  }
}
</style>