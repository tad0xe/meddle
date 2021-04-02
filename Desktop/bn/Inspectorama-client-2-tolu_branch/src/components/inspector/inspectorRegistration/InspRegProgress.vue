<template>
  <div>
    <div class="container-left">
      <div class="leftcontainer-content">
        <div class="status-bar">
          <strong>{{finalPercentValue}}% {{$t('generic.complete')}}</strong>
        </div>
        <div class="progress">
          <div class="progress__bar" :style="[statusRadius, statusWidth]"></div>
        </div>
        <br /> 
        <div :style="[currentPage == 'personalInfo'? styleCurrentTab: null]">
          <span class="fa fa-check-circle" v-if="personalInfo"></span>
          <span class="fa fa-circle-o" v-else></span>&nbsp;
          <span :style="[showPointer]" @click="onClick('personalInfo')">{{$t('inspRegProgress.personalInformation')}}</span>
        </div>
        <br />
        <div :style="[currentPage == 'areaOfSpecialization'? styleCurrentTab: null]">
          <span class="fa fa-check-circle" v-if="areaOfSpecialization"></span>
          <span class="fa fa-circle-o" v-else></span>&nbsp;
          <span
            :style="[showPointer]"
            @click="onClick('specialization')"
          >{{$t('inspRegProgress.areaOfSpecialization')}}</span>
        </div>
        <br />
        <div :style="[currentPage == 'proCerts'? styleCurrentTab: null]">
          <span class="fa fa-check-circle" v-if="proCerts"></span>
          <span class="fa fa-circle-o" v-else></span>&nbsp;
          <span
            :style="[showPointer]"
            @click="onClick('certifications')"
          >{{$t('inspRegProgress.proCerts')}}</span>
        </div>
        <br />
        <div :style="[currentPage == 'educations'? styleCurrentTab: null]">
          <span class="fa fa-check-circle" v-if="educations"></span>
          <span class="fa fa-circle-o" v-else></span>&nbsp;
          <span :style="[showPointer]" @click="onClick('education')">{{$t('inspRegProgress.education')}}</span>
        </div>
        <br />
        <div :style="[currentPage == 'languageProficiency'? styleCurrentTab: null]">
          <span class="fa fa-check-circle" v-if="languageProficiency"></span>
          <span class="fa fa-circle-o" v-else></span>&nbsp;
          <span :style="[showPointer]" @click="onClick('language')">{{$t('inspRegProgress.languageProficiency')}}</span>
        </div>
        <br />
        <div v-if="typeOfInspector != 'vehicle'">
          <div :style="[currentPage == 'references'? styleCurrentTab: null]">
            <span class="fa fa-check-circle" v-if="references"></span>
            <span class="fa fa-circle-o" v-else></span>&nbsp;
            <span :style="[showPointer]" @click="onClick('references')">{{$t('inspRegProgress.references')}}</span>
          </div>
          <br />
        </div>
        <!-- <div :style="[currentPage == 'backgroundCheck'? styleCurrentTab: null]">
          <span class="fa fa-check-circle" v-if="backgroundCheck"></span>
          <span class="fa fa-circle-o" v-else></span>&nbsp;
          <span :style="[showPointer]" @click="onClick('backgroundCheck')">{{$t('inspRegProgress.backgroundCheck')}}</span>
        </div>
        <br />-->

        <!-- <div>
          <span class="fa fa-check-circle" v-if="idVerification"></span>
          <span class="fa fa-circle-o" v-else></span>&nbsp;
          <span>{{$t('inspRegProgress.idVerification')}}</span>
        </div>
        <br />-->
        <div :style="[currentPage == 'uploadDocs'? styleCurrentTab: null]">
          <span class="fa fa-check-circle" v-if="uploadedDocs"></span>
          <span class="fa fa-circle-o" v-else></span>&nbsp;
          <span :style="[showPointer]" @click="onClick('uploadDocs')">{{$t('inspRegProgress.uploadDocs')}}</span>
        </div>
        <br />
        <div>
          <span class="fa fa-rocket"></span>&nbsp;
          <span>{{$t('inspRegProgress.activation')}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    currentPage: null
  },

  data() {
    return {
      typeOfInspector: "",
      personalInfo: false,
      areaOfSpecialization: false,
      availability: false,
      proCerts: false,
      educations: false,
      languageProficiency: false,
      references: false,
      backgroundCheck: false,
      idVerification: false,
      uploadedDocs: false,

      applicationStatus: false
    };
  },

  computed: {
    showPointer() {
      if (this.applicationStatus == "Pending") {
        return {
          cursor: "pointer"
        };
      }
    },
    statusWidth() {
      return {
        width: this.finalPercentValue + "%"
      };
    },

    statusRadius() {
      if (this.finalPercentValue >= 100) {
        return {
          borderRadius: 6 + "px"
        };
      }
    },
    
    finalPercentValue() {
      let n = 9
      let sum =
        this.personalInfo +
        this.areaOfSpecialization +
        this.availability +
        this.proCerts +
        this.educations +
        this.languageProficiency +
        this.backgroundCheck +
        this.idVerification +
        this.uploadedDocs;

      if (this.typeOfInspector != "vehicle") {
        sum = sum + this.references;
        n = 10
      }

      return Math.round((sum / n) * 95 + 5);
    },

    styleCurrentTab() {
      return {
        "font-weight": "bold"
      };
    }
  },

  methods: {
    onClick(route) {
      if (this.applicationStatus == "Pending") {
        if (route == "personalInfo") {
        this.$router.push(`/${this.$i18n.locale}/inspector/personal-information`);
        } else if (route == "specialization") {
          if (this.typeOfInspector == "vehicle") {
            this.$router.push(`/${this.$i18n.locale}/inspector/vehicle/area-of-specialization`);
          } else if (this.typeOfInspector == "home") {
            this.$router.push(`/${this.$i18n.locale}/inspector/home/area-of-specialization`);
          }
        } else if (route == "certifications") {
          this.$router.push(`/${this.$i18n.locale}/inspector/vehicle/certifications`);
        } else if (route == "education") {
          this.$router.push(`/${this.$i18n.locale}/inspector/education`);
        } else if (route == "language") {
          this.$router.push(`/${this.$i18n.locale}/inspector/language-proficiency`);
        } else if (route == "references") {
          this.$router.push(`/${this.$i18n.locale}/inspector/references`);
        } else if (route == "backgroundCheck") {
          this.$router.push(`/${this.$i18n.locale}/inspector/background-check`);
        } else if (route == "uploadDocs") {
          this.$router.push(`/${this.$i18n.locale}/inspector/upload-documentaion`);
        }
      }
    }
  },

  created() {
    axios
      .get("/inspector_infos/me")
      .then(res => {
        this.typeOfInspector = res.data.typeOfInspector;
        this.personalInfo = res.data.completionStatus.personalInfo;
        this.areaOfSpecialization =
          res.data.completionStatus.areaOfSpecialization;
        this.availability = res.data.completionStatus.availability;
        this.proCerts = res.data.completionStatus.proCerts;
        this.educations = res.data.completionStatus.educations;
        this.languageProficiency =
          res.data.completionStatus.languageProficiency;
        this.references = res.data.completionStatus.references;
        this.backgroundCheck = res.data.completionStatus.backgroundCheck;
        this.idVerification = res.data.completionStatus.idVerification;
        this.uploadedDocs = res.data.completionStatus.uploadedDocs;

        this.applicationStatus = res.data.applicationStatus;
      })
      .catch(error => {
      });
  }
};
</script>

<style scoped>
.container-left {
  font-size: 16px;
  padding: 15px;
  width: 260px;
  background-color: white;
  border-radius: 10px;
  display: inline-block;
}

.progress,
.progress__bar {
  height: 8px;
}

.progress {
  width: 100%;
  margin-top: 10px;
  border-radius: 6px;
  background-color: lightgray;
}

.progress__bar {
  width: 5%;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: green;
}

.status-bar {
  font-size: 15px;
}

.fa,
.fas,
.fa-check-circle,
.fa-circle-o,
.fa-circle {
  color: rgb(24, 24, 107);
}

.fa-rocket {
  transform: rotate(-45deg);
}

@media only screen and (max-width: 1100px) {
  .container-left {
    width: 240px;
  }

  .container-left {
    font-size: 18px;
  }

  @media only screen and (max-width: 920px) {
    .container-left {
      width: 220px;
    }

    .container-left {
      font-size: 16px;
    }
  }
}
</style>
