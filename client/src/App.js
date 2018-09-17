import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Menus from './components/Menus'
import NoMatch from './components/NoMatch'

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path='/' component={Menus} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App
