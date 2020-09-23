const { createProxyMiddleware } = require('http-proxy-middleware')
const defaultProxyPrefix = process.env.REACT_APP_DEFAULT_PROXY_PREFIX
const customProxyRegx = new RegExp(process.env.REACT_APP_CUSTOM_PROXY_REGEXP || '')
const defaultProxy = process.env.REACT_APP_DEFAULT_PROXY

const createProxy = (url = '', target = '') => {
  if (url !== defaultProxyPrefix && !customProxyRegx.test(url)) {
    throw Error(`\n代理错误:自定义代理前缀 "${url}" 不符合格式要求\n`)
  }

  return createProxyMiddleware(url, {
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^${url}`]: '',
    },
  })
}
module.exports = function (app) {
  app.use(createProxy(defaultProxyPrefix, defaultProxy), createProxy('/api-test', 'http://www.my-website.com/api'))
}
