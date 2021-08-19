import axios from 'axios'
import { message } from 'antd'
import { tokenStorage } from '@/storages'

const isDev = process.env.NODE_ENV === 'development'
const defaultProxyPrefix = process.env.REACT_APP_DEFAULT_PROXY_PREFIX
const customProxyRegx = new RegExp(process.env.REACT_APP_CUSTOM_PROXY_REGEXP || '')
const httpRegx = /^http(s?):\/\//

// 接口返回状态码
const RESPONSE_STATUS = {
  SUCCESS: '2000',
  INVALID_TOKEN: '4000',
}

// 配置基础请求路径
function getBaseURL() {
  // 在这里配置主要是因为'AppConfig'是异步获取的,有可能获取不到
  return isDev ? '' : window?.AppConfig?.PRODUCTION_API_URL
}

// 修改请求url
export const withProxy = (url = '') => {
  if (httpRegx.test(url)) {
    return url
  }

  const hasCustomPrefix = customProxyRegx.test(url)
  if (hasCustomPrefix) {
    if (isDev) {
      return url
    }
    const urlArr = url.split('/')
    urlArr.splice(0, 2)
    const baseReqUrl = `/${urlArr.join('/')}`

    return baseReqUrl
  }
  return isDev ? defaultProxyPrefix + url : url
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
  console.log(useLoading && '请求数 +1')

  const token = tokenStorage.get('value')
  token && (headers.Authorization = token)
  url = withProxy(url)
  baseURL = getBaseURL()

  return { ...config, baseURL, url, headers, useLoading }
})

// 响应拦截
axiosInstance.interceptors.response.use(
  (response = {}) => {
    const { useLoading, useError } = response.config
    console.log(useLoading && '请求数 -1')

    // 接口报错提示
    if (
      useError &&
      response &&
      response.data &&
      response.data.code !== undefined &&
      response.data.code !== RESPONSE_STATUS.SUCCESS
    ) {
      const msg = response.data.msg || '请求失败'
      message.error(msg)
    }

    switch (response.data.code) {
      case RESPONSE_STATUS.SUCCESS:
        return response.data
      case RESPONSE_STATUS.INVALID_TOKEN:
      case RESPONSE_STATUS.TOKEN_TIMEOUT:
        return Promise.reject(response.data)
      default:
        return Promise.reject(response.data)
    }
  },
  (err) => {
    // 先获取 err 中保存的 config
    // 注意: 通过 'cancel' 取消的请求无法通过这种方式获取 config
    if (err && typeof err.toJSON === 'function') {
      const { useLoading } = err.toJSON().config || {}
      console.log(useLoading && '请求数 -1')
    }

    return Promise.reject(err)
  }
)

export const get = (url = '', params = {}, config = { useLoading: true, useError: true }) =>
  axiosInstance.get(url, { params, ...config })
export const post = (url = '', data = {}, config = { useLoading: true, useError: true }) =>
  axiosInstance.post(url, data, config)
