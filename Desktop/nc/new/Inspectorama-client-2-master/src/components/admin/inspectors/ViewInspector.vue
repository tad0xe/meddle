<template>
  <!-- edithing -->
  <div>
    <div class="container">
      <div class="left-menu-container">
        <div class="page-description-tab">
          <strong>Inspector Information</strong>
        </div>
        <div
          class="category-tab"
          :class="{active: isAccountInformationVisible}"
          @click="onClickAccountInformationTab()"
        >Account Information</div>
        <div
          class="category-tab"
          :class="{active: isPersonalInformationVisible}"
          @click="onClickPersonalInformationTab()"
        >Personal Information</div>
        <div
          class="category-tab"
          :class="{active: isAreaOfSpecializationVisible}"
          @click="onClickAreaOfSpecializationTab()"
        >Area of Specialization</div>

        <div
          class="category-tab"
          :class="{active: isCertificationsVisible}"
          @click="onClickCertificationsTab()"
        >Professional Certifications</div>
        <div
          class="category-tab"
          :class="{active: isEducationVisible}"
          @click="onClickEducationTab()"
        >Education</div>
        <div
          class="category-tab"
          :class="{active: isLanguageProficiencyVisible}"
          @click="onClickLanguageProficiencyTab()"
        >Language Proficiency</div>
        <div
          class="category-tab"
          :class="{active: isReferencesVisible}"
          @click="onClickReferencesTab()"
        >References</div>
        <div
          class="category-tab"
          :class="{active: isBackgroundCheckVisible}"
          @click="onClickBackgroundCheckTab()"
        >Background Check</div>
        <div
          class="category-tab"
          :class="{active: isIdVerificationVisible}"
          @click="onClickIdVerificationTab()"
        >ID Verification</div>
        <div
          class="category-tab"
          :class="{active: isUploadedDocumentationVisible}"
          @click="onClickUploadedDocumentationTab()"
        >Uploaded Documentation</div>
        <div
          class="category-tab"
          :class="{active: isCalendarVisible}"
          @click="onClickCalendarTab()"
        >Calendar</div>
      </div>
      <div class="main-container">
        <div class="main-container-header">
          <div class="inspector-name">{{firstName }} {{lastName}}</div>
          <div>
            <button class="cancel-btn" @click.prevent="onCancel()">
              <i class="fa fa-close"></i>
              <span>&nbsp;Cancel</span>
            </button>
            <button class="cancel-btn" @click.prevent="navigateToEditInspector()">
              <i class="fa fa-check-circle"></i>
              <span>&nbsp;Edit Inspector</span>
            </button>
            <button class="delete-btn" @click.prevent="onClickDeleteInspector()">
              <i class="fa fa-close"></i>
              <span>&nbsp;Delete Inspector</span>
            </button>
          </div>
        </div>
        <hr />
        <div class="category-view">
          <AccountInformation v-show="isAccountInformationVisible"></AccountInformation>
          <AreaOfSpecialization v-show="isAreaOfSpecializationVisible"></AreaOfSpecialization>
          <PersonalInformation v-show="isPersonalInformationVisible"></PersonalInformation>
          <Certifications v-show="isCertificationsVisible"></Certifications>
          <Education v-show="isEducationVisible"></Education>
          <LanguageProficiency v-show="isLanguageProficiencyVisible"></LanguageProficiency>
          <References v-show="isReferencesVisible"></References>
          <BackgroundCheck v-show="isBackgroundCheckVisible"></BackgroundCheck>

          <!-- <IdVerification v-show="isIdVerificationVisible"></IdVerification> -->
          <UploadedDocumentation v-show="isUploadedDocumentationVisible"></UploadedDocumentation>
          <!-- <Calendar></Calendar> -->
        </div>
      </div>
      <DeleteInspectorModal
        v-show="isDeleteInspectorModalVisible"
        :inspectorId="inspectorId"
        @close="isDeleteInspectorModalVisible = false"
      ></DeleteInspectorModal>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import countriesLists from "../../../mockData/countriesList";
import PersonalInformation from "./generalViewTemplates/PersonalInformation.vue";
import AreaOfSpecialization from "./vehicleInspectorViewTemplates/AreaOfSpecialization.vue";
import Certifications from "./generalViewTemplates/Certifications.vue";
import Education from "./generalViewTemplates/Education.vue";
import LanguageProficiency from "./generalViewTemplates/LanguageProficiency.vue";
import References from "./generalViewTemplates/References.vue";
import BackgroundCheck from "./generalViewTemplates/BackgroundCheck.vue";
// import IdVerification from "./generalViewTemplates/IdVerification.vue";
import UploadedDocumentation from "./vehicleInspectorViewTemplates/UploadedDocumentation.vue";
// import Calendar from "./vehicleInspectorViewTemplates/Calendar.vue";
import AccountInformation from "./generalViewTemplates/AccountInformation.vue";

import DeleteInspectorModal from "../adminModals/DeleteInspectorModal.vue";

