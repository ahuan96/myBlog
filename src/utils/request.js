import axios from "axios";
import { Message, Loading } from "element-ui";

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 30000 // request timeout
});

// request interceptor
// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers["Cache-Control"] = "no-cache"; // ie清缓存，否则无法正常刷新
    config.headers["Pragma"] = "no-cache"; // HTTP/1.1版本，ie清缓存，否则无法正常刷新

    // const token = Vue.ls.get("ACCESS_TOKEN") //token是放在vuex中的state中
    // if (token) {
    //   config.headers['X-Access-Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
    // }

    config.headers["X-Access-Token"] = "51ff22097c20a90c05d0981c3ac77b7d";

    if (config.method == "post") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
      // `transformRequest` 允许在向服务器发送前，修改请求数据
      config.transformRequest = [
        function(data, headers) {
          // Do whatever you want to transform the data
          let ret = "";
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
          }
          return ret.substring(0, ret.length - 1);
        }
      ];
    }
    if (config.method == "get") {
      config.params = {
        _t: Date.parse(new Date()) / 1000, //让每个请求都携带一个不同的时间参数，防止浏览器缓存不发送请求
        ...config.params
      };
    }
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
);

// respone interceptor
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // const token = response.headers["authorization"]
    // if (token) {
    //   Vue.ls.set("ACCESS_TOKEN", token) //token是放在vuex中的state中
    // }

    var res = response.data;
    // 以下请根据后端返回具体格式修改!!!!!
    if (res.code === 200) {
      return res;
    } else {
      Message({
        message: res.msg,
        type: "error",
        duration: 5 * 1000,
        offset: 100
      });
      return Promise.reject(res);
    }
  },
  error => {
    // 错误处理
    Message({
      message: error.msg,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);
