import { observable, computed, action } from 'mobx'
import { StoreModule } from '@/utils/mobx-store'

class Request extends StoreModule {
  @observable requestCount = 0

  @computed
  get isFetching() {
    return this.requestCount > 0
  }

  @action
  add = () => {
    this.requestCount++
  }

  @action
  sub = () => {
    this.requestCount = Math.max(0, this.requestCount - 1)
  }
}

export default new Request()
