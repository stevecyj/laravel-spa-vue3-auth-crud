export default {
    state: { user: "abc" },
    actions: {
        handleSetUser(context, payload) {
            context.commit("SET_USER", payload);
        },
    },
    mutations: {
        SET_USER(state, payload) {
            // sessionStorage.setItem("user", JSON.stringify(payload));
            state.user = payload;
        },
    },
    getters: {
        // isAuthenticated: (state) =>
        //     !!state.user || !!sessionStorage.getItem("user"),
        getUser(state) {
            return state.user;
        },
    },
    namespaced: true,
};
