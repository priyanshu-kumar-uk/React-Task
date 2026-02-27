import React, { memo } from 'react'
import Child2 from './Child2'

const Child1 = memo(
    ({paragraph}) => {
    console.log("Child-1 Rendering",paragraph)
  return (
    <div>
      {paragraph}
     </div>
    
  )
}
)

export default Child1