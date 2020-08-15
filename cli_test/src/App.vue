<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home" tag="button" replace>Home</router-link> |
      <router-link to="/about" tag="button" replace>About</router-link> |
      <router-link :to="userParam"  tag="button" replace>User</router-link>
<!--       <button type="button" @click="userCLick">user跳转带参数</button> -->
    </div>
    <!-- keep-alive组件中使用 exclude = ‘组件名1，组件名2，..’ 可以将选定的组件排除在缓存外 -->
    <!-- 使切换到这些组件时将该组件重新创建 -->
    <keep-alive exclude="User">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'LiFour',
      userParam: {
        path: '/user',
        query: {
          name: 'jack',
          age: 18
        }
      }
    }
  },
  methods: {
    userCLick()
    {
      this.$router.push(this.userParam);
    },
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
