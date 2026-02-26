import React, { useEffect } from 'react'

export const Custom = ({url}) => {
 
    const [loding, setLoding] = useState(false);
    const [posts, setPosts] = useState(null);
     
    async function data(){
        setLoding(true)
        let fetched = await fetch(url)
        let res = await fetched.json()
        setPosts(res)
        setLoding(false)
    }
    useEffect(()=>{
        data()
    },[])

  return (loding,posts)
}

export default Custom