import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SelectTimer from './SelectTimer.js'

function StartMenu (props) {
  const [toggleEditName, setToggleEditName] = useState(false)
  const userNameInput = useRef(null)

  async function selectUserNameInput () {
    await setToggleEditName(true)
    userNameInput.current.focus()
  }
  function resetTimer () {
    console.log('timer reset')
  }

  useEffect(() => {
    resetTimer()
    return () => {

    }
  }, [])

  return (
    <div
      style={{ backgroundColor: 'pink' }}
    >
      <label htmlFor='gamerTag'>Gamer Tag</label>
      {toggleEditName === false &&
        <>
          <div onClick={() => selectUserNameInput()}>
            {props.name}
          </div>
          <button
            onClick={() => props.setName(props.randomName)}
          >
            random username
          </button>
        </>}
      {toggleEditName === true &&
        <>
          <input
            id='gamerTag'
            value={props.name}
            ref={userNameInput}
            onBlur={() => setToggleEditName(false)}
            onInput={(e) => {
              props.setName(e.target.value)
              window.localStorage.setItem('catClickerUserName', e.target.value)
            }}
          />
          <button onClick={() => setToggleEditName(false)}>submit</button>
        </>}
      <Link to='/game' className='paper-btn'>Start Game</Link>
      <Link to='/' className='paper-btn'>Options</Link>
      <h6>{props.name}</h6>
      <SelectTimer />
    </div>
  )
}
export default StartMenu
