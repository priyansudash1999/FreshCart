import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-[100vh] border-[1.5px] border-[#9a9a9a]'>
      <div className="pt-10 pl-[20%] flex flex-col gap-4">
        <div className="flex items-center gap-6 border-[1px] border-[#919191] border-r-0 py-[8px] px-2 rounded-tl-[3px] rounded-bl-[3px] rounded-tr-[0px] rounded-br-[0px] cursor-pointer">
          <img src={assets.add_icon} alt="" />
          <p>Add Item</p>
        </div>
        <div className="flex items-center gap-6 border-[1px] border-[#919191] border-r-0 py-2 px-2 rounded-tl-[3px] rounded-bl-[3px] rounded-tr-[0px] rounded-br-[0px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </div>
        <div className="flex items-center gap-6 border-[1px] border-[#919191] border-r-0 py-2 px-2 rounded-tl-[3px] rounded-bl-[3px] rounded-tr-[0px] rounded-br-[0px] cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar