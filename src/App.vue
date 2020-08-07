<template>
    <div id="app">
        <navbar />
        <div class="content-body container">
            <router-view />
        </div>
        <div class="fixed-bottom my-3 text-center">Galaxy Project</div>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
    components: {
        Navbar,
    },
    mounted() {
        // When application is mounted, check for a key and do login handshake if it's saved locally.
        this.$store.dispatch("checkLoginToken");
    },
};
</script>

<style lang="scss">
.content-body {
    height: 80vh;
    min-height: 400px;
    padding-top: 2rem;
}
.router-link-exact-active {
    font-weight: 600;
}
</style>
