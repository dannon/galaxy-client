<template>
    <b-jumbotron>
        <template v-slot:header>
            Galaxy Client
        </template>
        <template v-slot:lead>
            This is a backend independent client application.
        </template>
        <p>See <b-link href="https://github.com/dannon/galaxy-client/">https://github.com/dannon/galaxy-client/</b-link></p>
    </b-jumbotron>
</template>

<script>
export default {
    name: "Home"
};
</script>
