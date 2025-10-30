import React from 'react'
import { Navbar, Sidebar } from './components'
import {Routes, Route} from "react-router-dom"
import { AddProduct, DisplayList, Orders } from './pages'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <div>
      <ToastContainer />
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