import React, { useState, useEffect } from 'react'
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
    },
    blue: true
  })

  function handleAddCat (value) {
    changeState({ ...state, score: state.score + value, block: { ...state.block } })
  }
  /*
  function removeButton (timeRemoved) {
    changeState(() => ({ ...state, block: { display: 'none' } }))
    console.log(state)

    const styleChange = setTimeout(() => {
      changeState(() => ({
        ...state,
        block: {
          display: 'block',
          position: 'relative',
          height: '50px',
          backgroundColor: 'blue',
          zIndex: '100'
        }
      }))
      console.log(state)
    }, timeRemoved)
    return () => { clearTimeout(styleChange) }
  }
  */
  let blue = false
  function setColor (ElementId) {
    const el = document.getElementById(ElementId)
    if (blue === true) {
      blue = false
      el.style.color = 'pink'
      console.log('blue 1 fired')
    } else if (blue === false) {
      blue = true
      el.style.color = 'green'
      console.log('blue2 fired')
    }
  }
  useEffect(() => {
    setColor('add1')
    console.log('rerendered')
  }
  )

  let cat = {
    color: 'pink',
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
        id='add1'
        style={cat}
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
    </div>
  )
}
