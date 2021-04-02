<template>
  <div>
    <div class="container">
      <div class="top-title">Home Inspection Report</div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isGeneralInfoViewVisible}"
          @click="isGeneralInfoViewVisible=!isGeneralInfoViewVisible"
        >
          <div class="sub-title">
            <strong>General Information</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isGeneralInfoViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isGeneralInfoViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isGeneralInfoViewVisible">
          <!-- <VehicleDescriptionView></VehicleDescriptionView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isAboutRatedViewVisible}"
          @click="isAboutRatedViewVisible=!isAboutRatedViewVisible"
        >
          <div class="sub-title">
            <strong>About Rated Items</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isAboutRatedViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isAboutRatedViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isAboutRatedViewVisible">
          <!-- <VehicleExteriorView></VehicleExteriorView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isReportLimitationViewVisible}"
          @click="isReportLimitationViewVisible=!isReportLimitationViewVisible"
        >
          <div class="sub-title">
            <strong>Report Limitations</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isReportLimitationViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isReportLimitationViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isReportLimitationViewVisible">
          <!-- <VehicleInteriorView></VehicleInteriorView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isExteriorViewVisible}"
          @click="isExteriorViewVisible=!isExteriorViewVisible"
        >
          <div class="sub-title">
            <strong>Exterior</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isExteriorViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isExteriorViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isExteriorViewVisible">
          <!-- <VehicleRoadTestView></VehicleRoadTestView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isFoundationViewVisible}"
          @click="isFoundationViewVisible=!isFoundationViewVisible"
        >
          <div class="sub-title">
            <strong>Foundation, crawlspace and basement</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isFoundationViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isFoundationViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isFoundationViewVisible">
          <!-- <AdditionalPointsView></AdditionalPointsView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isRoofingSystemViewVisible}"
          @click="isRoofingSystemViewVisible=!isRoofingSystemViewVisible"
        >
          <div class="sub-title">
            <strong>Roofing System</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isRoofingSystemViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isRoofingSystemViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isRoofingSystemViewVisible">
          <!-- <MorePhotosAndVideosView></MorePhotosAndVideosView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isPlumbingSystemViewVisible}"
          @click="isPlumbingSystemViewVisible=!isPlumbingSystemViewVisible"
        >
          <div class="sub-title">
            <strong>Roofing System</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isPlumbingSystemViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isPlumbingSystemViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isPlumbingSystemViewVisible">
          <!-- <MorePhotosAndVideosView></MorePhotosAndVideosView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isHeatingSystemViewVisible}"
          @click="isHeatingSystemViewVisible=!isHeatingSystemViewVisible"
        >
          <div class="sub-title">
            <strong>Roofing System</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isHeatingSystemViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isHeatingSystemViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isHeatingSystemViewVisible">
          <!-- <MorePhotosAndVideosView></MorePhotosAndVideosView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isCoolingSystemViewVisible}"
          @click="isCoolingSystemViewVisible=!isCoolingSystemViewVisible"
        >
          <div class="sub-title">
            <strong>Roofing System</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isCoolingSystemViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isCoolingSystemViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isCoolingSystemViewVisible">
          <!-- <MorePhotosAndVideosView></MorePhotosAndVideosView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isElectricalSystemViewVisible}"
          @click="isElectricalSystemViewVisible=!isElectricalSystemViewVisible"
        >
          <div class="sub-title">
            <strong>Roofing System</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isElectricalSystemViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isElectricalSystemViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isElectricalSystemViewVisible">
          <!-- <MorePhotosAndVideosView></MorePhotosAndVideosView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isInteriorViewVisible}"
          @click="isInteriorViewVisible=!isInteriorViewVisible"
        >
          <div class="sub-title">
            <strong>Roofing System</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isInteriorViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isInteriorViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isInteriorViewVisible">
          <!-- <MorePhotosAndVideosView></MorePhotosAndVideosView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isKitchenAppliancesViewVisible}"
          @click="isKitchenAppliancesViewVisible=!isKitchenAppliancesViewVisible"
        >
          <div class="sub-title">
            <strong>Roofing System</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isKitchenAppliancesViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isKitchenAppliancesViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isKitchenAppliancesViewVisible">
          <!-- <MorePhotosAndVideosView></MorePhotosAndVideosView> -->
        </div>
      </div>
       <div>
        <div
          class="sub-title-group"
          :class="{active: isBathroomViewVisible}"
          @click="isBathroomViewVisible=!isBathroomViewVisible"
        >
          <div class="sub-title">
            <strong>Roofing System</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isBathroomViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isBathroomViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isBathroomViewVisible">
          <!-- <MorePhotosAndVideosView></MorePhotosAndVideosView> -->
        </div>
      </div>
       <div>
        <div
          class="sub-title-group"
          :class="{active: isSewerScopeViewVisible}"
          @click="isSewerScopeViewVisible=!isSewerScopeViewVisible"
        >
          <div class="sub-title">
            <strong>Roofing System</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isSewerScopeViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isSewerScopeViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isSewerScopeViewVisible">
          <!-- <MorePhotosAndVideosView></MorePhotosAndVideosView> -->
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isAttachmentsViewVisible}"
          @click="isAttachmentsViewVisible=!isAttachmentsViewVisible"
        >
          <div class="sub-title">
            <strong>Roofing System</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% complete</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isAttachmentsViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isAttachmentsViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isAttachmentsViewVisible">
          <!-- <MorePhotosAndVideosView></MorePhotosAndVideosView> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VehicleDescriptionView from "./subViews/VehicleDescriptionView.vue";
