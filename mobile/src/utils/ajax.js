import axios from "axios";
import { getToken } from "@/utils/auth";

// 接口错误提示
const networkMessage = {
  401: "抱歉，身份验证失败，请刷新页面或重新登录!",
  403: "抱歉，您没有权限访问该接口",
  404: "接口不存在，请联系开发人员",
  500: "服务器内部错误，请重试",
  502: "网关错误，请重试"
};
const timeoutMessage = "请求超时，请检查重试";
const defaultMessage = "接口返回错误，请检查重试";

// create an axios instance
const service = axios.create({
  // baseURL: process.env.API_URL,
  timeout: 15*1000
});

// request interceptor
service.interceptors.request.use(
  config => {
    let token = getToken();
    if (token) {
      config.headers["usertoken"] = token;
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error);
    Promise.reject(error);
  }
);

// respone interceptor
service.interceptors.response.use(
  response => {
    console.log(response)
    // return response;
    if (response) {
      switch (response.status) {
        case 200: {
          if (!response.data) {
            console.log(defaultMessage)
            return response.data
          }
          if (response.data.code !== 0) {
            console.log(response.data.msg)
            return response.data
          }
          return response.data
        }
        default: {
          const message = networkMessage[response.status]
          console.log(response.status,message)
          return response.data
          break
        }
      }
    } else {
     console.log('请求出错, 请检查网络!')
    }
  },
  error => {
    console.log(error,error.message || '接口请求错误，请检查重试');
    return Promise.reject(error);
  }
);

export default service;
