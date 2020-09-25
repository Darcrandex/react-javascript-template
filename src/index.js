import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import { Provider as MobxProvider } from 'mobx-react'

// antd
import { ConfigProvider, message, Modal } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

import store from './store'
import App from './App'
import './antd-theme.less'
import * as serviceWorker from './serviceWorker'

message.config({
  maxCount: 3,
  top: 50,
})
moment.locale('zh-cn')

const confirmFn = (msg = '', cb = (ok = false) => {}) => {
  Modal.confirm({
    title: msg,
    okText: '确定',
    onOk: () => cb(true),
    onCancel: () => cb(false),
  })
}

ReactDOM.render(
  <HashRouter getUserConfirmation={confirmFn}>
    <MobxProvider {...store}>
      <ConfigProvider locale={zh_CN}>
        <App />
      </ConfigProvider>
    </MobxProvider>
  </HashRouter>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
