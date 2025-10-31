import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const DisplayList = () => {

  const [data, setData] = useState([])
  const url = "http://localhost:4000"
  const fetchList = async () => {
    const res = await axios.get(`${url}/api/food/list`)
    // console.log(res.data)
    if(res.data.success){
      setData(res.data.data)
    }
    else{
      toast.error(res.data.message)
    }
  }

  const removeFoorItem = async(food_id) => {
    // console.log(food_id);
    const res = await axios.post(`${url}/api/food/remove`,{id: food_id})
    await fetchList()
    if(res.data.success){
      toast.success(res.data.message)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='list add flex flex-col gap-2'>
      <p className='text-lg font-semibold text-center'>All Foods List</p>
      <div className="list-table mt-1">
        <div className="grid grid-cols-[1.25fr_2fr_1fr_1fr_0.5fr] md:grid-cols-[1fr_2fr_1fr_1fr_0.5fr] items-center gap-2 px-3 py-2 border border-[#cacaca] text-md rounded bg-[#f0f0f0] sm:w-[90vw]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {
          data.map((product, ind) => {
            return(
              <div key={ind} className='grid grid-cols-[1fr_2fr_1fr_1fr_0.5fr] md:grid-cols-[1fr_2fr_1fr_1fr_0.5fr] items-center gap-2 px-3 py-2 border border-[#cacaca] rounded '>
                <img src={`${url}/images/`+product.image} alt="" className='w-[50px]'/>
                <p className='p-2 ml-2 md:p-0 md:ml-0'>{product.name}</p>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <p onClick={() => removeFoorItem(product._id)} className='text-red-600 cursor-pointer'>X</p>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default DisplayList