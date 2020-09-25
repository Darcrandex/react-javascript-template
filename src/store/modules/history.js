import { observable, action } from 'mobx'

class HistoryStore {
  @observable history = undefined
  @action.bound setHistory(historyIns = {}) {
    if (!this.history) {
      this.history = historyIns
    }
  }
}

export default new HistoryStore()
