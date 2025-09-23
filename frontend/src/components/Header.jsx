import React from 'react'

const Header = () => {
  return (
    <div className='h-[34vw] my-[30px] mx-auto bg-[url("../../public/header_img.png")] bg-cover bg-center bg-no-repeat relative rounded-md'>
      <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]'>
        <h2 className='md:text-3xl lg:text-5xl  font-medium text-white'>Order Your Favourite Food Here</h2>
        <p> Discover a variety of delicious meals made fresh and straight your doorstep. Fast, easy, and satisfying!</p>
        <button className='cursor-pointer'>View Menu</button>
      </div>
    </div>
  )
}

export default Header