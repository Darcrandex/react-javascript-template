import React, { Suspense } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { ScreenLoading } from '@/components'
import routes from './routes'

function App(props) {
  props.historyStore.setHistory(props.history)

  return (
    <>
      <Suspense fallback={<ScreenLoading loading />}>
        <Switch>
          {routes.map(({ path, component, ...rest }, index) => (
            <Route key={index} path={path} component={component} {...rest} />
          ))}
        </Switch>
      </Suspense>

      <ScreenLoading loading={props.request.isFetching} />
    </>
  )
}

export default withRouter(inject('request', 'historyStore')(observer(App)))
