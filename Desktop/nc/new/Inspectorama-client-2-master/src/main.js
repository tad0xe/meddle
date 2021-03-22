import Vue from 'vue'
import App from './App.vue'
import { store } from "./store/store"
import mainRouter from "./router-main"
import axios from "axios"
import Vuelidate from "vuelidate"
import 'vue2-datepicker/index.css';
import "./filters"
import "./directives"
import VueClipboard from "vue-clipboard2"
import * as VueGoogleMaps from "vue2-google-maps";
import FBSignInButton from 'vue-facebook-signin-button'
import GSignInButton from 'vue-google-signin-button'
import VueAnalytics from 'vue-analytics'
import VModal from 'vue-js-modal';
import { clearLocalStorageAuth } from "./utility.js"
import Notifications from 'vue-notification'
import socket from "./socketio-client"
import i18n from './i18n'
import './assets/Style/generalStyles.css';
import './assets/Style/vehicleStyle.css'
Vue.use(Vuelidate)
Vue.use(VueClipboard)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_API_KEY,
    libraries: "places" // necessary for places input
  }
})
Vue.use(FBSignInButton)
Vue.use(GSignInButton)

Vue.use(VModal, {
  dynamicDefaults: {
    dialog: true,
    draggable: true,
    resizable: true,
    height: 'auto',
  },
});

const isProd = process.env.NODE_ENV == "production"
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS_TRACKING_ID,
  router: mainRouter,
  // disabled: () => {
  //   if (localStorage.getItem("vue-cookie-accept-decline") == "accept") {
  //     return false
  //   } else {
  //     return true
  //   }
  // },
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})
Vue.use(Notifications)

const router = () => {
  let routes = mainRouter
  return routes;
};

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_BASE_URL
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  (config) => {
    config.headers['locale'] = i18n.locale
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
)

axios.interceptors.response.use((response) => {
  return response
},
  (error) => {
    if (process.env.NODE_ENV == "development") {
      console.log(error)
      console.log(error.response)
    }
    if (error.response.status === 401 && error.response.data === "Please authenticate") {
      socket.disconnect()
      let token = localStorage.getItem('token');
      // clearLocalStorageAuth()
      if (token) {
        if (window.performance) {
          //Check if it works fine on this browser
          if (performance.navigation.type == 1) {
            //This page is reloaded
            store.dispatch("logout")
          } else {
            //This page is not reloaded
            if (mainRouter.currentRoute.path == "/") {
              //Clear authdata and remain on the home age
              clearLocalStorageAuth()
              this.$store.commit("clearAuthData")
            } else {
              //Logout and redirect to login page
              store.dispatch("logout")
            }
          }
        } else {
          store.dispatch("logout")
        }
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  })

new Vue({
  el: '#app',
  router: router(),
  store,
  i18n,
  render: h => h(App)
})
