import React from 'react'
import { useState } from 'react'


const Visibility = () => {

const [mess, setMess] = useState("This Message is controlled by usestate boolean value. ")
const [hide, setHide] = useState(false)





  return (
     <div className=' w-100 bg-gray-200 h-60 rounded-2xl shadow-2xl shadow-black p-6 '>

        <div className='flex flex-col justify-center gap-4'>
            <h1 className='font-extrabold '>Visibility Card</h1>
                <div className='gap-3'>
                    <button   className=' bg-red-600 text-white text-sm  pt-2 pb-2 pr-3 pl-3' onClick={()=>{
                        setHide(!hide)
                    }}>Reset</button>
                    <p className={`hide font-light ${hide && "hidden"}  text-sm  border mt-2`}>{mess}</p>
 
                </div>
        </div>

    </div>
  )
}

export default Visibility