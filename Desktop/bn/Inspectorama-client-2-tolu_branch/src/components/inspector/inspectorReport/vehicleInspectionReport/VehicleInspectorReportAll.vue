<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="step"
          :class="{active: vehicleDescriptionReportPage , done: vehicleDescriptionReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>{{$t('generic.step')}} 1</small>
            </small>
            <strong>
              {{$t('generic.vehicleDescription')}}
              <span v-if="vehicleDescriptionReportPageDone">- {{$t('generic.done')}}</span>
            </strong>
          </div>
          <div @click="vehicleDescriptionReportPage=!vehicleDescriptionReportPage">
            <i v-if="vehicleDescriptionReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!vehicleDescriptionReportPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="vehicleDescriptionReportPage">
          <vehicle-description-report
            @vehicleDescriptionReportPage="vehicleDescriptionReportPage=$event"
            @exteriorReportPage="exteriorReportPage=$event"
            @vehicleDescriptionReportPageDone="vehicleDescriptionReportPageDone=$event"
          ></vehicle-description-report>
        </div>
      </div>
      <div class="row">
        <div class="step" :class="{active: exteriorReportPage , done: exteriorReportPageDone}">
          <div class="step-text">
            <small>
              <small>{{$t('generic.step')}} 2</small>
            </small>
            <strong>
              {{$t('generic.exterior')}}
              <span v-if="exteriorReportPageDone">- {{$t('generic.done')}}</span>
            </strong>
          </div>
          <div @click="exteriorReportPage=!exteriorReportPage">
            <i v-if="exteriorReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!exteriorReportPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="exteriorReportPage">
          <exterior-report
            @exteriorReportPage="exteriorReportPage=$event"
            @interiorReportPage="interiorReportPage=$event"
            @exteriorReportPageDone="exteriorReportPageDone=$event"
          ></exterior-report>
        </div>
      </div>
      <div class="row">
        <div class="step" :class="{active: interiorReportPage , done: interiorReportPageDone}">
          <div class="step-text">
            <small>
              <small>{{$t('generic.step')}} 3</small>
            </small>
            <strong>
              {{$t('generic.interior')}}
              <span v-if="interiorReportPageDone">- {{$t('generic.done')}}</span>
            </strong>
          </div>
          <div @click="interiorReportPage=!interiorReportPage">
            <i v-if="interiorReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!interiorReportPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="interiorReportPage">
          <interior-report
            @interiorReportPage="interiorReportPage=$event"
            @roadTestReportPage="roadTestReportPage=$event"
            @interiorReportPageDone="interiorReportPageDone=$event"
          ></interior-report>
        </div>
      </div>
      <div class="row">
        <div class="step" :class="{active: roadTestReportPage , done: roadTestReportPageDone}">
          <div class="step-text">
            <small>
              <small>{{$t('generic.step')}} 4</small>
            </small>
            <strong>
              {{$t('generic.roadTest')}}
              <span v-if="roadTestReportPageDone">- {{$t('generic.done')}}</span>
            </strong>
          </div>
          <div @click="roadTestReportPage=!roadTestReportPage">
            <i v-if="roadTestReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!roadTestReportPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="roadTestReportPage">
          <road-test-report
            @roadTestReportPage="roadTestReportPage=$event"
            @roadTestReportPageDone="roadTestReportPageDone=$event"
            @additionalPointsReportPage="additionalPointsReportPage=$event"
          ></road-test-report>
        </div>
      </div>
      <div class="row">
        <div
          class="step"
          :class="{active: additionalPointsReportPage , done: additionalPointsReportPageDone}"
        >
          <div class="step-text">
            <small>
              <small>{{$t('generic.step')}} 5</small>
            </small>
            <strong>
              {{$t('generic.additionalInspPoints')}}
              <span v-if="additionalPointsReportPageDone">- {{$t('generic.done')}}</span>
            </strong>
          </div>
          <div @click="additionalPointsReportPage=!additionalPointsReportPage">
            <i v-if="additionalPointsReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!additionalPointsReportPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="additionalPointsReportPage">
          <additional-points-report
            @additionalPointsReportPage="additionalPointsReportPage=$event"
            @additionalPointsReportPageDone="additionalPointsReportPageDone=$event"
            @morePhotosReportPage="morePhotosReportPage=$event"
          ></additional-points-report>
        </div>
      </div>
      <div class="row">
        <div class="step" :class="{active: morePhotosReportPage , done: morePhotosReportPageDone}">
          <div class="step-text">
            <small>
              <small>{{$t('generic.step')}} 6</small>
            </small>
            <strong>
              {{$t('generic.morePhotosAndVideos')}}
              <span v-if="morePhotosReportPageDone">- {{$t('generic.done')}}</span>
            </strong>
          </div>
          <div @click="morePhotosReportPage=!morePhotosReportPage">
            <i v-if="morePhotosReportPage" class="fa fa-arrow-circle-o-up"></i>
            <i v-else-if="!morePhotosReportPage" class="fa fa-arrow-circle-o-down"></i>
          </div>
        </div>
        <div class="content" v-if="morePhotosReportPage">
          <more-photos-report
            @morePhotosReportPage="morePhotosReportPage=$event"
            @morePhotosReportPageDone="morePhotosReportPageDone=$event"
          ></more-photos-report>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VehicleDescriptionReport from "./VehicleDescriptionReport.vue";
