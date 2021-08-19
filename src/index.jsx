import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import 'core-js'
import 'regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider as MobxProvider } from 'mobx-react'

// antd
import { ConfigProvider } from 'antd'
import languageZHCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

import App from './App'
import { store, StoreProvider } from '@/store'

// 时间组件中文
moment.locale('zh-cn')

ReactDOM.render(
  <BrowserRouter>
    <MobxProvider {...store}>
      <StoreProvider>
        <ConfigProvider locale={languageZHCN}>
          <App />
        </ConfigProvider>
      </StoreProvider>
    </MobxProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
