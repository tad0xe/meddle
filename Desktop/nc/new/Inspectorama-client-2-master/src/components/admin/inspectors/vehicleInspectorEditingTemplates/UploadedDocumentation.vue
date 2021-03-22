<template>
  <div>
    <div class="container">
      <div class="error" v-if="error">{{error}}</div>
      <div class="container-header">Upload Documentation</div>
      <hr />
      <form @submit.prevent="onSubmit">
        <div>
          <div v-if="typeOfInspector == 'Vehicle'">
            <div>
              <strong>Vehicle Specialization:</strong>
            </div>
            <table>
              <tr v-for="(vehicleSpecialization, index) in vehicleSpecializations" :key="index">
                <td class="td-index">{{index+1}}.</td>
                <td>
                  Attach documentation to prove you specialize in
                  <b>{{vehicleSpecialization.vehicleType | toLowerCase}}s</b>
                  with
                  <b>{{vehicleSpecialization.yearsOfVehicleExp | toLowerCase}}</b> experience
                </td>
                <td>
                  <input
                    type="file"
                    @change="onFileSelected(index, 'vehicle-area-specialization', vehicleSpecialization.vehicleType)"
                    ref="vehicleSpecializationFileInput"
                    required
                    hidden
                  />
                  <button
                    type="button"
                    @click="$refs.vehicleSpecializationFileInput[index].click()"
                    v-if="!vehicleSpecialization.originalname"
                  >Upload</button>
                  <span>
                    <u
                      @click="onDownloadFile(vehicleSpecialization.fileUrl, vehicleSpecialization.originalname)"
                      class="pointer"
                    >{{vehicleSpecialization.originalname}}</u>
                  </span>
                  <button
                    type="button"
                    v-if="vehicleSpecialization.originalname"
                    @click="onRemoveFile(vehicleSpecialization.fileUrl)"
                  >Remove</button>
                </td>
              </tr>
            </table>
          </div>
          <div v-if="typeOfInspector == 'Home'">
            <div>
              <strong>Home Inspection Specialization:</strong>
            </div>
            <table>
              <tr v-for="(homeSpecialization, index) in homeInspectionSpecializations" :key="index">
                <td class="td-index">{{index+1}}.</td>
                <td>
                  Attach documentation to prove you specialize in
                  <b>{{homeSpecialization.specializationType | toLowerCase}}</b>
                  with
                  <b>{{homeSpecialization.yearsOfSpecializationExp | toLowerCase}}</b> experience
                </td>
                <td>
                  <input
                    type="file"
                    @change="onFileSelected(index, 'home-inspection-specialization', homeSpecialization.specializationType)"
                    ref="homeSpecializationFileInput"
                    required
                    hidden
                  />
                  <button
                    type="button"
                    @click="$refs.homeSpecializationFileInput[index].click()"
                    v-if="!homeSpecialization.originalname"
                  >Upload</button>
                  <span>
                    <u
                      class="pointer"
                      @click="onDownloadFile(homeSpecialization.fileUrl, homeSpecialization.originalname)"
                    >{{homeSpecialization.originalname}}</u>
                  </span>
                  <button
                    type="button"
                    v-if="homeSpecialization.originalname"
                    @click="onRemoveFile(homeSpecialization.fileUrl)"
                  >Remove</button>
                </td>
              </tr>
            </table>
            <br />
            <hr />
          </div>
          <div v-if="typeOfInspector == 'Vehicle'">
            <div>
              <strong>Brand Specialization:</strong>
            </div>
            <table>
              <tr v-for=" (brandspecialization, index) in brandSpecializations" :key="index">
                <td class="td-index">{{index+1}}.</td>
                <td>
                  Documentation to prove you specialize in
                  <b>{{brandspecialization.brandType}}</b>
                  with
                  <b>{{brandspecialization.yearsOfBrandExp | toLowerCase}}</b> experience
                </td>
                <td>
                  <input
                    type="file"
                    @change="onFileSelected(index, 'vehicle-brand-specialization', brandspecialization.brandType)"
                    ref="brandSpecializationFileInput"
                    required
                    hidden
                  />
                  <button
                    type="button"
                    @click="$refs.brandSpecializationFileInput[index].click()"
                    v-if="!brandspecialization.originalname"
                  >Upload</button>
                  <span>
                    <u
                      class="pointer"
                      @click="onDownloadFile(brandspecialization.fileUrl, brandspecialization.originalname)"
                    >{{brandspecialization.originalname}}</u>
                  </span>
                  <button
                    type="button"
                    @click="onRemoveFile(brandspecialization.fileUrl)"
                    v-if="brandspecialization.originalname"
                  >Remove</button>
                </td>
              </tr>
            </table>
            <br />
            <hr />
          </div>
          <br />
          <div>
            <div>
              <strong>Professional Certificates:</strong>
            </div>
            <table>
              <tr v-for="(proCert, index) in proCerts" :key="index">
                <td class="td-index">{{index+1}}.</td>
                <td>
                  Attach certificate of
                  <b>{{proCert.certName}}</b>
                </td>
                <td>
                  <input
                    type="file"
                    @change="onFileSelected(index, 'proCert', proCert.certName)"
                    ref="proCertFileInput"
                    required
                    hidden
                  />
                  <button
                    type="button"
                    @click="$refs.proCertFileInput[index].click()"
                    v-if="!proCert.originalname"
                  >Upload</button>
                  <span>
                    <u
                      class="pointer"
                      @click="onDownloadFile(proCert.fileUrl, proCert.originalname)"
                    >{{proCert.originalname}}</u>
                  </span>
                  <button
                    type="button"
                    v-if="proCert.originalname"
                    @click="onRemoveFile(proCert.fileUrl)"
                  >Remove</button>
                </td>
              </tr>
            </table>
            <br />
            <hr />
          </div>
          <br />
          <div>
            <div>
              <div>
                <strong>Education Certificates:</strong>
              </div>
            </div>
            <table>
              <tr>
                <td>Attach your highest level of education certificate</td>
                <td>
                  <input
                    type="file"
                    @change="onFileSelected(undefined, 'education-certification', 'highest-education')"
                    ref="eduCertFileInput"
                    required
                    hidden
                  />
                  <button
                    type="button"
                    @click="$refs.eduCertFileInput.click()"
                    v-if="!highestEducation.highestEduCertFileName"
                  >Upload</button>
                  <span>
                    <u
                      class="pointer"
                      @click="onDownloadFile(highestEducation.fileUrl, highestEducation.highestEduCertFileName)"
                    >{{highestEducation.highestEduCertFileName}}</u>
                  </span>
                  <button
                    v-if="highestEducation.highestEduCertFileName"
                    type="button"
                    @click="onRemoveFile(highestEducation.fileUrl)"
                  >Remove</button>
                </td>
              </tr>
            </table>
            <br />
            <hr />
          </div>
          <br />
        </div>
        <div class="float-right">
          <button class="save-next-btn" @click.prevent="onSubmit('next')">
            <i class="fa fa-check-circle"></i>
            <span>&nbsp;Save and Next</span>
          </button>
          <button class="save-exit-btn" @click.prevent="onSubmit('exit')">
            <i class="fa fa-check-circle"></i>
            <span>&nbsp;Save and Exit</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      currentPage: "",
      homeInspectionSpecializations: [],
      vehicleSpecializations: [],
      brandSpecializations: [],
      proCerts: [],
      eduCerts: [],
      highestEducation: {},
      uploadedDocs: []
    };
  },

  computed: {
    typeOfInspector() {
      return this.$store.getters.typeOfInspector;
    }
  },

  methods: {
    onFileSelected(index, docCategory, docType) {
      const file = event.target.files[0];
      if (file) {
        const fileReader = new FileReader();
        fileReader.onload = fileLoadedEvent => {
          const base64File = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(file);
        const fileObj = new FormData();
        fileObj.append("file", file, file.name);
        fileObj.append("docCategory", docCategory);
        fileObj.append("docType", docType);
        axios
          .post(`/inspector_infos/me/upload`, fileObj)
          .then(res => {
            // window.location.reload();
            this.$router.go();
          })
          .catch(error => console.log(error.response));
      }
    },

    onRemoveFile(fileUrl) {
      axios
        .post(`/inspector_infos/me/removeUploadedDoc`, { fileUrl })
        .then(res => {
          this.$router.go();
        })
        .catch(error => {
          console.log(error.response);
        });
    },

    onDownloadFile(fileUrl, originalname) {
      axios
        .post(`/inspector_infos/me/downloadUploadedDoc`, { fileUrl })
        .then(response => {
          //convert the base64 to byteCharacters
          const byteCharacters = atob(response.data.base64Data);

          //Convert the byteCharacters to byteNumbers
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          //Convert the byte numbers to unit 8 array
          const byteArray = new Uint8Array(byteNumbers);

          //Convert the unit 8 array to blob
          const blob = new Blob([byteArray], {
            type: response.data.contentType
          });

          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", originalname); //or any other extension
          document.body.appendChild(link);
          link.click();
        })
        .catch(error => {
          console.log(error);
        });
    },

    onSave(direction) {
      if (direction == "done") {
        //Update the completion status
        const uploadedDocsData = {
          uploadedDocs: this.uploadedDocs
        };
        axios
          .patch("/inspector_infos/me", uploadedDocsData)
          .then(res => {
            this.$router.push(
              `/status/inspector-registration/${localStorage.getItem("userId")}`
            );
          })
          .catch(error => {
            console.log(error.response);
          });
      }

      if (direction == "back") {
        this.$router.push("/inspector/background-check");
      }
    },

    loadOriginalFIleNames() {
      for (const element of this.uploadedDocs) {
        if (element.docCategory == "vehicle-area-specialization") {
          for (const item of this.vehicleSpecializations) {
            if (item.vehicleType == element.docType) {
              item.originalname = element.originalname;
              item.fileUrl = element.fileUrl;
            }
          }
        } else if (element.docCategory == "vehicle-brand-specialization") {
          for (const item of this.brandSpecializations) {
            if (item.brandType == element.docType) {
              item.originalname = element.originalname;
              item.fileUrl = element.fileUrl;
            }
          }
        } else if (element.docCategory == "home-inspection-specialization") {
          for (const item of this.homeInspectionSpecializations) {
            if (item.specializationType == element.docType) {
              item.originalname = element.originalname;
              item.fileUrl = element.fileUrl;
            }
          }
        } else if (element.docCategory == "proCert") {
          for (const item of this.proCerts) {
            if (item.certName == element.docType) {
              item.originalname = element.originalname;
              item.fileUrl = element.fileUrl;
            }
          }
        } else if (element.docCategory == "education-certification") {
          this.highestEducation.highestEduCertFileName = element.originalname;
          this.highestEducation.fileUrl = element.fileUrl;
        }
      }
    }
  },

  beforeRouteLeave: function(to, from, next) {
    this.currentPage = null;
    next();
  },

  created() {
    this.currentPage = "uploadDocs";
    axios
      .get("/inspector_infos/me")
      .then(res => {
        this.vehicleSpecializations =
          res.data[0].areaOfSpecialization.vehicleSpecializations;
        this.brandSpecializations =
          res.data[0].areaOfSpecialization.brandSpecializations;
        this.homeInspectionSpecializations =
          res.data[0].areaOfSpecialization.homeInspectionSpecializations;
        this.proCerts = res.data[0].proCerts;
        this.uploadedDocs = res.data[0].uploadedDocs;
        this.loadOriginalFIleNames();
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
  background-color: white;
  width: 100%;
  display: inline-block;
}

.container-header {
  padding-bottom: 20px;
  font-size: 22px;
  color: darkblue;
  font-weight: bold;
}

hr {
  margin-left: -10px;
  margin-right: -10px;
}

.pointer {
  cursor: pointer;
}

.float-right {
  float: right;
}

.save-exit-btn,
.save-next-btn {
  font-size: 18px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 45px;
  margin-bottom: 40px;
  background-color: #ea7601;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  border: solid;
  border-color: #ed6502 #a04300 #a04300 #ed6502;
  opacity: 0.9;
}

.save-next-btn {
  margin-right: 20px;
}

.save-exit-btn:hover,
.save-next-btn:hover {
  opacity: 1;
}

.save-exit-btn:active,
.save-next-btn:active {
  opacity: 0.95;
  border-color: #a04300 #ed6502 #ed6502 #a04300;
}
</style>
