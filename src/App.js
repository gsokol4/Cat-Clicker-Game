import React, { useState } from 'react'
import './App.css'
import Game from './components/game/Game'
import StartMenu from './components/startMenu/StartMenu'
import groupCat from './images/groupCat.jpg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import timerContext from './components/ContextComponents/timerContext.js/timerContext'
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
  const [timer, setTimer] = useState(180)

  function handleTimer (time) {
    if (typeof time !== 'number') {
      console.error('handle timer can not be set to a non-number value check the input')
      return
    }
    setTimer(time)
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
    if (localStorage.hasOwnProperty('catClickerUserName')) {
      return true
    } else {
      return false
    }
  }
  const adjList = ['quick', 'fat', 'sneaky', 'smart', 'abrasive', 'ambiguous', 'deadly', 'determined', 'bawdy', 'cloistered', 'capricious', 'craven', 'dapper', 'debonair', 'divirgent', 'draconian', 'elated', 'erratic', 'fallacious', 'garrulous', 'great', 'greedy', 'incandescent', 'languid', 'macabre', 'twisted', 'green', 'blue', 'black', 'grey', 'pink']
  const nounList = ['fox', 'cat', 'grandma', 'grandpa', 'dog', 'hound', 'chicken', 'chupacabra', 'lampost', 'rooster', 'wolf', 'vampire', 'bannana', 'peach', 'pear', 'apple', 'duck', 'driver', 'nurse', 'nutcase', 'elephant', 'rat', 'mouse', 'lion', 'kitty', 'kitten', 'cub', 'llama', 'mom', 'dad', 'sister', 'panda', 'sheep', 'tree', 'fern', 'lilly']

  const randomArrSelector = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }
  const randomAdj = adjList[randomArrSelector(adjList)]
  const randomNoun = nounList[randomArrSelector(nounList)]
  const randomName = () => `${randomAdj} ${randomNoun}`
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
              <Game
                name={name}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </timerContext.Provider>
  )
}

export default App
