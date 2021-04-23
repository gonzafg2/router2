<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about/2">About 1</router-link> |
      <router-link to="/about/9090">About 2</router-link> |
      <router-link :to="{ name: 'RutaNombrada', params: { color: key } }"
        >Ruta Nombrada</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: "1"
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
