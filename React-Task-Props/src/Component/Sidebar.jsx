import React from 'react'
import Content from './Content'

const Sidebar = ({user}) => {

  return (
       <div className='bg-gray-300 p-2 shadow-2xl shadow-gray-500 rounded-2xl'>
        <h1 className='text-2xl font-medium p-2'>Sidebar</h1>

         
        <Content user = {user} />
       </div>

       
    
  )
}

export default Sidebar