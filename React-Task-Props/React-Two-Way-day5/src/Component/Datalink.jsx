import React from 'react'
import { useState } from 'react';

const Datalink = () => {



 const [data, setData] = useState({ name: "", email: "" });

let arr = []
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();

        let newarr = [{...data}]
        console.log(newarr)
        //  arr.push({...data})   
        //  console.log(arr)                /*Third*/ 
      }}>
        <input
          name="name"
          type="text"
          placeholder="Username"
          value={data.name}             /*Four */
          onChange={(val) => {          /*first*/
            setData({...data,name:val.target.value})  /*second*/
          }}
        />
        <br />
        <input
          email="email"
          type="text"
          placeholder="Email"
          value={data.email}                  /* */ 
         onChange={(val) => {
            setData({...data,email:val.target.value})
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Datalink