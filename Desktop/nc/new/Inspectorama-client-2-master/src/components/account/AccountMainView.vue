<template>
  <div>
    <div class="container" :style="{ 'min-height': mainContainertHeight }">
      <div class="mobile-tab">
        <select v-model="mobileTab" @click="onClickTab()">
          <option>{{ $t("accountMainView.accountDashboard") }}</option>
          <option>{{ $t("accountMainView.profileSettings") }}</option>
          <option v-if="isInspector">
            {{ $t("accountMainView.inspectorProfile") }}
          </option>
          <option>{{ $t("accountMainView.paymentAndReceipts") }}</option>
          <option>{{ $t("accountMainView.referralProgram") }}</option>
          <option>{{ $t("accountMainView.inviteToBookInspection") }}</option>
          <option>{{ $t("accountMainView.notificationSettings") }}</option>
        </select>
      </div>
      <div class="container-left" ref="getContainerLeftHeight">
        <div
          class="left-tab"
          :class="{ active: isAccountDashboardVisible }"
          @click="onClickDashboardTab()"
        >
          {{ $t("accountMainView.accountDashboard") }}
        </div>
        <div
          class="left-tab"
          :class="{ active: isProfileSettingsVisible }"
          @click="onClickProfileSettingsTab()"
        >
          {{ $t("accountMainView.profileSettings") }}
        </div>
        <div
          v-if="isInspector && isInspectorProfileApproved"
          class="left-tab"
          :class="{ active: isInspectorProfileVisible }"
          @click="onClickInspectorProfileTab()"
        >
          {{ $t("accountMainView.inspectorProfile") }}
        </div>
        <div
          class="left-tab"
          :class="{ active: isPaymentsAndReceiptsVisible }"
          @click="onClickPaymentsAndReceiptsTab()"
        >
          {{ $t("accountMainView.paymentAndReceipts") }}
        </div>
        <div
          class="left-tab"
          :class="{ active: isInvitationToBookInspectionVisible }"
          @click="onClickInvitationToBookInspectionVisibleTab()"
        >
          {{ $t("accountMainView.inviteToBookInspection") }}
        </div>
        <div
          class="left-tab"
          :class="{ active: isMarketplaceVisible }"
          @click="onClickMarketplaceVisibleTab()"
        >
          Marketplace
        </div>
        <div
          class="left-tab"
          :class="{ active: isReferralProgramVisible }"
          @click="onClickReferralProgramVisibleTab()"
        >
          {{ $t("accountMainView.referralProgram") }}
        </div>
        <div
          class="left-tab"
          :class="{ active: isNotificationSettingsVisible }"
          @click="onClickNotificationSettingsTab()"
        >
          {{ $t("accountMainView.notificationSettings") }}
        </div>
      </div>
      <div class="container-right">
        <AccountDashboard
          :containerLeftHeight="containerLeftHeight"
          v-if="isAccountDashboardVisible"
        ></AccountDashboard>
        <ProfileSettings
          :containerLeftHeight="containerLeftHeight"
          v-if="isProfileSettingsVisible"
        ></ProfileSettings>
        <InspectorProfile
          :containerLeftHeight="containerLeftHeight"
          v-if="isInspectorProfileVisible && isInspectorProfileApproved"
        ></InspectorProfile>
        <PaymentsAndReceipts
          :containerLeftHeight="containerLeftHeight"
          v-if="isPaymentsAndReceiptsVisible"
        ></PaymentsAndReceipts>
        <NotificationSettings
          :containerLeftHeight="containerLeftHeight"
          v-if="isNotificationSettingsVisible"
        ></NotificationSettings>
        <ReferralProgram
          :containerLeftHeight="containerLeftHeight"
          v-if="isReferralProgramVisible"
        ></ReferralProgram>
        <InvitationToBookInspection
          :containerLeftHeight="containerLeftHeight"
          v-if="isInvitationToBookInspectionVisible"
        ></InvitationToBookInspection>
        <Marketplace
          :containerLeftHeight="containerLeftHeight"
          v-if="isMarketplaceVisible"
        ></Marketplace>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import AccountDashboard from "./accountSubViews/AccountDashboard.vue";
