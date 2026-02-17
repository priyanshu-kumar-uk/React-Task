import React from 'react'
import '../index.css'
import { useContext } from 'react'
import { myContext } from '../DataContext'

const Left = () => {

   let{toggle}= useContext(myContext)
   let{change,setChange} =   useContext(myContext)
   let{formdata,setFormdata}= useContext(myContext)

   function fd(){
    setFormdata([...formdata])
    console.log(formdata)
   }
   
  return (
    <div className='profile'>
       {/* <h4> Chat </h4> */}
        <div className="top-pro">
            <p className='profile-p'>{toggle.name}</p>
           <button>Logout</button>
        </div>
       
      <div className="profile">
         <div className="profile-btn">
           <button onClick={()=> setChange(true)}>New Group</button>
       </div>
         <h4 className='h'>Groups</h4>
          
          {
            formdata.map((v)=>{
                return(
                    <div className="mem" onClick={()=>fd()}>
                        <p className='user-d'>{v.dec}</p>      
                        <p className='user-p'> Memebers - {v.members.length} </p>  
                    </div>
                )
            })
          }

      </div>
    </div>
  )
}

export default Left