import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import Clicker from './Clicker.js'
import ScoreBoard from './ScoreBoard.js'
import WindowWidth from './WindowWidth.js'
import NewClicker from './NewClicker.js'

export default function Game () {
  let [state, changeState] = useState({
    score: 0
  })
  function handleAddCat (value) {
    return changeState({ score: state.score + value })
  }

  const [color, changeColor] = useState(false)
  const setColor = () => {
    changeColor(!color)
    console.log(color)
  }
  const fiveCatButtonStyle = {
    color: 'green'
  }
  const fiveCatChange = {
    color: 'pink'
  }
  useEffect(() => {
    window.addEventListener('mousedown', function () { setColor() })
    console.log('rerendered')
  }, [])

  return (
    <div>
      <ScoreBoard style={state.block} score={state.score} />
      <Clicker
        id='add1'
        style={state.block}
        handleClick={() => handleAddCat(1)}
        buttonName='Get a kitty'
      />
      <NewClicker
        counter={.5}
        handleClick={() => handleAddCat(5)}
      />

      <WindowWidth />
    </div>
  )
}
