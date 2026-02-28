import React, { memo } from 'react'

const Child2 = ({value}) => {
  console.log("Child-2...reRendering")
  return (
    <div>

      <button onClick={value}>click form child 2</button>
    </div>
  )
}

export default memo(Child2)