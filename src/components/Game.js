import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import Clicker from './Clicker.js'
import ScoreBoard from './ScoreBoard.js'
import BlockedClicker from './BlockedClicker.js'
import WindowWidth from './WindowWidth.js'

export default function Game () {
  let [state, changeState] = useState({
    score: 0
  })


  function handleAddCat (value) {
    return changeState({ score: state.score + value })
  }

  let [color, changeColor] = useState('green')
  function setColor () {
    color === 'green' ? changeColor('pink') : changeColor('blue')
    console.log('the fuction that changes color has fired')
    console.log(color)
  }
  let fiveCatButtonStyle = {
    color: color,
    width: '40px'

  }
  useEffect(() => {
    window.addEventListener('mousedown', function () { setColor('add1') })
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
      <BlockedClicker
        id='box'
        style={fiveCatButtonStyle}
        block={state.block}
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
      <WindowWidth />
    </div>
  )
}
