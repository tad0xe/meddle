<template>
  <div>
    <div class="container">
      <div class="top-title">{{$t('mainViewVehicleInspectionReport.title')}}</div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isVehicleDescriptionViewVisible}"
          @click="isVehicleDescriptionViewVisible=!isVehicleDescriptionViewVisible"
        >
          <div class="sub-title">
            <strong>{{$t('generic.vehicleDescription')}}</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% {{$t('mainViewVehicleInspectionReport.complete')}}</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isVehicleDescriptionViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isVehicleDescriptionViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isVehicleDescriptionViewVisible">
          <VehicleDescriptionView></VehicleDescriptionView>
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isVehicleExteriorViewVisible}"
          @click="isVehicleExteriorViewVisible=!isVehicleExteriorViewVisible"
        >
          <div class="sub-title">
            <strong>{{$t('mainViewVehicleInspectionReport.vehicleExterior')}}</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% {{$t('mainViewVehicleInspectionReport.complete')}}</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isVehicleExteriorViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isVehicleExteriorViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isVehicleExteriorViewVisible">
          <VehicleExteriorView></VehicleExteriorView>
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isVehicleInteriorViewVisible}"
          @click="isVehicleInteriorViewVisible=!isVehicleInteriorViewVisible"
        >
          <div class="sub-title">
            <strong>{{$t('mainViewVehicleInspectionReport.vehicleInterior')}}</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% {{$t('mainViewVehicleInspectionReport.complete')}}</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isVehicleInteriorViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isVehicleInteriorViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isVehicleInteriorViewVisible">
          <VehicleInteriorView></VehicleInteriorView>
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isVehicleRoadTestViewVisible}"
          @click="isVehicleRoadTestViewVisible=!isVehicleRoadTestViewVisible"
        >
          <div class="sub-title">
            <strong>{{$t('mainViewVehicleInspectionReport.vehicleRoadTest')}}</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% {{$t('mainViewVehicleInspectionReport.complete')}}</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isVehicleRoadTestViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isVehicleRoadTestViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isVehicleRoadTestViewVisible">
          <VehicleRoadTestView></VehicleRoadTestView>
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isAdditionalPointsViewVisible}"
          @click="isAdditionalPointsViewVisible=!isAdditionalPointsViewVisible"
        >
          <div class="sub-title">
            <strong>{{$t('mainViewVehicleInspectionReport.additionalPoints')}}</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% {{$t('mainViewVehicleInspectionReport.complete')}}</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isAdditionalPointsViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isAdditionalPointsViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isAdditionalPointsViewVisible">
          <AdditionalPointsView></AdditionalPointsView>
        </div>
      </div>
      <div>
        <div
          class="sub-title-group"
          :class="{active: isMorePhotosAndVideosViewVisible}"
          @click="isMorePhotosAndVideosViewVisible=!isMorePhotosAndVideosViewVisible"
        >
          <div class="sub-title">
            <strong>{{$t('mainViewVehicleInspectionReport.morePhotos')}}</strong>
          </div>
          <div class="icon-group">
            <span class="percent-complete">% {{$t('mainViewVehicleInspectionReport.complete')}}</span>
            <i class="fa fa-arrow-circle-o-up" v-if="isMorePhotosAndVideosViewVisible"></i>
            <i class="fa fa-arrow-circle-o-down" v-if="!isMorePhotosAndVideosViewVisible"></i>
          </div>
        </div>
        <div class="view" v-show="isMorePhotosAndVideosViewVisible">
          <MorePhotosAndVideosView></MorePhotosAndVideosView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VehicleDescriptionView from "./subViews/VehicleDescriptionView.vue";
import VehicleExteriorView from "./subViews/VehicleExteriorView.vue";
import VehicleInteriorView from "./subViews/VehicleInteriorView.vue";
import VehicleRoadTestView from "./subViews/VehicleRoadTestView.vue";
import AdditionalPointsView from "./subViews/AdditionalPointsView.vue";
import MorePhotosAndVideosView from "./subViews/MorePhotosAndVideosView.vue";
export default {
  components: {
    VehicleDescriptionView,
    VehicleExteriorView,
    VehicleInteriorView,
    VehicleRoadTestView,
    AdditionalPointsView,
    MorePhotosAndVideosView
  },
  data() {
    return {
      isVehicleDescriptionViewVisible: true,
      isVehicleExteriorViewVisible: false,
      isVehicleInteriorViewVisible: false,
      isVehicleRoadTestViewVisible: false,
      isAdditionalPointsViewVisible: false,
      isMorePhotosAndVideosViewVisible: false
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