import Vue from 'vue'
import Vuex from 'vuex'

import {
  INCREMENT,INCREMENTCOUNT,ADDADDRESS
} from './mutations-types';

/* **当index内容过多时，可以尝试考虑官方提供的将action，mutation，getters等抽出作为单独js文件** */
/* **模块则是可以新建一个文件夹然后按照store的结构也进行抽出，最好在index中通过import引入使用即可** */
Vue.use(Vuex)
/* 为了避免数据过于分散和处理困难最好只用一个store */
export default new Vuex.Store({
  state: {
    count:0,
    students:[
      {id:110,name:'why',age:18},
      {id:111,name:'why',age:19},
      {id:112,name:'why',age:25},
      {id:113,name:'why',age:20},
    ],
    person:{
      //如果直接往对象中添加属性，不会触发响应式更新
      //可以使用Vue.set方法（对象，key，value）触发响应（2.0）
      //cli4.0已经可以响应式
      age:19,
      name:'who'
    }
  },
  mutations: {
    //mutations中一般进行*同步*操作
    //方法默认带有state对象
    [INCREMENT](state){
      state.count++;
    },
    [INCREMENTCOUNT](state,payload)
    {
      state.count+=payload.count;
    },
    [ADDADDRESS](state)
    {
/*       state.person['address'] = '中国'; */
      Vue.set(state.person,'address','中国');
      console.log(state.person);
    }
  },
  actions: {
    //Action类似于Mutation，但是是用来代替Mutation进行*异步*操作
    //默认参数Context : 上下文 默认为store 对象
    //此处不能直接利用context.state.xx = '' 修改state内容
    //而是需要使用 context.commit('mutation方法')
    //让后在组件中使用 this.$store.dispatch('action方法')
    //context参数可以使用ES6的结构语法 比如{state，commit，rootState}
    aUpdate({commit},payload)
    {
      return new Promise((resolve) => {
        setTimeout(() =>{
          commit(ADDADDRESS);
          console.log(payload.message);
          resolve('来自storeindex');
        },1000);
      })
    }
  },
  modules: {
    //如果state数据量过大，变得比较臃肿
    //需要将程序进行抽离分模块时，vuex允许在Modules中进行store的分割
    //而每个模块都拥有自己的state，mutation，action，getters等
    a:{
      //modules最终会并入到总store的state中
      //当需要使用模块的数据使需要使用
      //$store.state.模块名.数据或方法
      state:{
        name:'jack'
      },
      mutations:{
        //模块中的mutations方法如果与store中的mutation是方法有重名
        //会先执行store中的mutation方法
        //另外在组件中调用模块内的mutation方法时，不需要指定模块
        //系统会自动从store开始到模块中寻找并执行
      },
      getters:
      {
        //getters的原理和mutation中差不多
        //state为模块中的状态，而rootState为store中的状态
 /*     full(state,getters,rootState)
        {
          return ';';
        } */
      },
      actions:
      {
        //模块Action方法中的context参数不再是store对象，当使用commit时，
        //只能使用自己的mutation
        //在组件使用dispatch时的原理则和mutation相同，store中没有则会使用模块中的
        //总结是，模块分离后的action，getters，mutation中的方法最好都是与store不重名的
      }
    },
    b:{
      state:{

      }
    }
  },
  getters: {
    //getter类似于组件中的计算属性，用于抽取state中的数据
    countPower(state)
    {
      return (state.count*state.count);
    },
    getOver: state =>{
      return state.students.filter(s => (s.age >= 20) );
    },
    getOverSide: (state,getters) =>{
      return getters.getOver.length;
    },
    getOverwith(state,getters)
    {
      return num => {
        return (num >= getters.getOverSide)
      }
    },
  }
})
