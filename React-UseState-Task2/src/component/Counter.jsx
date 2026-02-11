import React from 'react'
import { useState } from 'react'

const Counter = () => {


    const [value, setValue] = useState(0)

    function incree(){
        setValue(value+1)
    }
+
 function dcree(){
        setValue(value-1)
    }

    function reset(){
        setValue(value-value)
    }

  return (


  
    <div className=' w-100 bg-gray-200 h-60 rounded-2xl shadow-2xl shadow-black p-6 '>

        <div className='flex flex-col justify-center gap-4'>
            <h1 className='font-extrabold '>Counter Card</h1>
            <h2 className='font-bold  text-2xl'>{value}</h2>
                <div className='flex gap-3'>
                    <button className='bg-blue-500 pt-0.5 pl-3 pr-3' onClick={()=>{
                        incree()
                    }}>+</button>
                    <button className='bg-red-500 pt-0.5 pl-3 pr-3' onClick={()=>{
                        dcree()
                    }}>-</button>
                    <button className='bg-gray-600 text-white text-sm  pt-0.5 pl-3 pr-3'onClick={()=>{
                        reset()
                    }}>Reset</button>

                </div>
        </div>

    </div>
  )
}

export default Counter