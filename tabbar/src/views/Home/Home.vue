<template>
<div>
  <h2>主页：vuex中的store{{$store.state.count}}</h2>
</div>
</template>
<script>
import axios from 'axios'
//使用axios.defaults可以对axios进行默认配置
//一般常见的配置选项有
//根路径baseURL,地址url
//请求类型 method
//请求前的数据处理 transformRequest
//请求后的数据处理 transformResponse
//自定义的请求头 header
//URL查询对象 params
axios.defaults.baseURL = '..';
axios.defaults.timeout = '..';
 export default {
   name: 'Home',
   methods: {
     request()
     {
       axios({
         url: '请求连接',
         method: 'GET',
         //专门针对get请求的参数拼接
         params:{
           type: '1',
           page: 1
         }
       }).then(res =>
       {
         //axios有Promise的功能
         console.log(res)
       })
     },
     allRequest()
     {
       //并发和Promise原理差不多
       //then 可以使用 数组参数 也可使用axios.spread 分开获得每一个请求的结果
       axios.all([axios(),axios()]).then(axios.spread((re1,re2) => {

       }));
     }
   },
}
</script>
<style scoped>

</style>