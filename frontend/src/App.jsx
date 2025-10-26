import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Navbar, Footer} from './components/index.js'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Placeholder from './pages/Placeholder.jsx'
import LoginPopup from './components/LoginPopup.jsx'


const App = () => {

  const [showLogin, setShowLogin] = React.useState(false)

  return (
    <>
      {
        showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>
      }
      <div className="app">
        <Navbar setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element = {<Cart />} />
          <Route path='/order' element = {<Placeholder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App