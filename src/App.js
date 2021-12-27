import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Game from './components/game/Game'
import StartMenu from './components/startMenu/StartMenu'
import EndGameScreen from './components/endGameScreen/EndGame'
import groupCat from './images/groupCat.jpg'
import timerContext from './components/context/timerContext'
import './App.css'
import './paper.css'

const background = {
  position: 'relative',
  zIndex: 1,
  color: 'white'
}

function App () {
  const [timer, setTimer] = useState(checkForTimerInLocalStorage() ? window.localStorage.getItem('timerSetting') : 100)

  function checkForTimerInLocalStorage () {
    if (checkForLocalStorage() === false) {
      return false
    }
    const timer = Number(window.localStorage.getItem('timerSetting'))
    if (typeof (timer) !== 'number') {
      return false
    } else {
      return true
    }
  }

  function checkForLocalStorage () {
    if (typeof (Storage) !== 'undefined') {
      return true
    } else {
      return false
    }
  }

  function handleTimer (time) {
    if (typeof time !== 'number') {
      console.error('handle timer can not be set to a non-number value check the input')
      return
    }
    setTimer(time)
    checkForLocalStorage() ? window.localStorage.setItem('timerSetting', time) : console.error('local storage is not supported')
  }
  const timerObj = { timer: timer, setTimer: setTimer, handleTimer: handleTimer }

  function isLocalStorageSupported () {
    var storage = window.localStorage
    try {
      storage.setItem('test', 'test')
      storage.removeItem('test')
      return true
    } catch (e) {
      return false
    }
  }
  function checkLocalStorageNameVar () {
    if (window.localStorage.hasOwnProperty('catClickerUserName')) {
      return true
    } else {
      return false
    }
  }
  const adjList = ['quick', 'fat', 'sneaky', 'smart', 'abrasive', 'ambiguous', 'deadly', 'determined', 'bawdy', 'cloistered', 'capricious', 'craven', 'dapper', 'debonair', 'divergent', 'draconian', 'elated', 'erratic', 'fallacious', 'garrulous', 'great', 'greedy', 'incandescent', 'languid', 'macabre', 'twisted', 'green', 'blue', 'black', 'grey', 'pink']
  const nounList = ['fox', 'cat', 'grandma', 'grandpa', 'dog', 'hound', 'chicken', 'chupacabra', 'lamppost', 'rooster', 'wolf', 'vampire', 'banana', 'peach', 'pear', 'apple', 'duck', 'driver', 'nurse', 'nutcase', 'elephant', 'rat', 'mouse', 'lion', 'kitty', 'kitten', 'child', 'llama', 'mom', 'dad', 'sister', 'panda', 'sheep', 'tree', 'fern', 'lilly']

  const randomArrSelector = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }
  const randomAdj = adjList[randomArrSelector(adjList)]
  const randomNoun = nounList[randomArrSelector(nounList)]
  const randomName = () => {
    const random = `${randomAdj} ${randomNoun}`
    if (checkLocalStorageNameVar()) {
      window.localStorage.setItem('catClickerUserName', random)
    }
    return random
  }
  const [name, setName] = useState(isLocalStorageSupported() && checkLocalStorageNameVar() ? window.localStorage.getItem('catClickerUserName') : randomName)

  // points section

  const [state, changeState] = useState({
    score: 0
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
    }
  }
  // ai score
  const [aiScore, setAiScore] = useState({ score: 0, AiClickRate: 1 })

  return (
    <timerContext.Provider value={timerObj}>
      <Router>
        <Switch>
          <Route exact path='/'>

            <StartMenu
              name={name}
              setName={setName}
              randomName={randomName}
              score={state.score}
              changeState={(scoreObj) => changeState(scoreObj)}
              setAiScore={(aiObj) => setAiScore(aiObj)}
            />

          </Route>
          <Route path='/game'>
            <div style={background} className='App'>
              {timerObj.timer > 0 &&
                <>
                  <Game
                    name={name}
                    state={state}
                    handleAddCat={(num) => handleAddCat(num)}
                    changeState={(num) => changeState(num)}
                    autoCatDelivery={autoCatDelivery}
                    reduceCats={
                      (numToSubtract, amountToAdd, stateName) => {
                        return reduceCats(numToSubtract, amountToAdd, stateName)
                      }
                    }
                    aiScore={aiScore}
                    setAiScore={(obj) => setAiScore(obj)}
                  />
                </>}
              {timerObj.timer < 1 &&
                <>
                  <EndGameScreen
                    state={state}
                    aiScore={aiScore}
                  />
                </>}

            </div>
          </Route>
        </Switch>
      </Router>
    </timerContext.Provider>
  )
}

export default App
