import React, { useState, useEffect } from 'react'

const timerStyle = {
  color: 'red'
}
const notClickedStyle = {
  color: 'black'
}
const visibility = {
  visibility: 'hidden'
}
export default function Clicker (props) {
  // timer = is the button in a delay after being clicked
  const [timer, setTimer] = useState(false)
  // counter = delay after buttton click
  const [counter, setCounter] = useState(props.counter)
  // style = the style being applied to a current button
  const [elStyle, setElStyle] = useState(visibility)

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
  // effect that checks all clicks to edit the style when above a #

  useEffect(() => {
    window.addEventListener('click', check)
    return () => { window.removeEventListener('click', check) }
  }, [props.cats.score])
  const check = () => {
    console.log('check fired')
    props.cats.score < 5 ? setElStyle(visibility) : setElStyle(notClickedStyle)
  }
  // effect for when the counter changes
  useEffect(() => {
    const interval = setInterval(() => { changeStyle(); handleCounter() }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [counter])

  const changeStyle = () => {
    if (props.cats.score < 5) { return }
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
        style={elStyle}
        onClick={() => { functionCalled() }}
      >
        {`${JSON.stringify(elStyle)}`}
        {timer ? cooldown() : 'get a box of kitties'}
        {`${props.cats.score}`}
      </button>
    </div>
  )
}
