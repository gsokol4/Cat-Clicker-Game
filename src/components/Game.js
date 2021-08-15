import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import Clicker from './Clicker.js'
import ScoreBoard from './ScoreBoard.js'
import WindowWidth from './WindowWidth.js'
import NewClicker from './NewClicker.js'
import BackDrop from './BackDrop.js'
import AutoClicker from './auto/menu'
import Ai from './ai/Ai'
import emojies from '../images/emojies.js'

export default function Game () {
  const [state, changeState] = useState({
    score: 100000
  })

  const [autoCatDelivery, setAutoCatDelivery] = useState({ delivery: 100, breedingProgram: 500 })

  function handleAddCat (value) {
    return changeState((prevState) => ({ score: prevState.score + value }))
  }

  function reduceCats (numToSubtract, amountToAdd, stateName) {
    if (state.score < numToSubtract) {
    } else {
      if (typeof (numToSubtract) !== 'number') {
        console.log(numToSubtract)
        console.log(typeof (numToSubtract))
        throw new Error('invalid input for first parameter in the reduceCats function ')
      }
      if (typeof (amountToAdd) !== 'number') {
        console.error('"amountToAdd" (second parameter) in reduceCats has been set to a default value')
        amountToAdd = 1
      }
      changeState((prevState) => ({ score: prevState.score - numToSubtract }))
      setAutoCatDelivery(
        (prevCats) => (
          {
            ...autoCatDelivery, [stateName]: (Math.round(numToSubtract * 1.3))
          }
        )
      )
      setInterval(() => {
        changeState((prevState) => ({ score: prevState.score + amountToAdd }))
      }, 1000)
    }
  }

  return (
    <div>
      <BackDrop />
      <ScoreBoard score={state.score} />
      <Clicker
        id='add1'
        handleClick={() => handleAddCat(1)}
        buttonName='Get a kitty'
        emoji={emojies.cat}
      />
      {state.score > 4 && <NewClicker
        cats={state}
        counter={0.5}
        handleClick={() => handleAddCat(5)}
        name='Get a box of kittens'
        catsPerClick={5}
        emoji={emojies.box}
      />}
      {state.score > 10 && <NewClicker
        cats={state}
        counter={2}
        handleClick={() => handleAddCat(10)}
        catsPerClick={10}
        name='A cartload of kitties'
        emoji={emojies.cart}
      />}
      {state.score > 100 && <NewClicker
        cats={state}
        counter={3}
        handleClick={() => handleAddCat(20)}
        catsPerClick={20}
        name='a boatload of kitties'
        emoji={emojies.boat}
      />}
      {state.score > 500 && <NewClicker
        cats={state}
        counter={4}
        handleClick={() => handleAddCat(50)}
        catsPerClick={50}
        name='A truckload of kitties'
        emoji={emojies.truck + emojies.dash}
      />}
      {state.score > 1000 && <NewClicker
        cats={state}
        counter={5}
        handleClick={() => handleAddCat(100)}
        catsPerClick={100}
        name='Airdrop some kitties'
        emoji={emojies.airPlane}
      />}
      {state.score > 5000 && <NewClicker
        cats={state}
        counter={10}
        handleClick={() => handleAddCat(500)}
        catsPerClick={500}
        name='Recruit a cat army'
        emoji={emojies.gun + emojies.cat}
      />}
      <AutoClicker
        cats={state}
        reduceCats={(num, num2, state, stateKey) => reduceCats(num, num2, state, stateKey)}
        costOfAutomation={autoCatDelivery}
      />
      <Ai />
    </div>
  )
}
