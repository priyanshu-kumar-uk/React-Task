import React, { memo } from 'react'

const Child1 = ({va}) => {

  console.log("Child-1...reRendering")
  return (
    <div>
  {va}
    </div>
  )
}

export default memo( Child1)