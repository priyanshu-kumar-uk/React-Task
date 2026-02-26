import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-gray-500 h-20 p-5 flex justify-between text-xl'>
       <NavLink to ='/'>React Web</NavLink>
       <div className="flex gap-10">
       <NavLink to='/' className='shadow shadow-white p-2 text-center' >Home</NavLink>
       <NavLink to='/about' className='shadow shadow-white p-2 text-center'>About</NavLink>  
       <NavLink to='/product' className='shadow shadow-white p-2 text-center'>Product</NavLink>
       <NavLink to='/login' className='shadow shadow-white p-2 text-center'>Login</NavLink>
       <NavLink to='/dashbord' className='shadow shadow-white p-2 text-center'>Dashbord</NavLink>
      </div>
    </div>
  )
}
export default Navbar