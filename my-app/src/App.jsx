import { useState } from 'react'


import Home from "./pages/Home"
import Fit from "./pages/Fit"
import Account from "./pages/Account"

import './pages/Home.css'
import './pages/Fit.css'
import './pages/Account.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import './App.css'


function App() {
  //const [count, setCount] = useState(0)

  return (
    
      
      <BrowserRouter>
       
         <Routes>
            <Route exact path = "/" element={<Home/>}/>
            <Route path = "/Fit" element ={<Fit/>}/>
            <Route path = "/Account" element ={<Account/>}/>
        </Routes>
        
      </BrowserRouter>
      
       
        
     
      
      
    
  )
}

export default App
