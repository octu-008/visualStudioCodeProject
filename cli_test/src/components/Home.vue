<template>
<div>
  <h2 class="font-color-red">这里是home页面</h2>
  <h2>以下是子组件</h2>
  <router-link to="/home/homechild">子组件:1</router-link>
  <router-link to="/home/homechildmessage">子组件:2</router-link>
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
</div>
</template>
<script>
 export default {
   name:'Home',
   pathBefore: '/home/homechild',
   created() {
     console.log('Home created');
   },
   destroyed() {
     console.log('Home destroyed');
   },
   //当使用了keep-alive组件时，该方法和deactivated方法才能生效
   activated() {
     this.$router.push(this.pathBefore);
   },
   beforeRouteLeave (to, from, next) {
     // ...
     this.pathBefore=this.$route.path;
     next();
   }
}
</script>
<style scoped>
.font-color-red
{
  color: red;
}
</style>