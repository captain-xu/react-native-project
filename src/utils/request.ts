import Axios from 'axios';
import { obj2str } from './obj2str'

let client = Axios.create({
  timeout: 5000,
  paramsSerializer: params => obj2str(params),
  responseType: 'text',
  maxContentLength: Math.pow(1024, 2),
  baseURL: 'http://uat-sj-gateway.aihuishou.com'
});

client.interceptors.request.use(config => {
    let { method, url, params, data } = config;
    console.log(method, url, params || data);
    return config;
  }, error => {
    console.log(error);
    return Promise.reject({code: 400, message: error.message})
  }
);

client.interceptors.response.use(response => {
    let { status, data, config: { url } } = response;
    console.log(url, status, data)
    return response;
  }, error => {
    console.log(error);

    if (error.response) {
      let { status, statusText } = error.response;

      if (statusText === undefined) {
        if (status === 200) {
          statusText = '成功'
        } else if (status === 400) {
          statusText = '请求不正确'
        } else if (status === 401) {
          statusText = '没有权限'
        } else if (status === 413) {
          statusText = '发送内容过大'
        } else if (status === 500) {
          statusText = '服务器内部错误'
        } else if (status === 502) {
          statusText = '服务暂时不可用'
        } else if (status === 504) {
          statusText = '服务器处理超时'
        } else {
          statusText = '请求服务出错'
        }
      }
      return Promise.reject({code: status, messaeg: statusText})
    } else {
      if (error.message.startsWith('timeout of ')) {
        return Promise.reject({code: 408, messaeg: '请求超时'})
      } else {
        return Promise.reject({code: 500, messaeg: error.message})
      }
    }
  }
);

export async function requestApi(config) {
  return client.request(config)
    .then(response => {
      if (response.data && (response.data.code === 200 || response.data.error === 0)) {
        return response.data
      } else {
        let { code, resultMessage = '', data } = response.data || {};
        return Promise.reject({code, message: resultMessage, data})
      }
    }, err => {
      return Promise.reject(err);
    })
}

export function getApi(url, params = {}, { headers = {}, timeout = 15000 } = {}) {
  return requestApi({
    url,
    method: 'GET',
    params,
    headers,
    timeout,
  })
}

export function postApi(url, data = {}, { headers = {}, timeout = 15000 } = {}) {
  return requestApi({
    url,
    method: 'POST',
    data: data,
    headers,
    timeout,
  })
}