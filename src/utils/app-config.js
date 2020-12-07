import axios from 'axios'

// 用来定义配置项的文件(放到'public'中)
const CONFIG_FILE_PATH = '/config.json'

// 默认配置
const DEFAULT_APP_CONFIG = {
  PRODUCTION_ORIGIN: '',
  PRODUCTION_API_URL: '',
}

// 注入指定的项目配置到window全局变量
async function injectAppConfig(callback) {
  // 先给window注入默认的配置
  window.AppConfig = DEFAULT_APP_CONFIG

  try {
    // timestamp是为了防止浏览器缓存,导致修改'config.json'后没有刷新
    const url = `${process.env.PUBLIC_URL}${CONFIG_FILE_PATH}?timestamp=${Date.now()}`
    const { data } = await axios.get(url)
    // 修改
    window.AppConfig = Object.assign({}, DEFAULT_APP_CONFIG, data)
  } catch (err) {
    console.error('获取 app-config 失败\n', err)
  }

  if (typeof callback === 'function') {
    callback()
  }
}

export default injectAppConfig
