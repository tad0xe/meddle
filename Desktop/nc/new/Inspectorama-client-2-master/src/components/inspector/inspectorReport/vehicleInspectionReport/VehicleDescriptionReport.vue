<template>
  <div>
    <div class="container">
      <div class="container-content">
        <form @submit.prevent="onSubmit()">
          <div class="row">
            <div class="column">
              {{$t('vehicleDescriptionReport.fullVIN')}} *
              <br />
              <input type="text" name v-model="vehicleDescription.fullVIN" @blur="onSubmit" />
              <br />
            </div>
            <div class="column column-quarter">
              {{$t('vehicleDescriptionReport.mileage')}} *
              <br />
              <input type="text" name v-model="vehicleDescription.mileage.value" @blur="onSubmit" />
              <br />
            </div>
            <div class="column column-unit">
              {{$t('vehicleDescriptionReport.unit')}} *
              <br />
              <select v-model="vehicleDescription.mileage.unit" @blur="onSubmit">
                <option value="miles">{{$t('vehicleDescriptionReport.miles')}}</option>
                <option value="kilometers">{{$t('vehicleDescriptionReport.kilometers')}}</option>
              </select>
              <br />
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('vehicleDescriptionReport.transmissionType')}} *
              <br />
              <select name id v-model="vehicleDescription.transmissionType" @blur="onSubmit">
                <option value="Manual">{{$t('vehicleDescriptionReport.manual')}}</option>
                <option value="Automatic">{{$t('vehicleDescriptionReport.automatic')}}</option>
                <option value="Continuous variable">{{$t('vehicleDescriptionReport.continuousVariable')}}</option>
                <option value="Semi-automatic">{{$t('vehicleDescriptionReport.semiAutomatic')}}</option>
                <option value="TipTronic® gearbox">TipTronic® {{$t('vehicleDescriptionReport.gearbox')}}</option>
                <option value="Direct shift gearbox">{{$t('vehicleDescriptionReport.directShiftGearbox')}}</option>
              </select>
              <br />
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('vehicleDescriptionReport.vehicleBrand')}} *
              <br />
              <select v-model="vehicleDescription.vehicleBrand" @blur="onSubmit">
                <option
                  v-for="vehicleBrand in vehicleBrands"
                  :key="vehicleBrand.make"
                >{{vehicleBrand.make}}</option>
              </select>
            </div>
            <div class="column columnMin">
              {{$t('generic.model')}} *
              <br />
              <select name id v-model="vehicleDescription.vehicleModel" @blur="onSubmit">
              </select>
            </div>
            <div class="column columnMin">
              {{$t('generic.year')}} *
              <br />
              <select name id v-model="vehicleDescription.vehicleYear" @blur="onSubmit">
              </select>
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('vehicleDescriptionReport.engineCylinders')}} *
              <br />
              <input
                type="text"
                v-model="vehicleDescription.engineCylinders"
                @blur="onSubmit"
              />
              <br />
            </div>
            <div class="column">
              {{$t('vehicleDescriptionReport.engineLiters')}} *
              <br />
              <input
                type="text"
                v-model="vehicleDescription.engineLiters"
                @blur="onSubmit"
              />
              <br />
            </div>
          </div>
          <div class="row">
            <div class="column">
              {{$t('vehicleDescriptionReport.engineType')}} *
              <br />
              <select name id v-model="vehicleDescription.engineType" @blur="onSubmit">
                <option value="Petrol">{{$t('vehicleDescriptionReport.petrol')}}</option>
                <option value="Diesel">{{$t('vehicleDescriptionReport.diesel')}}</option>
                <option value="Gas">{{$t('vehicleDescriptionReport.gas')}}</option>
              </select>
              <br />
            </div>
          </div>
          <div>
            <center>
              <strong>{{$t('vehicleDescriptionReport.fullPictureOfVehicle')}}:</strong>
            </center>
            <br />
          </div>
          <br />
          <div>
            <picture-input
              ref="picture"
              @change="onChangePicture"
              @remove="onRemovePicture"
              :crop="false"
              width="400"
              height="400"
              margin="0"
              accept="image/jpeg, image/jpg, image/png"
              size="0.5"
              buttonClass="btn"
              :zIndex="0"
              :removable="true"
              :prefill="this.fullVehiclePicture.data"
              :prefillOptions="{mediaType: this.fullVehiclePicture.type }"
              :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: `${$t('vehicleDescriptionReport.dragAndDrop')}`
      }"
            ></picture-input>
          </div>
          <br />
          <div class="btn-container">
            <!-- <div class="comments">
              <i class="fa fa-comments"></i>
              <span>Comments</span>
            </div> -->
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
import vehicleBrands from "../../../../mockData/vehicleBrands";
import globalAxios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import PictureInput from "vue-picture-input";
export default {
  components: {
    PictureInput
  },
  data() {
    return {
      jobId: this.$route.params.jobId,
      vehicleDescription: {
        fullVIN: "",
        mileage: {
          value: "",
          unit: ""
        },
        transmissionType: "",
        vehicleBrand: "",
        vehicleModel: "",
        vehicleYear: "",
        engineCylinders: "",
        engineLiters: "",
        engineType: ""
      },
      fullVehiclePicture: {
        data: "",
        type: ""
      },
      vehicleBrands: vehicleBrands
    };
  },

  methods: {
    onSubmit(direction) {
      const formData = {
        vehicleDescription: this.vehicleDescription
      };
      globalAxios
        .patch("/vehicle_inspection_reports/" + this.jobId, formData)
        .then(res => {
          console.log(res);
          if (direction == "next") {
            this.$emit("vehicleDescriptionReportPage", false);
            this.$emit("exteriorReportPage", true);
            this.$emit("vehicleDescriptionReportPageDone", true);
          }
        })
        .catch(error => console.log(error.response));
    },

    onFileSeleted(event) {
      this.fullVehiclePicture = event.target.files[0];
      const formData = new FormData();
      formData.append(
        "fileData",
        event.target.files[0],
        event.target.files[0].name
      );
      globalAxios
        .post(
          "/vehicle_inspection_reports/vehicleDescription/fullPicture/1/" +
            this.jobId,
          formData
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => console.log(error.response));
    },

    onChangePicture(picture) {
      if (picture) {
        //Split the picture to extract the base64 and the contentType
        const base64PictureOnly = picture.split(",", 2)[1];
        const contentType = picture
          .split(",", 2)[0]
          .split(";")[0]
          .split(":")[1];

        //convert the base64 to byteCharacters
        const byteCharacters = atob(base64PictureOnly);

        //Convert the byteCharacters to byteNumbers
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        //Convert the byte numbers to unit 8 array
        const byteArray = new Uint8Array(byteNumbers);

        //Convert the unit 8 array to blob
        const blob = new Blob([byteArray], { type: contentType });

        let formData = new FormData();
        formData.append("fileData", blob, "Full vehicle picture");

        globalAxios
          .post(
            "/vehicle_inspection_reports/vehicleDescription/fullPicture/" +
              this.jobId,
            formData
          )
          .then(res => {
            console.log(res);
            this.vehicleDescription = res.data.vehicleDescription;
          })
          .catch(error => console.log(error.response));
      } else {
        throw new Error();
      }
    },

    onRemovePicture() {
      globalAxios
        .delete(
          "/vehicle_inspection_reports/vehicleDescription/fullPicture/" +
            this.jobId
        )
        .then(res => {
          console.log(res);
          this.vehicleDescription = res.data.vehicleDescription;
        })
        .catch(error => console.log(error.response));
    }
  },

  computed: {
    dataUrl() {
      return this.url;
    }
  },

  created() {
    globalAxios
      .get("/vehicle_inspection_reports/" + this.jobId)
      .then(res => {
        this.vehicleDescription = res.data.vehicleDescription;
      })
      .catch(error => console.log(error));

    globalAxios
      .get(
        "/vehicle_inspection_reports/vehicleDescription/fullPicture/" +
          this.jobId
      )
      .then(res => {
        this.fullVehiclePicture.data =
          "data:" + res.data.contentType + ";base64," + res.data.base64Data;
        this.fullVehiclePicture.type = res.data.contentType;
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

input[type="text"],
select {
  width: 100%;
  padding: 10px;
  margin: 8px 0 22px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: rgb(232, 240, 254);
}

input:focus,
select:focus {
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
  padding: 0px 10px;
  float: left;
  width: 50%;
}

.columnMin {
  width: 25%;
}

.column-quarter {
  width: 25%;
}

.column-unit {
  width: 25%;
}

/* For mobile phones: */
@media only screen and (max-width: 650px) {
  .columnMin {
    width: 100%;
  }

  .column {
    padding: 0px;
    width: 100%;
  }

  .column-quarter {
    width: 50%;
  }

  .column-unit {
    padding-left: 10px;
    width: 50%;
  }
}
</style>