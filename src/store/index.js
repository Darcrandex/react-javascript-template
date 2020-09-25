import { configure } from 'mobx'
import createStore from '@/utils/mobx-store'
import counter from './modules/counter'
import request from './modules/request'
import historyStore from './modules/history'

configure({ enforceActions: 'observed' })

const store = createStore({ counter, request, historyStore })
export default store
