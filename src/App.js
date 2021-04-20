import './App.css'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './screens/Home'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default App
