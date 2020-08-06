<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a.router-link-exact-active {
  /* Use vars, or shift to global config */
  color: #42b983;
}
</style>
