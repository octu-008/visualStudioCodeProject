<template>
<div>
  <h2>心跳:{{message}}:{{$store.state.count}}</h2>
  <button type="button" @click="countPlus">添加</button>
</div>
</template>
<script>
 export default {
   name: 'Heartbeat',
   data() {
     return {
       message: '我是心跳页面',
       count: 1
     }
   },
   methods: {
     countPlus()
     {
       this.$store.commit('increment');
     }
   },
}
</script>
<style scoped>

</style>