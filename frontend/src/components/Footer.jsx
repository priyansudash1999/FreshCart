import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-4 px-4 py-[8vw] pt-16'>
      {/* Grid Section */}
      <div className='w-full grid grid-cols-[2fr_1fr_1fr] gap-16'>
        <div className='flex flex-col items-start gap-4'>
          <img src={assets.logo} alt="" />
          <p className='mt-2'>
            Fast, fresh, and reliable — that’s our promise. 
          </p>
          <div className='flex gap-4 mt-3 mr-3'>
            <img src={assets.facebook_icon} alt="" className='cursor-pointer'/>
            <img src={assets.twitter_icon} alt="" className='cursor-pointer'/>
            <img src={assets.linkedin_icon} alt="" className='cursor-pointer'/>
          </div>
        </div>

        <div className='flex flex-col items-start gap-4'>
          <h2 className='text-xl text-white'>Company</h2>
          <ul>
            <li className='mb-1 cursor-pointer'>Home</li>
            <li className='mb-1 cursor-pointer'>About Us</li>
            <li className='mb-1 cursor-pointer'>Delivery</li>
            <li className='mb-1 cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        <div className='flex flex-col items-start gap-4'>
          <h2 className='text-xl text-white'>Get In Touch</h2>
          <ul>
            <li>+1-623-0352-0000</li>
            <li className='cursor-pointer'>contact@freshcart.com</li>
          </ul>
        </div>
      </div>

      <p className='text-center mt-8 text-sm'>
        © 2025 FreshCart. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
