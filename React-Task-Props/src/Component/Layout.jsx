import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({user}) => {
  return (
      <div className='bg-gray-300 p-3 rounded-2xl  shadow-lg shadow-gray-500'> 
           <h1 className='p-2 text-3xl font-medium'>Dasbord Layout</h1>

       
         
       <Sidebar user = {user} />
       </div>
       
 

  )
}

export default Layout