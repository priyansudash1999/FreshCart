import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { assets } from '../assets/assets'

const Orders = ({url}) => {

  const [order, setOrder] = useState([])

  const fetchAllOrders = async() => {
    const res = await axios.get(`${url}/api/order/list`);
    if(res.data.success){
      setOrder(res.data.data)
      console.log(order);
    }
    else{
      toast.error("Error")
    }
  }

  // update delivery status
  const statusUpdate = async(e, orderId) => {
    const res = await axios.post(`${url}/api/order/status`, {
      orderId,
      status: e.target.value
    })
    if(res.data.success){
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (
    <div className='order add'>
      <h3 className='font-semibold text-lg text-center m-2'>Order Page</h3>
      <div className="order-list">
        {
          order.map((orderr, ind) => {
            return(<div key={ind} className="grid grid-cols-[0.5fr_2fr_1fr_1fr] item-start gap-6 border border-orange-500 mx-0 my-6 text-[14px] text-[#505050] max-[1000px]:text-[12px] max-[1000px]:grid-cols-[0.5fr_2fr_1fr] max-[1000px]:px-3 py-2">
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className='font-semibold'>
                  {
                    orderr.items.map((ord, ind) => {
                      if(ind === orderr.items.length - 1){
                        return ord.name + ' x ' + ord.quantity
                      }
                      else{
                        return ord.name + ' x ' + ord.quantity + ", "
                      }
                    })
                  }
                </p>
                <p className="font-semibold mt-6 mb-1 ">
                  {
                    orderr.address.firstName + " " + orderr.address.lastName
                  }
                </p>
                <div className="mb-2 ">
                  <p>
                    {
                    orderr.address.street + ", "
                    }
                  </p>
                  <p className="order-address-city">
                  {
                    orderr.address.state + ", " + orderr.address.zipcode
                  }
                </p>
                </div>
                
                <p className="order-address-phone">
                  {
                    orderr.address.phone
                  }
                </p>
              </div>
              <p>items: {orderr.items.length}</p>
              <p>${orderr.amount}</p>

              <select onChange={(e) => statusUpdate(e, orderr._id)} value= {orderr.status} className='bg-[#ffe8e4] border w-[120px] p-2 outline-0 max-[1000px]:p-1 max-[1000px]:text-[12px]'>
                <option value="In Process">In Process</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          )})
        }
      </div>
    </div>
  )
}

export default Orders