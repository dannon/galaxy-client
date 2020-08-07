<template>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <div class="container">
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
            </div>
        </b-navbar>
    </header>
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
<style scoped>
.navbar {
    height: 4rem;
}
</style>
