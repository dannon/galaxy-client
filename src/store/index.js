import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const baseUrl = "http://192.168.0.101:8080/api/";

export default new Vuex.Store({
    state: {
        authUser: {},
        isAuthenticated: false,
        token: localStorage.getItem("token"),
        endpoints: {
            authenticate: `${baseUrl}authenticate/baseauth`,
            currentUser: `${baseUrl}users/current`,
            base: `${baseUrl}`
        }
    },

    mutations: {
        setAuthUser(state, { authUser, isAuthenticated }) {
            Vue.set(state, "authUser", authUser);
            Vue.set(state, "isAuthenticated", isAuthenticated);
        },
        updateToken(state, newToken) {
            localStorage.setItem("token", newToken);
            state.jwt = newToken;
        },
        logout(state) {
            state.jwt = null;
            localStorage.removeItem("token");
            Vue.set(state, "authUser", {});
            Vue.set(state, "isAuthenticated", false);
        }
    },
    actions: {},
    modules: {}
});
