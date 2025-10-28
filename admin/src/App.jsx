import React from 'react'
import { Navbar, Sidebar } from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="flex ">
        <Sidebar />
      </div>
    </div>
  )
}

export default App