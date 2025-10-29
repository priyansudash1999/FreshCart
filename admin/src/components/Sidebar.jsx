import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-[1.5px] border-[#9a9a9a]'>
      <div className="pt-10 pl-[20%] flex flex-col gap-4">
        <NavLink to="/add" className="flex items-center gap-6 border border-[#d3d3d3] border-r-0 py-2 px-2 rounded-tl-[3px] rounded-bl-[3px] rounded-tr-none rounded-br-none cursor-pointer ">
          <img className='max-[900px]:hidden' src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to="/list" className="flex items-center gap-6 border border-[#d3d3d3] border-r-0 py-2 px-2 rounded-tl-[3px] rounded-bl-[3px] rounded-tr-none rounded-br-none cursor-pointer">
          <img className='max-[900px]:hidden' src={assets.order_icon} alt="" />
          <p >List Items</p>
        </NavLink>
        <NavLink to="/order" className="flex items-center gap-6 border border-[#d3d3d3] border-r-0 py-2 px-2 rounded-tl-[3px] rounded-bl-[3px] rounded-tr-none rounded-br-none cursor-pointer">
          <img className='max-[900px]:hidden src={assets.order_icon} 'alt="" />
          <p >Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar