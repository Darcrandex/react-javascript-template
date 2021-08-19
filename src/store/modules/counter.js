import { observable, action, runInAction } from 'mobx'
import { sleep } from '@/utils'

class CounterStore {
  @observable count = 0
  @observable loading = false

  @action.bound
  add() {
    this.count++
  }

  @action.bound
  async sub() {
    this.loading = true
    await sleep(2000)

    runInAction(() => {
      this.count--
      this.loading = false
    })
  }
}

export default new CounterStore()
