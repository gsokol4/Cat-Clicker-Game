import React, { useContext } from 'react'
import timer from '../../auxiliaryFunctions/clock'
import timerContext from '../../ContextComponents/timerContext.js/timerContext'

function Timer () {
  const timerObj = useContext(timerContext)
  console.log(timerObj)
  function tickTock () {
    // tick tock the mouse went up the clock
    // decrements time by one second
    setTimeout(() => {
      timerObj.setTimer((prev) => { return prev - 1 })
    }, 1000)
  }
  return (
    <h3>{timer(timerObj.timer)} </h3>
  )
}

export default Timer
