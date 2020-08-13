<template>
<div>
  <h2>首页子组件:{{msg}}</h2>
</div>
</template>
<script>
 export default {
   name: 'Homechildmessage',
   data() {
     return {
       msg: '我怕了'
     }
   },
  created() {
     console.log('HomeChildMessage created');
   },
   destroyed() {
     console.log('HomeChildMessage destroyed');
   },
}
</script>
<style scoped>

</style>