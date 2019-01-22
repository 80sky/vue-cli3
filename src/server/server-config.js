import axios from "axios";
import store from "@/store/store";
import _ from "lodash";
//请求预处理
let requestPreConfig = null;
//请求预处理出现错误
let requestError = null;
//响应预处理
let responsePreProcess = null;
//响应错误
let responseError = null;
//服务实例
let instance = null;

let getInstance = () => {
  if (!instance) {
    instance = axios.create({
      timeout: 25000,
      baseURL: process.env.BASE_URL
    });
    //请求预处理
    instance.interceptors.request.use(
      function(config) {
        if (requestPreConfig) {
          requestPreConfig(config);
        }
        //针对IE浏览器缓存ajax请求的问题添加随机时间戳
        let random = `timestamp=${new Date().getTime()}`;
        if (config.url.indexOf("?") === -1) {
          random = `?` + random;
        } else {
          random = `&` + random;
        }
        config.url = config.url.concat(random);

        if (store.getters.getToken.length > 0) {
          config.headers["token"] = store.getters.getToken;
        }
        return config;
      },
      function(error) {
        if (requestError) {
          requestError(error);
        }
        return Promise.reject(error);
      }
    );
    //响应预处理
    instance.interceptors.response.use(
      function(response) {
        if (
          response.headers &&
          _.toLower(response.headers["content-type"]) ===
            "application/octet-stream"
        ) {
          //二进制流直接结束,返回流数据
          return Promise.resolve(response.data);
        }
        // console.log(JSON.stringify(response.data));
        if (response.data.code === 200) {
          if (responsePreProcess) {
            responsePreProcess(response.data.data);
          }
          return Promise.resolve(response.data.data);
        } else {
          let error = `${response.data.msg}(${response.data.code})`;
          if (responseError) {
            responseError(response.data.code, error);
          }
          return Promise.reject(error);
        }
      },
      function(error) {
        if (responseError) {
          responseError(error.response.status, error.message);
        }
        return Promise.reject(error.message);
      }
    );
  }
  return instance;
};

let module = {
  setRequestPreConfigCallBack: callback => {
    requestPreConfig = callback;
  },
  setRequestErrorCallBack: callback => {
    requestError = callback;
  },
  setResponsePreProcessCallback: callback => {
    responsePreProcess = callback;
  },
  setResponseErrorCallback: callback => {
    responseError = callback;
  },
  get: uri => {
    return getInstance().get(uri);
  },
  post: (uri, param) => {
    return getInstance().post(uri, param);
  },
  put: (uri, param) => {
    return getInstance().put(uri, param);
  },
  remove: uri => {
    return getInstance().delete(uri);
  },
  getFile: (uri, name) => {
    return getInstance()
      .get(uri, { responseType: "blob" })
      .then(data => {
        require("downloadjs")(data, name);
      });
  }
};

export default module;
