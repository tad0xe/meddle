<template>
  <div>
    <div class="container">
      <div class="container-left">
        <InspRegProgress :currentPage="currentPage"></InspRegProgress>
      </div>
      <div class="container-right">
        <form class="container-content">
          <div>
            <h2>{{$t('uploadDocumentation.title')}}</h2>
          </div>
          <div>
            <div v-if="typeOfInspector == 'vehicle'">
              <div>
                <h3>{{$t('uploadDocumentation.vehicleSpecialization')}}:</h3>
              </div>
              <div>
                <div
                  class="flex"
                  v-for="(vehicleSpecialization, index) in vehicleSpecializations"
                  :key="index"
                >
                  <div class="text-spaced">
                    <div class="index">{{index+1}}.</div>
                    <div
                      v-html="$t(
                      'uploadDocumentation.attachDocToProveVehicle', 
                      {
                        vehicleType: vehicleSpecialization.vehicleType.toLowerCase(), 
                        yearsOfSpecializationExp: vehicleSpecialization.yearsOfVehicleExp
                        })"
                    >
                      <!-- <span>Attach documentation to prove your</span>
                      <span>
                        <b>{{vehicleSpecialization.vehicleType | toLowerCase}}</b> specialization
                      </span>
                      <span>with</span>
                      <span>
                        <b>{{vehicleSpecialization.yearsOfVehicleExp | toLowerCase}} years</b>
                      </span>
                      <span>experience</span>-->
                    </div>
                  </div>
                  <div class="file-container">
                    <input
                      type="file"
                      @change="onFileSelected(index, 'vehicle-area-specialization', vehicleSpecialization.vehicleType), vehicleSpecialization.isFileSelected=true, $refs.vehicleSpecializationFileInput[index].value = ''"
                      ref="vehicleSpecializationFileInput"
                      required
                      hidden
                    />
                    <div
                      class="file-content"
                      :class="{'disabled-text': vehicleSpecialization.isFileDownloaded || isAnyBtnClicked}"
                    >
                      <transition name="fade">
                        <div
                          v-if="vehicleSpecialization.originalname"
                          style="position: relative; display: inline-block;"
                        >
                          <u
                            @click="onDownloadFile(vehicleSpecialization.fileUrl, vehicleSpecialization.originalname), vehicleSpecialization.isFileDownloaded=true"
                          >{{vehicleSpecialization.originalname}}</u>
                          <SpinningButton
                            v-if="vehicleSpecialization.isFileDownloaded"
                            style="left:0; right:0; top:0; bottom:0; position:absolute;"
                          ></SpinningButton>
                          <div
                            v-if="vehicleSpecialization.isFileDownloaded || isAnyBtnClicked"
                            class="prevent-click"
                          ></div>
                        </div>
                      </transition>
                      <transition name="shake">
                        <div
                          class="error"
                          v-if="isDoneBtnClicked && !vehicleSpecialization.originalname"
                        >{{$t('uploadDocumentation.pleaseUploadFile')}}</div>
                      </transition>
                    </div>
                    <button
                      class="upload-btn"
                      type="button"
                      @click="$refs.vehicleSpecializationFileInput[index].click()"
                      v-if="!vehicleSpecialization.originalname"
                      :disabled="vehicleSpecialization.isFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t('buttons.upload')}}</span>
                      <SpinningButton
                        v-if="vehicleSpecialization.isFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                    <button
                      class="remove-btn"
                      type="button"
                      v-if="vehicleSpecialization.originalname"
                      @click="onRemoveFile(vehicleSpecialization.fileUrl), $refs.vehicleSpecializationFileInput[index].value='', vehicleSpecialization.isFileSelected=true"
                      :disabled="vehicleSpecialization.isFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t('buttons.remove')}}</span>
                      <SpinningButton
                        v-if="vehicleSpecialization.isFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="typeOfInspector == 'home'">
              <div>
                <h3>{{$t('uploadDocumentation.homeSpecialization')}}:</h3>
              </div>
              <div>
                <div
                  class="flex"
                  v-for="(homeSpecialization, index) in homeInspectionSpecializations"
                  :key="index"
                >
                  <div class="text-spaced">
                    <div class="index">{{index+1}}.</div>
                    <div
                      v-html="$t(
                      'uploadDocumentation.attachDocToProveHome', 
                      {
                        specializationType: homeSpecialization.specializationType.toLowerCase(), 
                        yearsOfSpecializationExp: homeSpecialization.yearsOfSpecializationExp
                        })"
                    >
                      <!-- <span>Attach documentation to prove you specialize in</span>
                      <span>
                        <b>{{homeSpecialization.specializationType | toLowerCase}}</b>
                      </span>
                      <span>with</span>
                      <span>
                        <b>{{homeSpecialization.yearsOfSpecializationExp | toLowerCase}} years</b>
                      </span>
                      <span>years experience</span>-->
                    </div>
                  </div>
                  <div class="file-container">
                    <input
                      type="file"
                      @change="onFileSelected(index, 'home-inspection-specialization', homeSpecialization.specializationType), homeSpecialization.isFileSelected=true, $refs.homeSpecializationFileInput[index].value = ''"
                      ref="homeSpecializationFileInput"
                      required
                      hidden
                    />
                    <div class="file-content">
                      <transition name="fade">
                        <div
                          v-if="homeSpecialization.originalname"
                          style="position: relative; display: inline-block;"
                        >
                          <u
                            @click="onDownloadFile(homeSpecialization.fileUrl, homeSpecialization.originalname), homeSpecialization.isFileDownloaded=true"
                            :class="{'disabled-text': homeSpecialization.isFileDownloaded || isAnyBtnClicked}"
                          >{{homeSpecialization.originalname}}</u>
                          <SpinningButton
                            v-if="homeSpecialization.isFileDownloaded"
                            style="left:0; right:0; top:0; bottom:0; position:absolute;"
                          ></SpinningButton>
                          <div
                            v-if="homeSpecialization.isFileDownloaded || isAnyBtnClicked"
                            class="prevent-click"
                          ></div>
                        </div>
                      </transition>
                      <transition name="shake">
                        <div
                          class="error"
                          v-if="isDoneBtnClicked && !homeSpecialization.originalname"
                        >{{$t('uploadDocumentation.pleaseUploadFile')}}</div>
                      </transition>
                    </div>
                    <button
                      class="upload-btn"
                      type="button"
                      @click="$refs.homeSpecializationFileInput[index].click()"
                      v-if="!homeSpecialization.originalname"
                      :disabled="homeSpecialization.isFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t('buttons.upload')}}</span>
                      <SpinningButton
                        v-if="homeSpecialization.isFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                    <button
                      class="remove-btn"
                      type="button"
                      v-if="homeSpecialization.originalname"
                      @click="onRemoveFile(homeSpecialization.fileUrl), $refs.homeSpecializationFileInput[index].value='', homeSpecialization.isFileSelected=true"
                      :disabled="homeSpecialization.isFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t('buttons.remove')}}</span>
                      <SpinningButton
                        v-if="homeSpecialization.isFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="typeOfInspector == 'vehicle'">
              <div>
                <h3>{{$t('uploadDocumentation.brandSpecialization')}}:</h3>
              </div>
              <div>
                <div
                  class="flex"
                  v-for=" (brandspecialization, index) in brandSpecializations"
                  :key="index"
                >
                  <div class="text-spaced">
                    <div class="index">{{index+1}}.</div>
                    <div
                      v-html="$t('uploadDocumentation.attachDocToProveBrand', {brandType: brandspecialization.brandType, yearsOfBrandExp: brandspecialization.yearsOfBrandExp})"
                    >
                      <!-- <span>Documentation to prove you specialize in</span>
                      <span>
                        <b>{{brandspecialization.brandType}}</b>
                      </span>
                      <span>with</span>
                      <span>
                        <b>{{brandspecialization.yearsOfBrandExp | toLowerCase}} years</b>
                      </span>
                      <span>experience</span>-->
                    </div>
                  </div>
                  <div class="file-container">
                    <input
                      type="file"
                      @change="onFileSelected(index, 'vehicle-brand-specialization', brandspecialization.brandType), brandspecialization.isFileSelected=true, $refs.brandSpecializationFileInput[index].value = ''"
                      ref="brandSpecializationFileInput"
                      required
                      hidden
                    />
                    <div
                      class="file-content"
                      :class="{'disabled-text': brandspecialization.isFileDownloaded || isAnyBtnClicked}"
                    >
                      <transition name="fade">
                        <div
                          v-if="brandspecialization.originalname"
                          style="position: relative; display: inline-block;"
                        >
                          <u
                            @click="onDownloadFile(brandspecialization.fileUrl, brandspecialization.originalname), brandspecialization.isFileDownloaded=true"
                          >{{brandspecialization.originalname}}</u>
                          <SpinningButton
                            v-if="brandspecialization.isFileDownloaded"
                            style="left:0; right:0; top:0; bottom:0; position:absolute;"
                          ></SpinningButton>
                          <div
                            v-if="brandspecialization.isFileDownloaded || isAnyBtnClicked"
                            class="prevent-click"
                          ></div>
                        </div>
                      </transition>
                      <transition name="shake">
                        <div
                          class="error"
                          v-if="isDoneBtnClicked && !brandspecialization.originalname"
                        >{{$t('uploadDocumentation.pleaseUploadFile')}}</div>
                      </transition>
                    </div>
                    <button
                      class="upload-btn"
                      type="button"
                      @click="$refs.brandSpecializationFileInput[index].click()"
                      v-if="!brandspecialization.originalname"
                      :disabled="brandspecialization.isFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t("buttons.upload")}}</span>
                      <SpinningButton
                        v-if="brandspecialization.isFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                    <button
                      class="remove-btn"
                      type="button"
                      @click="onRemoveFile(brandspecialization.fileUrl), $refs.brandSpecializationFileInput[index].value='', brandspecialization.isFileSelected=true"
                      v-if="brandspecialization.originalname"
                      :disabled="brandspecialization.isFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t('buttons.remove')}}</span>
                      <SpinningButton
                        v-if="brandspecialization.isFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3>{{$t('uploadDocumentation.proCerts')}}:</h3>
              </div>
              <div>
                <div class="flex" v-for="(proCert, index) in proCerts" :key="index">
                  <div class="text-spaced">
                    <div class="index">{{index+1}}.</div>
                    <div
                      v-html="$t('uploadDocumentation.attachCertOf', {certName: proCert.certName})"
                    >
                      <!-- <span>Attach certificate of</span>
                      <span>
                        <b>{{proCert.certName}}</b>
                      </span>-->
                    </div>
                  </div>
                  <div class="file-container">
                    <input
                      type="file"
                      @change="onFileSelected(index, 'proCert', proCert.certName), proCert.isFileSelected=true, $refs.proCertFileInput[index].value = ''"
                      ref="proCertFileInput"
                      required
                      hidden
                    />
                    <div
                      class="file-content"
                      :class="{'disabled-text': proCert.isFileDownloaded || isAnyBtnClicked}"
                    >
                      <transition name="fade">
                        <div
                          v-if="proCert.originalname"
                          style="position: relative; display: inline-block;"
                        >
                          <u
                            @click="onDownloadFile(proCert.fileUrl, proCert.originalname),  proCert.isFileDownloaded=true"
                          >{{proCert.originalname}}</u>
                          <SpinningButton
                            v-if="proCert.isFileDownloaded"
                            style="left:0; right:0; top:0; bottom:0; position:absolute;"
                          ></SpinningButton>
                          <div
                            v-if="proCert.isFileDownloaded || isAnyBtnClicked"
                            class="prevent-click"
                          ></div>
                        </div>
                      </transition>
                      <transition name="shake">
                        <div
                          class="error"
                          v-if="isDoneBtnClicked && !proCert.originalname"
                        >{{$t('uploadDocumentation.pleaseUploadFile')}}</div>
                      </transition>
                    </div>
                    <button
                      class="upload-btn"
                      type="button"
                      @click="$refs.proCertFileInput[index].click()"
                      v-if="!proCert.originalname"
                      :disabled="proCert.isFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t("buttons.upload")}}</span>
                      <SpinningButton
                        v-if="proCert.isFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                    <button
                      class="remove-btn"
                      type="button"
                      v-if="proCert.originalname"
                      @click="onRemoveFile(proCert.fileUrl), $refs.proCertFileInput[index].value='', proCert.isFileSelected=true"
                      :disabled="proCert.isFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t('buttons.remove')}}</span>
                      <SpinningButton
                        v-if="proCert.isFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h3>{{$t('uploadDocumentation.educationCerts')}}:</h3>
                </div>
              </div>
              <div>
                <div class="flex">
                  <div class="text-spaced">
                    <i>&#9679;</i>
                    <span>{{$t('uploadDocumentation.attachHighestEducation')}}</span>
                  </div>
                  <div class="file-container">
                    <input
                      type="file"
                      @change="onFileSelected(undefined, 'education-certification', 'highest-education'), isEduCertFileSelected=true, $refs.eduCertFileInput.value = ''"
                      ref="eduCertFileInput"
                      required
                      hidden
                    />
                    <div
                      class="file-content"
                      :class="{'disabled-text': isEduCertFileDownloaded || isAnyBtnClicked}"
                    >
                      <transition name="fade">
                        <div
                          v-if="highestEducation.highestEduCertFileName"
                          style="position: relative; display: inline-block;"
                        >
                          <u
                            @click="onDownloadFile(highestEducation.fileUrl, highestEducation.highestEduCertFileName)  , isEduCertFileDownloaded=true"
                          >{{highestEducation.highestEduCertFileName}}</u>
                          <SpinningButton
                            v-if="isEduCertFileDownloaded"
                            style="left:0; right:0; top:0; bottom:0; position:absolute;"
                          ></SpinningButton>
                          <div
                            v-if="isEduCertFileDownloaded || isAnyBtnClicked"
                            class="prevent-click"
                          ></div>
                        </div>
                      </transition>
                      <transition name="shake">
                        <div
                          class="error"
                          v-if="isDoneBtnClicked && !highestEducation.highestEduCertFileName"
                        >{{$t('uploadDocumentation.pleaseUploadFile')}}</div>
                      </transition>
                    </div>
                    <button
                      class="upload-btn"
                      type="button"
                      @click="$refs.eduCertFileInput.click()"
                      v-if="!highestEducation.highestEduCertFileName"
                      :disabled="isEduCertFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t("buttons.upload")}}</span>
                      <SpinningButton
                        v-if="isEduCertFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                    <button
                      class="remove-btn"
                      v-if="highestEducation.highestEduCertFileName"
                      type="button"
                      @click="onRemoveFile(highestEducation.fileUrl, 'education-certification'),  $refs.eduCertFileInput.value='', isEduCertFileSelected=true"
                      :disabled="isEduCertFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t('buttons.remove')}}</span>
                      <SpinningButton
                        v-if="isEduCertFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="typeOfInspector == 'home'">
              <div>
                <div>
                  <h3>{{$t('uploadDocumentation.errorAndOmission')}}:</h3>
                </div>
              </div>
              <div>
                <div class="flex">
                  <div class="text-spaced">
                    <i>&#9679;</i>
                    <span>{{$t('uploadDocumentation.attachPoofOfInsurance')}}</span>
                  </div>
                  <div class="file-container">
                    <input
                      type="file"
                      @change="onFileSelected(undefined, 'insurance-document', 'insurance-cover'),  $refs.insuranceFileInput.value='', isInsuranceDocFileSelected=true"
                      ref="insuranceFileInput"
                      required
                      hidden
                    />
                    <div
                      class="file-content"
                      :class="{'disabled-text': isInsuranceDocFileDownloaded || isAnyBtnClicked}"
                    >
                      <transition name="fade">
                        <div
                          v-if="insuranceCover.insuranceDocument"
                          style="position: relative; display: inline-block;"
                        >
                          <u
                            @click="onDownloadFile(insuranceCover.fileUrl, insuranceCover.insuranceDocument), isInsuranceDocFileDownloaded=true"
                          >{{insuranceCover.insuranceDocument}}</u>
                          <SpinningButton
                            v-if="isInsuranceDocFileDownloaded"
                            style="left:0; right:0; top:0; bottom:0; position:absolute;"
                          ></SpinningButton>
                          <div
                            v-if="isInsuranceDocFileDownloaded || isAnyBtnClicked"
                            class="prevent-click"
                          ></div>
                        </div>
                      </transition>
                      <transition name="shake">
                        <div
                          class="error"
                          v-if="isDoneBtnClicked && !insuranceCover.insuranceDocument"
                        >{{$t('uploadDocumentation.pleaseUploadFile')}}</div>
                      </transition>
                    </div>
                    <button
                      class="upload-btn"
                      type="button"
                      @click="$refs.insuranceFileInput.click()"
                      v-if="!insuranceCover.insuranceDocument"
                      :disabled="isInsuranceDocFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t("buttons.upload")}}</span>
                      <SpinningButton
                        v-if="isInsuranceDocFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                    <button
                      class="remove-btn"
                      v-if="insuranceCover.insuranceDocument"
                      type="button"
                      @click="onRemoveFile(insuranceCover.fileUrl, 'insurance-document'), isInsuranceDocFileSelected=true"
                      :disabled="isInsuranceDocFileSelected || isAnyBtnClicked"
                      style="position: relative"
                    >
                      <span>{{$t('buttons.remove')}}</span>
                      <SpinningButton
                        v-if="isInsuranceDocFileSelected"
                        style="left:0; right:0; top:0; bottom:0; position:absolute;"
                      ></SpinningButton>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-container">
            <div class="flex-grow">
              <button
                type="button"
                class="back-btn"
                @click.prevent="onSave('back')"
              >{{$t('buttons.back')}}</button>
            </div>
            <div>
              <button
                type="button"
                class="done-btn"
                @click.prevent="onSave('done')"
              >{{$t('buttons.done')}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import InspRegProgress from "./InspRegProgress.vue";
import SpinningButton from "../../loadingComponents/SpinningButton.vue";
export default {
  components: {
    SpinningButton,
    InspRegProgress
  },
  data() {
    return {
      currentPage: "",
      homeInspectionSpecializations: [],
      vehicleSpecializations: [],
      brandSpecializations: [],
      proCerts: [],
      eduCerts: [],
      highestEducation: {},
      insuranceCover: {},
      uploadedDocs: [],
      isDoneBtnClicked: false,
      isAnyBtnClicked: false,
      isEduCertFileSelected: false,
      isEduCertFileDownloaded: false,
      isInsuranceDocFileSelected: false,
      isInsuranceDocFileDownloaded: false
    };
  },

  computed: {
    typeOfInspector() {
      return this.$store.getters.typeOfInspector;
    }
  },

  methods: {
    onFileSelected(index, docCategory, docType) {
      this.isAnyBtnClicked = true;
      const file = event.target.files[0];

      if (file) {
        const type = file.type;
        if (
          type != "application/pdf" &&
          type != "image/png" &&
          type != "image/jpeg" &&
          type != "image/jpg"
        ) {
          alert("File must be pdf, png, jpeg or jpg!");
          this.InitialIzeData();
          this.isAnyBtnClicked = false;
          return;
        }
        if (file.size > 5000000) {
          //Check if the file size is more than 10 MB
          alert("File size must not exceed 5MB!");
          this.InitialIzeData();
          this.isAnyBtnClicked = false;
        } else {
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
              this.InitialIzeData();
              this.isAnyBtnClicked = false;
            })
            .catch(error => console.log(error.response));
        }
      }
    },

    onRemoveFile(fileUrl, typeOfDoc) {
      this.isAnyBtnClicked = true;
      axios
        .post(`/inspector_infos/me/removeUploadedDoc`, { fileUrl })
        .then(res => {
          // this.$router.go();
          if (typeOfDoc == "education-certification") {
            this.highestEducation = {};
          } else if (typeOfDoc == "insurance-document") {
            this.insuranceCover = {};
          }
          this.InitialIzeData();
          this.isAnyBtnClicked = false;
        })
        .catch(error => {
          console.log(error.response);
        });
    },

    onDownloadFile(fileUrl, originalname) {
      this.isAnyBtnClicked = true;
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
          this.InitialIzeData();
          this.isAnyBtnClicked = false;
        })
        .catch(error => {
          console.log(error);
        });
    },

    onSave(direction) {
      if (direction == "back") {
        if (this.typeOfInspector == "vehicle") {
          this.$router.push(`/${this.$i18n.locale}/inspector/language-proficiency`);
        } else if (this.typeOfInspector == "home") {
          this.$router.push(`/${this.$i18n.locale}/inspector/references`);
        }
      }

      if (direction == "done") {
        const validationArray = [];
        this.isDoneBtnClicked = true;

        if (this.typeOfInspector == "vehicle") {
          this.vehicleSpecializations.forEach(item => {
            if (item.originalname) {
              return;
            } else {
              validationArray.push("error");
            }
          });

          this.brandSpecializations.forEach(item => {
            if (item.originalname) {
              return;
            } else {
              validationArray.push("error");
            }
          });
        }

        if (this.typeOfInspector == "home") {
          this.homeInspectionSpecializations.forEach(item => {
            if (item.originalname) {
              return;
            } else {
              validationArray.push("error");
            }
          });

          if (!this.insuranceCover.insuranceDocument) {
            validationArray.push("error");
          }
        }

        this.proCerts.forEach(item => {
          if (item.originalname) {
            return;
          } else {
            validationArray.push("error");
          }
        });

        if (!this.highestEducation.highestEduCertFileName) {
          validationArray.push("error");
        }

        if (validationArray[0]) {
          return;
        }

        //Update the completion status
        const uploadedDocsData = {
          uploadedDocs: this.uploadedDocs
        };
        axios
          .patch("/inspector_infos/me", uploadedDocsData)
          .then(res => {
            this.$router.push(
              `/${this.$i18n.locale}/status/inspector-registration/${localStorage.getItem("userId")}`
            );
          })
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
        } else if (element.docCategory == "insurance-document") {
          this.insuranceCover.insuranceDocument = element.originalname;
          this.insuranceCover.fileUrl = element.fileUrl;
        }
      }
    },

    InitialIzeData() {
      axios
        .get("/inspector_infos/me")
        .then(res => {
          if (res.data.areaOfSpecialization.vehicleSpecializations) {
            this.vehicleSpecializations = res.data.areaOfSpecialization.vehicleSpecializations.map(
              item => {
                item.isFileSelected = false;
                item.isFileDownloaded = false;
                return item;
              }
            );
            this.brandSpecializations = res.data.areaOfSpecialization.brandSpecializations.map(
              item => {
                item.isFileSelected = false;
                item.isFileDownloaded = false;
                return item;
              }
            );
          }
          if (res.data.areaOfSpecialization.homeInspectionSpecializations) {
            this.homeInspectionSpecializations = res.data.areaOfSpecialization.homeInspectionSpecializations.map(
              item => {
                item.isFileSelected = false;
                item.isFileDownloaded = false;
                return item;
              }
            );
          }
          if (res.data.proCerts) {
            this.proCerts = res.data.proCerts.map(item => {
              item.isFileSelected = false;
              item.isFileDownloaded = false;
              return item;
            });
          }
          this.isEduCertFileSelected = false;
          this.isEduCertFileDownloaded = false;
          this.isInsuranceDocFileSelected = false;
          this.isInsuranceDocFileDownloaded = false;
          this.uploadedDocs = res.data.uploadedDocs;
          this.loadOriginalFIleNames();
        })
        .catch(error => console.log(error));
    }

    // isAllDocsUploaded() {
    //   //Check if all required documents are uplaoded
    //   const numbOfReqProcerts = this.proCerts.length;
    //   const numbOfReqEducerts = this.eduCerts.length;
    //   let otherReqDocs;
    //   if (this.typeOfInspector == "home") {
    //     otherReqDocs = this.homeInspectionSpecializations.length + 1;
    //   } else if (this.typeOfInspector == "vehicle") {
    //     otherReqDocs = this.vehicleSpecializations.length + 2;
    //   }
    //   const totalReqDocs = numbOfReqProcerts + numbOfReqEducerts + otherReqDocs;

    //   //Check the number of uploaded docs

    // }
  },

  beforeRouteLeave: function(to, from, next) {
    this.currentPage = null;
    next();
  },

  created() {
    this.currentPage = "uploadDocs";
    this.InitialIzeData();
    // axios
    //   .get("/inspector_infos/me")
    //   .then(res => {
    //     this.vehicleSpecializations =
    //       res.data.areaOfSpecialization.vehicleSpecializations;
    //     this.brandSpecializations =
    //       res.data.areaOfSpecialization.brandSpecializations;
    //     this.homeInspectionSpecializations =
    //       res.data.areaOfSpecialization.homeInspectionSpecializations;
    //     this.proCerts = res.data.proCerts;
    //     this.uploadedDocs = res.data.uploadedDocs;
    //     this.loadOriginalFIleNames();
    //   })
    //   .catch(error => console.log(error));
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: lightblue;
  padding: 50px;
  width: 100%;
  display: flex;
}

