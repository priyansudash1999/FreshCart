import React from 'react'

const Header = () => {
  return (
    <div className='h-[34vw] my-[30px] mx-auto bg-[url("../../public/header_img.png")] bg-cover bg-center bg-no-repeat relative rounded-md max-[1050px]:h-[38vw]'>
      <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] md:bottom-[15%] lg:border-[20%] xl:border-[50%] left-[6vw] '>
        <h2 className=' text-2xl md:text-3xl lg:text-5xl 2xl:text-7xl font-medium text-white'>Order Your Favourite Food Here</h2>
        <p className='text-sm md:text-lg lg:text-xl text-white'> Discover a variety of delicious meals made fresh and straight your doorstep</p>
        <button className='cursor-pointer bg-white text-[#9e9b9b] font-medium py-1 px-2 rounded-full text-sm md:text-md lg:text-lg'>View Menu</button>
      </div>
    </div>
  )
}

export default Header