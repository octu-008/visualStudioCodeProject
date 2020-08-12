<template>
<div>
  <h2 class="font-color-red">这里是home页面</h2>
  <h2>以下是子组件</h2>
  <router-link to="/home/homechild">子组件:1</router-link>
  <router-link to="/home/homechildmessage">子组件:2</router-link>
  <router-view></router-view>
</div>
</template>
<script>
 export default {
   name:'Home'
}
</script>
<style scoped>
.font-color-red
{
  color: red;
}
</style>