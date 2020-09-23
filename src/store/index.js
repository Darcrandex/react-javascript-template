import { configure } from 'mobx'
import createStore from '@/utils/mobx-store'
import counter from './modules/counter'
import request from './modules/request'

configure({ enforceActions: 'observed' })

const store = createStore({ counter, request })
export default store