// import VehicleExteriorView from "./subViews/VehicleExteriorView.vue";
// import VehicleInteriorView from "./subViews/VehicleInteriorView.vue";
// import VehicleRoadTestView from "./subViews/VehicleRoadTestView.vue";
// import AdditionalPointsView from "./subViews/AdditionalPointsView.vue";
// import MorePhotosAndVideosView from "./subViews/MorePhotosAndVideosView.vue";
export default {
  components: {
    // VehicleDescriptionView,
    // VehicleExteriorView,
    // VehicleInteriorView,
    // VehicleRoadTestView,
    // AdditionalPointsView,
    // MorePhotosAndVideosView
  },
  data() {
    return {
    //   isGeneralInfoViewVisible: true,
    //   isAboutRatedViewVisible: false,
    //   isReportLimitationViewVisible: false,
    //   isExteriorViewVisible: false,
    //   isFoundationViewVisible: false,
    //   isRoofingSystemViewVisible: false
    };
  },
  methods: {}
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  display: inline-block;
  font-family: sans-serif, Arial, Helvetica;
  padding-bottom: 80px;
  width: 100%;
}
.top-title {
  padding: 15px 10px;
  font-size: 20px;
  font-weight: bold;
  color: blue;
  text-align: center;
  border-bottom: 1px solid #b6b1b1;
}
.sub-title-group {
  padding-top: 23px;
  padding-bottom: 23px;
  padding-left: 25px;
  padding-right: 20px;
  color: #808080;
  border-bottom: 1px solid #b6b1b1;
  display: flex;
  align-items: center;
}

.sub-title {
  font-size: 20px;
  flex: 1;
}

.icon-group i {
  font-size: 22px;
}

.percent-complete {
  font-size: 20px;
  margin-right: 20px;
}

.view {
  padding-left: 30px;
  padding-right: 30px;
  border-bottom: 1px solid #b6b1b1;
}

.active {
  background-color: #f1f1f1;
  color: black;
}

/* For mobile phones: */
@media only screen and (max-width: 580px) {
  .container {
    padding-bottom: 60px;
  }
  .sub-title {
    font-size: 18px;
  }
  .sub-title-group {
    padding-left: 10px;
    padding-right: 10px;
  }

  .percent-complete {
    font-size: 15px;
    margin-right: 10px;
  }
  .view {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>