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
  const [timer, setTimer] = useState(false)
  const [counter, setCounter] = useState(props.counter)
  const [catCountCheck, setCatCountCheck] = useState(true)
  const [elStyle, setElStyle] = useState(visibility)

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

  let returnStyle = () => {
    if (props.cats > 8) {
      let style = timer ? props.redStyle : props.blackStyle
      console.log(props.blackStyle)
      return style
    } else {
      return visibility
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
  const check = () => {
    console.log(props.cats.score)
    props.cats.score < 5 ? setElStyle(visibility) : changeStyle()
  }
  useEffect(() => {
    window.addEventListener('click', check)
    console.log(catCountCheck)
    console.log(props.cats)
    return () => { window.removeEventListener('click', check) }
  }, [props.cats.score])

  useEffect(() => {
    const interval = setInterval(() => handleCounter(), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [counter])
  let functionCalled = timer ? () => {} : () => { handleClick(); changeStyle() }
  let changeStyle = () => {
    timer ? setElStyle(timerStyle) : setElStyle(notClickedStyle)
    setElStyle(timerStyle)
    console.log(elStyle)
  }
  return (
    <div>
      <button
        style={elStyle}
        onClick={() => { functionCalled(); changeStyle() }}
      >
        {`${JSON.stringify(elStyle)}`}
        {timer ? cooldown() : 'get a box of kitties'}
        {`${props.cats.score}`}
      </button>
    </div>
  )
}
