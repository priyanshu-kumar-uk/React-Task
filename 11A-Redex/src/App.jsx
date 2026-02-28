import React from 'react'
import {useDispatch,useSelector} from 'react-redux' 
import {incree,dcree} from '../src/features/Counter/counterSlice'
import {create, deletes} from '../src/features/Products/productSlice'

const App = () => {

  const count = useSelector((state)=> state.counter.value)
  const product = useSelector((state)=>state.products.products)  // values give actual
  const dispetch = useDispatch()
  console.log(product)
  return (
    <div>
       <p>{count}</p>
      <button onClick={()=>dispetch(incree())}>+</button>
        {
          product.map((elem)=>{
            return <div>{elem.name}</div>
          })
        }
    </div>
  )
}

export default App