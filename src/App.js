import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Game from './components/game/Game'
import StartMenu from './components/startMenu/StartMenu'
import EndGameScreen from './components/endGameScreen/EndGame'
import groupCat from './images/groupCat.jpg'
import timerContext from './components/context/timerContext'
import './App.css'
import './paper.css'

const background = {
  backgroundImage: 'url(' + groupCat + ')',
  height: window.screen.height,
  backgroundSize: 'cover',
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
    console.log(window.localStorage)
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
  const adjList = ['quick', 'fat', 'sneaky', 'smart', 'abrasive', 'ambiguous', 'deadly', 'determined', 'bawdy', 'cloistered', 'capricious', 'craven', 'dapper', 'debonair', 'divirgent', 'draconian', 'elated', 'erratic', 'fallacious', 'garrulous', 'great', 'greedy', 'incandescent', 'languid', 'macabre', 'twisted', 'green', 'blue', 'black', 'grey', 'pink']
  const nounList = ['fox', 'cat', 'grandma', 'grandpa', 'dog', 'hound', 'chicken', 'chupacabra', 'lampost', 'rooster', 'wolf', 'vampire', 'bannana', 'peach', 'pear', 'apple', 'duck', 'driver', 'nurse', 'nutcase', 'elephant', 'rat', 'mouse', 'lion', 'kitty', 'kitten', 'child', 'llama', 'mom', 'dad', 'sister', 'panda', 'sheep', 'tree', 'fern', 'lilly']

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

  return (
    <timerContext.Provider value={timerObj}>
      <Router>
        <Switch>
          <Route exact path='/'>

            <StartMenu
              name={name}
              setName={setName}
              randomName={randomName}
            />

          </Route>
          <Route path='/game'>
            <div style={background} className='App'>
              {timerObj.timer > 0 &&
                <>
                  <Game
                    name={name}
                  />
                </>}
              {timerObj.timer < 1 &&
                <>
                  <EndGameScreen />
                </>}

            </div>
          </Route>
        </Switch>
      </Router>
    </timerContext.Provider>
  )
}

export default App
