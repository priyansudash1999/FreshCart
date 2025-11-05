import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)

  return (
    <div 
      className='w-[100%] m-auto rounded-md shadow-lg transition duration-300 ease-in-out animate-fadeIn '
      >
      <div className='relative'>
        <img src={url +"/images/"+image} alt="" className='w-[100%] rounded-t-md'/>
        {
          !cartItems[id] ? 
            <img 
              className='w-7 absolute bottom-3 right-3 cursor-pointer rounded-full' 
              onClick={() => addToCart(id)} 
              src={assets.add_icon_white}/> 
            : 
            <div className='absolute bottom-3 right-3 flex items-center gap-2 p-2 rounded-full bg-white'>
              <img 
                src={assets.remove_icon_red} 
                onClick={() => removeFromCart(id)}
                className='w-6'
              />
              <p>{cartItems[id]}</p>
              <img 
                src={assets.add_icon_green} 
                alt="" 
                onClick={() => addToCart(id)}
                className='w-6'
              />
            </div>
        }
      </div>
      <div className='p-4 '>
        <div className='flex justify-between items-center mb-2 '>
          <p className='text-lg font-black'>{name}</p>
          <img src={assets.rating_starts} alt="" className='w-[70px]'/>
        </div>
        <p className='text-gray-600 text-md'>{description}</p>
        <p className='text-orange-500 text-lg font-semibold mt-2'>${price}.00</p>
      </div>
    </div>
  )
}

export default FoodItem