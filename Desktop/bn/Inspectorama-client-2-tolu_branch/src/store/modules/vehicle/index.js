import axios from 'axios';

const state = {
    vehicleResponse: '',
    vehicleData: [],
    createVehicleResponse: {},
    createVehicleError: {}
}

const actions = {
    GET_ALL_PUBLIC_VEHICLES: ({ commit }) => {
        return new Promise((resolve, reject) => {
            axios.get('/vehicle_listing/get-all-listings').then((resp) => {
                const { status, data } = resp;
                if (status === 200) {
                    resolve(data)
                    commit('GET_ALL_VEHICLE_SUCCESS', data);
                }
            }).catch((err) => {
                console.log(err);
                commit('GET_ALL_VEHICLE_FAILURE')
                reject(err)
            })
        })
    },
    GET_ONE_PUBLIC_VEHICLE: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios.get(`/vehicle_listing/get_public_vehicle_listing/${payload}`).then((resp) => {
                const { status, data } = resp;
                if (status === 200) {
                    resolve(data);
                }
            }).catch((err) => {
                reject(err)
            })
        })
    },
    GET_ONE_PRIVATE_VEHICLE: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios.get(`/vehicle_listing/get_private_vehicle_listing/${payload}`).then((resp) => {
                const { status, data } = resp;
                if (status === 200) {
                    resolve(data);
                }
            }).catch((err) => {
                reject(err)
            })
        })
    },
    GET_ALL_MY_VEHICLES: () => {
        return new Promise((resolve, reject) => {
            axios.get('/vehicle_listing/get_all_my_vehicles').then((resp) => {
                const { status, data } = resp;
                if (status === 200) {
                    resolve(data);
                }
            }).catch((err) => {
                reject(err)
            })
        })
    },
    CREATE_VEHICLE: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios.post('/vehicle_listing/create_vehicle_listing', payload).then((resp) => {
                const { status, data } = resp;
                if (status === 200) {
                    commit('CREATE_SUCCESS', data)
                    resolve(data);
                }
            }).catch((err) => {
                commit('CREATE_ERROR', err)
                reject(err)
            })
        })
    },
    EDIT_VEHICLE: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios.patch(`/vehicle_listing/edit_vehicle_listing/${payload._id}`, payload).then((resp) => {
                const { status, data } = resp;
                if (status === 200) {
                    // commit('CREATE_SUCCESS', data)
                    resolve(data);
                }
            }).catch((err) => {
                // commit('CREATE_ERROR', err)
                reject(err)
            })
        })
    },
    DELETE_VEHICLE: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios.delete(`/vehicle_listing/delete_vehicle_listing/${payload.vehicleId}`).then((resp) => {
                const { status, data } = resp;
                if (status === 200) {
                    resolve(data);
                }
            }).catch((err) => {
                reject(err)
            })
        })
    },
    ADD_PICTURE: ({ commit }, payload) => {
        new Promise((resolve, reject) => {
            axios.post(`/vehicle_listing/upload_vehicle_picture/${payload.vehicleId}`, payload.formData).then((resp) => {
                const { status, data } = resp;
                if (status === 200) {
                    // commit('ImageSuccess')
                    resolve(data)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    }
}

const mutations = {
    GET_ALL_VEHICLE_SUCCESS: (state, payload) => {
        state.vehicleResponse = true,
            state.vehicleData = payload
    },
    GET_ALL_VEHICLE_FAILURE: (state) => {
        state.vehicleResponse = false
    },
    CREATE_SUCCESS: (state, payload) => {
        state.createVehicleResponse = payload
    },
    CREATE_ERROR: (state, payload) => {
        state.createVehicleError = payload
    }
}

export default {
    state,
    actions,
    mutations
}