import globalAxios from "axios";
import router from "../../../router-main"


const state = {

  user: {
    idToken: null,
    userId: null,
  },
  anonUser: {
    idToken: null,
    userId: null,
  },

  orderQuote: null,
  allOrders: [],
  openedOrder: null,
  // openedOrderId: null,
  // interestedInspectors: [],
  inspectorProfile: null,
  vehicleBrands: null
  }
   

const mutations = {
  authUser(state, userData) {
    state.user.idToken = userData.token;
    state.user.userId = userData.userId;
  },

  authAnonUser(state, userData) {
    state.anonUser.idToken = userData.token;
    state.anonUser.userId = userData.userId;
  },

  storeOrderQuote(state, orderQuote) {
    state.orderQuote = orderQuote
  },

  storeVehicleInspectionOrderInfo(state, vehicleInspectionOrderData) {
    state.vehicleInspectionOrder = vehicleInspectionOrderData;
  },

  // storeOrderInfo(state, orderInfo ) {
  //   state.allOrders = orderInfo
  // },

  storeOpenedOrder(state, orderInfo) {
    state.openedOrder = orderInfo
  },

  // storeInterestedInspectors(state, inspectors) {
  //   state.interestedInspectors = inspectors
  // },

  // storeOpenedOrderId(state, orderInfo) {
  //   state.openedOrderId = orderInfo
  // },

  editVehicleInspectionOrder(state, placedOrders ) {
    state.placedOrders.inspTime = placedOrders.inspTime;
  },
  storeInspectorProfile(state, inspectorProfile){
    state.inspectorProfile = inspectorProfile
  },
  storeVehicleBrandInfo(state, vehicleInfo){
    state.vehicleBrands = vehicleInfo. vehicle
  }
}

const actions = {
  // storeQuote({ commit, state, rootState, dispatch }, quote) {
  //   if (rootState.userId !== null) {
  //     //when the user is signed in
  //     globalAxios.post(`/quotes/${quote.typeOfInspection}`, quote)
  //       .then(res => {
  //         localStorage.setItem("quoteId", res.data._id)
  //         commit("storeOrderQuote", {
  //           orderQuote: quote
  //         })
  //         if(quote.typeOfInspection == "Vehicle"){
  //           router.push("/quotes/vehicle-inspection-quote")
  //         }
  //         if(quote.typeOfInspection == "Home"){
  //           router.push("/quotes/home-inspection-quote")
  //         }
  //       })
  //       .catch(error => console.log(error.response))
  //   }
  // },

  //  //Edit quotation vehicle description info
  //  updateQuoteVehicleDescInfo({commit, state, rootState}, vehicleDescData){
  //   if (!rootState.idToken) {
  //     return
  //   }
  //   const quoteId = localStorage.getItem("quoteId")
  //   globalAxios.patch("/quotes/vehicle_description/" + quoteId, vehicleDescData)
  //   .then(res => {
      
  //   })
  //   .catch(error => console.log(error))
  // },

  //Edit quotation inspection datetime info
  updateQuoteInspDateTimeInfo({commit, state, rootState}, dateTimeData){
    if (!rootState.idToken) {
      return
    }
    const quoteId = localStorage.getItem("quoteId")
    globalAxios.patch("/quotes/inspection_datetime/" + quoteId, dateTimeData)
    .then(res => {
      
    })
    .catch(error => console.log(error))
  },

  fetchQuote({ commit, state, rootState }) {
    if (rootState.userId !== null) {
      const quoteId = localStorage.getItem("quoteId")
      //means the user is NOT anonymously signed in
      globalAxios.get("/quotes/"+ quoteId)
        .then(res => {
          commit("storeOrderQuote", res.data)
        })
        .catch(error => console.log(error))

    }
  },

  storeOrder({ rootState }, orderData) {
    if (!rootState.idToken) {
      return
    }
    const quoteId = orderData.quoteId
    globalAxios.post(`/orders/${orderData.inspectionType}/${quoteId}`, orderData)
      .then(res => {
        router.replace("/status/booking-successful")      
      })
      .catch(error => console.log(error.response.data))
  },

  // fetchAllOrders({ commit, state, rootState }) {
  //   if (!rootState.idToken) {
  //     return
  //   }
  //   globalAxios.get("/orders/my_orders")
  //     .then(res => {
  //       commit("storeOrderInfo", res.data)
  //     })
  //     .catch(error => console.log(error))
  // },

  // fetchOrder({ commit, state, rootState }) {
  //   if (!rootState.idToken) {
  //     return
  //   }
  //   const openedOrderId = localStorage.getItem("openedOrderId")
  //   globalAxios.get("/orders/my_orders/" + openedOrderId)
  //     .then(res => {
  //       commit("storeOpenedOrder", res.data)
  //     })
  //     .catch(error => console.log(error))
  // },

  // storeAcceptInspector({ commit, dispatch, state, rootState }, infoData) {
  //   if (!rootState.idToken) {
  //     return
  //   }
  //   globalAxios.patch("/orders/accept_inspector", infoData)
  //     .then(res => {  
  //     })
  //     .catch(error => console.log(error.response))
  // },

  storeRejectInspector({ commit, dispatch, state, rootState }, infoData) {
    if (!rootState.idToken) {
      return
    }
    globalAxios.patch("/orders/reject_inspector", infoData)
      .then(res => {  
      })
    //router.replace("/account/orders")
      .catch(error => console.log(error.response))
  },

  //For the customer to see the profile of a matched inspector
  fetchInspectorProfile({ commit, state, rootState }) {
    if (!rootState.idToken) {
      return
    }
    const openedInspectorId = localStorage.getItem("openedInspectorId")
    globalAxios.get("/my_matched_inspector_profile/" + openedInspectorId)
      .then(res => {
        commit("storeInspectorProfile", res.data)
      })
      .catch(error => console.log(error))
  },

  // //Edit seller info in the order
  // updateOrderInfo({commit, state, rootState}, sellerInfo){
  //   if (!rootState.idToken) {
  //     return
  //   }
  //   const openedOrderId = localStorage.getItem("openedOrderId")
  //   globalAxios.patch("/orders/" + openedOrderId, sellerInfo)
  //   .then(res => {
  //   })
  //   .catch(error => console.log(error))
  // },

  // //Cancel order
  // cancelOrder({commit, state, rootState}, sellerInfo){
  //   if (!rootState.idToken) {
  //     return
  //   }
  //   const openedOrderId = localStorage.getItem("openedOrderId")
  //   globalAxios.patch("/orders/cancel/" + openedOrderId, sellerInfo)
  //   .then(res => {
  //   })
  //   .catch(error => console.log(error))
  // },

  fetchVehicleBrands({commit, state, rootState}){
    if (!rootState.idToken) {
      return
    }
    globalAxios.get("/vehicle_brands")
    .then(res=>{
      commit("storeVehicleBrandInfo", res.data[0])
    })
  }

}

const getters = {
  orderQuote(state) {
    return state.orderQuote
  },
  inspectorProfile(state){
    return state.inspectorProfile
  },
  // allMyOrders(state){
  //   return state.allOrders
  // },
  getOpenedOrder(state){
    return state.openedOrder
  },
  allVehicleBrands(state){
    return state.vehicleBrands
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
