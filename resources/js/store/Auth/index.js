import axios from "axios";

export default {
    state: { user: "", isLogin: false, currentUrl: "" },
    actions: {
        handleSetUser({ commit }, payload) {
            commit("SET_USER", payload);
        },
        handleUrl({ commit }, payload) {
            commit("SET_URL", payload);
        },
        handleLogin({ commit, getters }, payload) {
            axios
                .get(`${getters.getCurrentUrl}sanctum/csrf-cookie`)
                .then((response) => {
                    axios
                        .post(`${getters.getCurrentUrl}api/login`, {
                            email: payload.email,
                            password: payload.password,
                        })
                        .then((res) => {
                            console.log(res.data);
                            commit("LOGIN", res.data);
                        })
                        .catch((err) => console.error(err));
                });
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
        LOGIN(state, payload) {
            state.user = payload.auth_user.name;
            state.isLogin = payload.auth_check;
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
