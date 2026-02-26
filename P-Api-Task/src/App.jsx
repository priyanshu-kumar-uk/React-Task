import React from "react";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Custom from "./CustomHooks/Custom";

const App = () => {
  //  Form state
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  // API Store state
  const [loding, setLoding] = useState(false);
  const [posts, setPosts] = useState([]);
  const [updates, setUpdates] = useState(null);
  
  let url = "https://jsonplaceholder.typicode.com/posts";

  let data = async function () {
    setLoding(true);
    let fetched = await fetch(url);
    let res = await fetched.json();
    setPosts(res);
    setLoding(false);
  };
  useEffect(() => {
    data();
  }, []);
  
//   if (loding === true) {
//     return <p>loding...</p>;
//   }
  
//   let formHandle = async function (d) {
//   //   let formData = await fetch(url, {
//   //     method: "POST",
//   //   }); 
//   //   let res = await formData.json();
//   //  console.log(res)
//     setPosts([...posts,d ]);
//     console.log(posts)
//     reset();
//   };

//   async function remove(id) {
//     let removedata = await fetch(`${url}/${id}`, {method: "Delete",});

//     let res = await  removedata.json()

//     let rmd = posts.filter((v) => {
//       return v.id !== res.id;
//     });
//     setPosts(rmd);
//   }

// //   let edit = async function(e){ 
// //     let editdata  = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
// //       method: 'PUT',
// //      body: JSON.stringify({
// //      id: 1,
// //      title: setValue("title",e.title),
// //      body:  setValue("body",e.body),
// //      userId: 1,
// //      }),
// //   } )
// // }
  
// // let remove =  async function(id) {   

// // let ddata = await fetch(url/`${id}`,{method : "Delete"})
// // let fdata = posts.filter((f)=>{
// //  return f.id===id
// // })
// // setPosts(fdata)
// // }
  return (
    <div className="main">
      <div className="post-form">
        <div className="data">
          <form onSubmit={handleSubmit(formHandle)}>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
            />
            <textarea
              placeholder="Details"
              {...register("body", { required: true })}
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className="post-list">
        {posts.map((e) => (
          <div className="card" key={e.id}>
            <h2>{e.title}</h2>
            <div className="title">{e.body}</div>
            <div className="btn">
              <div className="btn1" onClick={()=> edit(e)}>Update</div>
              <div className="btn2" onClick={() => remove(e.id)}>
                Delete
              </div>
            </div>
          </div>
        ))}
      </div>

       <Custom url={url}/>
    </div>
  );
};

export default App;
