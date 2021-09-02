import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import SelectTimer from './SelectTimer.js'
import timerContext from '../context/timerContext.js'

function StartMenu (props) {
  const [toggleEditName, setToggleEditName] = useState(false)
  const userNameInput = useRef(null)

  async function selectUserNameInput () {
    await setToggleEditName(true)
    userNameInput.current.focus()
  }
  const timerObj = useContext(timerContext)

  function resetTimerToLocalStorage () {
    try {
      const timerSetting = window.localStorage.getItem('timerSetting')
      console.log(timerSetting)
      if (timerSetting === null || undefined) {
        throw new Error('there is no defined timerSetting in local storage')
      }
      timerObj.setTimer(timerSetting)
    } catch {
      console.log('could not access "timerSetting" in local storage using default')
      timerObj.setTimer(180)
    }
  }

  useEffect(() => {
    if (timerObj.timer === 0) {
      resetTimerToLocalStorage()
    } else {
      console.log('timer did not reset')
    }

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
