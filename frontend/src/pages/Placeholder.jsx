import {useContext, useEffect} from 'react'
import { StoreContext } from '../context/StoreContext'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Placeholder = () => {
  const {getCartTotal, token, food_list, cartItems, url} = useContext(StoreContext) 
  const navigate = useNavigate()

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    phone: ""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(data => (
      {
        ...data,
        [name]: value
      }
    ))
  }

  const placeOrder = async(e) => {
    e.preventDefault()
    let orderItems = []
    food_list.map((item, ind) => {
      if(cartItems[item._id] > 0){
        let itemInfo = item
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getCartTotal() + 2,
    }
    let res = await axios.post(url + "/api/order/place", orderData, {headers: {token}})
    console.log(res);
    
    if(res.data.success){
      const {session_url} = res.data
      window.location.replace(session_url)
    }
    else{
      alert("Error")
    }
  }

  useEffect(() => {
    if(!token){
      navigate("/cart")
    }
    else if(getCartTotal() === 0){
      navigate("/cart")
    }
  }, [token])

  return (
    
    <form onSubmit={placeOrder} className='flex items-start justify-between gap-10 mt-20'>
      <div className="w-[100%] max-w-[500px]">
        <p className="text-2xl font-bold mb-10">Delivery Information</p>
        <div className="flex gap-2">
          <input required onChange={onChangeHandler} value={data.firstName} name='firstName' type="text" placeholder='First Name' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
        <div className="flex gap-2">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
          <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
        </div>
        <div className="flex gap-2">
          <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zipcode' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
        </div>
        <input required  name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' className='mb-3 w-[100%] px-2 border-1 border-[#c5c5c5] rounded-sm outline-orange-500'/>
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
          <button type='submit' className='border-none text-white bg-orange-600 w-[200px] px-3 py-2 mb-10 rounded mt-10'>Proceed to Payment</button>
        </div>
      </div>
    </form>

  )
}

export default Placeholder