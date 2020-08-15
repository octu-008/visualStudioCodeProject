<template>
<div class="tab-bar-item" :style="activeStyle" @click="shiftViews">
  <slot name="icon"></slot>
  <br>
  <slot name="text"></slot>
</div>
</template>
<script>
 export default {
   name: 'Tabbaritem',
   props:{
     path : String,
     activeColor : {
       type: String,
       default: 'red'
     }
   },
   data() {
     return {
     isActive1: true  
     }
   },
   computed: {
     isActive2()
     {
       return this.$route.path.indexOf(this.path) !== -1;
     },
     activeStyle()
     {
       return this.isActive2 ? {color: this.activeColor} : {} ;
     }
   },
   methods: {
     shiftViews()
     {
       if(this.$route.path !== this.path)
       {
        this.$router.push(this.path);
       }
     }
   },
}
</script>
<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.activeItem{
  color: red;
}
</style>