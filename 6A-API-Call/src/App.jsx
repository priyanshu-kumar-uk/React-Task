import React, { useEffect, useEffectEvent, useState } from 'react'
import Call from './Call'

const App = () => {

  // const [posts, setposts] = useState([])

  //   let apidata = async function(){
  //     const url = "https://jsonplaceholder.typicode.com/posts"
  //      let data = await fetch(url)
  //      let api = await data.json()
  //      setposts(api)
  //      console.log(api)
  //   }

    // useEffect(()=>{
    //   apidata()
    // },[])
  return (


    <div>
    {/* {
      posts.map((e)=>{
        return <p>{e.title}</p>
      })
    } */}
      
      <Call/>
    </div>
  )
}

export default App