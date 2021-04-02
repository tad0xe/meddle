<template>
  <div>
    <div class="container">
      <div class="container-content">
        <form @submit.prevent="onSubmit()">
          <div class="row">
            <div class="column">
              {{$t('additionalPoints.doorHandles')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(additionalInspectionPoints.doorHandles.rating)}"
                v-model="additionalInspectionPoints.doorHandles.rating"
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
              {{$t('additionalPoints.commentOnDoorHandles')}}:
              <br />
              <textarea
                rows="3"
                v-model="additionalInspectionPoints.doorHandles.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('additionalPoints.gasDoor')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(additionalInspectionPoints.gasDoor.rating)}"
                v-model="additionalInspectionPoints.gasDoor.rating"
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
              {{$t('additionalPoints.commentOnGasDoor')}}:
              <br />
              <textarea
                rows="3"
                v-model="additionalInspectionPoints.gasDoor.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('additionalPoints.grille')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(additionalInspectionPoints.grille.rating)}"
                v-model="additionalInspectionPoints.grille.rating"
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
              {{$t('additionalPoints.commentOnGrille')}}:
              <br />
              <textarea
                rows="3"
                v-model="additionalInspectionPoints.grille.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('additionalPoints.tailGate')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(additionalInspectionPoints.tailgate.rating)}"
                v-model="additionalInspectionPoints.tailgate.rating"
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
              {{$t('additionalPoints.commentOnTailGate')}} :
              <br />
              <textarea
                rows="3"
                v-model="additionalInspectionPoints.tailgate.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('additionalPoints.doorLock')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(additionalInspectionPoints.doorLocks.rating)}"
                v-model="additionalInspectionPoints.doorLocks.rating"
                @blur="onSubmit"
              >
                <option
                  v-for="item in ratings"
                  :key="item.condition"
                  :style="{'background-color':item.color}"
                >{{item.condition}}</option>
              </select>
            </div>
            <div class="row">
              <div class="column">
                {{$t('additionalPoints.commentOnLoorLock')}}:
                <br />
                <textarea
                  rows="3"
                  v-model="additionalInspectionPoints.doorLocks.comment"
                  @blur="onSubmit"
                ></textarea>&nbsp;
              </div>
            </div>
            <div class="column">
              {{$t('additionalPoints.gasCap')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(additionalInspectionPoints.gasCaps.rating)}"
                v-model="additionalInspectionPoints.gasCaps.rating"
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
              {{$t('additionalPoints.commentOnGasCap')}}:
              <br />
              <textarea
                rows="3"
                v-model="additionalInspectionPoints.gasCaps.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('additionalPoints.roofRack')}} *
              <br />
              <select
                :style="{'background-color': effectActiveColor(additionalInspectionPoints.roofRack.rating)}"
                v-model="additionalInspectionPoints.roofRack.rating"
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
              {{$t('additionalPoints.commentOnRoofRack')}}:
              <br />
              <textarea
                rows="3"
                v-model="additionalInspectionPoints.roofRack.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              {{$t('additionalPoints.evidenceOfSmoke')}} *
              <br />
              <select v-model="additionalInspectionPoints.evidenceOfSmokeOdor.rating">
                <option value="Yes">{{$t('generic.yes')}}</option>
                <option value="No">{{$t('generic.no')}}</option>
              </select>
            </div>
            <div class="column">
              {{$t('additionalPoints.commentOnEvidenceOfSmoke')}}:
              <br />
              <textarea
                rows="3"
                v-model="additionalInspectionPoints.evidenceOfSmokeOdor.comment"
                @blur="onSubmit"
              ></textarea>&nbsp;
            </div>
          </div>
          <br />
          <br />
          <div class="row">
            <vue-dropzone
              ref="additionalPictures"
              :options="dropzoneOptions"
              @vdropzone-sending="(file, xhr, formData) => sendingEvent(file, xhr, formData)"
              @vdropzone-removed-file="(file, error, xhr) => removeFromDropzone(file, error, xhr)"
            ></vue-dropzone>
          </div>
          <br />
          <div class="row">
            <div class="column" v-for="item in fileDataArray" :key="item.dataUrl">
              <div>
                <img style="width: 100%" :src="item.dataUrl" />
              </div>
              <center>
                <div>{{item.fileName}}</div>
              </center>
              <center>
                <button type="button" @click="removeFromData(item.fileName)">Remove</button>
              </center>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="btn-container">
            <div class="comments"></div>
            <div>
              <button
                type="submit"
                @click.prevent="onSubmit()"
                class="save-btn"
              >{{$t('buttons.save')}}</button>
            </div>
            <div>
              <button
                type="submit"
                @click.prevent="submitAndToNext()"
                class="next-btn"
              >{{$t('buttons.next')}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import globalAxios from "axios";
import ratings from "../../../../mockData/ratings";
export default {
  components: {
    vueDropzone: vue2Dropzone
  },

  data: function() {
    return {
      jobId: this.$route.params.jobId,
      additionalInspectionPoints: {
        doorHandles: {
          rating: "",
          comment: ""
        },
        gasDoor: {
          rating: "",
          comment: ""
        },
        grille: {
          rating: "",
          comment: ""
        },
        tailgate: {
          rating: "",
          comment: ""
        },
        doorLocks: {
          rating: "",
          comment: ""
        },
        gasCaps: {
          rating: "",
          comment: ""
        },
        roofRack: {
          rating: "",
          comment: ""
        },
        evidenceOfSmokeOdor: {
          rating: "",
          comment: ""
        }
      },

      ratings: ratings,

      additionalPictures: [],

      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 250,
        maxFilesize: 0.5,
        acceptedFiles: "image/*",
        addRemoveLinks: true,
        duplicateCheck: true,
        dictDefaultMessage:
          "<i class='fa fa-cloud-upload'></i>Upload pictures <br> <u>Browse</u> <br> Drag and drop. Max 500KB",
        headers: { "My-Awesome-Header": "header value" }
      },

      fileDataArray: [{ dataUrl: "", fileName: "" }]
    };
  },
  methods: {
    onSubmit(direction) {
      const formData = {
        additionalInspectionPoints: this.additionalInspectionPoints
      };
      console.log(formData);
      globalAxios
        .patch("/vehicle_inspection_reports/" + this.jobId, formData)
        .then(res => {
          if (direction == "next") {
            this.$emit("additionalPointsReportPage", false);
            this.$emit("additionalPointsReportPageDone", true);
            this.$emit("morePhotosReportPage", true);
          }
        })
        .catch(error => console.log(error.response));
    },
    sendingEvent(file, xhr, formData) {
      const reader = new FileReader();

      reader.onload = event => {
        const picture = event.target.result;

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
          formData.append("fileData", blob, file.name);
          formData.append("category", "additional-pictures");

          globalAxios
            .post(
              "/vehicle_inspection_reports/additional_pictures/" + this.jobId,
              formData
            )
            .then(res => {
              this.additionalInspectionPoints =
                res.data.additionalInspectionPoints;

              const dataUrl = picture;
              const fileName = file.name;
              this.fileDataArray.unshift({ dataUrl, fileName });
            })
            .catch(error => console.log(error.response));
        }
      };
      reader.readAsDataURL(file);
    },

    removeFromDropzone(file, error, xhr) {
      const fileName = file.name;
      this.removeFromData(fileName);
    },

    removeFromData(fileName) {
      //Remove all the items that has this fileName
      const newFileDataArray = [];
      this.fileDataArray.forEach(item => {
        if (item.fileName !== fileName) {
          newFileDataArray.push(item);
        }
      });
      this.fileDataArray = newFileDataArray;

      globalAxios
        .delete(
          `/vehicle_inspection_reports/additional_pictures/${fileName}/${this.jobId}`
        )
        .then(res => {
          this.additionalInspectionPoints = res.data.additionalInspectionPoints;
        })
        .catch(error => {
          console.log(error.response);
        });
    },

    effectActiveColor(event) {
      const color = [];
      this.ratings.forEach(item => {
        if (item.condition == event) {
          color.push(item.color);
        }
      });
      return color[0];
    },

    renderFiles(filesArray) {
      const filesToRender = [];
      filesArray.forEach(item => {
        const dataUrl =
          "data:" + item.contentType + ";base64," + item.base64Data;
        const fileName = item.fileName;
        filesToRender.push({ dataUrl, fileName });
      });
      this.fileDataArray = filesToRender;
    }
  },

  mounted() {
    const jobId = this.$route.params.jobId;
    globalAxios
      .get("/vehicle_inspection_reports/" + jobId)
      .then(res => {
        this.additionalInspectionPoints = res.data.additionalInspectionPoints;
      })
      .catch(error => console.log(error));

    //Get files to render
    globalAxios
      .get(`/vehicle_inspection_reports/additional_pictures/${jobId}`)
      .then(res => {
        this.renderFiles(res.data);
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