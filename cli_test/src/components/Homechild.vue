<template>
<div>
  <h2>首页子组件:{{msg}}</h2>
</div>
</template>
<script>
 export default {
   name: 'Homechild',
   data() {
     return {
       msg: '好耶'
     }
   },
  created() {
     console.log('HomeChild created');
   },
   destroyed() {
     console.log('HomeChild destroyed');
   },
}
</script>
<style scoped>

</style>