import ExteriorReport from "./ExteriorReport.vue";
import InteriorReport from "./InteriorReport.vue";
import RoadTestReport from "./RoadTestReport.vue";
import AdditionalPointsReport from "./AdditionalPointsReport.vue";
import MorePhotosReport from "./MorePhotosReport.vue";

export default {
  components: {
    VehicleDescriptionReport,
    ExteriorReport,
    InteriorReport,
    RoadTestReport,
    AdditionalPointsReport,
    MorePhotosReport
  },
  data() {
    return {
      jobId: this.$route.params.jobId,
      userId: localStorage.getItem("userId"),
      vehicleDescriptionReportPage: true,
      exteriorReportPage: false,
      interiorReportPage: false,
      roadTestReportPage: false,
      additionalPointsReportPage: false,
      morePhotosReportPage: false,
      vehicleDescriptionReportPageDone: false,
      exteriorReportPageDone: false,
      interiorReportPageDone: false,
      roadTestReportPageDone: false,
      additionalPointsReportPageDone: false,
      morePhotosReportPageDone: false
    };
  },

  methods: {},

  created() {
    const jobId = this.$route.params.jobId;
    this.jobId = jobId;
    axios
      .get("/vehicle_inspection_reports/" + jobId)
      .then(res => {
        this.vehicleExterior = res.data.vehicleExterior;
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
  background-color: white;
  margin-bottom: 80px;
  display: inline-block;
}

.content {
  padding: 20px;
  border-bottom: 1px solid #b6b1b1;
}

.top-title {
  font-size: 15px;
  padding: 10px;
}

.top-title span {
  font-weight: lighter;
}

.step small {
  display: block;
}

.step strong {
  display: block;
}

.step {
  height: 70px;
  padding-left: 30px;
  padding-right: 15px;
  font-size: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #808080;
  border-bottom: 1px solid #b6b1b1;
}

.step-text {
  flex: 1;
}

.step i {
  padding-right: 15px;
  font-size: 23px;
}

.done {
  background-color: #f1f1f1;
  font-weight: lighter;
}

.active {
  background-color: #f1f1f1;
}
.active strong {
  color: black;
}

.active-step strong,
.fa-arrow-circle-o-up {
  color: black;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

/* For tablets: */
@media only screen and (max-width: 860px) {
  .container {
    margin: 0px;
    margin-bottom: 60px;
    width: 100%;
  }

  .step {
    padding: 10px;
    padding-left: 20px;
    font-size: 17px;
  }

  .step i {
    padding: 10px;
    font-size: 22px;
  }

  .top-title {
    font-size: 14px;
    padding: 5px 10px;
  }

  .content {
    padding: 10px;
  }
}

/* For mobile phones: */
@media only screen and (max-width: 650px) {
  .step {
    padding: 10px;
    font-size: 16px;
  }

  .step i {
    padding: 10px;
    font-size: 20px;
  }

  .top-title {
    font-size: 13px;
    padding: 2px 10px;
  }
}
</style>