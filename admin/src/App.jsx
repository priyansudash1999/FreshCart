import React from 'react'
import { Navbar, Sidebar } from './components'
import {Routes, Route} from "react-router-dom"
import { AddProduct, DisplayList, Orders } from './pages'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="flex ">
        <Sidebar />
        <Routes>
          <Route path='/add' element= {<AddProduct />}/>
          <Route path='/list' element= {<DisplayList />}/>
          <Route path='/order' element= {<Orders />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App