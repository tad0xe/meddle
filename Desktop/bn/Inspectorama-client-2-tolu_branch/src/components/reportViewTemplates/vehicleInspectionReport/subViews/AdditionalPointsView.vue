<template>
  <div>
    <div class="container">
      <div class="sub-container">
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('additionalPoints.doorHandles').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(additionalPoints.doorHandles.rating)}"
                ></div>
                <span>
                  <strong>{{additionalPoints.doorHandles.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{additionalPoints.doorHandles.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('additionalPoints.gasDoor').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(additionalPoints.gasDoor.rating)}"
                ></div>
                <span>
                  <strong>{{additionalPoints.gasDoor.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{additionalPoints.gasDoor.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('additionalPoints.grille').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(additionalPoints.grille.rating)}"
                ></div>
                <span>
                  <strong>{{additionalPoints.grille.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{additionalPoints.grille.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('additionalPoints.tailGate').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(additionalPoints.tailgate.rating)}"
                ></div>
                <span>
                  <strong>{{additionalPoints.tailgate.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{additionalPoints.tailgate.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('additionalPoints.doorLock').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(additionalPoints.doorLocks.rating)}"
                ></div>
                <span>
                  <strong>{{additionalPoints.doorLocks.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{additionalPoints.doorLocks.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('additionalPoints.gasCap').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(additionalPoints.gasCaps.rating)}"
                ></div>
                <span>
                  <strong>{{additionalPoints.gasCaps.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{additionalPoints.gasCaps.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('additionalPoints.roofRack').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(additionalPoints.roofRack.rating)}"
                ></div>
                <span>
                  <strong>{{additionalPoints.roofRack.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{additionalPoints.roofRack.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body">
          <div class="sub-container-body__title">
            <h2>{{$t('additionalPoints.evidenceOfSmoke').toUpperCase()}}</h2>
          </div>
          <div class="sub-container-body__content">
            <div class="sub-container-body__sub-content-rating">
              <label>{{$t('generic.condition')}}</label>
              <div class="flex">
                <div
                  class="rating-color"
                  :style="{'background': effectActiveColor(additionalPoints.evidenceOfSmokeOdor.rating)}"
                ></div>
                <span>
                  <strong>{{additionalPoints.evidenceOfSmokeOdor.rating}}</strong>
                </span>
              </div>
            </div>
            <div class="sub-container-body__sub-content-comment">
              <label>{{$t('generic.comment')}}</label>
              <span>
                <strong>{{additionalPoints.evidenceOfSmokeOdor.comment}}</strong>
              </span>
            </div>
          </div>
        </div>
        <div class="sub-container-body" v-if="false">
          <div class="image-wrapper" v-for="(url, index) in dataUrlsArray" :key="index">
            <div>
              <img :src="url" />
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
      additionalPoints: "",
      dataUrlsArray: [],
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
        this.additionalPoints = res.data.additionalInspectionPoints;
      })
      .catch(error => {
        console.log(error.response);
      });

    axios
      .get(`/vehicle_inspection_reports/additional_pictures/${orderId}`)
      .then(res => {
        const resData = res.data;
        resData.forEach(item => {
          const dataUrl = `data:${item.contentType};base64,${item.base64Data}`;
          this.dataUrlsArray.push(dataUrl);
        });
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