<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home" tag="button" replace>Home</router-link> |
      <router-link to="/about" tag="button" replace>About</router-link>
    </div>
    <div>
      <button type="button" @click="toHome">前往首页</button>
      <button type="button" @click="toAbout">前往关于</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    toHome()
    {
      this.$router.replace('/home');
    },
    toAbout()
    {
      this.$router.replace('/about');
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.active
{
  color: red;
}
</style>
