import {useContext} from 'react'
import { StoreContext } from '../context/StoreContext'

const Placeholder = () => {
  const {getCartTotal} = useContext(StoreContext) 
  return (
    
    <form className='flex items-start justify-between gap-10 mt-20'>
      <div className="w-[100%] max-w-[500px]">
        <p className="text-2xl font-bold mb-10">Delivery Information</p>
        <div className="flex gap-2">
          <input type="text" placeholder='First Name' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
          <input type="text" placeholder='Last Name' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
        </div>
        <input type="email" placeholder='Email Address' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
        <input type="text" placeholder='Street' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
        <div className="flex gap-2">
          <input type="text" placeholder='City' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
          <input type="text" placeholder='State' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder='Zipcode' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
        </div>
        <input type="text" placeholder='Phone' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
      </div>
      <div className="w-[100%] max-w-[500px] ">
        <div className="flex flex-1 flex-col gap-4 mt-6">
          <h2 className='text-lg font-semibold'>Cart Total</h2>
          <div>
            <div className="flex justify-between text-[#555555]">
              <p>SubTotal</p>
              <p>${getCartTotal()}</p>
            </div>
            <hr className='mx-0 my-2'/>
            <div className="flex justify-between text-[#555555]">
              <p>Delivery Fee</p>
              <p>${getCartTotal() === 0 ? 0 : 2}</p>
            </div>
            <hr className='mx-0 my-2'/>
            <div className="flex justify-between text-[#555555]">
              <b>Total</b>
              <b>${getCartTotal() === 0 ? getCartTotal() : getCartTotal() + 2}</b>
            </div>
          </div>
          <button className='border-none text-white bg-orange-600 w-[200px] px-3 py-2 mb-10 rounded mt-10'>Proceed to Payment</button>
        </div>
      </div>
    </form>

  )
}

export default Placeholder