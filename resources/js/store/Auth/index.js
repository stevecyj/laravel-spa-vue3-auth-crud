import axios from "axios";

export default {
    state: { user: "abc", currentUrl: "" },
    actions: {
        handleSetUser({ commit }, payload) {
            commit("SET_USER", payload);
        },
        handleUrl({ commit }, payload) {
            commit("SET_URL", payload);
        },
        handleInit({ commit, getters }, payload) {
            // console.log(getters.getCurrentUrl);
            axios
                .post(`${getters.getCurrentUrl}api/login`, {
                    email: "nei@nei.com",
                    password: "neineinei",
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
            commit("INIT");
        },
    },
    mutations: {
        SET_USER(state, payload) {
            // sessionStorage.setItem("user", JSON.stringify(payload));
            state.user = payload;
        },
        SET_URL(state, payload) {
            state.currentUrl = payload;
        },
        INIT(state, payload) {
            // console.log(state);
        },
    },
    getters: {
        // isAuthenticated: (state) =>
        //     !!state.user || !!sessionStorage.getItem("user"),
        getUser(state) {
            return state.user;
        },
        getCurrentUrl(state) {
            return state.currentUrl;
        },
    },
    namespaced: true,
};
