<template>
    <div id="app">
        <header>
            <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar" id="navMenu">
                        <b-navbar toggleable="lg" type="dark" variant="primary">
                            <b-navbar-brand to="/">GalaxyClient</b-navbar-brand>

                            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                            <b-collapse id="nav-collapse" is-nav>
                                <b-navbar-nav class="ml-auto">
                                    <b-nav-item-dropdown v-if="this.$store.state.isAuthenticated" right>
                                        <template v-slot:button-content>
                                            <em>{{ userEmail }}</em>
                                        </template>
                                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                                        <b-dropdown-item to="/logout">Log Out</b-dropdown-item>
                                    </b-nav-item-dropdown>
                                    <b-nav-item v-else to="/login">Log In</b-nav-item>
                                </b-navbar-nav>
                            </b-collapse>
                        </b-navbar>
                    </div>
                </div>
            </nav>
        </header>
        <div class="content-body container">
            <router-view />
        </div>
        <div class="fixed-bottom my-2 has-text-centered">Galaxy Project</div>
    </div>
</template>
<script>
export default {
    computed: {
        userEmail() {
            return this.$store.state.user?.email || null;
        },
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.content-body {
    height: 80vh;
    min-height: 400px;
}
.footer {
    margin-bottom: 1rem;
}
.router-link-exact-active {
    font-weight: 600;
}
.navbar {
    width: 100%;
}
</style>
