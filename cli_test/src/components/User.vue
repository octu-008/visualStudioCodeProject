<template>
<div>
  <h2>用户界面:{{userId}}</h2>
</div>
</template>
<script>
 export default {
   name: 'User',
   computed: {
     //$route 获得当前处于活跃状态的路由
     userId () 
     {
       return this.$route.params.userId;
     }
   },
}
</script>
<style scoped>

</style>