.container-left {
  width: auto;
  display: inline-block;
}

.container-right {
  background-color: white;
  font-size: 14px;
  padding: 30px;
  padding-bottom: 40px;
  margin-left: 50px;
  max-width: 800px;
  border-radius: 5px;
  border: 1px solid #b6b1b1;
  display: inline-block;
}

.error {
  color: red;
  font-size: 12px;
  top: 0px;
  position: absolute;
}

h2 {
  padding-bottom: 15px;
  border-bottom: 1px solid #b6b1b1;
}

h3 {
  font-size: 16px;
  padding-top: 15px;
}

.flex {
  padding-top: 10px;
  padding-bottom: 15px;
  width: 100%;
  border-bottom: 1px solid #b6b1b1;
  align-items: flex-start;
  display: flex;
}

.text-spaced {
  flex: 1;
  min-width: 200px;
  display: flex;
}

.text-spaced i {
  padding-right: 10px;
  font-size: 12px;
  color: grey;
}

.file-container {
  align-items: flex-start;
  display: flex;
}

.file-content {
  padding-left: 10px;
  padding-right: 10px;
  flex: 1;
  max-width: 200px;
  min-width: 200px;
  word-break: break-all;
  position: relative;
}

.file-content u:hover {
  cursor: pointer;
  color: #212259;
}

