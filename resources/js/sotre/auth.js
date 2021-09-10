export const state = {
    user: null,
};
export const actions = {};

export const mutations = {
    setUser(state, payload) {
        sessionStorage.setItem("user", JSON.stringify(payload));
        state.user = payload;
    },
};
export const getters = {
    isAuthenticated: (state) =>
        !!state.user || !!sessionStorage.getItem("user"),
};

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
};
