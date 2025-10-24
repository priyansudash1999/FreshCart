import React, { useState } from 'react'
import { ExploreMenu, Header, FoodDisplay, AppDownload } from '../components'

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div className=''>
      <Header />
      <ExploreMenu category={category} setCategory = {setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home