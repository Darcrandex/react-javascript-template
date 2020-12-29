import { observable, action } from 'mobx'
import { StoreModule } from '@/utils/mobx-store'

class Counter extends StoreModule {
  @observable count = 0

  @action
  add = () => {
    this.count++
  }

  @action
  sub = async () => {
    await waiting(2)
    this.$set({ count: this.count - 1 })
  }
}

async function waiting(second = 1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000 * second)
  })
}

export default new Counter()
