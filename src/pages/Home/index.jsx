/**
 * @name Home
 * @author darcrand
 * @desc
 */

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Button, DatePicker } from 'antd'
import http from '@/utils/http'
import styles from './styles.module.less'

@inject('counter')
@observer
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>

        <ol>
          <li>
            <p>less css module</p>
            <p className={styles.title}>custom title</p>
          </li>
          <li>
            <p>antd</p>

            <Button type='primary'>click me</Button>
            <DatePicker />
          </li>
          <li>
            <p>react router</p>
            <NavLink to='/test'>to test</NavLink>
          </li>
          <li>
            <p>axios</p>
            <Button
              type='primary'
              onClick={() => {
                http.get('/topics').then(console.log)
              }}
            >
              click
            </Button>
          </li>
          <li>
            <p>mobx</p>
            <p>count: {this.props.counter.count}</p>
            <Button onClick={() => this.props.counter.add()}>add</Button>
            <Button onClick={() => this.props.counter.sub()}>async sub</Button>
          </li>
        </ol>
      </div>
    )
  }
}

export default Home
