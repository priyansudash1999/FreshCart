import React from 'react'
import {assets} from "../assets/assets"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-2 px-[4%] my-2'>
      <img src={assets.logo} alt="" className='w-[10%] '/>
      <img src={assets.profile_image} alt="" className='w-8'/>
    </div>
  )
}

export default Navbar