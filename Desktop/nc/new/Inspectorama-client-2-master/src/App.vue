<template>
  <div>
    <div class="container">
      <div class="header" :class="{ 'header--fixedHeader': showFixedHeader }">
        <app-header></app-header>
      </div>
      <div class="admin-header"></div>
      <div class="container-content">
        <div>
          <notifications
            class="vue-notification"
            group="general"
            position="top left"
            width="100%"
          />
        </div>
        <div class="relative">
          <router-view></router-view>
        </div>
        <div>
          <CookieAcceptDecline
            :type="'floating'"
            :disableDecline="true"
          ></CookieAcceptDecline>
        </div>
        <div class="relative">
          <app-footer></app-footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CookieAcceptDecline from "./components/CookieAcceptDecline.vue";
import { mapGetters } from "vuex";
import setupTawk from "./tawkTo";
// import adrollPixel from "./adrollPixel";
import axios from "axios";
import socket from "./socketio-client";
import i18n from "./i18n";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    CookieAcceptDecline,
  },
  data() {
    return {
      showHeaderPadding: true,
      showFixedHeader: false,
    };
  },
  watch: {
    $route() {
      this.registerOnlineStatus();
    },
    "$i18n.locale"() {
      setupTawk(this.$i18n.locale);
    },
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      if (currentScrollPosition < 40) {
        this.showFixedHeader = false;
      } else {
        this.showFixedHeader = true;
      }
    },
    registerOnlineStatus() {
      if (this.auth && this.user) {
        socket.emit("registerOnlineStatus", { userId: this.user._id });
      }
    },

    setScreenWidth(event) {
      this.$store.commit(
        "utilities/SET_CURRENT_SCREEN_WIDTH",
        event.currentTarget.innerWidth
      );
    },
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },

    user() {
      return this.$store.getters.generalUserProfile;
    },
  },

  created() {
    this.$store.dispatch("tryAutoLogin");
    // this.$store.dispatch("adminStore/tryAdminAutoLogin");
    this.$store.dispatch("fetchNoOfUnseenNotifications");
    //Tawk.to Script
    setupTawk(this.$i18n.locale);
    // //Adroll script
    // adrollPixel();
    //Set locale from ip address
    const localeSet = localStorage.getItem("locale");
    if (!localeSet) {
      axios.get("/users/ipLookUp").then((res) => {
        const locale = res.data.locale;
        i18n.locale = locale;
        localStorage.setItem("locale", locale);
        localStorage.setItem("country", res.data.country);
        this.$router.push({
          params: { lang: locale },
        });
      });
    }

    // this.$store.dispatch("tryAutoLogin");
    // // this.$store.dispatch("adminStore/tryAdminAutoLogin");
    // this.$store.dispatch("fetchNoOfUnseenNotifications");

    // //Tawk.to Script
    // setupTawk(this.$i18n.locale);

    // //Adroll script
    // // adrollPixel();

    // const upDateWithLocaleData = localData => {
    //   const locale = localData.locale;
    //   console.log(localData);
    //   i18n.locale = locale;
    //   localStorage.setItem("locale", locale);
    //   localStorage.setItem("country", localData.country);
    //   this.$router.push({
    //     params: { lang: locale }
    //   });
    // };
    // //Set locale from ip address
    // const localeSet = localStorage.getItem("locale");
    // if (!localeSet) {
    //   // ipUrl = "http://api.ipify.org"
    //   if (process.env.NODE_ENV == "development") {
    //     //On localhost
    //     axios.get(`/users/ipLookUp`).then(res => {
    //       upDateWithLocaleData(res.data);
    //     });
    //   } else {
    //     axios.defaults.baseURL = "https://api.ipify.org";
    //     console.log(axios.defaults.baseURL);
    //     axios.get("/").then(async ipAddressResponse => {
    //       console.log(ipAddressResponse);
    //       console.log(ipAddressResponse.data);
    //       axios.defaults.baseURL = process.env.VUE_APP_BACKEND_BASE_URL;
    //       console.log(axios.defaults.baseURL);
    //       await axios
    //         .get(`/users/ipLookUp?ipAddress=${ipAddressResponse.data}`)
    //         .then(res => {
    //           console.log(ipAddressResponse);
    //           console.log(ipAddressResponse.data);
    //           upDateWithLocaleData(res.data);
    //         });
    //     });
    //   }
    // }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", this.onScroll);
      window.addEventListener("resize", this.setScreenWidth);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  destroyed() {
    window.removeEventListener("resize", this.setScreenWidth);
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
}
</style>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.container {
  font-family: sans-serif, Arial, Helvetica;
  width: 100%;
  display: block;
}

.header {
  top: 0px;
  position: fixed;
  width: 100%;
  display: block;
  z-index: 10;
  background-color: white;
}

.admin-header {
  top: 0px;
  position: fixed;
  width: 100%;
  display: block;
  z-index: 10;
}

.container-content {
  bottom: 0px;
  position: absolute;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
}

.relative {
  position: relative;
}

/* For desktop: */
@media screen and (min-width: 1100px) {
  .header {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .header--fixedHeader {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .container-content {
    top: 90px;
  }
}

/* For tablets: */
@media screen and (max-width: 1100px) {
  .header {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .header--fixedHeader {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .container-content {
    top: 70px;
  }
}

/* For mobile phones: */
@media screen and (max-width: 620px) {
  .header {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .header--fixedHeader {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .container-content {
    top: 60px;
  }
}

.isadmin-content {
  top: 80px;
}

.vue-notification {
  padding: 0px;
  margin: 0 5px 5px;

  font-size: 12px;

  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}
</style>
