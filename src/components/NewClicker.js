import React, { useState, useEffect } from 'react'

const timerStyle = {
  color: 'red'
}
const notClickedStyle = {
  color: 'black'
}
export default function Clicker (props) {
  const [timer, setTimer] = useState(false)
  const [counter, setCounter] = useState(props.counter)
  function handleClick () {
    setTimer(true)
    props.handleClick()
  }
  const handleCounter = () => {
    setCounter(counter - 1)
    if (counter < 1) {
      setTimer(false)
      setCounter(props.counter)
    }
  }
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
  useEffect(() => {
    const interval = setInterval(() => handleCounter(), 1000)
    console.log()
    return () => {
      clearInterval(interval)
    }
  }, [counter])

  let functionCalled = timer ? () => {} : () => { handleClick() }
  return (
    <div>
      <button
        style={timer ? timerStyle : notClickedStyle}
        onClick={functionCalled}
      >
        {timer ? cooldown() : 'get a box of kitties'}
      </button>
    </div>
  )
}
