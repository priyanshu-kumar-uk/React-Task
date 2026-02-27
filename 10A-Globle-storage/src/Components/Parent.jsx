import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import { useState } from 'react'

const Parent = () => {
      const [data, setData] = useState(0)
      const [data2, setData2] = useState(0)


      function count(){
            setData(data+1)
      }

      function count2(){
         setData2(data2+2)
      }
    
  return (
    <div> 
         <p>Add 1 = {data}</p>
         <p>Add by 2  </p>
       <button onClick={count}>Add+1</button>
    </div>
  )
}

export default Parent

   {/* {data}
        <Child1 paragraph={"Hii this child-1 paragraph"}/>
        <Child2 paragraph={"Hii this child-2 paragraph"}/>
        <button onClick={()=>setData(data+2)}>click</button> */}