import React from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'
const App = () => {
  return (
    <div>
       <Navbar/> 
       <Outlet/>  {/*for childrean show indside this page app kai inside jitne bhi childrean unko show karta hai */}
       <Footer/>
    </div>
  )
}
export default App