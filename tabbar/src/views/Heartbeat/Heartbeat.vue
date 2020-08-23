<template>
<div>
  <h2>{{$store.getters.getOver}}</h2>
  <h2>{{$store.getters.getOverSide}}</h2>
  <h2>{{$store.getters.getOverwith(2)}}</h2>
  <h2>{{$store.state.person}}</h2>
  <h2>{{$store.state.a.name}}</h2>
  <button type="button" @click="addA">添加</button>
  <h2>心跳:{{message}}:{{$store.getters.countPower}}</h2>
  <button type="button" @click="countPlus">添加</button>
  <button type="button" @click="countPlusWithCount(5)">添加5</button>
  <button type="button" @click="countPlusWithCount(10)">添加10</button>
</div>
</template>
<script>
import {INCREMENT,INCREMENTCOUNT} from '../../store/mutations-types'
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
       //使用commit来执行mutations中的方法来改变共享的state数据
       this.$store.commit(INCREMENT);
     },
     countPlusWithCount(count)
     {
       //提交的参数被称为payload负载
       //1.普通的提交风格
       //this.$store.commit('incrementCount',count);
       //2.特殊的提交风格（对象形式）
       //参数较多时可以考虑这种形式
       this.$store.commit({
         type: INCREMENTCOUNT,
         count,
         age:19
       });
     },
     addA()
     {
       this.$store.dispatch('aUpdate',{
         message: 'HeartBeat中的信息'
       }).then((message) => {
         console.log(message+'Heartbeat');
       });
     }
   },
}
</script>
<style scoped>

</style>