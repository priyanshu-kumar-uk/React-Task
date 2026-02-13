import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Datalink from "./Component/Datalink.jsx"
import { useState } from "react";

// Name,useref 
const App = () => {
 
 
 const [data, setData] = useState({ name: "", email: "" });
 const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users"))|| [])     /* */

 let arr = []
 function handale(val){  
  
  setData({...data,[val.target.name]:val.target.value})     /* Methode-2 using by name separet function sai value ko acces karna aur fir function ko call karna  onchange mai  */
}

 function onSubmit(e){
     e.preventDefault();                                     /*iaka bhi seprate data */
    let newData = [...users,data]                           /*synccroness code */
    setUsers(newData);                                     /* asynccroness */
    console.log(newData)

    localStorage.setItem("users",JSON.stringify(newData))    /*   isliye yha hamnse sunc code liya first time mai store ho jaye data duri bar mai store hota hai  */
 }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Username"
          value={data.name}             /*Four */
          onChange={handale}
        />
        <br />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={data.email}                  /* */ 
         onChange={handale}
        />
        <button>Submit</button>
      </form>
      
      

       {
        users.map((v,k)=>{
      return  <div key = {k}>
                <h4>{v.name}</h4>
                <h4>{v.email}</h4>
               </div>
        })
       }

      {/* <Datalink/> */}
    </div>
  )
};

export default App;
