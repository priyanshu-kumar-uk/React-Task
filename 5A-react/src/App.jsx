import { useState } from "react"
const App = () => {
    var  [user , setUser  ] = useState({
         name:"Anshu",
         role:"Admin"
    })      
    const changeRole = ()=> {
      // user.role="user"
      setUser({...user,role:"change"}) 
    }
  return (
    <div>
       <button>
        <p>{user.role} </p>
        <button className="outline p-2 m-12" onClick={  changeRole} >change role</button>
       </button>
    </div>
  )
}
export default App









