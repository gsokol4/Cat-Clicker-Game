import React, { useContext, useEffect } from 'react'
import timer from '../../auxiliaryFunctions/clock'
import timerContext from '../../context/timerContext'

function Timer () {
  const timerObj = useContext(timerContext)

  useEffect(() => {
    function tickTock () {
      // tick tock the mouse went up the clock
      // decrements time by one second
      if (timerObj.timer < 1) {
        return
      }
      setTimeout(() => {
        timerObj.setTimer((prev) => { return prev - 1 })
      }, 1000)
    }
    tickTock()
  }, [timerObj.timer])

  return (
    <h3>{timer(timerObj.timer)} </h3>
  )
}

export default Timer
