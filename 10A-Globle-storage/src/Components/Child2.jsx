import React, { memo } from 'react'

const Child2 = ({paragraph}) => {
    console.log("child-2 Rendering",paragraph)
  return (
    <div>
      {paragraph}
    </div>
  )
}

export default memo(Child2)