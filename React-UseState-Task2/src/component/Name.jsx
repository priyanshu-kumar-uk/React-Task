import React, { useState } from 'react'

const Name = () => {

    const [name, setName] = useState("Raju")

    function change(){
        let newname = "Priyanshu"
        setName(newname)
    }
  return (
   <div className=' w-100 bg-gray-200 h-60 rounded-2xl shadow-2xl shadow-black p-6 '>

        <div className='flex flex-col justify-center gap-4'>
            <h1 className='font-extrabold '>Name Card</h1>
            <h2 className='font-bold  text-2xl'>{name}</h2>
                <div className='flex gap-3'>
                    <button className='bg-green-600 text-white text-sm  p-2 rounded-1xl' onClick={()=>{
                        change()
                    }}>Change Name</button>

                </div>
        </div>

    </div>
  )
}

export default Name