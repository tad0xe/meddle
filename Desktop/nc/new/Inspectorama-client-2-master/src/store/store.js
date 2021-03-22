import Vue from "vue"
import Vuex from "vuex"
import axios from "../axios-auth"
import globalAxios from "axios"
import router from "../router-main"
import i18n from "../i18n"
import vehicleInspectionReport from "./modules/inspectors/vehicleInspectionReport"
import orders from "./modules/orders/orders.js"
// import adminStore from "./modules/admin/adminStore.js"
import socket from "../socketio-client"
import { clearLocalStorageAuth } from "../utility.js"
import { analyticsMiddleware } from 'vue-analytics'
import * as tinyCookie from "tiny-cookie";
import vehicle from './modules/vehicle/index'
import utilities from './modules/utilities'
const isProd = process.env.NODE_ENV == "production"

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    orders, vehicleInspectionReport, vehicle, utilities
  },
  state: {
    idToken: null,
    userId: null,
    pro: null,
    user: null,
    avatar: null,
    inspectorInfo: null,
    inspectorReviews: [],
    isInspector: null,
    isInspectorProfileApproved: null,
    typeOfInspector: null,
    errorMessage: null,
    chats: null,
    noOfUnseenNotifications: null
  },
  mutations: {
    clearState(state) {
      state = {}
    },
    storeErrorMessage(state, error) {
      state.errorMessage = error
    },
    clearErrorMessage(state) {
      state.errorMessage = null
    },
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
      state.isInspector = userData.isInspector;
      state.typeOfInspector = userData.typeOfInspector;
      state.isInspectorProfileApproved = userData.isInspectorProfileApproved;
    },
    storeOnlyInspectorInfo(state, inspectorInfo) {
      state.isInspector = inspectorInfo.isInspector;
      state.typeOfInspector = inspectorInfo.typeOfInspector
      state.isInspectorProfileApproved = inspectorInfo.isInspectorProfileApproved;
    },
    storeUserInfo(state, user) {
      state.user = user
    },
    storeInspectorInfo(state, inspectorInfoData) {
      state.inspectorInfo = inspectorInfoData
    },
    storeInspectorReviews(state, inspectorReviewsData) {
      state.inspectorReviews = inspectorReviewsData
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
    },
    storeMessagesInfo(state, messagesInfo) {
      state.chats = messagesInfo
    },
    storeUserAvatar(state, avatar) {
      state.avatar = avatar
    },
    storeNoOfUnseenNotifications(state, noOfUnseenNotifications) {
      state.noOfUnseenNotifications = noOfUnseenNotifications
    }
  },

  actions: {
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit("clearAuthData")
      }, expirationTime * 1000)

    },

    setAnonLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit("clearAuthData")
      }, expirationTime * 1000)
    },

    signup({ commit, dispatch, state }, initialData) {
      if (state.idToken === null) {
        globalAxios.post("/users", initialData)
          .then(res => {
            dispatch("afterAuthentication", { initialData, resData: res.data })

            //for users who sign up as inspectors
            if (res.data.user.pro.isInspector == true) {
              dispatch("storeInspector", initialData)
            }
          })
          .catch(error => {
            commit("storeErrorMessage", error.response.data)
          })
      } else {
        if (initialData.pro.isInspector == true) {
          //for users who have already signed in but want to sign up as an inspector
          dispatch("storeInspector", initialData)
        }
      }
    },

    login({ commit, dispatch }, initialData) {
      globalAxios.post("/users/login", {
        email: initialData.email,
        password: initialData.password
      })
        .then(res => {
          dispatch("afterAuthentication", { initialData, resData: res.data })
        })
        .catch(error => {
          commit("storeErrorMessage", error.response.data)
        })
    },

    socialMediaLogin({ commit, dispatch }, initialData) {
      globalAxios.post("/users/socialMediaLogin", initialData)
        .then(res => {

          dispatch("afterAuthentication", { initialData, resData: res.data })

        })
        .catch(error => {
          commit("storeErrorMessage", error.response.data)
        })
    },

    afterAuthentication({ commit, dispatch }, infoData) {
      //To store the infoData.initialData
      commit("authUser", {
        // token: infoData.resData.token,
        token: "yes_token",
        userId: infoData.resData.user._id,
        isInspector: infoData.resData.user.pro.isInspector,
        isInspectorProfileApproved: infoData.resData.user.pro.isInspectorProfileApproved,
        typeOfInspector: infoData.resData.user.pro.typeOfInspector,

      })
      clearLocalStorageAuth() //adding clearLocalStorageAuth makes the authorization header receive the set token

      localStorage.setItem("token", "yes_token")
      // const now = new Date;
      // now.setHours(now.getHours() + 6)
      // tinyCookie.set(
      //   `token`,
      //   infoData.resData.token,
      //   { expires: now.toGMTString() }
      // );
      localStorage.setItem("userId", infoData.resData.user._id)
      localStorage.setItem("isInspector", infoData.resData.user.pro.isInspector)
      localStorage.setItem("typeOfInspector", infoData.resData.user.pro.typeOfInspector)
      localStorage.setItem("isInspectorProfileApproved", infoData.resData.user.pro.isInspectorProfileApproved)
      localStorage.setItem("howYouHeardAbout", infoData.resData.user.hearAboutUs)

      //Get avatar
      dispatch('fetchUserAvatar')

      //Notify server of online status
      socket.connect() //if not connected already
      socket.emit("registerOnlineStatus", { userId: infoData.resData.user._id })

      if (infoData.initialData) {
        if (infoData.initialData.redirectTo) {
          //Handle redirect
          if (infoData.initialData.redirectTo == "inspectorRegStatus") {
            router.replace(`/${i18n.locale}/status/inspector-registration/${infoData.resData.user._id}`)
          }
        } else {
          if (infoData.initialData.isGettingPrice == "yes") {
            //When the user is trying to get a quote
            dispatch('getInspectionQuote', infoData.initialData.inspectionData)
          } else {
            if (infoData.initialData.isRegisteringAsInspector != true) {
              router.replace(`/${i18n.locale}/account/main-view`)
            }
          }
        }
      }
    },

    getResetPasswordLink({ commit, dispatch }, data) {
      globalAxios.post("/users/passwordReset", data)
        .then(res => {
          router.replace(`/${i18n.locale}/status/sent-password-reset`)
        })
        .catch(error => {
          commit("storeErrorMessage", error.response.data)
        })
    },

    saveNewPassword({ commit, dispatch }, initialData) {
      globalAxios.post("/users/saveNewPassword", initialData)
        .then(res => {

          dispatch("afterAuthentication", { initialData, resData: res.data })
        })
        .catch(error => {
          if (!isProd) {
            console.log(error.response)
          }
        })
    },

    getInspectionQuote({ commit, state, dispatch }, inspectionData) {
      globalAxios
        .post(`/quotes/create_quote/${inspectionData.typeOfInspection}`, inspectionData)
        .then(res => {
          router.replace(
            `/${i18n.locale}/quotes/${inspectionData.typeOfInspection.toLowerCase()}-inspection-quote/${res.data._id}?inspectionData=${JSON.stringify(inspectionData)}`
          );
        })
        .catch(error => {
          if (!isProd) {
            console.log(error.response)
          }
        })
    },

    //To update the user info
    updateUser({ commit, state }, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.patch("/users/me", userData)
        .then(res => {
          commit("storeOnlyInspectorInfo", {
            isInspector: res.data.pro.isInspector,
            typeOfInspector: res.data.pro.typeOfInspector,
            isInspectorProfileApproved: res.data.pro.isInspectorProfileApproved
          })
          localStorage.setItem("isInspector", res.data.pro.isInspector)
          localStorage.setItem("typeOfInspector", res.data.pro.typeOfInspector)
          localStorage.setItem("isInspectorProfileApproved", res.data.pro.isInspectorProfileApproved)
        })
        .catch(error => {
          if (!isProd) {
            console.log(error.response)
          }
        })
    },

    storeInspector({ commit, state, dispatch }, inspectorData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post("/inspector_infos", {
        typeOfInspector: inspectorData.pro.typeOfInspector,
        personalInfo: {
          firstName: inspectorData.firstName,
          lastName: inspectorData.lastName,
          email: inspectorData.email,
          country: inspectorData.contactInfo.country,
          state: inspectorData.contactInfo.state,
          city: inspectorData.contactInfo.city,
          mobileNum1: {
            countryCode: inspectorData.contactInfo.countryCode
          },
          mobileNum2: {
            countryCode: inspectorData.contactInfo.countryCode
          }
        }
      })
        .then(res => {
          dispatch("updateUser", inspectorData)
          commit("storeOnlyInspectorInfo", {
            isInspector: inspectorData.pro.isInspector,
            typeOfInspector: inspectorData.pro.typeOfInspector,
            isInspectorProfileApproved: inspectorData.pro.isInspectorProfileApproved
          })
          localStorage.setItem("isInspector", inspectorData.pro.isInspector)
          localStorage.setItem("typeOfInspector", inspectorData.pro.typeOfInspector)
          localStorage.setItem("isInspectorProfileApproved", inspectorData.pro.isInspectorProfileApproved)

          router.push(`/${i18n.locale}/inspector/personal-information`)
          dispatch("fetchUser")
        })
        .catch(error => {
          commit("storeErrorMessage", error.response.data)
        })
    },

    storeMessage({ commit, state }, messageData) {
      if (!state.idToken) {
        return
      }
      const orderId = localStorage.getItem("openedOrderId")
      globalAxios.post("/messages/" + orderId, messageData)
        .then(res => {
        })
        .catch(error => {
          if (!isProd) {
            console.log(error.response)
          }
        })
    },

    getMessages({ commit, state }) {
      if (!state.idToken) {
        return
      }
      const orderId = localStorage.getItem("openedOrderId")
      globalAxios.get("/messages/" + orderId)
        .then(res => {
          commit("storeMessagesInfo", res.data[0])
        })
        .catch(error => {
          if (!isProd) {
            console.log(error.response)
          }
        })
    },

    fetchNoOfUnseenNotifications({ commit, state }) {
      if (!state.idToken) {
        return
      }
      socket.emit("getNumberOfUnseenAlerts", {
        userId: localStorage.getItem("userId")
      });

      socket.on("numberOfUnseenNotifications", data => {
        if (data <= 99) {
          commit("storeNoOfUnseenNotifications", data)
          this.numberOfUnseenNotifications = data;
        } else {
          commit("storeNoOfUnseenNotifications", "99+")
        }
      });
    },

    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return
      }
      return globalAxios.get("/users/me")
        .then(res => {
          commit("storeUserInfo", res.data)
          return res.data
        })
        .catch(error => {
          if (!isProd) {
            console.log(error.response)
          }
        })
    },

    fetchInspectorInfo({ commit, state }) {
      if (!state.idToken) {
        return
      }
      return globalAxios.get("/inspector_infos/me")
        .then(res => {
          commit("storeInspectorInfo", res.data[0])
          return res.data[0]
        })
        .catch(error => {
          if (!isProd) {
            console.log(error.response)
          }
        })
    },

    fetchInspectorReviews({ commit, state }, noOfReviews) {
      if (!state.idToken) {
        return
      }
      return globalAxios.get(`/customer_reviews/${localStorage.getItem("userId")}/?noOfReviews=${noOfReviews}`)
        .then(res => {
          const inspectorReviews = res.data.map(item => {
            item.customerFeedback.showLongComment = false;
            item.customerFeedback.hideSeeMoreAndShowLess = false;
            return item;
          })
          commit("storeInspectorReviews", inspectorReviews)
          return res.data
        })
        .catch(error => {
          if (!isProd) {
            console.log(error.response)
          }
        })
    },

    fetchUserAvatar({ state, commit }) {
      if (!state.idToken) {
        return
      }
      return globalAxios
        .get("/users/me/avatar")
        .then(res => {
          commit("storeUserAvatar", res.data)
        })
        .catch(error => {
          if (!isProd) {
            console.log(error.response)
          }
        })
    },

    removeUserAvatar({ commit }) {
      return globalAxios
        .delete("/users/me/avatar")
        .then(res => {
          commit("storeUserAvatar", null)
        })
        .catch(error => {
          if (!isProd) {
            console.log(error.response)
          }
        })
    },

    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token")
      if (!token) {
        return
      }
      const userId = localStorage.getItem("userId")
      const isInspector = JSON.parse(localStorage.getItem("isInspector"))
      const typeOfInspector = localStorage.getItem("typeOfInspector")
      const isInspectorProfileApproved = JSON.parse(localStorage.getItem("isInspectorProfileApproved"))
      commit("authUser", {
        token,
        userId,
        isInspector,
        typeOfInspector,
        isInspectorProfileApproved
      })
      //Notify server of online status
      socket.connect()
      socket.emit("registerOnlineStatus", { userId })

    },

    logout({ commit }) {
      resetState()
      globalAxios.post("/users/me/logout")
        .then(res => {
          commit("clearAuthData")
          clearLocalStorageAuth()
          router.replace(`/${i18n.locale}/login`)
          socket.disconnect()
        })
        .catch(error => {
          commit("clearAuthData")
          clearLocalStorageAuth()
          router.replace(`/${i18n.locale}/login`)
        })
    }
  },

  getters: {
    isAuthenticated(state) {
      return state.idToken !== null
    },
    generalUserProfile(state) {
      return state.user
    },
    isInspector(state) {
      return state.isInspector
    },
    typeOfInspector(state) {
      return state.typeOfInspector
    },
    inspectorInfo(state) {
      return state.inspectorInfo
    },
    inspectorReviews(state) {
      return state.inspectorReviews
    },
    averageCustomerRating(state) {
      const numberOfRatings = state.inspectorReviews.length;
      const ratings = []
      state.inspectorReviews.forEach(item => {
        ratings.push(item.customerFeedback.overallRating);
      });
      const averageOfOverallRatings =
        ratings.reduce((a, b) => a + b, 0) / numberOfRatings
      if (numberOfRatings != 0) {
        return averageOfOverallRatings
      } else {
        return 0
      }
    },
    getAvatar(state) {
      return state.avatar
    },
    getNoOfUnseenNotifications(state) {
      return state.noOfUnseenNotifications
    },
    idToken(state) {
      return state.idToken
    },
    orderChats(state) {
      return state.chats
    },
    error(state) {
      return state.errorMessage
    }
  },

  plugins: [analyticsMiddleware]
})

const initialStateCopy = JSON.parse(JSON.stringify(store.state))

export function resetState() {
  store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)))
}
