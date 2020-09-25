/**
 * @name TestPage
 * @author darcrand
 * @desc
 */

import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'

class TestPage extends Component {
  render() {
    return (
      <div>
        <Prompt message='是否确定离开这个页面 ?' />

        <h1>测试页面</h1>
      </div>
    )
  }
}

export default TestPage
