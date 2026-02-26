import React from 'react'
import { useParams } from 'react-router-dom'
const Dynmic = () => {

    let params = useParams()
  return (
    <div className='flex items-center justify-center mt-50 text-4xl text-red-400'>Dynmic That pag {params.id}</div>
  )
}
export default Dynmic