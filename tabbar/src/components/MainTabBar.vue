<template>
<div>
      <Tabbar>
      <Tabbaritem slot="item01" path="/home" activeColor="blue">
        <i class="fa fa-home" slot="icon" ></i>
        <label slot="text">首页</label>
      </Tabbaritem>
      <Tabbaritem slot="item02" path="/hotel" activeColor="green">
        <i class="fa fa-hotel" slot="icon"></i>
        <label slot="text">酒店</label>
      </Tabbaritem>
      <Tabbaritem slot="item03" path="/hourglass" activeColor="gray">
        <i class="fa fa-hourglass" slot="icon"></i>
        <label slot="text">沙漏</label>
      </Tabbaritem>
      <Tabbaritem slot="item04" path="/heartbeat">
        <i class="fa fa-heartbeat" slot="icon"></i>
        <label slot="text">心跳</label>
      </Tabbaritem>
    </Tabbar>
</div>
</template>
<script>
import Tabbar from 'components/tabbar/Tabbar'
import Tabbaritem from './tabbar/Tabbaritem'
 export default {
   name: 'MainTabBar',
   components: {
     Tabbar,Tabbaritem
   }
}
</script>
<style scoped>
@import url("https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css");
.fa{
  font-size: 27px;
}
</style>