import ProfileSettings from "./accountSubViews/ProfileSettings.vue";
import InspectorProfile from "./accountSubViews/InspectorProfile.vue";
import PaymentsAndReceipts from "./accountSubViews/PaymentsAndReceipts.vue";
import NotificationSettings from "./accountSubViews/NotificationSettings.vue";
import ReferralProgram from "./accountSubViews/ReferralProgram.vue";
import InvitationToBookInspection from "./accountSubViews/InvitationToBookInspection.vue";
import Marketplace from "./accountSubViews/Marketplace.vue";

export default {
  components: {
    AccountDashboard,
    ProfileSettings,
    InspectorProfile,
    PaymentsAndReceipts,
    NotificationSettings,
    ReferralProgram,
    InvitationToBookInspection,
    Marketplace,
  },

  data() {
    return {
      mainContainertHeight: "auto",
      containerLeftHeight: "",
      mobileTab: "Account Dashboard",
      isAccountDashboardVisible: true,
      isProfileSettingsVisible: false,
      isInspectorProfileVisible: false,
      isPaymentsAndReceiptsVisible: false,
      isReferralProgramVisible: false,
      isInvitationToBookInspectionVisible: false,
      isMarketplaceVisible: false,
      isNotificationSettingsVisible: false,
      isInspectorProfileApproved: false,
    };
  },

  watch: {
    "$route.query.activeTab"(to, from) {
      this.$router
        .push({
          query: {
            activeTab: to,
          },
        })
        .catch((err) => {});
      this.initialize();
    },
  },

  computed: {
    ...mapGetters(["isInspector"]),
  },

  methods: {
    windowResize() {
      if (window.innerWidth <= 860) {
        this.containerLeftHeight = 300;
        this.mainContainertHeight = "430px";
      } else {
        if (this.$refs.getContainerLeftHeight.clientHeight > 0) {
          this.containerLeftHeight = this.$refs.getContainerLeftHeight.clientHeight;
        }
        this.mainContainertHeight = "auto";
      }
    },

    hideAll() {
      this.isAccountDashboardVisible = false;
      this.isProfileSettingsVisible = false;
      this.isInspectorProfileVisible = false;
      this.isPaymentsAndReceiptsVisible = false;
      this.isReferralProgramVisible = false;
      this.isInvitationToBookInspectionVisible = false;
      this.isMarketplaceVisible = false;
      this.isNotificationSettingsVisible = false;
    },
    onClickDashboardTab() {
      this.hideAll();
      this.isAccountDashboardVisible = true;
      this.mobileTab = "Account Dashboard";
      this.$router
        .push({
          query: {
            activeTab: "accountDashboard",
          },
        })
        .catch((err) => {});
    },
    onClickProfileSettingsTab() {
      this.hideAll();
      this.isProfileSettingsVisible = true;
      this.mobileTab = "Profile Settings";
      this.$router
        .push({
          query: {
            activeTab: "profileSettings",
          },
        })
        .catch((err) => {});
    },
    onClickInspectorProfileTab() {
      this.hideAll();
      this.isInspectorProfileVisible = true;
      this.mobileTab = "Inspector Profile";
      this.$router
        .push({
          query: {
            activeTab: "inspectorProfile",
          },
        })
        .catch((err) => {});
    },
    onClickPaymentsAndReceiptsTab() {
      this.hideAll();
      this.isPaymentsAndReceiptsVisible = true;
      this.mobileTab = "Payment and Receipts";
      this.$router
        .push({
          query: {
            activeTab: "paymentAndReceipts",
          },
        })
        .catch((err) => {});
    },

    onClickReferralProgramVisibleTab() {
      this.hideAll();
      this.isReferralProgramVisible = true;
      this.mobileTab = "Referral Program";
      this.$router
        .push({
          query: {
            activeTab: "referralProgram",
          },
        })
        .catch((err) => {});
    },

    onClickInvitationToBookInspectionVisibleTab() {
      this.hideAll();
      this.isInvitationToBookInspectionVisible = true;
      this.mobileTab = "Invite to Book Inspection";
      this.$router
        .push({
          query: {
            activeTab: "invitationToBook",
          },
        })
        .catch((err) => {});
    },

    onClickMarketplaceVisibleTab() {
      this.hideAll();
      this.isMarketplaceVisible = true;
      this.mobileTab = "Marketplace";
      this.$router
        .push({
          query: {
            activeTab: "marketplace",
          },
        })
        .catch((err) => {});
    },

    onClickNotificationSettingsTab() {
      this.hideAll();
      this.isNotificationSettingsVisible = true;
      this.mobileTab = "Notification Settings";
      this.$router
        .push({
          query: {
            activeTab: "notificationSettings",
          },
        })
        .catch((err) => {});
    },

    onClickTab() {
      if (this.mobileTab == "Account Dashboard") {
        this.onClickDashboardTab();
      }
      if (this.mobileTab == "Profile Settings") {
        this.onClickProfileSettingsTab();
      }
      if (this.mobileTab == "Inspector Profile") {
        this.onClickInspectorProfileTab();
      }
      if (this.mobileTab == "Payment and Receipts") {
        this.onClickPaymentsAndReceiptsTab();
      }
      if (this.mobileTab == "Notification Settings") {
        this.onClickNotificationSettingsTab();
      }
      if (this.mobileTab == "Referral Program") {
        this.onClickReferralProgramVisibleTab();
      }
      if (this.mobileTab == "Invite to Book Inspection") {
        this.onClickInvitationToBookInspectionVisibleTab();
      }
      if (this.mobileTab == "Marketplace") {
        this.onClickMarketplaceVisibleTab();
      }
    },

    initialize() {
      if (this.$route.query) {
        if (
          this.$route.query.activeTab == "accountDashboard" ||
          this.$route.query.activeTab == undefined
        ) {
          this.onClickDashboardTab();
        } else if (this.$route.query.activeTab == "profileSettings") {
          this.onClickProfileSettingsTab();
        } else if (this.$route.query.activeTab == "inspectorProfile") {
          this.onClickInspectorProfileTab();
        } else if (this.$route.query.activeTab == "paymentAndReceipts") {
          this.onClickPaymentsAndReceiptsTab();
        } else if (this.$route.query.activeTab == "invitationToBook") {
          this.onClickInvitationToBookInspectionVisibleTab();
        } else if (this.$route.query.activeTab == "marketplace") {
          this.onClickMarketplaceVisibleTab();
        } else if (this.$route.query.activeTab == "referralProgram") {
          this.onClickReferralProgramVisibleTab();
        } else if (this.$route.query.activeTab == "notificationSettings") {
          this.onClickNotificationSettingsTab();
        }
      }
      this.windowResize();
      window.addEventListener("resize", this.windowResize);
      this.isInspectorProfileApproved = JSON.parse(
        localStorage.getItem("isInspectorProfileApproved")
      );
    },
  },

  mounted() {
    this.initialize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.windowResize);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  background-color: lightblue;
  height: 100%;
  padding: 4.5%;
  width: 100%;
  display: flex;
}

