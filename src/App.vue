<template>
    <div id="app">
        <navbar />
        <div class="content-body container">
            <router-view />
        </div>
        <div class="fixed-bottom my-2 has-text-centered">Galaxy Project</div>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
    components: {
        Navbar,
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