.disabled-text,
.disabled-text:hover {
  color: #ccc;
}

.prevent-click {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  cursor: not-allowed;
}

.index {
  padding-right: 10px;
}

.upload-btn,
.remove-btn {
  font-size: 12px;
  padding-top: 3px;
  padding-bottom: 3px;
  outline: none;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  width: 65px;
}

.upload-btn {
  border: 1.6px solid rgb(2, 167, 240);
  background-color: rgb(2, 167, 240);
  color: white;
}

.remove-btn {
  color: dodgerblue;
  background-color: white;
  border: 1.6px solid dodgerblue;
}

.upload-btn:hover {
  color: rgb(2, 167, 240);
  background-color: white;
  border: 1.6px solid rgb(2, 167, 240);
}

.remove-btn:hover {
  color: red;
  background-color: white;
  border: 1.6px solid red;
}

button[disabled],
button[disabled]:hover,
button[disabled]:active {
  border: none;
  border: 1.6px solid #e6e6e6;
  background-color: transparent;
  color: #e6e6e6;
  cursor: not-allowed;
}

.btn-container {
  padding-top: 20px;
  display: flex;
}

.flex-grow {
  flex: 1;
}

.done-btn,
.back-btn {
  font-size: 13px;
  width: 70px;
  border-radius: 20px;
  font-weight: bold;
  height: 40px;
  outline: none;
  text-align: center;
  cursor: pointer;
  opacity: 0.9;
}

