import React, { useState } from 'react'
import {assets} from "../assets/assets"
const Navbar = () => {

  const [menu, setMenu] = useState('home')

  return (
    <div className="py-5 flex justify-between items-center">
      <img src={assets.logo} alt="" className="w-[150px]" />
      <ul className="flex list-none gap-4 text-[#49557e] text-[18px] cursor-pointer">
        <li onClick={() => setMenu('home')} className={menu === "home" ? "pb-[2px] border-b-[1px] border-gray-500" : ""} >Home</li>
        <li onClick={() => setMenu('menu')} className={menu === "menu" ? "pb-[2px] border-b-[1px] border-gray-500" : ""}>Menu</li>
        <li onClick={() => setMenu('app')} className={menu === "app" ? "pb-[2px] border-b-[1px] border-gray-500" : ""}>Mobile-App</li>
        <li onClick={() => setMenu('contact')} className={menu === "contact" ? "pb-[2px] border-b-[1px] border-gray-500" : ""}>Contact Us</li>
      </ul>
      <div className='flex justify-between gap-6 my-2'>
        <img src={assets.search_icon} alt="" className='h-[30px] mt-2 '/>
        <div className='flex items-center relative'>
          <img src={assets.basket_icon} alt="" className=''/>
          <div className='absolute min-w-[10px] min-h-[10px] bg-orange-400 rounded-md -top-1 -right-1'>
            
          </div>
        </div>
        <button className="bg-transparent text-[16px] text-[#495572] border-1 border-black cursor-pointer px-6 py-2 rounded-full hover:bg-[#9e9b9b] transition duration-200">
          Sign In
        </button>

      </div>
    </div>
  )
}

export default Navbar