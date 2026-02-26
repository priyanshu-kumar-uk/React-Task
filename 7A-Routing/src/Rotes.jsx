import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Product from './Component/Product'

const Rotes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/product' element = {<Product/>}/>
        </Routes>
    </div>
  )
}

export default Rotes