import React, {useContext} from 'react'
import { StoreContext } from '../context/StoreContext'

const Cart = () => {

  const {cartItems, food_list, removeFromCart, getCartTotal} = useContext(StoreContext) 

  return (
    <div className='mt-20 '>
      <div className="flex flex-col">
        <div className="grid grid-cols-[1.25fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-600 text-[17px] ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='h-[1px] text-[#e2e2e2] mb-2'/>
        {
          food_list.map((food, ind) => {
            if(cartItems[food._id] > 0){
              return (
                <div>
                  <div className='grid grid-cols-[1.25fr_1.5fr_1fr_1fr_1fr_0.5fr] cart-items-item items-center text-black'>
                    <img src={food.image} alt="" className='w-[50px]'/>
                    <p>{food.name}</p>
                    <p>${food.price}</p>
                    <p>{cartItems[food._id]}</p>
                    <p>${food.price * cartItems[food._id]}</p>
                    <p onClick={() => removeFromCart(food._id)} className='text-red-600 cursor-pointer'>x</p>
                  </div>
                  <hr className='h-[1px] text-[#e2e2e2] mb-2 mt-2'/>
                </div>
              )
            }
          })
        }
      </div>
      <div className='mt-16 flex justify-between gap-4 max-[750px]:flex-col-reverse'>
        <div className="flex flex-1 flex-col gap-4">
          <h2>Cart Total</h2>
          <div>
            <div className="flex justify-between text-[#555555]">
              <p>SubTotal</p>
              <p>${getCartTotal()}</p>
            </div>
            <hr className='mx-0 my-2'/>
            <div className="flex justify-between text-[#555555]">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr className='mx-0 my-2'/>
            <div className="flex justify-between text-[#555555]">
              <b>Total</b>
              <b>${getCartTotal() + 2}</b>
            </div>
          </div>
          <button className='border-none text-white bg-orange-600 w-[200px] px-3 py-2 mb-10 rounded'>Proceed to Checkout</button>
        </div>
        <div className="flex-1 max-[750px]:justify-start">
          <div>
            <p className='text-[#555]'>If you have any promo code, Enter here</p>
            <div className="mt-2 flex justify-between items-center bg-[#eaeaea] rounded-md ">
              <input type="text" placeholder='Promo code' className='bg-transparent border-none outline-none ml-2' />
              <button className='w-[150px] py-2 px-1 bg-blue-400 text-white border-none  '>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart