import { useState } from 'react'


import Home from "./pages/Home"
import Fit from "./pages/Fit"
import Account from "./pages/Account"

import './pages/Home.css'
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"


import './App.css'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
        <Router>
          <Switch>
            <Route exact path = "/" component ={<Home/>}/>
            <Route path = "/Fit" component ={<Fit/>}/>
            <Route path = "/Account" component ={<Account/>}/>
          </Switch>
        </Router>
      
       
        
      </div>
      
      
    </>
  )
}

export default App
