import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Navbar, Footer } from './components/index.js'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Placeholder from './pages/Placeholder.jsx'
import LoginPopup from './components/LoginPopup.jsx'

const App = () => {
  const [showLogin, setShowLogin] = React.useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="flex-grow px-4 md:px-12 lg:px-24">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeholder />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
