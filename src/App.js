import { useState } from 'react'
import './App.css'
import Game from './components/Game'
import StartMenu from './components/startMenu/StartMenu'
import groupCat from './images/groupCat.jpg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const background = {
  backgroundImage: 'url(' + groupCat + ')',
  height: window.screen.height,
  backgroundSize: 'cover',
  position: 'relative',
  zIndex: 1,
  color: 'white'
}
function App () {
  let adjList = ['quick', 'fat', 'sneaky', 'smart', 'abrasive', 'ambiguous', 'deadly', 'determined', 'bawdy', 'cloistered', 'capricious', 'craven', 'dapper', 'debonair','divirgent', 'draconian', 'elated', 'erratic', 'fallacious', 'garrulous', 'great', 'greedy', 'incandescent', 'languid', 'macabre', 'twisted', 'green', 'blue', 'black', 'grey', 'pink', ]
  let nounList = ['fox', 'cat', 'grandma', 'grandpa', 'dog', 'hound', 'chicken', 'chupacabra', 'lampost', 'rooster', 'wolf', 'vampire', 'bannana', 'peach', 'pear', 'apple', 'duck', 'driver', 'nurse', 'nutcase', 'elephant', 'rat', 'mouse', 'lion', 'kitty', 'kitten', 'cub', 'llama', 'mom', 'dad', 'sister', 'panda', 'sheep', 'tree', 'fern', 'lilly']

  const randomArrSelector = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }
  const randomAdj = adjList[randomArrSelector(adjList)]
  const randomNoun = nounList[randomArrSelector(nounList)]
  const randomName = `${randomAdj} ${randomNoun}`
  const [name, setName] = useState(randomName)

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <StartMenu
            name={name}
            setName={setName}
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
  )
}

export default App
