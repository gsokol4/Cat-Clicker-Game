import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import SelectTimer from './SelectTimer.js'
import timerContext from '../context/timerContext.js'
import GameDescription from './GameDescription.js'
import MovingImg from './KittyGenerator'
import Delay from '../auxiliaryFunctions/DelayComponent'
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
    <div className='page'>
      <div
        className='body'
      >
        <GameDescription />
        <Link to='cat-clicker/game' className='text-link'>
          <button className='paper-btn start'>
            Start Game
          </button>
        </Link>
        <label className='gamerTagTitle sectionTitle' htmlFor='gamerTag'>User Name:</label>
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
        <SelectTimer />
      </div>
      <Delay
        delay={50}
        Component={<MovingImg />}
      />
      <Delay
        delay={2000}
        Component={<MovingImg />}
      />
      <Delay
        delay={4000}
        Component={<MovingImg />}
      />
      <Delay
        delay={6000}
        Component={<MovingImg />}
      />
      <Delay
        delay={8000}
        Component={<MovingImg />}
      />
      <Delay
        delay={1000}
        Component={<MovingImg />}
      />
      <Delay
        delay={3000}
        Component={<MovingImg />}
      />
      <Delay
        delay={5000}
        Component={<MovingImg />}
      />
      <footer className='endGameFooter'>
        <p className='footerText'>Thank you for trying out my game :) for other samples of my work and to find out more about me as
        a developer please visit <a className='footerLink' href='https://gabrielsokol.com'>my portfolio website</a>.
        </p>
      </footer>
    </div>
  )
}
export default StartMenu
