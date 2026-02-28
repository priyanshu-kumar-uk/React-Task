import {React,useCallback,useMemo,useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

 

const Parent = () => {
  const [value, setValue] = useState("")
  console.log("Parent Rendering")

  const data =  useMemo(() =>{
       return  {
          name: "Priyanshu",
          role: {value},
          }
  } , [])

 let val =  useCallback(()=>{
         setValue("Coder")
  },[])

  return (  
    <div>
   
      <p>{value}</p>
       <button onClick={val}>Click</button>

      <Child1 data = {data}/>
      <Child2 value = {val}/>
    </div>
  )
}

export default Parent