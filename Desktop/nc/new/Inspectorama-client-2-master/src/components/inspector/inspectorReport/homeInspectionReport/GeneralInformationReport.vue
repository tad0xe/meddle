<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()">
        <div class="section">
          <div>
            <p>Client Information</p>
          </div>
          <div class="row">
            <div class="column-left">
              <span>Client Name:</span>
              <h2>{{customerName}}</h2>
            </div>
            <div class="column-right">
              <span>Client Order ID:</span>
              <h2>{{clientOrderId}}</h2>
            </div>
          </div>
          <div class="row">
            <div class="column-left">
              <label>Date and Time of Inspection:</label>
              <Datepicker
                class="datepicker"
                v-model="generalInformation.clientInformation.dateTimeOfInspection"
                @blur="onSubmit()"
                lang="en"
                type="datetime"
                ref="datepicker"
                format="DD-MMMM-YYYY [at] HH:mm"
                :minute-step="1"
                placeholder="Inspection Date and Time"
                :disabled-date="(date)=>date > new Date().setHours(0,0,0,0)"
                :disabled-time="(time)=>time > new Date()"
              ></Datepicker>
            </div>
            <div class="column-right">
              <label>House Occupied?: *</label>
              <select
                required
                v-model="generalInformation.clientInformation.isHouseOccupied"
                @blur="onSubmit()"
              >
                <option value selected disabled hidden>Select one</option>
                <option :value="true">Yes</option>
                <option :value="false">No</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="column-right">
              <label>Address of Inspected Home: *</label>
              <textarea
                rows="3"
                v-model="generalInformation.clientInformation.addressOfInspectedProperty"
                @blur="onSubmit()"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="section">
          <div>
            <p>Building Characteristics</p>
          </div>
          <div class="row">
            <div class="column-left">
              <label>Structure Type: *</label>
              <select
                required
                v-model="generalInformation.buildingCharacteristics.structureType"
                @blur="onSubmit()"
              >
                <option value selected disabled hidden>Select Structure Type</option>
                <option value="Wood Frame">Wood Frame</option>
                <option value="Light Gauge Steel">Light Gauge Steel</option>
                <option value="Steel Frame">Steel Frame</option>
                <option value="Concrete Frame">Concrete Frame</option>
                <option value="Pre-Engineered">Pre-Engineered</option>
              </select>
            </div>
            <div class="column-right">
              <label>Year Built: *</label>
              <br />
              <Datepicker
                class="datepicker"
                @blur="onSubmit()"
                v-model="generalInformation.buildingCharacteristics.yearBuilt"
                lang="en"
                type="year"
                format="YYYY"
                placeholder="Select Built Year"
                :disabled-date="(date)=>date > Date.now()"
              ></Datepicker>
            </div>
          </div>
          <div class="row">
            <div class="column-left">
              <label>Building Type: *</label>
              <select
                required
                v-model="generalInformation.buildingCharacteristics.buildingType"
                @blur="onSubmit()"
              >
                <option value selected disabled hidden>Select type of home</option>
                <option value="Apartment Block">Apartment block</option>
                <option value="Block of Flats ">Block of flats</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Condominium">Condominium</option>
                <option value="Duplex">Duplex</option>
                <option value="House ">House</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Condominium">Condominium</option>
                <option value="Unit ">Unit</option>
                <option value="Villa">Villa</option>
                <option value="Orphanage">Orphanage</option>
              </select>
            </div>
            <div class="column-right">
              <label>Number of Storeys: *</label>
              <input
                type="text"
                name="numberOfStoreys"
                placeholder="Enter Number of Storeys"
                required
                v-model="generalInformation.buildingCharacteristics.NumberOfStoreys"
                @blur="onSubmit()"
              />
            </div>
          </div>
        </div>
        <div class="section">
          <div>
            <p>Weather Conditions</p>
          </div>
          <div class="row">
            <div class="column-left">
              <label>Weather *</label>
              <input
                type="text"
                name="Weather"
                placeholder="Enter Weather"
                v-model="generalInformation.weatherConditions.weather"
                @blur="onSubmit()"
              />
            </div>
            <div class="column-right">
              <div
                style=" margin-bottom: 10px; margin-right: 5px; float: left; width: 60%; display: block;"
              >
                <label>Outside Temperature *</label>
                <input
                  type="text"
                  name="outsideTemperature(F)"
                  placeholder="Enter Outside Temperature"
                  v-model="generalInformation.weatherConditions.outsideTemperature.value"
                  @blur="onSubmit()"
                />
              </div>
              <div
                style=" margin-bottom: 10px; margin-left: 5px; float: left; width: 30%; display: block;"
              >
                <label>Unit</label>
                <select
                  v-model="generalInformation.weatherConditions.outsideTemperature.unit"
                  @blur="onSubmit()"
                >
                  <option :value="null" disabled>Select Unit</option>
                  <option value="&#8457;">&#8457;</option>
                  <option value="&#8451;">&#8451;</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div>
            <p>Utility Services</p>
          </div>
          <div class="row">
            <div class="column-left">
              <label>Water Source: *</label>
              <input
                type="text"
                placeholder="Enter Water Source"
                v-model="generalInformation.utilityServices.waterSource"
                @blur="onSubmit()"
              />
            </div>
            <div class="column-right">
              <label>Sewage Disposal: *</label>
              <input
                type="text"
                name="sewageDisposal"
                placeholder="Enter Sewage Disposal"
                v-model="generalInformation.utilityServices.sewageDisposal"
                @blur="onSubmit()"
              />
            </div>
          </div>
          <div class="row">
            <div class="column-left">
              <label>Utilities Status: *</label>
              <input
                type="text"
                name="utilitiesStatus"
                placeholder="Enter Utilities Status"
                v-model="generalInformation.utilityServices.utilitiesStatus"
                @blur="onSubmit()"
              />
            </div>
          </div>
        </div>
        <div>
          <br />
          <center>
            <label>Full Picture of Building:</label>
          </center>
          <br />
        </div>
        <br />
        <picture-input
          @change="onChangePicture"
          @remove="onRemovePicture"
          ref="pictureInput" 
          :crop="false"
          width="400"
          height="400"
          margin="16"
          accept="image/jpeg, image/jpg, image/png"
          size="0.5"
          buttonClass="btn"
          :zIndex="0"
          :removable="true"
          :prefill="fullPictureObj.dataUrl"
          :prefillOptions="{mediaType: fullPictureObj.contentType}"
          :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag and drop or click to upload'
      }"
        ></picture-input>
        <div class="flex btn-container">
          <div class="comments">
            <i class="fa fa-comments"></i>
            <span>Comments</span>
          </div>
          <div>
            <button type="submit" @click.prevent="onSubmit()" class="save-btn">Save</button>
          </div>
          <div>
            <button type="submit" @click.prevent="submitAndToNext()" class="next-btn">Next</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Datepicker from "vue2-datepicker";