.done-btn {
  float: right;
  margin-left: 20px;
  color: white;
  background-color: black;
}

.back-btn {
  float: left;
  color: white;
  background-color: black;
}

.back-btn:hover {
  opacity: 1;
  color: black;
  background-color: white;
}

.done-btn:hover {
  opacity: 1;
  color: black;
  background-color: white;
}

/* Clear floats after the columns */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: opacity 0s;
  opacity: 0;
}

/* .shake-enter {
  opacity: 0;
} */

.shake-enter-active {
  animation: shake-in 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  /* transition: opacity 0.5s; */
}

.shake-leave-active {
  transition: opacity 0.25s;
  opacity: 0;
}

@keyframes shake-in {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

@media screen and (max-width: 980px) {
  .container {
    padding: 20px;
  }
  .container-right {
    margin-left: 20px;
  }
  @media only screen and (max-width: 820px) {
    .container {
      padding: 5px;
      background-color: white;
    }
    .container-right {
      margin: 0px;
      width: 100%;
      border-radius: 0px;
    }
    .container-left {
      display: none;
    }
  }
}

/* For mobile: */
@media only screen and (max-width: 620px) {
  .container-right {
    padding: 10px;
  }

  .btn-container {
    padding-top: 15px;
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 580px) {
    .flex {
      flex-direction: column;
    }

    .index {
      padding-right: 5px;
    }

    .text-spaced i {
      padding-right: 5px;
    }

    .text-spaced {
      padding-bottom: 5px;
      min-width: 100%;
    }

    .file-container {
      width: 100%;
    }

    .file-content {
      padding-left: 15px;
      max-width: 100%;
      min-width: auto;
    }

    .btn-container {
      padding-top: 15px;
      padding-bottom: 10px;
    }
  }
}
</style>