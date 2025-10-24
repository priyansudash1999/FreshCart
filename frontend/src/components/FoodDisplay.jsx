import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext)

  return (
    <div className='mt-5'>
      <h2 className='text-[24px] font-semibold'>Top Dishes near You</h2>
      <div className="
        grid 
        grid-cols-[repeat(auto-fill,minmax(240px,1fr))] 
        gap-4 
        mt-5
        gap-y-7
      ">
        {food_list.map((item, ind) => {
          if(category === 'All' || category === item.category){
            return <FoodItem
              key={ind}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          }
        })}
      </div>

    </div>

  )
}

export default FoodDisplay