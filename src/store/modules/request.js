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
    this.requestCount--
  }
}

export default new Request()
