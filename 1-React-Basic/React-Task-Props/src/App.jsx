import React from 'react'
import Layout from './Component/Layout'


const App = () => {
    
  
  
  function user(){
    let obj = 
    { 
      name:"Priyanshu",
      Email:"B@gmail.com",
      Role:"Coder"
    }
    return obj
  }
  let data = user()
 
  return (
    <div className='bg-blue-100 w-[50%] p-7 rounded-2xl shadow-lg shadow-gray-500'>
        
       <Layout  user = {data}/>
    </div>

  )
}

export default App