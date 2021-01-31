
const state = {
    currentScreenWidth: null,
}

const mutations = {

    SET_CURRENT_SCREEN_WIDTH: (state, payload) => {
        state.currentScreenWidth = payload
    },
}

const actions = {
}



export default {
    namespaced: true,
    state,
    actions,
    mutations
}