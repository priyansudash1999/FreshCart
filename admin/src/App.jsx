import React from 'react'
import { Navbar, Sidebar } from './components'
import {Routes, Route} from "react-router-dom"
import { AddProduct, DisplayList, Orders } from './pages'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="flex ">
        <Sidebar />
        <Routes>
          <Route path='/add' element= {<AddProduct url={url}/>}/>
          <Route path='/list' element= {<DisplayList url={url}/>}/>
          <Route path='/order' element= {<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App