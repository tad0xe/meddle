<template>
  <div>
    <div class="container">
      <div class="sub-container">
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.brakeSystem').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.brakeSystem.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.brakeSystem.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.brakeSystem.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.suspension').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.suspension.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.suspension.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.suspension.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.idle').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.idle.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.idle.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.idle.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.engineNoise').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.engineNoise.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.engineNoise.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.engineNoise.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.acceleration').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.acceleration.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.acceleration.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.acceleration.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.horn').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.horn.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.horn.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.horn.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.windNoise').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.windNoise.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.windNoise.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.windNoise.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.starting').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.starting.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.starting.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.starting.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.steeringEffort').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.steeringEffort.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.steeringEffort.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.steeringEffort.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.transmissionShiftQuality').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.transmissionShift.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.transmissionShift.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.transmissionShift.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.engineOperatingTemp').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.engineOperatingTemperatrure.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.engineOperatingTemperatrure.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.engineOperatingTemperatrure.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.transmissionNoise').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.transmissionNoise.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.transmissionNoise.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.transmissionNoise.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.cvJointNoise').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.cvJointDriveAxleNoise.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.cvJointDriveAxleNoise.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.cvJointDriveAxleNoise.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('roadTestReport.parkingBrake').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(vehicleRoadTest.parkingBrakeOperation.rating)}"
                ></div>
                <span>
                  <strong>{{vehicleRoadTest.parkingBrakeOperation.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{vehicleRoadTest.parkingBrakeOperation.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ratings from "../../../../mockData/ratings";
export default {
  data() {
    return {
      vehicleRoadTest: "",
      ratings: ratings
    };
  },
  methods: {
    effectActiveColor(event) {
      const color = [];
      this.ratings.forEach(item => {
        if (item.condition == event) {
          color.push(item.color);
        }
      });
      return color[0];
    }
  },
  created() {
    const orderId = this.$route.params.orderId;
    axios
      .get(`/vehicle_inspection_reports/${orderId}`)
      .then(res => {
        this.vehicleRoadTest = res.data.roadTest;
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

.container {
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
  background-color: white;
  display: inline-block;
}

.sub-container {
  font-size: 12px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 25px;
  border: 1px solid #b6b1b1;
  width: 100%;
  display: inline-block;
}

.sub-container-body {
  border-bottom: 1px solid #b6b1b1;
}

.sub-container-body:last-child {
  border-bottom: none;
}

.sub-container-body__title {
  font-size: 11px;
  padding-top: 14px;
  padding-bottom: 14px;
  text-align: center;
  border-bottom: 1px solid #b6b1b1;
  width: 100%;
}

.sub-container-body__content {
  padding: 25px 20px;
  font-size: 13px;
  width: 100%;
  display: flex;
}

.flex {
  display: flex;
  align-items: center;
}

.rating-color {
  margin-left: 23px;
  margin-right: 8px;
  width: 15px;
  height: 15px;
}

.sub-container-body__sub-content-rating {
  margin-bottom: 25px;
  align-items: center;
  width: 50%;
  display: flex;
}

.sub-container-body__sub-content-comment {
  width: 50%;
  display: flex;
}

.sub-container-body__sub-content-comment span {
  margin-left: 20px;
  word-break: break-all;
  display: block;
}

/* For mobile phones: */
@media only screen and (max-width: 580px) {
  .sub-container {
    border-radius: 20px;
  }

  .sub-container-body__title {
    font-size: 10px;
  }

  .sub-container-body__content {
    padding: 25px 15px;
  }
  .sub-container-body__content {
    flex-direction: column;
  }

  .sub-container-body__sub-content-comment span {
    margin-right: 0px;
    width: 100%;
  }

  .sub-container-body__sub-content-rating,
  .sub-container-body__sub-content-comment {
    width: 100%;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 360px) {
    .sub-container {
      border-radius: 16px;
    }

    .sub-container-body__content {
      padding-left: 10px;
      padding-right: 10px;
    }

    .rating-color {
      margin-left: 16px;
    }

    .sub-container-body__sub-content-comment span {
      margin-left: 14px;
    }
  }
}
</style>