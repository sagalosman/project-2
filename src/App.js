import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Forex from './components/Forex'
import Navbar from './components/Navbar'
import Music from './components/Music'

import './styles/style.scss'
import 'bulma'

const App = () => {
  return <BrowserRouter > 
    <Navbar/>
    <Switch>
      <Route exact path="/project-2/" component={Home} />
      <Route exact path="/forex" component={Forex} />
    </Switch>
  </BrowserRouter>
}

export default App