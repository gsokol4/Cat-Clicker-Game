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
  function setColor (elementID) {
    const element = document.getElementById(elementID)
    console.log(element)
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
        block={state.block}
        removeButton={() => handleAddCat(1)}
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
