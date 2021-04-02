<template>
  <div>
    <div class="container">
      <div class="container-content">
        <form @submit.prevent="onSubmit()">
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.brakeSystem')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.brakeSystem.rating)}"
                v-model="roadTest.brakeSystem.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnBrakeSystem')}}:
              <br />
              <textarea rows="3" v-model="roadTest.brakeSystem.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.suspension')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.suspension.rating)}"
                v-model="roadTest.suspension.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnSuspension')}}:
              <br />
              <textarea rows="3" v-model="roadTest.suspension.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.idle')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.idle.rating)}"
                v-model="roadTest.idle.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnIdle')}}:
              <br />
              <textarea rows="3" v-model="roadTest.idle.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.engineNoise')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.engineNoise.rating)}"
                v-model="roadTest.engineNoise.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnEngineNoise')}}:
              <br />
              <textarea rows="3" v-model="roadTest.engineNoise.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.acceleration')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.acceleration.rating)}"
                v-model="roadTest.acceleration.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnAcceleration')}}:
              <br />
              <textarea rows="3" v-model="roadTest.acceleration.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.horn')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.horn.rating)}"
                v-model="roadTest.horn.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnHorn')}}:
              <br />
              <textarea rows="3" v-model="roadTest.horn.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
             {{$t('roadTestReport.windNoise')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.windNoise.rating)}"
                v-model="roadTest.windNoise.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnWindNoise')}}:
              <br />
              <textarea rows="3" v-model="roadTest.windNoise.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.starting')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.starting.rating)}"
                v-model="roadTest.starting.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnStarting')}}:
              <br />
              <textarea rows="3" v-model="roadTest.starting.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.steeringEffort')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.steeringEffort.rating)}"
                v-model="roadTest.steeringEffort.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
             {{$t('roadTestReport.commentOnSteeringEffort')}}:
              <br />
              <textarea rows="3" v-model="roadTest.steeringEffort.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.transmissionShiftQuality')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.transmissionShift.rating)}"
                v-model="roadTest.transmissionShift.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
             {{$t('roadTestReport.commentOnTransmissionShiftQuality')}}:
              <br />
              <textarea rows="3" v-model="roadTest.transmissionShift.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.engineOperatingTemp')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.engineOperatingTemperatrure.rating)}"
                v-model="roadTest.engineOperatingTemperatrure.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnEngineOperatingTemp')}}:
              <br />
              <textarea
                rows="3"
                v-model="roadTest.engineOperatingTemperatrure.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.transmissionNoise')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.transmissionNoise.rating)}"
                v-model="roadTest.transmissionNoise.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnTransmissionNoise')}}:
              <br />
              <textarea rows="3" v-model="roadTest.transmissionNoise.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.cvJointNoise')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.cvJointDriveAxleNoise.rating)}"
                v-model="roadTest.cvJointDriveAxleNoise.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnCvJointNoise')}}:
              <br />
              <textarea rows="3" v-model="roadTest.cvJointDriveAxleNoise.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('roadTestReport.parkingBrake')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(roadTest.parkingBrakeOperation.rating)}"
                v-model="roadTest.parkingBrakeOperation.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('roadTestReport.commentOnParkingBrake')}}:
              <br />
              <textarea rows="3" v-model="roadTest.parkingBrakeOperation.comment" @blur="onSubmit"></textarea>&nbsp;
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="btn-container">
            <div>
              <button type="submit" @click.prevent="onSubmit()" class="save-btn">{{$t('buttons.save')}}</button>
            </div>
            <div>
              <button type="submit" @click.prevent="submitAndToNext()" class="next-btn">{{$t('buttons.next')}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import globalAxios from "axios";
import ratings from "../../../../mockData/ratings";
export default {
  data: function() {
    return {
      jobId: this.$route.params.jobId,
      roadTest: {
        brakeSystem: {
          rating: "",
          comment: ""
        },
        suspension: {
          rating: "",
          comment: ""
        },
        idle: {
          rating: "",
          comment: ""
        },
        engineNoise: {
          rating: "",
          comment: ""
        },
        acceleration: {
          rating: "",
          comment: ""
        },
        horn: {
          rating: "",
          comment: ""
        },
        windNoise: {
          rating: "",
          comment: ""
        },
        starting: {
          rating: "",
          comment: ""
        },
        steeringEffort: {
          rating: "",
          comment: ""
        },
        transmissionShift: {
          rating: "",
          comment: ""
        },
        engineOperatingTemperatrure: {
          rating: "",
          comment: ""
        },
        transmissionNoise: {
          rating: "",
          comment: ""
        },
        cvJointDriveAxleNoise: {
          rating: "",
          comment: ""
        },
        parkingBrakeOperation: {
          rating: "",
          comment: ""
        }
      },
      ratings: ratings
    };
  },

  methods: {
    onSubmit(direction) {
      const formData = {
        roadTest: this.roadTest
      };
      globalAxios
        .patch("/vehicle_inspection_reports/" + this.jobId, formData)
        .then(res => {
          if (direction == "next") {
            this.$emit("roadTestReportPage", false);
            this.$emit("roadTestReportPageDone", true);
            this.$emit("additionalPointsReportPage", true);
          }
        })
        .catch(error => console.log(error.response));
    },

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

  mounted() {
    const jobId = this.$route.params.jobId;
    globalAxios
      .get("/vehicle_inspection_reports/" + jobId)
      .then(res => {
        this.roadTest = res.data.roadTest;
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
  background-color: lightblue;
  display: inline-block;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
}

.container-content {
  float: left;
  font-size: 12px;
  background-color: white;
  width: 100%;
  display: inline-block;
}

.save-btn1 {
  float: right;
  margin-right: 20px;
}

select,
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

select:focus,
textarea:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.btn-container {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
}

.comments {
  display: flex;
  flex: 1;
  cursor: pointer;
}

.comments i {
  font-size: 35px;
  margin-left: 10px;
}

.comments span {
  font-size: 13px;
  margin: 6px;
  display: block;
}

.next-btn,
.save-btn {
  font-size: 13px;
  width: 70px;
  border-radius: 20px;
  font-weight: bold;
  height: 40px;
  outline: none;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
}

.next-btn {
  margin-left: 20px;
  margin-right: 10px;
  color: white;
  background-color: black;
}

.save-btn {
  color: black;
  background-color: white;
}

.save-btn:hover {
  color: white;
  background-color: black;
}

.next-btn:hover {
  color: black;
  background-color: white;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.column {
  padding: 10px;
  float: left;
  width: 50%;
}

/* For mobile phones: */
@media only screen and (max-width: 650px) {
  .column {
    padding: 10px 0px;
    width: 100%;
  }
}
</style>