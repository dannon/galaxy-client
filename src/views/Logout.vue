<template>
    <div class="logout">
        <h1>You have been logged out. Thanks for using Galaxy.</h1>
    </div>
</template>
<script>
export default {
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.$store.commit("logout");
        });
    }
};
</script>
