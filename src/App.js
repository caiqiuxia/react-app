import React, { Fragment } from 'react'
import Login from './pages/login'
import Home from './pages/home'
// react-router
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import redux from './redux'

function App() {
  return (
      <Fragment>
        <Provider store={redux()}>
          <HashRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
              <Route exact path="/" component={Login} />
              <Redirect to={"/login"} />
            </Switch>
          </HashRouter>
        </Provider>
      </Fragment>
  )
}

export default App
