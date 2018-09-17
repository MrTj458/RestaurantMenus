import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Menus from './components/Menus'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Menu from './components/Menu'

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Menus} />
      <Route exact path='/menus/:id' component={Menu} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App
