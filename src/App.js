import './App.css'
import { Route, Switch } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import Home from './screens/Home'
import Creation from './screens/Creation'
import PictureChoice from './components/PictureChoice'
import TextChoice from './components/TextChoice'

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/creation'>
          <Creation />
        </Route>
        <Route path='/picture'>
          <PictureChoice />
        </Route>
        <Route path='/text'>
          <TextChoice />
        </Route>
      </Switch>
    </div>
  )
}

export default App