export default {
  components: {
    AccountInformation,
    PersonalInformation,
    AreaOfSpecialization,
    Certifications,
    Education,
    LanguageProficiency,
    References,
    BackgroundCheck,
    // IdVerification,
    UploadedDocumentation,
    // Calendar,
    DeleteInspectorModal
  },
  data() {
    return {
      inspectorId: "",
      firstName: "",
      lastName: "",
      isAccountInformationVisible: true,
      isPersonalInformationVisible: false,
      isAreaOfSpecializationVisible: false,
      isCertificationsVisible: false,
      isEducationVisible: false,
      isLanguageProficiencyVisible: false,
      isReferencesVisible: false,
      isBackgroundCheckVisible: false,
      // isIdVerificationVisible: false,
      isUploadedDocumentationVisible: false,
      // isCalendarVisible: false,
      isDeleteInspectorModalVisible: false
    };
  },
  methods: {
    hideAll() {
      this.isAccountInformationVisible = false;
      this.isPersonalInformationVisible = false;
      this.isAreaOfSpecializationVisible = false;
      this.isCertificationsVisible = false;
      this.isEducationVisible = false;
      this.isLanguageProficiencyVisible = false;
      this.isReferencesVisible = false;
      this.isBackgroundCheckVisible = false;
      this.isIdVerificationVisible = false;
      this.isUploadedDocumentationVisible = false;
      this.isCalendarVisible = false;
    },
    onClickAccountInformationTab() {
      this.hideAll();
      this.isAccountInformationVisible = true;
    },
    onClickPersonalInformationTab() {
      this.hideAll();
      this.isPersonalInformationVisible = true;
    },

    onClickAreaOfSpecializationTab() {
      this.hideAll();
      this.isAreaOfSpecializationVisible = true;
    },

    onClickCertificationsTab() {
      this.hideAll();
      this.isCertificationsVisible = true;
    },

    onClickEducationTab() {
      this.hideAll();
      this.isEducationVisible = true;
    },

    onClickLanguageProficiencyTab() {
      this.hideAll();
      this.isLanguageProficiencyVisible = true;
    },

    onClickReferencesTab() {
      this.hideAll();
      this.isReferencesVisible = true;
    },

    onClickReferencesTab() {
      this.hideAll();
      this.isReferencesVisible = true;
    },

    onClickBackgroundCheckTab() {
      this.hideAll();
      this.isBackgroundCheckVisible = true;
    },

    onClickIdVerificationTab() {
      this.hideAll();
      this.isIdVerificationVisible = true;
    },

    onClickUploadedDocumentationTab() {
      this.hideAll();
      this.isUploadedDocumentationVisible = true;
    },

    onClickCalendarTab() {
      this.hideAll();
      this.isCalendarVisible = true;
    },

    navigateToEditInspector() {
      localStorage.setItem("openedInspectorId", this.inspectorId);
      const id = localStorage.getItem("openedInspectorId");
      this.$router.push(`/edit-inspector/${id}`);
    },
    onCancel() {
      localStorage.removeItem("openedInspectorId");
      this.$router.replace("/inspectors");
    },
    onClickDeleteInspector() {
      this.isDeleteInspectorModalVisible = true;
    }
  },
  computed: {
    ...mapGetters("adminStore", ["error"])
  },

  created() {
    this.countries = countriesLists;
    const inspectorId = localStorage.getItem("openedInspectorId");
    axios
      .get(`/inspector_users_admin/${inspectorId}`)
      .then(res => {
        this.inspectorId = res.data.inspectorId;
        this.firstName = res.data.personalInfo.firstName;
        this.lastName = res.data.personalInfo.lastName;
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  //Always user ES5 and not ES6 arrow function
  beforeRouteLeave: function(to, from, next) {
    next();
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container {
  padding: 40px 20px;
  font-family: sans-serif, Arial, Helvetica;
  background-color: lightcyan;
  width: 100%;
  display: flex;
}

.left-menu-container {
  width: 25%;
  max-width: 360px;
  min-width: 310px;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid #b6b1b1;
  background-color: white;
  display: inline-table;
}

.main-container {
  padding: 10px 30px;
  width: 65%;
  min-width: 800px;
  border-radius: 5px;
  border: 1px solid #b6b1b1;
  background-color: white;
  display: inline-table;
}

hr {
  margin-left: -10px;
  margin-right: -10px;
}

.main-container-header {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;
  display: flex;
}

.inspector-name {
  font-size: 30px;
  color: #ed6502;
  font-weight: bold;
  flex: 1;
}

.category-view {
  padding-top: 15px;
  padding-bottom: 10px;
  width: 100%;
  display: inline-block;
}

.page-description-tab {
  padding: 20px;
  padding-top: 22px;
  padding-bottom: 22px;
  font-size: 25px;
  color: darkblue;
  font-weight: bold;
  border-bottom: 1px solid #b6b1b1;
}

.category-tab {
  font-size: 18px;
  padding: 15px 20px;
  border-bottom: 1px solid #b6b1b1;
}

.category-tab:last-child {
  border-bottom: none;
}

.category-tab:hover {
  background-color: #dddd;
}

.active,
.active:hover {
  font-weight: bold;
  background-color: lightblue;
}

.cancel-btn,
.delete-btn {
  font-size: 13px;
  font-weight: bold;
  padding: 4px 9px;
  color: white;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  border: solid;
}

.cancel-btn {
  margin-right: 10px;
  background-color: #ea7601;
  border-color: #ed6502 #a04300 #a04300 #ed6502;
  opacity: 0.9;
}

.delete-btn {
  background-color: red;
  border-color: orangered darkred darkred orangered;
  opacity: 0.8;
}

.delete-btn:active {
  border-color: darkred orangered orangered darkred;
  opacity: 0.8;
}

.cancel-btn:active {
  opacity: 0.95;
  border-color: #a04300 #ed6502 #ed6502 #a04300;
}

.cancel-btn:hover,
.delete-btn:hover {
  opacity: 1;
}
</style>