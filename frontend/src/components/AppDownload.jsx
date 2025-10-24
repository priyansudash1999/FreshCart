import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto mt-6 text-[max(3vw,20px)] text-center font-bold'>
      <p>For Better Experience Download <br /> FreshCart App</p>
      <div className='flex justify-center gap-2 mt-8'>
        <img src={assets.play_store} alt="" className='w-[max(30vw, 120px)] max-w-[180px] transition duration-500 cursor-pointer '/>
        <img src={assets.app_store} alt="" className='w-[max(30vw, 120px)] max-w-[180px] transition duration-500 cursor-pointer '/>
      </div>
    </div>
  )
}

export default AppDownload