/**
 * @name Home
 * @author darcrand
 * @desc
 */

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'
import http from '@/utils/http'
import styles from './styles.module.less'

@inject('counter')
@observer
class Home extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <Button
          type='primary'
          onClick={() => {
            http.get('/topics-20').then(console.log)
          }}
        >
          click
        </Button>

        <p>count: {this.props.counter.count}</p>
        <Button onClick={() => this.props.counter.add()}>add</Button>

        <NavLink to='/test'>to test</NavLink>
      </div>
    )
  }
}

export default Home
