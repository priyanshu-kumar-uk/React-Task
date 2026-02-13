import React from 'react'
import Counter from './component/Counter'
import Name from './component/Name'
import Visibility from './component/Visibility'
import User from './component/User'

const App = () => {

  
  return (
    <div className='pt-3 flex gap-5 flex-wrap items-center justify-center'>
   
     




    <Counter/>
    <Name/>
    <User/>
    <Visibility/>
    </div>
  )
}

export default App