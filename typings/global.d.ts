interface IAppConfig {
  // 完整域名
  PRODUCTION_ORIGIN: string

  // 接口请求的基础路径
  PRODUCTION_API_URL: string
}

interface Window {
  AppConfig: IAppConfig
}
