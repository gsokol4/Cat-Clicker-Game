import { Link } from "react-router-dom"
import {useState} from 'react'

function StartMenu () {
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
    <>
      <label htmlFor='gamerTag'>Gamer Tag</label>
      <input id='gamerTag' placeholder={name} onChange={(e) => setName(e.target.value)} />
      <Link to='/game' className='paper-btn'>Start Game</Link>
      <Link to='/' className='paper-btn'>Options</Link>
      <h6>{name}</h6>
    </>
  )
}
export default StartMenu
