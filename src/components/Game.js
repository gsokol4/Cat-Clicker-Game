import React, { useState } from 'react'
import ReactDom from 'react-dom'
import Clicker from './Clicker.js'
import ScoreBoard from './ScoreBoard.js'
import BlockedClicker from './BlockedClicker.js'

export default function Game () {
  let [state, changeState] = useState({
    score: 0,
    block: {
      display: 'inicial',
      position: 'relative',
      height: '100px',
      backgroundColor: 'green',
      zIndex: '100'
    }
  })

  function handleAddCat (value) {
    changeState({ ...state, score: state.score + value })
  }

  function removeButton (timeRemoved) {
    changeState = { block: { display: 'none', ...state.block } }
    console.log(state.block)
    /*
    setTimeout(() => {
      changeState = { block: { ...state.block, display: 'inicial' } }
      console.log(state.block)
    }, timeRemoved)
    */
  }
  const timer = (timerValue, cats, elementId) => {
    const element = document.getElementById(elementId)
    console.log(element)
    handleAddCat(cats)
    setTimeout(() => {
    }, timerValue)
  }
  let cat = {
    color: 'blue',
    PointerEvent: 'none'
  }
  var squareStyle = {
    color: 'green',
    PointerEvent: 'none'
  }

  return (
    <div>
      <ScoreBoard style={squareStyle} score={state.score} />
      <Clicker
        style={cat}
        handleClick={() => handleAddCat(1)}
        buttonName='Get a kitty'
      />
      <BlockedClicker
        id='box'
        block={state.block}
        removeButton={() => removeButton(1000)}
        handleClick={() => handleAddCat(5)}
        buttonName='Get a box of kitties'
      />
      <Clicker
        handleClick={() => handleAddCat(10)}
        buttonName='Rob other cat ladies house'
      />
      <Clicker
        handleClick={() => handleAddCat(50)}
        buttonName='Airdrop cats'
      />
    </div>
  )
}
