import qs from 'qs'
import axios from 'axios'
import {Toast} from 'vant'

// 设置基础路径
const baseUrl = "/api";

// 设置响应
// 设置响应拦截
axios.interceptors.response.use(res=>{
    console.log('本次响应路径为:'+res.config.url)
    if(res.data.code !== 200){
      // 提示错误信息
      Toast.fail(res.data.msg);
      return;
    }
    console.log(res);
    return res;
  })

// banner图
export const getBanner = ()=>{
    return axios({
        method:'get',
        url:baseUrl + '/api/getbanner'
    });
}

// 商品列表
export const getGoodsList= ()=>{
    return axios({
        method:'get',
        url:baseUrl + '/api/getindexgoods'
    });
}