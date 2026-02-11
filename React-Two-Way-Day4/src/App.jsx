import React from 'react'
import { useState } from 'react'


const App = () => {
  const [form, setForm] = useState(
    {
      names:"Priyanshu",
      Email:"@gmail.com",
      mobile: 75655,
    }
  )

    
  return (
    <div>
          

          <input   value={form} type="text" placeholder='UserName' 
          onChange={(v)=>{
              //  setForm(v.target.value)
          }} /> <br />

          <input type="text" placeholder='Email' onChange={(v)=>{
               setForm(v.target.value)
          }}  />  <br />

          <input type="text" placeholder='Mobile'  onChange={(v)=>{
               setForm(v.target.value)
          }}  />
          



          <h1>Name  -  </h1>
          <h1>Email - </h1>
          <h1>Mobile  - </h1>


    </div>
  )
}

export default App