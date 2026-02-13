import React from "react";
import "./Userref.css";
import { useState } from "react";

const App = () => {
const [data, setData] = useState({
  name: "",
  email:"",
  age: "",
  select:"",
  skills:[],
  Experience : "",
  picture:null,
  text:"",
})




  return (
    <div className="main">
      <div className="left-form">
        <form>
          {/* name detail */}
          <input name="name" type="text" placeholder="Enter your Name" 
             onChange={(val)=>{
                console.log(val.target.value)
             }}
          /> 
          <input name="email" type="text" placeholder="Enter your Email" 
             onChange={(val)=>{
                console.log(val.target.value)
             }}
          /> 
          <input name="age" type="text" placeholder="Enter Your Age" 
             onChange={(val)=>{
                console.log(val.target.value)
             }}
          /> 
           {/* gender */}
          <select  > 
           <option value="">Select</option> 
           <option value="Male">Male</option> 
           <option value="Female">Female</option> 
           <option value="Other">Other</option> 
          </select>
                {/* skills */}
          <label>Skills</label> 

           <label>
            <input value = "React" type="checkbox" />
            React
           </label> 
           <label>
            <input  value = "Express"type="checkbox" />
            Express
           </label> 
           <label>
            <input value="Mongo" type="checkbox" />
            Mongo
           </label> 
           <label>
            <input value="node" type="checkbox" />
            Node
           </label> 

                 {/* anothre*/}

          <input name="year" type="number" placeholder="Experience (Year)"/>

          <input  name="file" className="picture" type="file"placeholder="Choose File" /> 

          <textarea  name="bio" id="">Short bio</textarea> 

          <button>Submit</button>
        </form>
      </div>

      <div className="right-profile">
        
         <div className="img">
          {/* <img src="" alt="" /> */}
         </div>
         <div className="data">
          <h2>Name :</h2>
          <p></p>
         </div>
         <div className="data">
           <h2>Email :</h2>
           <p></p>
         </div>
         <div className="data">
          <h2>Age :</h2>
          <p>17</p>
         </div>
         <div className="data">
          <h2>Gender :</h2>
          <p></p>
         </div>
         <div className="data">
          <h2>Skills :</h2>
          <p></p>
         </div>
         <div className="data">
          <h2>Bio :</h2>
          <p></p>
         </div>

      </div>
    </div>
  );
};

export default App;
