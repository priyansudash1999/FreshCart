import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-[#262626]'>Explore Our Menu</h1>
      <p className=' text-[#808080]'>Choose from a wide range of delicious dishes crafted to satisfy every craving. Fresh, tasty, and made just for you!</p>
      <div className='grid grid-cols-4 md:grid-cols-8   lg:flex justify-between items-center md:gap-5 text-center md:my-2 mx-0 overflow-x-scroll hide-scrollbar scroll-smooth'>
        {
          menu_list.map((item, ind) => (
            <div 
            onClick={() => setCategory(prev => prev === item.menu_name ? "All": item.menu_name)} 
            key={ind}
            className="flex flex-col items-center cursor-pointer"
            >
              <img 
                src={item.menu_image} 
                alt="" 
                className={
                  category === item.menu_name 
                    ? "w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-200 border-4 border-orange-500" 
                    : "w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition duration-200"
                } 
              />
              <p className="mt-2 text-[#747474] cursor-pointer text-sm sm:text-base md:text-md lg:text-lg">
                {item.menu_name}
              </p>
            </div>

          ))
        }
      </div>
      <hr className="border border-[#e2e2e2] my-2 mx-0" />
    </div>
  )
}

export default ExploreMenu