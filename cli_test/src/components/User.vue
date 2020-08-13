<template>
<div>
  <h2 :class="h2_class" @mouseenter="enterMouse()" @mouseleave="leaveMouse()">用户界面:{{userId}}</h2>
  <h2>{{userParamsFromPath}}</h2>
</div>
</template>
<script>
 export default {
   name: 'User',
   created() {
     console.log('User created');
   },
   destroyed() {
     console.log('User destroyed');
   },
   data() {
     return {
       h2_class:{
         'red':true,
         'font_big':true,
         'font_small':false
       }
     }
   },
   methods: {
     enterMouse()
     {
       this.h2_class.red=false;
       this.h2_class.font_big=false;
       this.h2_class.font_small=true;
     },
     leaveMouse()
     {
       this.h2_class.red=true;
       this.h2_class.font_big=true;
       this.h2_class.font_small=false;
     }
   },
   computed: {
     //$route 获得当前处于活跃状态的路由
     userId () 
     {
       return this.$route.params.userId;
     },
     userParamsFromPath()
     {
       return '路径中的query参数'+this.$route.query.name+'|'+this.$route.query.age;
     }
   },
}
</script>
<style scoped>
.red
{
  color: rebeccapurple;
}
.font_big
{
  font-size: 50px;
}
.font_small
{
  font-size: 10px;
}
</style>