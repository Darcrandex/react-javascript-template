/**
 * @name Home
 * @description
 * @author darcrand
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Button, DatePicker } from 'antd'

import { useStore } from '@/store'
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

            <hr />
            <CounterWithHooks />
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

const CounterWithHooks = observer(() => {
  // 在函数组件中使用 mobx-store-hooks
  // 优点是能明确 store 的来源,并获得类型检测
  const { counter } = useStore()

  return (
    <div>
      <h2>use counter store with hooks</h2>
      <p>{counter.count}</p>
      <Button onClick={counter.add}>add</Button>
      <Button loading={counter.loading} onClick={counter.sub}>
        sub
      </Button>
    </div>
  )
})

export default Home
