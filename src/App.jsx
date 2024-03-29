/**
 * @name App
 * @description
 * @author darcrand
 */

import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

const App = () => {
  return (
    <>
      <Suspense fallback='...loading'>
        <Switch>
          {routes.map(({ path, ...props }) => (
            <Route key={path} path={path} {...props} />
          ))}
        </Switch>
      </Suspense>
    </>
  )
}

export default App
