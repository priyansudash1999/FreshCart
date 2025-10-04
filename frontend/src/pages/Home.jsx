import React, { useState } from 'react'
import { ExploreMenu, Header, FoodDisplay } from '../components'

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div className=''>
      <Header />
      <ExploreMenu category={category} setCategory = {setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home