import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import SelectTimer from './SelectTimer.js'
import timerContext from '../context/timerContext.js'
import GameDescription from './GameDescription.js'
import './startMenu.css'

function StartMenu (props) {
  // reset score and aiScore to 0 upon retuning to the main menu
  useEffect(() => {
    props.changeState({ score: 0 })
    props.setAiScore({ score: 0, AiClickRate: 1 })
  }, [])

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
    resetTimerToLocalStorage()
    return () => {

    }
  }, [])

  return (
    <div
      className='body'
    >
      <GameDescription />
      <label className='gamerTagTitle' htmlFor='gamerTag'>User Name:</label>
      {toggleEditName === false &&
        <>
          <div className='userName' onClick={() => selectUserNameInput()}>
            {props.name}
          </div>
          <button
            className='randUserName'
            onClick={() => props.setName(props.randomName)}
          >
            random username
          </button>
        </>}
      {toggleEditName === true &&
        <>
          <input
            className='input'
            id='gamerTag'
            value={props.name}
            ref={userNameInput}
            onBlur={() => setToggleEditName(false)}
            onInput={(e) => {
              props.setName(e.target.value)
              window.localStorage.setItem('catClickerUserName', e.target.value)
            }}
          />
          <button className='randUserName' onClick={() => setToggleEditName(false)}>submit</button>
        </>}
      <Link to='/game' className='start paper-btn'>Start Game</Link>
      <h6>{props.name}</h6>
      <SelectTimer />
    </div>
  )
}
export default StartMenu
