import { observable, computed, action } from 'mobx'

import { StoreModule } from '@/utils/mobx-store'
import { axiosInstance, withProxy } from '@/utils/http'

class Request extends StoreModule {
  @observable requestCount = 0

  @computed
  get isFetching() {
    return this.requestCount > 0
  }

  @action
  _onRequest = (config = {}) => {
    // useLoading
    // 自定义的配置项,表示是否使用默认的全屏loading遮罩层,默认为true
    let { url = '', headers = {}, useLoading = true } = config
    if (useLoading) {
      this.requestCount++
    }

    const token = window.localStorage.getItem('token')
    token && (headers.Authorization = token)

    url = withProxy(url)

    return { ...config, url, headers, useLoading }
  }

  @action
  _onResponse = (response = {}) => {
    if (response.config.useLoading) {
      this.requestCount--
    }

    return response.data
  }

  @action
  _onResponseError = (err = null) => {
    if (err.config.useLoading) {
      this.requestCount--
    }

    const { historyStore } = this.$getStores()
    if (historyStore && historyStore.history) {
      historyStore.history.push('/login')
    }

    return Promise.reject(err)
  }
}

// 在这里使用拦截器关联store
const requestStore = new Request()
axiosInstance.interceptors.request.use(requestStore._onRequest)
axiosInstance.interceptors.response.use(requestStore._onResponse, requestStore._onResponseError)

export default requestStore
