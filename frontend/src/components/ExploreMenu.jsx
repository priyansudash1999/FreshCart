import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#262626]'>Explore Our Menu</h1>
      <p className='max-w-[60%] text-[#808080]'>Choose from a wide range of delicious dishes crafted to satisfy every craving. Fresh, tasty, and made just for you!</p>
      <div className='flex justify-between items-center gap-5 text-center my-2 mx-0 overflow-x-scroll hide-scrollbar scroll-smooth'>
        {
          menu_list.map((item, ind) => (
            <div className='' key={ind}>
              <img src={item.menu_image} alt="" className='w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-200' />
              <p className='mt-2 text-[#747474] cursor-pointer text-md'>{item.menu_name}</p>
            </div>
          ))
        }
      </div>
      <hr className="border border-[#e2e2e2] my-2 mx-0" />
    </div>
  )
}

export default ExploreMenu