import React, { useState } from 'react'

function Ez () {
  const [state, changeState] = useState(false)

  const ezOne = { color: 'pink' }
  const ezTwo = { color: 'green' }

  const handleClick = () => {
    changeState(!state)
  }

  return (
    <div>
      <button style={state ? ezOne : ezTwo} onClick={handleClick}> change the color of this text</button>
    </div>
  )
}

export default Ez
