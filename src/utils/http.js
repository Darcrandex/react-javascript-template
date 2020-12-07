import axios from 'axios'
import requestStore from '@/store/modules/request'

const isDev = process.env.NODE_ENV === 'development'
const defaultProxyPrefix = process.env.REACT_APP_DEFAULT_PROXY_PREFIX
const customProxyRegx = new RegExp(process.env.REACT_APP_CUSTOM_PROXY_REGEXP || '')
const httpRegx = /^http(s?):\/\//

// 接口返回状态码
const RESPONSE_STATUS = {
  SUCCESS: 20000,
}

// 获取token
function getToken() {
  return window.localStorage.getItem('token') || false
}

// 配置基础请求路径
function getBaseURL() {
  // 在这里配置主要是因为'AppConfig'是异步获取的,有可能获取不到
  return isDev ? '' : window?.AppConfig?.PRODUCTION_API_URL
}

// 修改请求url
const withProxy = (url = '') => {
  if (httpRegx.test(url)) {
    return url
  }

  const hasCustomPrefix = customProxyRegx.test(url)
  if (hasCustomPrefix) {
    if (isDev) {
      return url
    } else {
      const urlArr = url.split('/')
      urlArr.splice(0, 2)
      const baseReqUrl = '/' + urlArr.join('/')

      return baseReqUrl
    }
  } else {
    return isDev ? defaultProxyPrefix + url : url
  }
}

const axiosInstance = axios.create({
  timeout: 10000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

// 请求拦截
axiosInstance.interceptors.request.use((config = {}) => {
  /**
   * @param {boolean?} useLoading 自定义的配置项,表示是否使用默认的全屏loading遮罩层
   */
  let { baseURL = '', url = '', headers = {}, useLoading = true } = config

  const token = getToken()
  token && (headers.Authorization = token)
  url = withProxy(url)
  baseURL = getBaseURL()
  useLoading && requestStore.add()

  return { ...config, baseURL, url, headers, useLoading }
})

// 响应拦截
axiosInstance.interceptors.response.use(
  (response = {}) => {
    const { useLoading } = response.config
    useLoading && requestStore.sub()

    switch (response.data.code) {
      case RESPONSE_STATUS.SUCCESS:
        return response.data
      default:
        return Promise.reject(response.data)
    }
  },
  (err = {}) => {
    const { useLoading } = err.config
    useLoading && requestStore.sub()

    return Promise.reject(err)
  }
)

const http = {
  get: (url = '', params = {}, config = {}) => axiosInstance.get(url, { params, ...config }),
  delete: (url = '', params = {}, config = {}) => axiosInstance.delete(url, { params, ...config }),
  post: axiosInstance.post,
  put: axiosInstance.put,
}

export default http
