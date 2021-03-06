import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import Clicker from './Clicker.js'
import ScoreBoard from './ScoreBoard.js'
import WindowWidth from './WindowWidth.js'
import NewClicker from './NewClicker.js'
import Background from './Background.js'


const invisible = {
  visibility: 'hidden'
}
const redStyle = {
  color: 'red',
  backgroundColor: 'transparent',
  border: 'none'
}
const blackStyle = {
  color: 'black'
}

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

  return (
    <div>
      <Background />
      <ScoreBoard style={state.block} score={state.score} />
      <Clicker
        id='add1'
        style={state.block}
        handleClick={() => handleAddCat(1)}
        buttonName='Get a kitty'
      />
      <NewClicker
        cats={state}
        counter={.5}
        visibility={invisible}
        redStyle={redStyle}
        blackStyle={blackStyle}
        handleClick={() => handleAddCat(5)}
      />
    </div>
  )
}
