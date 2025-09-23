import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Navbar} from './components/index.js'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Placeholder from './pages/Placeholder.jsx'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element = {<Cart />} />
        <Route path='/order' element = {<Placeholder />} />
      </Routes>
    </div>
  )
}

export default App