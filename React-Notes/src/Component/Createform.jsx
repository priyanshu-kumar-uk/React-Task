import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from 'react';

const Createform = () => {

    let{register,handleSubmit,reset,formState:{errors}}=useForm()

const [users, setUsers] = useState([])
    function submitForm(data){

        let newarr = [...users,data]


         setUsers(newarr)
         localStorage.setItem("Notes",JSON.stringify(newarr))

        }
  return (
    <div className='form-data'>
       <h3>Notes</h3>
       <form  onSubmit={handleSubmit(submitForm)}>
          <input type="text" placeholder='title'
            {...register("title",{required:"Title is requrid"})}
          
          />

          <textarea placeholder='Decription'
            {...register("decription",{required:"decription is requrid"})}
          
          > Write here</textarea>

          <button>Create Notes</button>
       </form>
       
    </div>
  )
}

export default Createform