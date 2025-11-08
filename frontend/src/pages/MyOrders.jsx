import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { assets } from '../assets/assets'

const MyOrders = () => {

  const {url, token} = useContext(StoreContext)
  const [data, setData] = useState([])
  

  const fetchOrders = async() => {
    const res = await axios.post(url + "/api/order/userorder", {}, {headers: {token}})
    setData(res.data.data)
    
  }

  useEffect(() => {
    if(token){
      fetchOrders()
    }
    
  }, [token])

  return (
    <div className='mx-1 my-0'>
      <h2 className='font-semibold text-xl text-center mt-2'>My Orders</h2>
      <div className="flex flex-col gap-4 mt-6">
        {
          data.map((order, ind) => {
            return(
              <div key={ind} className='grid grid-cols-[0.5fr_2fr_1fr_2fr_1fr] items-center gap-6 font-[14px] px-2 py-4 text-[#454545] border-1 border-orange-500 max-[900px]:grid-cols-[1fr_2fr_1fr] max-[900px]:gap-y-[12px] max-[900px]:text-[12px]'>
                <img className='w-[50px]' src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item, ind) => {
                  if(ind === order.items.length-1){
                    return item.name + " x " + item.quantity
                  }
                  else{
                    return item.name + " x " + item.quantity +", "
                  }
                })}</p>
                <p>${order.amount}.00</p>
                <p><span className='text-orange-500'>&#x25cf;</span><b className='ml-1 font-semibold text-[#454545]'>{order.status}</b></p>
                <button className='border-0 px-0 py-2 bg-orange-100 text-[#454545] rounded-lg cursor-pointer max-[900px]:text-[10px]'>Track Order</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MyOrders