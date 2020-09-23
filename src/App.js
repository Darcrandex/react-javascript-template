import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { FullScreenLoading } from '@/components'
import routes from './routes'

function App(props) {
  return (
    <>
      <Suspense fallback={<FullScreenLoading loading />}>
        <Switch>
          {routes.map(({ path, component, ...rest }, index) => (
            <Route key={index} path={path} component={component} {...rest} />
          ))}
        </Switch>
      </Suspense>

      <FullScreenLoading loading={props.request.isFetching} />
    </>
  )
}

export default inject('request')(observer(App))
