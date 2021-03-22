<template>
  <div class="container">
    <div class="container-left">
      <InspRegProgress></InspRegProgress>
    </div>
    <div class="container-right">
      <div class="container-header">{{$t('inspectorRegStatus.title')}}</div>
      <div>
        <span>
          <span style="color: red">{{$t('inspectorRegStatus.applicationStatus')}}:</span>
          <span v-if="inspectorInfo.applicationStatus == 'Pending'">
            <strong>{{$t('inspectorRegStatus.pending')}}</strong>
          </span>
          <span v-if="inspectorInfo.applicationStatus == 'Incomplete'">
            <strong>{{$t('inspectorRegStatus.incomplete')}}</strong>
          </span>
          <span v-if="inspectorInfo.applicationStatus == 'Processing'">
            <strong>{{$t('inspectorRegStatus.processing')}}</strong>
          </span>
          <span v-if="inspectorInfo.applicationStatus == 'Approved'">
            <strong>{{$t('inspectorRegStatus.approved')}}</strong>
          </span>
          <span v-if="inspectorInfo.applicationStatus == 'Rejected'">
            <strong>{{$t('inspectorRegStatus.rejected')}}</strong>
          </span>
          <span v-if="inspectorInfo.applicationStatus == 'Suspended'">
            <strong>{{$t('inspectorRegStatus.suspended')}}</strong>
          </span>
          <span v-if="inspectorInfo.applicationStatus == 'Activated'">
            <strong>{{$t('inspectorRegStatus.activated')}}</strong>
          </span>
          <span v-if="inspectorInfo.applicationStatus == 'Deactivated'">
            <strong>{{$t('inspectorRegStatus.deactivated')}}</strong>
          </span>
          <span v-if="inspectorInfo.applicationStatus == 'Removed'">
            <strong>{{$t('inspectorRegStatus.removed')}}</strong>
          </span>
        </span>
        <div
          v-if="inspectorInfo.applicationStatus == 'Pending' || inspectorInfo.applicationStatus == 'Incomplete'"
        >
          <p
            class="displayed-message"
            v-if="inspectorInfo.applicationStatus == 'Pending'"
          >{{$t('inspectorRegStatus.pendingBody')}}</p>
          <button
            class="btn"
            @click="onClickContinue(inspectorInfo.completionStatus)"
            v-if="inspectorInfo.applicationStatus == 'Incomplete'"
          >{{$t('buttons.continueApplication')}}</button>
          <button
            class="btn deletebtn"
            @click="showProfileDeleteModal()"
          >{{$t('buttons.deleteApplication')}}</button>
        </div>
        <div v-if="inspectorInfo.applicationStatus == 'Processing'">
          <p class="displayed-message">{{$t('inspectorRegStatus.processingBody')}}</p>
          <button class="btn" @click="onAddMoreDoc()">{{$t('buttons.addMoreInfo')}}</button>
        </div>
        <div v-if="inspectorInfo.applicationStatus == 'Rejected'">
          <p class="displayed-message">{{$t('inspectorRegStatus.rejectedBody')}}</p>
        </div>
        <div v-if="inspectorInfo.applicationStatus == 'Approved'">
          <p class="displayed-message">{{$t('inspectorRegStatus.approvedBody')}}</p>
          <button class="btn" @click="onGoToCourse()">{{$t('buttons.startOrientation')}}</button>
        </div>
        <div v-if="inspectorInfo.applicationStatus == 'Activated'">
          <p class="displayed-message">{{$t('inspectorRegStatus.activatedBody')}}</p>
          <button class="btn" @click="onGoToProfile()">{{$t('buttons.myInspectorProfile')}}</button>
        </div>
        <div v-if="inspectorInfo.applicationStatus == 'Suspended'">
          <p class="displayed-message">{{$t('inspectorRegStatus.suspendedBody')}}</p>
          <button class="btn" @click="onGoToProfile()">{{$t('buttons.myInspectorProfile')}}</button>
        </div>
        <div v-if="inspectorInfo.applicationStatus == 'Deactivated'">
          <p class="displayed-message">{{$t('inspectorRegStatus.deactivatedBody')}}</p>
        </div>
        <div v-if="inspectorInfo.applicationStatus == 'Removed'">
          <p class="displayed-message">{{$t('inspectorRegStatus.removedBody')}}</p>
        </div>
        <div
          v-if="inspectorInfo.payoutDetails && inspectorInfo.payoutDetails.isPayoutDetailsSubmitted == false && 
          inspectorInfo.isBackgroundChecked == true && inspectorInfo.isIdVerified == true"
        >
          <div>{{$t('inspectorRegStatus.linkToStripe')}}</div>
          <div>
            <a :href="stripeLink" class="stripe-btn">
              <i class="fab fa-stripe-s"></i>
              <span>{{$t('inspectorRegStatus.connectWithStripe')}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <InspectorProfileDeleteWarning
      v-show="isDeleteWarningVisible"
      @close="hideProfileDeleteModal()"
    ></InspectorProfileDeleteWarning>
  </div>
</template>
<script>
import InspRegProgress from "../inspector/inspectorRegistration/InspRegProgress.vue";
import InspectorProfileDeleteWarning from "../modals/inspectorProfiles/InspectorProfileDeleteWarning.vue";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  components: {
    InspRegProgress,
    InspectorProfileDeleteWarning
  },
  data() {
    return {
      isDeleteWarningVisible: false,
      inspectorInfo: {},
      email: ""
    };
  },
  computed: {
    ...mapGetters(["typeOfInspector", "isAuthenticated"]),

    stripeLink() {
      return `https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://connect.stripe.com/connect/default/
      oauth/test&client_id=${process.env.VUE_APP_STRIPE_CONNECT_CLIENT_ID}&state={STATE_VALUE}&stripe_user[email]=${this.email}`;
    }
  },

  methods: {
    onClickContinue(completionStatus) {
      if (completionStatus.personalInfo == false) {
        this.$router.push(
          `/${this.$i18n.locale}/inspector/personal-information`
        );
      } else if (completionStatus.areaOfSpecialization == false) {
        if (this.typeOfInspector == "Vehicle") {
          this.$router.push(
            `/${this.$i18n.locale}/inspector/vehicle/area-of-specialization`
          );
        } else if (this.typeOfInspector == "Home") {
          this.$router.push(
            `/${this.$i18n.locale}/inspector/home/area-of-specialization`
          );
        }
      } else if (completionStatus.proCerts == false) {
        if (this.typeOfInspector == "Vehicle") {
          this.$router.push(
            `/${this.$i18n.locale}/inspector/vehicle/certifications`
          );
        } else if (this.typeOfInspector == "Home") {
          this.$router.push(
            `/${this.$i18n.locale}/inspector/home/certifications`
          );
        }
      } else if (completionStatus.educations == false) {
        this.$router.push(`/${this.$i18n.locale}/inspector/education`);
      } else if (completionStatus.languageProficiency == false) {
        this.$router.push(
          `/${this.$i18n.locale}/inspector/language-proficiency`
        );
      } else if (completionStatus.references == false) {
        this.$router.push(`/${this.$i18n.locale}/inspector/references`);
        // } else if (completionStatus.backgroundCheck == false) {
        //   this.$router.push(`/${this.$i18n.locale}/inspector/background-check`);
      } else if (completionStatus.uploadedDocs == false) {
        this.$router.push(
          `/${this.$i18n.locale}/inspector/upload-documentaion`
        );
      }
    },

    showProfileDeleteModal() {
      this.isDeleteWarningVisible = true;
    },

    hideProfileDeleteModal() {
      this.isDeleteWarningVisible = false;
    }
  },

  mounted() {
    if (this.isAuthenticated) {
      axios.get("/inspector_infos/me").then(res => {
        this.inspectorInfo = res.data;
        this.email = res.data.personalInfo.email;
      });
    } else {
      this.$router.replace("/login?redirectTo=inspectorRegStatus");
    }
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
  display: inline-table;
}

.container-right {
  background-color: white;
  padding: 30px;
  margin-left: 50px;
  width: 60%;
  border-radius: 10px;
  border: 1px solid #b6b1b1;
  display: inline-table;
}

.container-header {
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: bold;
  color: #212259;
}

p {
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.btn,
.stripe-btn {
  color: white;
  padding: 8px 10px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 17px;
  text-align: center;
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 30px;
  border: 1.6px solid rgb(2, 167, 240);
  background-color: rgb(2, 167, 240);
  display: inline-block;
}

.stripe-btn {
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px 10px;
  border: 1.6px solid white;
  text-decoration: none;
  background: linear-gradient(150deg, #53f 15%, #05d5ff 100%);
  opacity: 0.9;
}

.stripe-btn:hover {
  opacity: 1;
}

.btn:hover {
  color: rgb(2, 167, 240);
  background-color: white;
  border: 1.6px solid rgb(2, 167, 240);
}

.link {
  color: blue;
}

.link:hover {
  color: darkblue;
}

.deletebtn:hover {
  color: red;
  background-color: white;
  border: 1.6px solid red;
}

.displayed-message {
  font-size: 14px;
}

/* For tablet: */
@media screen and (max-width: 920px) {
  .container {
    padding: 20px;
  }

  .container-right {
    margin-left: 20px;
  }

  .container-header {
    font-size: 22px;
  }

  p {
    font-size: 18px;
  }

  /* For mobile phones: */
  @media only screen and (max-width: 720px) {
    .container {
      padding: 0px;
    }
    .container-left {
      display: none;
    }

    .container-right {
      width: 100%;
      margin: 0px;
      border-radius: 0px;
    }
  }
}

/* For small mobile phones: */
@media only screen and (max-width: 530px) {
  .container-left {
    display: none;
  }

  .container-right {
    width: 100%;
    margin: 0px;
    border-radius: 0px;
  }

  .container-right {
    padding: 20px 10px;
    width: 100%;
    margin: 0px;
    border-radius: 0px;
  }

  .container-header {
    font-size: 18px;
  }

  p {
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .btn {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 17px;
    width: 200px;
  }
}
</style>

