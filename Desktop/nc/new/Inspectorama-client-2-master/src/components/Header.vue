<template>
  <div>
    <div class="body">
      <div
        @click.prevent="onClickCloseMobileMenu()"
        :class="{ 'container-backdrop': showDestopOrMobileMenu }"
      ></div>
      <div class="container" @mouseleave="hideAllDropdowns()">
        <div class="logo">
          <router-link :to="`/${$i18n.locale}`">
            <img src="../assets/images/logo.png" />
          </router-link>
        </div>
        <div class="reorder-icon">
          <i
            class="fa fa-reorder"
            @click.prevent="showDestopOrMobileMenu = true"
          ></i>
        </div>
        <transition name="flip-or-slide">
          <div class="desktop-and-mobile-menu" v-if="showDestopOrMobileMenu">
            <div class="mobile fa-arrow">
              <i
                @click.prevent="showDestopOrMobileMenu = false"
                class="fas fa-arrow-right"
              ></i>
            </div>
            <div class="left-content">
              <div
                @mouseenter="onMouseEnterShowInspectionDropDown()"
                @mouseleave="hideAllDropdowns()"
                class="dropdown tab-spacing"
              >
                <div
                  @click.prevent="onClickShowMobileInspectionDropDown()"
                  class="dropbtn flex"
                >
                  <span>{{ $t("header.Inspection Services") }}&nbsp;</span>
                  <i
                    class="desktop"
                    :class="{
                      'fa fa-angle-up': showInspectionDropDown,
                      'fa fa-angle-down': !showInspectionDropDown,
                    }"
                  ></i>
                  <i class="fa fa-angle-right mobile"></i>
                </div>
                <transition name="flip-or-slide">
                  <div v-if="showInspectionDropDown" class="dropdown-content">
                    <div
                      @click.prevent="onClickShowMobileInspectionDropDown()"
                      class="dropdown-mobile-header mobile"
                    >
                      <i class="fa fa-angle-left"></i>
                      <label>{{ $t("header.Inspection Services") }}</label>
                    </div>
                    <div
                      @click.prevent="
                        onClickCloseMobileMenu(),
                          (showInspectionDropDown = false)
                      "
                    >
                      <router-link
                        :to="`/${$i18n.locale}/services/vehicle-inspection`"
                        >{{ $t("header.Vehicle Inspection") }}</router-link
                      >
                      <router-link
                        :to="`/${$i18n.locale}/services/home-inspection`"
                        >{{ $t("header.Home Inspection") }}</router-link
                      >
                    </div>
                  </div>
                </transition>
              </div>

              <div
                @mouseenter="onMouseEnterShowMarketplaceDropDown()"
                @mouseleave="hideAllDropdowns()"
                class="dropdown tab-spacing"
              >
                <div
                  @click.prevent="onClickShowMobileMarketplaceDropDown()"
                  class="dropbtn flex"
                >
                  <span>Marketplace&nbsp;</span>
                  <i
                    class="desktop"
                    :class="{
                      'fa fa-angle-up': showMarketplaceDropDown,
                      'fa fa-angle-down': !showMarketplaceDropDown,
                    }"
                  ></i>
                  <i class="fa fa-angle-right mobile"></i>
                </div>
                <transition name="flip-or-slide">
                  <div v-if="showMarketplaceDropDown" class="dropdown-content">
                    <div
                      @click.prevent="onClickShowMobileMarketplaceDropDown()"
                      class="dropdown-mobile-header mobile"
                    >
                      <i class="fa fa-angle-left"></i>
                      <label>Marketplace</label>
                    </div>
                    <div
                      @click.prevent="
                        onClickCloseMobileMenu(),
                          (showMarketplaceDropDown = false)
                      "
                    >
                      <router-link
                        :to="`/${$i18n.locale}/market-place/vehicle-listings`"
                        >Vehicles</router-link
                      >
                      <router-link
                        :to="`/${$i18n.locale}/market-place/property-listings`"
                        >Properties</router-link
                      >
                    </div>
                  </div>
                </transition>
              </div>

              <div
                @click.prevent="onClickCloseMobileMenu()"
                class="tab-spacing"
              >
                <router-link :to="`/${$i18n.locale}/how-it-works`">{{
                  $t("header.How it Works")
                }}</router-link>
              </div>
              <div
                @click.prevent="onClickCloseMobileMenu()"
                class="tab-spacing"
              >
                <router-link :to="`/${$i18n.locale}/inspector`">{{
                  $t("header.Become an Inspector")
                }}</router-link>
              </div>
            </div>
            <div class="right-content">
              <div class="tab-spacing">
                <div>
                  <i class="fa fa-phone" style="color: orangered"></i>
                  <span>+4740677172</span>
                </div>
              </div>
              <div
                class="tab-spacing"
                @click.prevent="
                  onClickCloseMobileMenu(), (isRequestACallVisible = true)
                "
                style="cursor: pointer"
              >
                <span>{{ $t("header.requestACall") }}</span>
              </div>
              <div
                class="dropdown user-spacing"
                @mouseenter="onMouseEnterShowHelpDropDown()"
                @mouseleave="onMouseLeaveCloseHelpDropDown()"
              >
                <div
                  @click.prevent="onClickShowMobileHelpDropDown()"
                  class="dropbtn flex"
                >
                  <span>{{ $t("header.Help") }}&nbsp;</span>
                  <i
                    class="desktop"
                    :class="{
                      'fa fa-angle-up': showHelpDropDown,
                      'fa fa-angle-down': !showHelpDropDown,
                    }"
                  ></i>
                  <i class="fa fa-angle-right mobile"></i>
                </div>
                <transition name="flip-or-slide">
                  <div v-if="showHelpDropDown" class="dropdown-content help">
                    <div
                      @click.prevent="onClickShowMobileHelpDropDown()"
                      class="dropdown-mobile-header mobile"
                    >
                      <i class="fa fa-angle-left"></i>
                      <label>{{ $t("header.Help") }}</label>
                    </div>
                    <div
                      @click.prevent="
                        onClickCloseMobileMenu(), (showHelpDropDown = false)
                      "
                    >
                      <a @click="onClickCloseMobileMenu(), onToggleTawk()">
                        <span>
                          {{ $t("header.chat") }}
                          <i
                            class="fas fa-comment"
                            style="color: orangered"
                          ></i>
                        </span>
                      </a>
                      <router-link :to="`/${$i18n.locale}/help`">{{
                        $t("header.helpArticles")
                      }}</router-link>
                    </div>
                  </div>
                </transition>
              </div>
              <div class="dropdown tab-spacing" v-if="auth">
                <div
                  class="dropbtn flex"
                  @click.prevent="showNotificationsModal()"
                >
                  <span>
                    <div class="mobile">{{ $t("header.Notifications") }}</div>
                    <i class="fa fa-bell" style="color: orangered">
                      <label
                        class="alert"
                        v-if="
                          getNoOfUnseenNotifications &&
                          getNoOfUnseenNotifications != 0
                        "
                        >{{ getNoOfUnseenNotifications }}</label
                      >
                    </i>
                  </span>
                  <i class="fa fa-angle-right mobile"></i>
                </div>
                <transition name="flip-or-slide">
                  <div
                    class="dropdown-content-modal"
                    v-show="isNotificationsVisible"
                  >
                    <div
                      @click.prevent="isNotificationsVisible = false"
                      class="dropdown-mobile-header reduce-margin-left mobile"
                    >
                      <i class="fa fa-angle-left"></i>
                      <label>{{ $t("header.Notifications") }}</label>
                    </div>
                    <Notifications
                      @close="hideNotificationsModal()"
                    ></Notifications>
                  </div>
                </transition>
              </div>
              <div
                @click.prevent="onClickCloseMobileMenu()"
                v-if="!auth"
                class="tab-spacing"
              >
                <router-link :to="`/${$i18n.locale}/login`">{{
                  $t("header.Log In")
                }}</router-link>
              </div>
              <!-- <div @click.prevent="onClickCloseMobileMenu()" v-if="!auth" class="tab-spacing">
                  <router-link :to="/this.$i18n.locale + '/signup'">Sign Up</router-link>
              </div>-->
              <div
                class="dropdown user-spacing"
                v-if="auth"
                @mouseenter="onMouseEnterShowAccountDropDown()"
                @mouseleave="onMouseLeaveCloseAccountDropDown()"
              >
                <div
                  @click.prevent="onClickShowMobileAccountDropDown()"
                  class="dropbtn"
                >
                  <div class="desktop">
                    <div class="initials" v-if="!getAvatar">
                      {{ getInitials }}
                    </div>
                    <div v-if="getAvatar">
                      <img :src="getAvatar" class="avatar" />
                    </div>
                  </div>
                  <div class="mobile flex">
                    <span>{{ $t("header.Account") }}</span>
                    <div class="fa fa-angle-right"></div>
                  </div>
                </div>
                <transition name="flip-or-slide">
                  <div
                    v-if="showAccountDropDown"
                    class="dropdown-content account"
                  >
                    <div
                      @click.prevent="onClickShowMobileAccountDropDown()"
                      class="dropdown-mobile-header mobile"
                    >
                      <i class="fa fa-angle-left"></i>
                      <label>{{ $t("header.Account") }}</label>
                    </div>
                    <div
                      @click.prevent="
                        onClickCloseMobileMenu(), (showAccountDropDown = false)
                      "
                    >
                      <router-link :to="`/${$i18n.locale}/account/main-view`">{{
                        $t("header.Dashboard")
                      }}</router-link>
                      <router-link
                        :to="`/${$i18n.locale}/account/main-view?activeTab=invitationToBook`"
                        >Invite Customer</router-link
                      >
                      <router-link :to="`/${$i18n.locale}/all-notifications`">{{
                        $t("header.Notifications")
                      }}</router-link>
                      <router-link :to="`/${$i18n.locale}/inbox`">{{
                        $t("header.Inbox")
                      }}</router-link>
                      <router-link
                        :to="`/${$i18n.locale}/inspector/inspector-calendar`"
                        >{{ $t("header.My Calendar") }}</router-link
                      >
                      <router-link :to="`/${$i18n.locale}/account/orders`">{{
                        $t("header.My Orders")
                      }}</router-link>
                      <router-link
                        :to="`/${$i18n.locale}/inspector/inspector-jobs`"
                        v-if="isInspector"
                        >{{ $t("header.My Jobs") }}</router-link
                      >
                    </div>
                    <center>
                      <div class="line"></div>
                    </center>
                    <a
                      @click.prevent="onLogout(), (showAccountDropDown = false)"
                      >{{ $t("header.Log Out") }}</a
                    >
                  </div>
                </transition>
              </div>
              <div class="tab-spacing" style="text-align: center">
                <span style="font-size: 12px">{{ $t("header.language") }}</span>
                <br />
                <select
                  class="small-input"
                  v-model="$i18n.locale"
                  @change="onSelectLanguage"
                >
                  <option
                    v-for="(lang, i) in $i18n.availableLocales"
                    :key="`Lang${i}`"
                    :value="lang"
                  >
                    {{ lang.toUpperCase() }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </transition>
        <!-- <notifications group="general"/> -->
      </div>
    </div>
    <RequestACall
      v-if="isRequestACallVisible"
      @close="isRequestACallVisible = false"
    />
  </div>
</template>

<script>
import axios from "axios";
import Notifications from "./modals/Notifications.vue";
import { mapGetters } from "vuex";
import RequestACall from "./modals/RequestACall";

export default {
  components: {
    Notifications,
    RequestACall,
  },
  data() {
    return {
      isRequestACallVisible: false,
      showDestopOrMobileMenu: false,
      isMobileActive: false,
      showAccountDropDown: false,
      showInspectionDropDown: false,
      showMarketplaceDropDown: false,
      showHelpDropDown: false,
      isNotificationsVisible: false,
      initialCloseMobileMenu: false,
      selectedlanguage: null,
    };
  },

  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
    getAvatar() {
      this.avatar = this.$store.getters.getAvatar;
      return this.$store.getters.getAvatar;
    },
    getInitials() {
      if (this.$store.getters.generalUserProfile) {
        const firstInitial = this.$store.getters.generalUserProfile.firstName
          .toUpperCase()
          .split("")[0];
        const lastInitial = this.$store.getters.generalUserProfile.lastName
          .toUpperCase()
          .split("")[0];
        return firstInitial + lastInitial;
      }
    },

    ...mapGetters(["isInspector", "getNoOfUnseenNotifications"]),
  },

  methods: {
    windowResize() {
      if (window.innerWidth <= 1200) {
        this.showAccountDropDown = false;
        this.showHelpDropDown = false;
        this.showInspectionDropDown = false;
        this.showMarketplaceDropDown  = false;
        this.isMobileActive = true;
        if (!this.initialCloseMobileMenu) {
          this.showDestopOrMobileMenu = false;
          this.initialCloseMobileMenu = true;
        }
      } else {
        this.showDestopOrMobileMenu = true;
        this.isMobileActive = false;
        this.initialCloseMobileMenu = false;
      }
    },

    hideAllDropdowns() {
      if (!this.isMobileActive) {
        this.showInspectionDropDown = false;
        this.showMarketplaceDropDown  = false;
        this.isNotificationsVisible = false;
        this.showAccountDropDown = false;
        this.showHelpDropDown = false;
      }
    },

    onClickCloseMobileMenu() {
      if (this.isMobileActive) {
        this.showDestopOrMobileMenu = this.showInspectionDropDown = this.showMarketplaceDropDown = this.showAccountDropDown = this.showHelpDropDown = false;
      }
      this.isNotificationsVisible = false;
    },

    onMouseEnterShowInspectionDropDown() {
      if (!this.isMobileActive) {
        this.hideAllDropdowns();
        this.showInspectionDropDown = true;
      }
    },

    onMouseEnterShowMarketplaceDropDown() {
      if (!this.isMobileActive) {
        this.hideAllDropdowns();
        this.showMarketplaceDropDown = true;
      }
    },

    onClickShowMobileInspectionDropDown() {
      if (this.isMobileActive) {
        this.showInspectionDropDown = !this.showInspectionDropDown;
      }
    },

    onClickShowMobileMarketplaceDropDown() {
      if (this.isMobileActive) {
        this.showMarketplaceDropDown = !this.showMarketplaceDropDown;
      }
    },


    onMouseEnterShowAccountDropDown() {
      if (!this.isMobileActive) {
        this.hideAllDropdowns();
        this.showAccountDropDown = true;
      }
    },

    onMouseEnterShowHelpDropDown() {
      if (!this.isMobileActive) {
        this.hideAllDropdowns();
        this.showHelpDropDown = true;
      }
    },

    onMouseLeaveCloseAccountDropDown() {
      if (!this.isMobileActive) {
        this.hideAllDropdowns();
      }
    },

    onMouseLeaveCloseHelpDropDown() {
      if (!this.isMobileActive) {
        this.hideAllDropdowns();
      }
    },

    onClickShowMobileAccountDropDown() {
      if (this.isMobileActive) {
        this.showAccountDropDown = !this.showAccountDropDown;
      }
    },

    onClickShowMobileHelpDropDown() {
      if (this.isMobileActive) {
        this.showHelpDropDown = !this.showHelpDropDown;
      }
    },

    onLogout() {
      this.showAccountDropDown = false;
      if (this.isMobileActive) {
        this.showDestopOrMobileMenu = false;
      }
      this.$store.dispatch("logout");
    },
    documentClick(e) {
      // let el = this.$refs.closeAllDropdownMenu;
      // let target = e.target;
      // if (el !== target && !el.contains(target)) {
      //   // this.showInspectionDropDown = false;
      // }
    },
    showNotificationsModal() {
      this.isNotificationsVisible = !this.isNotificationsVisible;
      //To regiter the current time as the notification last seen at the back end
      const date = new Date();
      axios
        .post("/users/notificationLastSeen", { date })
        .then((res) => {
          localStorage.setItem("notificationLastSeen", res.data);
          this.$store.dispatch("fetchNoOfUnseenNotifications");
        })
        .catch((error) => {});
    },
    hideNotificationsModal() {
      this.isNotificationsVisible = false;
      if (this.isMobileActive) {
        this.showDestopOrMobileMenu = false;
      }
    },
    onSelectLanguage() {
      const locale = event.target.value;
      localStorage.setItem("locale", locale);
      let query;
      if (this.$router.currentRoute.query) {
        query = this.$router.currentRoute.query;
      }
      this.$router.push({
        params: { lang: locale },
      });
      this.$router.push({
        query,
      });
    },
    onToggleTawk() {
      Tawk_API.toggle();
    },
  },
  created() {
    this.$store.dispatch("fetchUser");
    this.$store.dispatch("fetchUserAvatar");
    this.$store.dispatch("fetchNoOfUnseenNotifications");
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
  },
  destroyed() {
    // important to clean up!!
    // document.removeEventListener("click", this.documentClick);
    window.removeEventListener("resize", this.windowResize);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  justify-content: center;
  display: flex;
}

.container {
  /* font-family: sans-serif, Arial, Helvetica; */
  font-family: "Montserrat", sans-serif, Arial;
  font-weight: bold;
  font-size: 15px;
  color: #212259;
  padding-right: 48px;
  background-color: transparent;
  height: 50px;
  width: 100%;
  max-width: 1700px;
  align-items: center;
  display: flex;
}

select {
  font-weight: bold;
  font-size: 16px;
  border: none;
  outline: none;
  color: #212259;
  cursor: pointer;
}

option {
  color: #212259;
}

.desktop-and-mobile-menu {
  width: 100%;
  align-items: center;
  display: flex;
}

.logo {
  margin-left: 60px;
  margin-right: 40px;
  min-width: 240px;
  max-width: 240px;
  cursor: pointer;
  display: block;
}

.logo img {
  width: 100%;
  height: auto;
  display: table;
}

.user-spacing {
  padding-right: 12px;
}

.initials {
  height: 42px;
  width: 42px;
  font-size: 22px;
  border-radius: 50%;
  color: #212259;
  border: 1px solid #212259;
  justify-content: center;
  align-items: center;
  display: flex;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.dropdown {
  cursor: pointer;
  overflow: hidden;
}

.dropbtn {
  padding-top: 8px;
  padding-bottom: 8px;
  border: none;
  outline: none;
  width: 100%;
  display: table;
}

.fa-bell {
  font-size: 18px;
  position: relative;
}

.alert {
  top: -6px;
  left: 50%;
  color: white;
  padding: 3px;
  font-size: 11px;
  font-weight: bold;
  border-radius: 4px;
  background-color: red;
  position: absolute;
  cursor: pointer;
}

.dropdown-content,
.dropdown-content-modal {
  font-weight: normal;
  position: absolute;
  color: #212259;
  background-color: #f9f9f9;
  border: 1px solid #eeeeee;
  width: auto;
  z-index: 1;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  display: table;
}

.dropdown-content-modal {
  font-size: 13px;
  cursor: auto;
  right: 130px;
  max-width: 400px;
}

.account {
  right: 82px;
}

.help {
  right: 190px;
}

.dropdown-content-modal:after,
.dropdown-content:after {
  content: "";
  position: absolute;
  bottom: 100%;
  transform: rotate(-90deg);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px; /* skewed to show support for non-right-angle triangles */
  border-left-width: 9px;
  border-right-width: 9px;
  border-color: transparent transparent transparent #f9f9f9;
  filter: drop-shadow(1px 0 0 #eeeeee) drop-shadow(0 0.5px 0 #eeeeee);
}

.dropdown-content:after {
  left: 45%;
}

.dropdown-content-modal:after {
  right: 78px;
}

.user-spacing .dropdown-content:after {
  left: 45%;
}

a {
  color: #212259;
  text-decoration: none;
  display: block;
}

a:hover {
  color: #212259;
}

.dropdown-content a {
  float: none;
  padding: 8px 20px;
  text-align: left;
}

.dropdown-content a:hover {
  color: #212259;
  background-color: #e6e6e6;
}

.line {
  margin-top: 8px;
  margin-bottom: 8px;
  border-top: 1.6px solid #e6e6e6;
  width: 80%;
}

.tab-spacing,
.user-spacing {
  padding-left: 12px;
  padding-right: 12px;
}

.tab-spacing:hover,
.user-spacing:hover {
  color: #212259;
}

.user-spacing:hover .initials {
  border: 1px solid #212259;
}

.left-content {
  flex: 1;
  align-items: center;
  display: flex;
}

.right-content {
  align-items: center;
  display: flex;
}

.appear-menu-content {
  background-color: white;
  left: 0px;
  top: 50px;
  position: absolute;
  padding: 16px;
  width: 100%;
  text-align: center;
  display: block;
  height: 320px;
  overflow-y: scroll;
  z-index: 100;
}

.desktop {
  display: block;
}

.flex {
  align-items: center;
  display: flex;
}

.mobile {
  display: none;
}

.reorder-icon {
  display: none;
}

@media screen and (min-width: 1201px) {
  .flip-or-slide-enter-active {
    animation: flip-in 0.3s ease-out forwards;
  }

  @keyframes flip-in {
    from {
      transform: rotateX(60deg);
    }
    to {
      transform: translateX(0);
    }
  }
}

/* For tablets: */
@media screen and (max-width: 1200px) {
  .container-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-left: 10px;
    padding-right: 10px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .container {
    font-size: 15px;
  }

  .mobile i,
  .mobile label {
    color: grey;
    cursor: pointer;
  }

  .line {
    width: 85%;
  }

  .flex span {
    width: 210px;
    display: block;
  }

  .logo {
    margin-left: 30px;
  }

  .desktop {
    display: none;
  }

  .mobile {
    display: inline-block;
  }

  .fa-arrow {
    margin-bottom: 20px;
    width: 100%;
  }

  .desktop-and-mobile-menu {
    top: 0px;
    right: 0px;
    padding: 25px 30px;
    position: fixed;
    text-align: left;
    width: 280px;
    height: 100%;
    background-color: white;
    border-left: 1px solid grey;
    display: table;
  }

  .left-content {
    flex-direction: column;
    flex: 0;
    width: 100%;
    align-items: flex-start;
  }

  .right-content {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .tab-spacing,
  .user-spacing {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .dropbtn {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .fa-bell {
    padding-left: 10px;
    font-size: inherit;
  }

  .reorder-icon {
    right: 30px;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    display: block;
  }

  .dropdown-content a {
    padding: 8px 30px;
  }

  .dropdown-content,
  .dropdown-content-modal {
    top: 0px;
    right: 0px;
    bottom: 0px;
    height: 100%;
    position: absolute;
    width: 100%;
    max-width: 100%;
  }

  .dropdown-content-modal:after,
  .dropdown-content:after {
    display: none;
  }

  .dropdown-mobile-header {
    font-size: 15px;
    margin: 10px 30px;
    margin-bottom: 30px;
  }

  .reduce-margin-left {
    margin-left: 15px;
  }

  .dropdown-mobile-header i {
    padding-right: 5px;
  }

  .flex {
    align-items: center;
    display: flex;
  }

  .alert {
    top: -9px;
    left: 70%;
  }

  .flip-or-slide-enter {
    opacity: 0;
  }

  .flip-or-slide-enter-active {
    animation: slide-in 0.3s ease-out forwards;
  }

  .flip-or-slide-leave-active {
    animation: slide-out 0.3s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
}

/* For mobile phones: */
@media screen and (max-width: 620px) {
  .logo {
    margin: 0px 0px 0px 10px;
  }

  .reorder-icon {
    right: 15px;
  }

  .dropdown-content:after {
    border-width: 0px;
  }
}
</style>
