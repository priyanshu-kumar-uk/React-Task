import React from 'react'

const User = ({user}) => {
     let{name,Email,Role}=user
    return (
        
        <>
      <div className='bg-gray-300 p-5 rounded-lg shadow-lg shadow-gray-900  flex flex-col gap-1 '>
            <div className='flex gap-3 items-center '>
                <p>Name :</p>
                <p>{name}</p>
            </div>
            <div className='flex gap-4 items-center '>
                <p>Email : </p>
                <p>{Email}</p>
            </div>
            <div className='flex gap-6 items-center '>
                <p>Role:</p>
                <p>{Role}</p>
            </div>

            <button className='p-1 mt-3 rounded-2xl bg-blue-400 text-white block w-18 text-[10px] cursor-pointer' onClick={()=>{
                console.log(name)
            }}>Click Here</button>




      </div>
    
    </>
  )
}

export default User