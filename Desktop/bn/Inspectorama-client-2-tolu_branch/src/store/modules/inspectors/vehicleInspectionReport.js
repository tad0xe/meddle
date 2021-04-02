
import globalAxios from "axios"
import router from "../../../router-main"

const state = {

   }

const mutations = {

 
  }

const actions = {
    storeVehicleInspectionReport({ commit, dispatch, state, rootState }, infoData) {
        if (!rootState.idToken) {
          return
        }
        console.log(infoData)
        const jobId = localStorage.getItem("openedJobId")
        globalAxios.patch("/vehicle_inspection_reports/" + jobId , infoData)
          .then(res => {
            console.log(res)      
          })
          .catch(error => console.log(error.response))
      }, 

      storeVehicleInspectionPictures({ commit, dispatch, state, rootState }, infoData) {
        if (!rootState.idToken) {
          return
        }
        console.log(infoData)
        const jobId = localStorage.getItem("openedJobId")
        globalAxios.post("/vehicle_inspection_reports/pictures/" + jobId , infoData)
          .then(res => {
            console.log(res)      
          })
          .catch(error => console.log(error.response))
      },

      storeVehicleDescriptionGoToNext({ commit, dispatch, state, rootState }, infoData) {
        if (!rootState.idToken) {
          return
        }
        console.log("to Next")
        const jobId = localStorage.getItem("openedJobId")
        globalAxios.patch("/vehicle_inspection_reports/" + jobId , infoData)
          .then(res => {
            console.log(res)   
          })
          .catch(error => console.log(error.response))
      }, 

      storeVehicleExteriorGoToNext({ commit, dispatch, state, rootState }, infoData) {
        if (!rootState.idToken) {
          return
        }
        const jobId = localStorage.getItem("openedJobId")
        globalAxios.patch("/vehicle_inspection_reports/" + jobId , infoData)
          .then(res => {
            console.log(res)   
          })
          .catch(error => console.log(error.response))
      }, 

      storeVehicleInteriorGoToNext({ commit, dispatch, state, rootState }, infoData) {
        if (!rootState.idToken) {
          return
        }
        const jobId = localStorage.getItem("openedJobId")
        globalAxios.patch("/vehicle_inspection_reports/" + jobId , infoData)
          .then(res => {
            console.log(res)      
          })
          .catch(error => console.log(error.response))
      }, 

      storeVehicleRoadTestGoToNext({ commit, dispatch, state, rootState }, infoData) {
        if (!rootState.idToken) {
          return
        }
        console.log("to Next")
        const jobId = localStorage.getItem("openedJobId")
        globalAxios.patch("/vehicle_inspection_reports/" + jobId , infoData)
          .then(res => {
            console.log(res)    
          })
          .catch(error => console.log(error.response))
      },

      storeVehicleAddPointsGoToNext({ commit, dispatch, state, rootState }, infoData) {
        if (!rootState.idToken) {
          return
        }
        const jobId = localStorage.getItem("openedJobId")
        globalAxios.patch("/vehicle_inspection_reports/" + jobId , infoData)
          .then(res => {
            console.log(res)
          })
          .catch(error => console.log(error.response))
      }
  
  
}

const getters = {
  
}

export default {
 namespaced: true,
  state,
  getters,
  actions,
  mutations
}