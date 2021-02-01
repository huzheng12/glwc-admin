


import axios from "axios";
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// axios.defaults.baseURL="http://localhost:1902/";


var token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['X-Auth-Token'] = token;   //请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

import router from "@/router"
//请求拦截器
axios.interceptors.request.use(function (config) {

    // if (store.getters.token) {
    //     token = getToken()
    // }
    token = getToken()
    config.headers.common['X-Auth-Token'] = token;

    // ajax请求发送之前


    return config;
}, function (error) {


    //ajax请求无法发送
    return Promise.reject(error)
})


//响应拦截
axios.interceptors.response.use(function (response) {
    //成功接受后台返回的数据
    // console.log(response)

    if (response.data.code !== 0) {
        Message.error(response.data.msg);
    }
    if (response.data.code == '401') {
        // 默认token 失效  
        router.push({ name: 'login' })
    }



    return response.data
}, function (error) {
    // 后台返回的数据失败

    return Promise.reject(error)
})

export default axios