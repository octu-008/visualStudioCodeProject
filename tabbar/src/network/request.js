//封装request模块
//创建对应的axios的实例
import axios from 'axios';
export function requets(config)
{ 
/*   const instance = axios.create({
    baseURL: '...',
    timeout: 5000
  });
  instance(config.baseConfig).then(res => {
    config.success(res);
  }).catch(err => {
    config.failure(err)
  }) */
  //以下推荐的封装方法，当组件中需要使用请求时，
  //可以使用Promise的then，catch处理请求结果
/*   return new Promise((resolve,reject) => {
    //创建axios实例
    const instance = axios.create({
      baseURL: '...',
      timeout: 5000
    });
    //发送真正的网络请求
    instance(config).then(res =>{
      resolve(res);
    }
    ).catch(err => {
      reject(err);
    })
  }) */
  //其实可以直接返回axios实例
  const instance = axios.create({
    baseURL: '...',
    timeout: 5000
  });
  //axios拦截器(全局)
/*   axios.interceptors */
  //axios拦截器(实例)
  //请求拦截
  instance.interceptors.request.use(config => {
    //拦截了config后需要将config返回出去
    console.log(config);
    return config;
  })
  return instance(config);
  //响应拦截
  instance.interceptors.response.user()
  
  instance.interceptors.response.eject();
}
