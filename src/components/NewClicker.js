import React, { useState, useEffect } from 'react'
import '../paper.css'
const timerStyle = {
  color: 'red'
}
const notClickedStyle = {
  color: 'black'
}

export default function Clicker (props) {
  // timer = is the button in a delay after being clicked
  const [timer, setTimer] = useState(false)
  // counter = delay after buttton click
  const [counter, setCounter] = useState(props.counter)
  // style = the style being applied to a current button
  const [elStyle, setElStyle] = useState(notClickedStyle)

  // this is just a clock for the when timer is on
  const cooldown = () => {
    let sec
    let min
    let hour
    let addZero
    let addZeroMin
    let addZeroHour
    addZero = (counter % 60 < 10 || counter) < 10 ? '0' : ''
    addZeroMin = (Math.floor((counter / 60) % 60)) < 10 ? '0' : ''
    addZeroHour = (Math.floor((counter / 60) / 60 % 60)) < 10 ? '0' : ''
    sec = `cooldown ${addZero}${counter}s`
    min = `cooldown ${addZeroMin}${Math.floor(counter / 60)}:${addZero}${counter % 60}`
    hour = (
      `cooldown ${addZeroHour}${Math.floor((counter / 60) / 60)}:
      ${addZeroMin}${Math.floor((counter / 60) % 60)}:
      ${addZero}${Math.floor((counter % 60))}`
    )
    if (counter < 60) {
      return sec
    } else if (counter < 3600) {
      return min
    } else if (counter > 3600) { return hour }

    return counter
  }
  // effect for when the counter changes
  useEffect(() => {
    const interval = setInterval(() => { handleCounter() }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [counter])

  const changeStyle = () => {
    timer ? setElStyle(timerStyle) : setElStyle(notClickedStyle)
  }
  const handleCounter = () => {
    setCounter(counter - 1)
    if (counter < 1) {
      setTimer(false)
      setCounter(props.counter)
    }
  }
  // this is what happens when you click the button
  const functionCalled = timer ? () => {} : () => { handleClick() }

  function handleClick () {
    setTimer(true)
    props.handleClick()
  }

  return (
    <div>
      <button
        className={timer ? 'btn-danger' : 'btn-success-outline'}
        onClick={() => { functionCalled() }}
      >
        {timer ? cooldown() : props.name} {` +${props.catsPerClick} `} {props.emoji}
      </button>
    </div>
  )
}
