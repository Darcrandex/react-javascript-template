/**
 * @name Home
 * @description
 * @author darcrand
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Button, DatePicker } from 'antd'
import Title from '@/components/Title'
import { get } from '@/utils/http'

@inject('counter')
@observer
class Home extends React.Component {
  render() {
    return (
      <>
        <ol>
          <li>
            <h2>antd with custom theme settings.</h2>
            <Button type='primary'>Click Me</Button>
            <DatePicker />
          </li>

          <li>
            <h2>less module</h2>
            <Title>a component use less style and less module.</Title>
          </li>

          <li>
            <h2>Mobx</h2>
            <p>{this.props.counter.count}</p>
            <Button onClick={this.props.counter.add}>add</Button>
            <Button loading={this.props.counter.loading} onClick={this.props.counter.sub}>
              sub
            </Button>
          </li>

          <li>
            <h2>Axios</h2>
            <Button onClick={() => get('/topics')}>get topics</Button>

            <p>
              <q>
                <mark>F12</mark> to get details.
              </q>
            </p>
          </li>

          <li>
            <h2>React Router</h2>
            <Link to='/about'>
              <Button type='link'>goto About Page</Button>
            </Link>
          </li>
        </ol>
      </>
    )
  }
}

export default Home
