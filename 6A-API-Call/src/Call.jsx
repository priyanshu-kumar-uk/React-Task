import React, { useEffect, useState } from 'react'

const Call = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [loding, setLoding] = useState(false)

    let data = async function(){
        setLoding(true)
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`
        let data = await fetch(url)
        let api = await data.json()
        setPost(api)
        setLoding(false)
    }
    useEffect(()=>{
        data()
    },[])

     {
            if(loding===true){
              return <p>loding..</p>        
            }
    }
  return (
    <div> 

           <button onClick={setId(id+1)}></button>
           <button></button>
       <div>
        <p>
         {post.title}
       </p>
        <p>
         {post.id}
       </p>
       </div>
    </div>
  )
}

export default Call




// create page with two button (prev , next ) 

// if we click the prev , then it should show the prev post , 
// if we click on the next , then it should show the next post 

// note —> previous can’t be less then 1 , 
// and next can’t be greater then 50 .