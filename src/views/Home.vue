<template>
    <b-jumbotron>
        <template v-slot:header>
            Galaxy Dashboard
        </template>
        <template v-slot:lead>
            This is a fully backend independent web application, served separately from the core Galaxy.
        </template>
        <p>
            See
            <b-link href="https://github.com/dannon/galaxy-client/">https://github.com/dannon/galaxy-client/</b-link>
        </p>
    </b-jumbotron>
</template>

<script>
export default {
    name: "Home",
};
</script>
