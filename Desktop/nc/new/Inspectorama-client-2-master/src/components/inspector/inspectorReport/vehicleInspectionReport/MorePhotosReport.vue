<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit()">
        <div class="row">
          <center>
            <div class="float-left" v-for="(pictureData, index) in additionalPictures" :key="index">
              <div>
                <picture-input
                  @change="onChangeArrayPicture(pictureData, index)"
                  width="250"
                  height="250"
                  margin="16"
                  accept="image/jpeg, image/png"
                  size="10"
                  buttonClass="btn"
                  :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag and drop your profile picture or click to upload'
      }"
                ></picture-input>
              </div>
              <div>
                <button
                  type="button"
                  class="delete-btn"
                  @click="deletePicture(index)"
                >Delete Picture</button>
              </div>
            </div>
          </center>
        </div>
        <br />
        <div class="row">
          <div class="comments">
            <i class="fa fa-comments"></i>
            <span>Comments</span>
          </div>
        </div>
        <br />
        <div class="row">
          <vue-dropzone
            ref="gaugesPictures"
            id="gauges"
            :options="dropzoneOptions"
            @vdropzone-file-added="onFileAdded"
            @vdropzone-sending="(file, xhr, formData) => sendingEvent(file, xhr, formData, 'gauges')"
            @drop="onFileDrop"
          ></vue-dropzone>
        </div>
        <br />
        <br />
        <div class="row">
          <div>
            <button type="button" class="back-btn">Back</button>
            <button type="button" class="preview-btn" @click.prevent="submitAndPreview()">Preview</button>
            <button type="button" class="save-btn">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import globalAxios from "axios";
export default {
  components: {
    PictureInput,
    vueDropzone: vue2Dropzone
  },
  data: function() {
    return {
      ID: "ID 1",
      additionalPictures: [],

      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 250,
        maxFilesize: 0.5,
        addRemoveLinks: true,
        duplicateCheck: true,
        dictDefaultMessage:
          "<i class='fa fa-cloud-upload'></i>Upload pictures <br> <u>Browse</u> <br> Drag and drop",
        headers: { "My-Awesome-Header": "header value" }
      }
    };
  },
  methods: {
    submitAndPreview() {
      this.$emit("morePhotosReportPage", false);
      this.$emit("morePhotosReportPageDone", true);
      const jobId = localStorage.getItem("openedJobId");
      this.$router.push(`/view-report/vehicle-inspection/${jobId}`);
    },

    onChangeArrayPicture(index, pictureData) {
      if (event) {
        const picture = event.target.result;

        const type = picture
          .split(",", 2)[0]
          .split(";")[0]
          .split(":")[1];

        pictureData.data = picture;
        pictureData.type = type;
        pictureData.fileName = index + 1;

        const picturesArray = []; //this array is to be sent to database after been populated

        //Loop thru this.bodyPictures to format the contents before pushing into picturesArray
        this.bodyPictures.forEach(pictureInfo => {
          const picture = pictureInfo.data;

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
          formData.append("fileData", blob, pictureData.fileName);
          formData.append("partOfVehicle", pictureData.partOfVehicle);

          // pictureData["fileData"] = blob;

          // delete pictureData.data
          // delete pictureData.type
          // delete pictureData.partOfVehicle
          // delete pictureData.fileName

          //Push formData into picturesArray
          // picturesArray.push(blob);

          const jobId = localStorage.getItem("openedJobId");
          globalAxios
            .post(
              "/vehicle_inspection_reports/exterior-pictures/" + jobId,
              formData
            )
            .then(res => {
            })
            .catch(error => console.log(error.response));
        });
      }
    },
    addPicture() {
      const newPicture = {
        data: "",
        type: "",
        fileName: ""
      };

      this.additionalPictures.push(newPicture);

      if (this.additionalPictures.length >= 6) {
        this.deletePicture(5);
      }
    },

    deletePicture(index) {
      this.additionalPictures.splice(index, 1);
      if (index === 0 && this.additionalPictures.length === 0) {
        this.addPicture();
      }
    },

    sendingEvent(file, xhr, formData) {
      const reader = new FileReader();
      // reader.readAsDataURL(file);

      reader.onload = function(event) {
        //   event.target.result - is dataURL data

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

          formData.append("fileData", blob, file.name);
          formData.append("category", "more-photos-and-videos");

          const jobId = localStorage.getItem("openedJobId");
          globalAxios
            .post(
              "/vehicle_inspection_reports/more_photos_and_videos/" + jobId,
              formData
            )
            .then(res => {
              this.vehicleInterior = res.data.vehicleInterior;
            })
            .catch(error => console.log(error.response));
        }
      };
      reader.readAsDataURL(file);
    },

    onFileAdded(file) {}
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-size: 12px;
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
  display: inline-block;
}

form {
  padding-left: 10px;
  padding-right: 10px;
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

.back-btn,
.preview-btn,
.save-btn {
  font-size: 13px;
  margin-bottom: 20px;
  border-radius: 20px;
  font-weight: bold;
  height: 40px;
  outline: none;
  text-align: center;
  cursor: pointer;
}

.back-btn,
.save-btn {
  float: left;
  width: 70px;
  color: black;
  background-color: white;
}

.back-btn {
  float: left;
}

.save-btn {
  float: right;
}

.back-btn:hover,
.save-btn:hover {
  color: white;
  background-color: black;
}

.preview-btn {
  float: left;
  width: 120px;
  color: white;
  background-color: black;
  margin-left: 10px;
}

.preview-btn:hover {
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

/* For mobile phones: */
@media only screen and (max-width: 650px) {
  form {
    padding: 0px;
  }
  .column {
    padding: 0px;
    width: 100%;
  }
}
</style>