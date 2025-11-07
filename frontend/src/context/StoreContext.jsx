import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({})
  const url = "http://localhost:4000"
  const [token, setToken] = useState("")
  const [food_list, setFoodList] = useState([])

  const addToCart = async(itemId) => {
    if(!cartItems[itemId]){
      setCartItems(prev => ({...prev, [itemId]:1}))
    }
    else{
      setCartItems(prev => ({...prev, [itemId]: prev[itemId]+1}))
    }
    if(token){
      await axios.post(url + "/api/cart/add", {itemId}, {headers: {token}})
    }
  }

  const removeFromCart = async(itemId) => {
    setCartItems(prev => ({...prev, [itemId]: prev[itemId]-1}))
    if(token){
      await axios.post(url + "/api/cart/remove", {itemId}, {headers: {token}})
    }
  }

  const getCartTotal = () => {
    let total = 0
    for(const item in cartItems){

      if(cartItems[item] > 0){
        let itemInfo = food_list.find((product) => product._id === item)
        total += itemInfo.price * cartItems[item]
      }
    }

    return total  
  }

  const load_food_list = async() => {
    const res = await axios.get(url + "/api/food/list")
    setFoodList(res.data.data)
  }

  const load_cart_data = async (token) => {
    const res = await axios.post(url + "/api/cart/get", {}, {headers: {token}})
    setCartItems(res.data.cartData)
  }
  useEffect(() => { 
    async function loadData(){
      await load_food_list()
      if(localStorage.getItem("TOKEN")){
        setToken(localStorage.getItem("TOKEN"))
        await load_cart_data(localStorage.getItem("TOKEN"))
      }
    }
    loadData()
  }, [])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getCartTotal,
    url,
    token,
    setToken
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider