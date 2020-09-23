import axios from 'axios'

const isDev = process.env.NODE_ENV === 'development'
const defaultProxyPrefix = process.env.REACT_APP_DEFAULT_PROXY_PREFIX
const customProxyRegx = new RegExp(process.env.REACT_APP_CUSTOM_PROXY_REGEXP || '')
const httpRegx = /^http(s?):\/\//

export const withProxy = (url = '') => {
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

export const axiosInstance = axios.create({
  baseURL: '',
  timeout: 10000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

const http = {
  get: (url = '', params = {}, config = {}) => axiosInstance.get(url, { params, ...config }),
  delete: (url = '', params = {}, config = {}) => axiosInstance.delete(url, { params, ...config }),
  post: axiosInstance.post,
  put: axiosInstance.put,
}

export default http
