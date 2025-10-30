import React, { useState } from 'react'
import {assets} from "../assets/assets"
import axios from "axios"
import { toast } from 'react-toastify'


const AddProduct = () => {

  
  const url = "http://localhost:4000"
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad "
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)

    const response = await axios.post(`${url}/api/food/add`, formData)
    if(response.data.success){
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad "
      })
      setImage(false)
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
  }

  return (
    <div className='w-[70%] ml-[5vw] mt-[50px] text-[#6d6d6d] text-lg'>
      <form className='gap-4 flex flex-col' onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-2">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='w-[120px]'/>
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required/>
        </div>
        <div className='w-[40%] flex flex-col gap-2'>
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' className='p-2 '/>
        </div>
        <div className="w-[40%] flex flex-col gap-2">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write Content here' className='p-2 '></textarea>
        </div>
        <div className="flex gap-6">
          <div className="add-category flex flex-col gap-2">
            <p>Product Category</p>
            <select name="category" className='max-2-[120px] p-2'>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex flex-col gap-2">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='$11' className='max-2-[120px] p-2'/>
          </div>
        </div>
        <button type="submit" className='max-w-[120px] border-0 p-2 bg-black text-white cursor-pointer'>ADD</button>
      </form>
    </div>
  )
}

export default AddProduct