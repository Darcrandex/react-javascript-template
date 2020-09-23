import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

import store from './store'
import App from './App'
import './antd-theme.less'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <HashRouter>
    <Provider {...store}>
      <App />
    </Provider>
  </HashRouter>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
