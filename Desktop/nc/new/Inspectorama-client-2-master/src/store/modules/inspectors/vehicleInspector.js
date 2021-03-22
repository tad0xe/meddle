
import axios from "../../../axios-auth"
import globalAxios from "axios"
import router from "../../../router-main"


const state = {
  user: {
    idToken: null,
    userId: null,
  },

  inspectorInfo: null,
  jobs: null,
  openedJob: null,

  toBeUploadedDocs: {
    vehicleSpecializations: [],
    brandSpecializations: [],
    proCerts: [],
    educations: []
  },

  activationStatus: {
    isActivated: false
  }
}

const mutations = {

  authUser(state, userData) {
    state.idToken = userData.token;
    state.userId = userData.userId;
  },
  storeInspectorInfo(state, inspectorInfoData) {
    state.inspectorInfo = inspectorInfoData
  },

  storeJobsInfo(state, jobInfo) {
    state.jobs = jobInfo
  },
  storeOpenedJobInfo(state, jobInfo) {
    state.openedJob = jobInfo
  },
  storeToBeUploadedDocs(state, info) {
    state.inspectorInfo.toBeUploadedDocs.vehicleSpecializations = info.vehicleSpecializations
    state.inspectorInfo.toBeUploadedDocs.brandSpecializations = info.brandSpecializations
    state.inspectorInfo.toBeUploadedDocs.proCerts = info.proCerts
    state.inspectorInfo.toBeUploadedDocs.educations = info.educations
  },

  storeActivationStatus(state, inspectorActivationStatus) {
    state.inspectorInfo.activationStatus = inspectorActivationStatus.activationStatus
  }
}

const actions = {

  storeInspectorCalendar({ commit, dispatch, state, rootState }, infoData) {
    console.log(infoData)
    if (!rootState.idToken) {
      return
    }
    const action = infoData.action

    //action is removed so that infoData will not be rejected as invalid update at the backend
    delete infoData.action

    globalAxios.patch("/inspector_infos/me", infoData)
      .then(res => {
        console.log(res)

        if (action == "next") {
          router.push("/inspector/vehicle-inspector/certifications")
        }

        if (action == "back") {
          router.push("/inspector/vehicle-inspector/area-of-specialization")
        }
      })
      .catch(error => console.log(error.response))
  },

  fetchInspectorInfo({ commit, state, rootState }) {
    if (!rootState.idToken) {
      return
    }
    globalAxios.get("/inspector_infos/me")
      .then(res => {
        commit("storeInspectorInfo", res.data[0])
        console.log(res.data[0])
      })
      .catch(error => console.log(error))
  },

  fetchInspectorJobNotifications({ commit, state, rootState }) {
    if (!rootState.idToken) {
      return
    }
    globalAxios.get("/inspector_infos/me")
      .then(res => {
        console.log(res.data)
        commit("storeInspectorInfo", res.data[0].jobNotifications)
        console.log(res.data[0].jobNotifications)
      })
      .catch(error => console.log(error))
  },

  fetchInspectorJobs({ commit, state, rootState }) {
    if (!rootState.idToken) {
      return
    }
    globalAxios.get("/vehicle_inspection_orders/my_jobs")
      .then((res) => {
        commit("storeJobsInfo", res.data)
        console.log(res.data)
      }).catch(error => console.log(error))

  },

  fetchSpecificInspectorJob({ commit, state, rootState }) {
    if (!rootState.idToken) {
      return
    }
    const jobId = localStorage.getItem("openedJobId")
    globalAxios.get("/vehicle_inspection_orders/my_jobs/" + jobId)
      .then((res) => {
        commit("storeOpenedJobInfo", res.data)
        console.log(res.data)
      }).catch(error => console.log(error))

  },
}

const getters = {
  allJobs(state) {
    return state.jobs
  },
  openedJob(state) {
    return state.openedJob
  },
  inspectorInfo(state) {
    return state.inspectorInfo
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}