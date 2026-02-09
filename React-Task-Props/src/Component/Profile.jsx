import React from 'react'
import User from './User'

const Profile = ({user}) => {
  return (
    <div className='bg-gray-300 shadow-xs shadow-gray-800 rounded-2xl p-2'> 
    <h1 className=' p-2 text-sm font-medium' > Profile Card</h1>



     <User  user = {user}/>
    </div>
       
   
    
  )
}

export default Profile