import globalAxios from "axios";
import adminRouter from "../../../router-admin"


const state = {
    adminUser: null,
    adminUserId: null,
    adminIdToken: null,
    adminRole: null,
    errorMessage: "",
    okMessage: ""
}

const mutations = {
    storeErrorMessage(state, error) {
        state.errorMessage = error
    },
    storeOkMessage(state, okMessage) {
        state.okMessage = okMessage
    },
    authAdminUser(state, adminData) {
        state.adminIdToken = adminData.adminIdToken;
        state.adminUserId = adminData.adminUserId;
        state.adminRole = adminData.adminRole;
        state.adminUser = adminData.adminUser
    },
    clearOkMessage(state) {
        state.okMessage = null
    },
    clearErrorMessage(state) {
        state.errorMessage = null
    }
}

const actions = {
    clearErrorMessage({ commit }) {
        commit("clearErrorMessage")
    },
    signUpAdminUser({ commit, dispatch, state }, authData) {
        globalAxios.post("/admin_users", authData)
            .then(res => {
                commit("storeOkMessage", res.data)
            })
            .catch(error => {
                console.log(error.response.data)
                commit("storeErrorMessage", error.response.data)
            })
    },
    loginAdminUser({ commit, dispatch }, authData) {

        globalAxios.post("/admin_users/login", {
            username: authData.username,
            password: authData.password
        })
            .then(res => {
                commit("authAdminUser", {
                    adminIdToken: res.data.token,
                    adminUserId: res.data.adminUser._id,
                    adminRole: res.data.adminUser.role,
                    adminUser: res.data.adminUser
                })
                // const now = new Date()
                // const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
                localStorage.setItem("adminToken", res.data.token)
                localStorage.setItem("adminUserId", res.data.adminUser._id)
                // localStorage.setItem("expirationDate", expirationDate)
                // dispatch("setLogoutTimer", res.data.expiresIn)
                adminRouter.push("/dashboard")
            })
            .catch(error => {
                console.log(error.response.data)
                commit("storeErrorMessage", error.response.data)
            })
    },

    tryAdminAutoLogin({ commit }) {
        const adminToken = localStorage.getItem("adminToken")
        if (!adminToken) {
            return
        }

        const adminUserId = localStorage.getItem("adminUserId")
        commit("authAdminUser", {
            adminToken: adminToken,
            adminUserId: adminUserId,
            adminUser: res.data.adminUser
        })
    },

    getAdminResetPasswordLink({ commit, dispatch }, data) {
        globalAxios.post("/admin_users/passwordReset", data)
            .then(res => {
                adminRouter.push("/status/password-reset-link-sent")
            })
            .catch(error => {
                console.log(error.response)
                adminRouter.push("/status/password-reset-link-sent")
            })
    },
    saveNewAdminPassword({ commit }, data) {
        globalAxios.post("/admin_users/saveNewPassword", data)
            .then(res => {
                commit("authAdminUser", {
                    adminIdToken: res.data.token,
                    adminUserId: res.data.adminUser._id,
                    adminRole: res.data.adminUser.role
                })
                localStorage.setItem("adminToken", res.data.token)
                localStorage.setItem("adminUserId", res.data.adminUser._id)
                adminRouter.push("/dashboard")
            })
            .catch(error => {
                console.log(error.response.data)
                commit("storeErrorMessage", error.response.data)
            })

    },
    //The super admin updates the info of a specific user
    updateSpecificAdminUserInfo({ commit }, userData) {
        if (userData.password == null || userData.password == "") {
            delete userData.password
        }
        const specificUserId = localStorage.getItem("openedUserId")
        globalAxios.patch(`/admin_users/${specificUserId}`, userData)
            .then(res => {
                commit("storeOkMessage", res.data)
                localStorage.removeItem("openedUserId")
                adminRouter.replace("/admin-users")

            })
            .catch(error => {
                console.log(error.response.data)
                commit("storeErrorMessage", error.response.data)
            })

    },

    //The admin creating a new customer user
    signUpCustomerUser({ commit }, customerInfoData) {
        globalAxios.post("/customer_users/createNew", customerInfoData)
            .then(res => {
                commit("storeOkMessage", res.data)
                adminRouter.replace("/customers")
            })
            .catch(error => {
                console.log(error.response.data)
                commit("storeErrorMessage", error.response.data)
            })
    },

    //The admin updating a customer user
    updateCustomerUser({ commit }, customerInfoData) {
        const customerId = localStorage.getItem("openedCustomerId")
        globalAxios.patch(`/customer_users/edit/${customerId}`, customerInfoData)
            .then(res => {
                commit("storeOkMessage", res.data)
                adminRouter.replace("/customers")
            })
            .catch(error => {
                console.log(error.response.data)
                commit("storeErrorMessage", error.response.data)
            })

    },

    //The admin deleting a user
    deleteCustomerUser({ commit }, customerId) {
        globalAxios.delete(`/customer_users/deleteUser/${customerId}`, customerId)
            .then(res => {
                commit("storeOkMessage", res.data)
                adminRouter.replace("/customers")
            })
            .catch(error => {
                console.log(error.response.data)
                commit("storeErrorMessage", error.response.data)
            })

    }
}


const getters = {
    error(state) {
        return state.errorMessage
    },
    okMessage(state) {
        return state.okMessage
    },
    adminAuth(state) {
        return state.adminIdToken !== null
    },
    getAdminUser(state){
        return state.adminUser
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}