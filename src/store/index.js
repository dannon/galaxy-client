import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const baseUrl = "http://192.168.0.101:8080/api/";

export default new Vuex.Store({
    state: {
        user: {},
        isAuthenticated: false,
        token: localStorage.getItem("token"),
        endpoints: {
            authenticate: `${baseUrl}authenticate/baseauth`,
            currentUser: `${baseUrl}users/current`,
            base: `${baseUrl}`,
        },
    },

    mutations: {
        setUser(state, { user, isAuthenticated }) {
            Vue.set(state, "user", user);
            Vue.set(state, "isAuthenticated", isAuthenticated);
        },
        updateToken(state, newToken) {
            localStorage.setItem("token", newToken);
            state.token = newToken;
        },
        logout(state) {
            state.token = null;
            localStorage.removeItem("token");
            Vue.set(state, "user", {});
            Vue.set(state, "isAuthenticated", false);
        },
    },
    actions: {
        checkLoginToken({ dispatch, state }) {
            if (state.token) {
                dispatch("fetchUserDetails");
            }
        },
        fetchUserDetails({ commit, state }) {
            const base = {
                baseURL: state.endpoints.baseUrl,
                headers: {
                    "x-api-key": `${state.token}`,
                    "Content-Type": "application/json",
                },
                xhrFields: {
                    withCredentials: true,
                },
            };
            const axiosInstance = axios.create(base);
            axiosInstance({
                url: `${state.endpoints.currentUser}`,
                method: "get",
                params: {},
            }).then((response) => {
                commit("setUser", { user: response.data, isAuthenticated: true });
            });
        },
    },
    modules: {},
});