import { base64ToBlob } from "../../../../utility";
import axios from "axios";
import PictureInput from "vue-picture-input";
import pictureInputData from "../../../../mockData/pictureInputData";
export default {
  components: {
    PictureInput,
    Datepicker
  },
  data() {
    return {
      jobId: this.$route.params.jobId,
      customerName: "",
      clientOrderId: "",
      generalInformation: {
        clientInformation: {
          dateTimeOfInspection: "",
          isHouseOccupied: null,
          addressOfInspectedProperty: ""
        },
        buildingCharacteristics: {
          structureType: "",
          buildingType: "",
          yearBuilt: "",
          NumberOfStoreys: ""
        },
        weatherConditions: {
          weather: "",
          outsideTemperature: {
            value: "",
            unit: ""
          }
        },
        utilityServices: {
          waterSource: "",
          sewageDisposal: "",
          utilitiesStatus: ""
        }
      },
      fullPictureObj: {}
    };
  },

  watch: {
    "generalInformation.clientInformation.dateTimeOfInspection"(val, oldVal) {
      const newSeconds = val && val.getSeconds();
      const oldSeconds = val && val.getSeconds();
      if (newSeconds !== oldSeconds) {
        this.closeDatePicker();
      }
    }
  },

  methods: {
    closeDatePicker() {
      this.$refs.datepicker.closePopup();
    },

    onSubmit() {
      const formData = {
        generalInformation: this.generalInformation
      };
      axios
        .patch(`/home_inspection_reports/${this.jobId}`, formData)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error.response);
        });
    },

    onChangePicture(picture) {
      if (picture) {
        const picture = event.target.result;
        const blob = base64ToBlob(picture);
        let formData = new FormData();
        formData.append("fileData", blob, "full-building-picture");

        axios
          .post(
            `/home_inspection_reports/pictures/generalInformation/fullBuilding/${this.jobId}`,
            formData
          )
          .then(res => {
            console.log(res);
            this.fullPictureObj.fileUrl = res.data.fileUrl;
          })
          .catch(error => console.log(error.response));
      } else {
        throw new Error();
      }
    },

    onRemovePicture() {
      const formData = {
        fileUrl: this.fullPictureObj.fileUrl
      };
      console.log(formData);
      axios
        .delete(
          `/home_inspection_reports/deletePictures/generalInformation/fullBuilding/full-building-picture/${this.jobId}`,
          { data: formData }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => console.log(error.response));
    }
  },

  mounted() {
    this.$refs["pictureInput"].$refs["fileInput"].setAttribute(
      "capture",
      "camera"
    );
  },
  created() {
    const jobId = this.$route.params.jobId;
    axios
      .get(`/home_inspection_reports/${jobId}`)
      .then(res => {
        this.generalInformation = res.data.generalInformation;
        this.customerName = res.data.customerName
        this.clientOrderId = res.data._id
      })
      .catch(error => {
        console.log(error.response);
      });

    //To get full building picture
    axios
      .get(`/home_inspection_reports/generalInformation/${jobId}`)
      .then(res => {
        this.fullPictureObj = res.data[0];
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
  background-color: white;
  display: inline-block;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
}

.section {
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #b6b1b1;
  display: inline-block;
}

p {
  font-size: 18px;
  margin-bottom: 10px;
}

label {
  font-size: 13px;
}

textarea {
  width: 100%;
}

input[type="text"],
select,
textarea {
  font-size: 13px;
  width: 100%;
  padding: 9px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  /* background-color: #f1f1f1; */
  background-color: rgb(232, 240, 254);
}

select {
  padding: 8px 5px;
}

select:invalid {
  color: #777777;
}

option {
  color: black;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border: 1px solid #a842a7;
  background-color: #eee;
}

.btn-container {
  padding-top: 20px;
  padding-bottom: 20px;
}

.flex {
  display: flex;
}

.comments {
  display: flex;
  flex: 1;
  cursor: pointer;
}

.comments i {
  font-size: 35px;
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

.column-left,
.column-right {
  margin-top: 10px;
  margin-bottom: 10px;
  float: left;
  width: 50%;
  display: block;
}

.column-left span,
.column-right span {
  margin-bottom: 8px;
  font-size: 13px;
  display: block;
}

.column-left {
  padding-right: 10px;
}

.column-right {
  padding-left: 10px;
}

/* For mobile phones: */
@media only screen and (max-width: 520px) {
  .column-left,
  .column-right {
    padding: 0px;
    width: 100%;
  }
}
</style>