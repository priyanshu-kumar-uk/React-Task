import React from 'react'
import Profile from './Profile'

const Content = ({user}) => {
  return (
    
      <div className='bg-gray-300 shadow-lg shadow-gray-500 rounded-2xl p-2'>
        <h1 className='text-1xl font-bold p-1'>Content Area</h1>
        
        
        
        <Profile user = {user} />
         </div>

      
    
  )
}

export default Content