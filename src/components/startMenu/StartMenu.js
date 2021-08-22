import { Link } from "react-router-dom"

function StartMenu (props) {
  return (
    <>
      <label htmlFor='gamerTag'>Gamer Tag</label>
      <input id='gamerTag' placeholder={props.name} onChange={(e) => props.setName(e.target.value)} />
      <Link to='/game' className='paper-btn'>Start Game</Link>
      <Link to='/' className='paper-btn'>Options</Link>
      <h6>{props.name}</h6>
      <label> Select Match Time Limit </label>
    </>
  )
}
export default StartMenu
