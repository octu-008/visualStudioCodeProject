<template>
<div class="red-text">
  <h2>props属性:{{msg}}</h2>
  <h2>data属性:{{data_msg}}</h2>
</div>
</template>
<script>
 export default {
   name:'NewComponent',
   props:{
     msg: String
   },
   data() {
     return {
       data_msg: this.msg
     }
   },
}
</script>
<style scoped>
.red-text{
  color: red;
}
</style>