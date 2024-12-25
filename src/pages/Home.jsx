import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Categories from '../components/home/Categories'
import Products from '../components/home/Products'

const Home = () => {
  const [sorting,setSorting] = useState("")
  const [category,setCategory] = useState("")
  return (
    <div>
        <SliderComp />
        <Sorting setSorting={setSorting}/>
        <div className='flex'>
            <Categories setCategory={setCategory}/>
            <Products category={category} sorting={sorting}/>
        </div>
    </div>
  )
}

export default Home