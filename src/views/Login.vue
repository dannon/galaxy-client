<template>
    <div class="container is-block">
        <h1 class="title">Sign In</h1>
        <h2 class="subtitle">to access Galaxy</h2>
        <b-form @submit.prevent="authenticate">
            <b-form-group>
                <b-form-input v-model="username" tabindex="1" type="email" placeholder="Email" autofocus></b-form-input>
            </b-form-group>

            <b-form-group>
                <b-form-input v-model="password" tabindex="2" placeholder="Password" type="password" autocomplete="off">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        authenticate() {
            const payload = {
                auth: {
                    username: this.username,
                    password: this.password
                }
            };
            axios
                .get(this.$store.state.endpoints.authenticate, payload)
                .then(response => {
                    this.$store.commit("updateToken", response.data.api_key);
                    // Move the following to centralized api.js or the like, for a single axios interface
                    const base = {
                        baseURL: this.$store.state.endpoints.baseUrl,
                        headers: {
                            "x-api-key": `${this.$store.state.token}`,
                            "Content-Type": "application/json"
                        },
                        xhrFields: {
                            withCredentials: true
                        }
                    };
                    const axiosInstance = axios.create(base);
                    axiosInstance({
                        url: `${this.$store.state.endpoints.currentUser}`,
                        method: "get",
                        params: {}
                    }).then(response => {
                        this.$store.commit("setAuthUser", { authUser: response.data, isAuthenticated: true });
                        this.$router.push({ name: "Home" });
                    });
                })
                .catch(error => {
                    console.log(error);
                    console.debug(error);
                    console.dir(error);
                });
        }
    }
};
</script>

<style scoped></style>
