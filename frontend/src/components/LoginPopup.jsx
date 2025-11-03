import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {

  const [curr, setCurr] = useState('Sign Up')
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const {url, token, setToken} = useContext(StoreContext)

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value

    setData((data) => ({...data, [name]: value}))
  }

  const userLogin = async(e) => {
    e.preventDefault()
    let newUrl = url
    if(curr === 'Login'){
      newUrl += '/api/user/login'
    }
    else{
      newUrl += '/api/user/register'
    }
    const res = await axios.post(newUrl, data)
    if(res.data.success){
      setToken(res.data.token)
      localStorage.setItem("TOKEN", res.data.token)
      setShowLogin(false)
    }
    else{
      alert(res.data.message)
    }
  }


  return (
    <div className='absolute z-1 w-[100%] h-[100%] bg-[#00000090] grid'>
      <form onSubmit={userLogin} className='place-self-center w-[330px] text-[#808080] bg-white flex flex-col gap-5 px-5 py-6 text-lg rounded-md animate-[fadeIn_0.5s_ease-in-out]'>
        <div className='flex justify-between items-center text-black'>
          <h2 className='font-bold text-2xl'>{curr}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='w-[16px] cursor-pointer'/>
        </div>
        <div className="flex flex-col gap-4">
          {curr === 'Sign Up' && <input name='name' onChange={onChangeHandler} value={data.name} className='border p-1 rounded-md' type="text" placeholder='Your Name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} className='outline-none border-1 p-1 rounded-md' type="email" placeholder='Your Email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} className='outline-none border-1 p-1 rounded-md' type="password" placeholder='Password here' required />
        </div>
        <button type='submit' className='border-none p-2 text-white bg-orange-500 cursor-pointer rounded-md'>{curr === 'Sign Up' ? "Create Account" : "Login"}</button>
        <div className="flex items-start gap-2 mt-[-15px]">
          <input className='mt-2' type="checkbox" required/>
          <p>I agree to the terms of use & Privacy policy</p>
        </div>
        {
          curr === 'Login' ? <p>Create a new account ? <span className='text-orange-400 cursor-pointer' onClick={() => setCurr("Sign Up")}>Click Here</span></p> : <p onClick={() => setCurr("Login")}>Already Registered <span className='text-orange-400 cursor-pointer'>Login Here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup