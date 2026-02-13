import React from 'react'
import { useState } from 'react'

const User = () => {

    const [role, setRole] = useState("Admin")

    function changes(){ 
        let newrole = "Coder"
        setRole(newrole)
    }

  return (
   <div className=' w-100 bg-gray-200 h-60 rounded-2xl shadow-2xl shadow-black p-6 '>

        <div className='flex flex-col justify-center gap-2'>
            <h1 className='font-extrabold '>User Card</h1>
            <h2 className='font-light  text-sm'>Name : Priyanhsu</h2>
            <h2 className='font-light  text-sm'>Role : {role}</h2>

                <div className='flex gap-3'>
                    <button className='bg-yellow-600 text-white text-sm  pt-2 pb-2 pl-3 pr-3' onClick={()=>{
                        changes()
                    }}>Promote to admin</button>

                </div>
        </div>

    </div>
  )
}

export default User