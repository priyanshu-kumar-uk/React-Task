import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Producted = () => {

   const pro = false

   if(!pro){
   return  <Navigate to={'/login'} />
   }
  return <Outlet/>
}

export default Producted