import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { serverUrl } from "./tools";

const instance = axios.create({
  timeout: 5000,
  baseURL: serverUrl,
});

// Add a request interceptor
// 全局请求拦截，发起网络请求之前执行
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    NProgress.start();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// 全局响应拦截，网络请求完成之后执行
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    NProgress.done();
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    NProgress.done();
    return Promise.reject(error);
  }
);

/**
 * 发起get请求
 * @param {*} url     请求地址
 * @param {*} params  参数
 * @returns
 */
export const get = (url, params) => instance.get(url, { params });

/**
 * 发起post请求
 * @param {*} url     请求地址
 * @param {*} data    参数
 * @returns
 */
export const post = (url, data) => instance.post(url, data);

/**
 * 发起put请求
 * @param {*} url     请求地址
 * @param {*} data    参数
 * @returns
 */
export const put = (url, data) => instance.put(url, data);

/**
 * 发起delete请求
 * @param {*} url     请求地址
 * @returns           参数
 */
export const del = (url) => instance.delete(url);