.container-left {
  font-size: 19px;
  width: 30%;
  max-width: 350px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
}

.container-right {
  margin-left: 4.5%;
  width: 60%;
  flex: 1;
  max-width: 800px;
  display: block;
}

.mobile-tab {
  display: none;
}

select {
  width: 100%;
  padding: 10px 7px;
  font-weight: bold;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background-color: white;
}

.left-tab {
  color: #777777;
  padding: 20px 30px;
  border-top: 1px solid #b6b1b1;
  border-left: 1px solid #b6b1b1;
  border-right: 1px solid #b6b1b1;
  background-color: white;
}

.left-tab:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.left-tab:last-of-type {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom: 1px solid #b6b1b1;
}

.left-tab:hover {
  color: black;
  font-weight: bold;
}

.active {
  color: black;
  font-weight: bold;
  /* background-color: cyan; */
  background-color: rgb(185, 246, 246);
}

@media screen and (max-width: 1000px) {
  .container {
    padding: 20px;
  }

  .container-left {
    font-size: 17px;
    min-width: 260px;
  }

  .container-right {
    margin-left: 20px;
  }
  @media only screen and (max-width: 860px) {
    .container {
      display: inline-block;
    }
    .mobile-tab {
      margin-bottom: 20px;
      width: 480px;
      display: inline-block;
    }
    .container-left {
      display: none;
    }
    .container-right {
      margin-left: 0px;
      max-width: 100%;
      width: 100%;
    }
  }
}

/* For mobile: */
@media only screen and (max-width: 620px) {
  .container {
    background-color: white;
    padding: 5px;
  }
  .container-right {
    padding: 0px;
    border-radius: 0px;
  }
  .mobile-tab {
    margin-bottom: 10px;
    width: 100%;
  }
}
</style>
