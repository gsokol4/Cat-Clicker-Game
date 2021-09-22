import React, { useContext, useEffect } from 'react'
import timer from '../../auxiliaryFunctions/clock'
import timerContext from '../../context/timerContext'

const setTimeOutList = []
function Timer () {
  const timerObj = useContext(timerContext)

  useEffect(() => {
    function tickTock () {
      // tick tock the mouse went up the clock
      // decrements time by one second
      if (timerObj.timer < 1) {
        return
      }
      const newTimeOut = setTimeout(() => {
        timerObj.setTimer((prev) => { return prev - 1 })
      }, 1000)
      setTimeOutList.push(newTimeOut)
    }
    tickTock()
  }, [timerObj.timer])

  useEffect(() => {
    return () => {
      setTimeOutList.forEach(
        (value) => clearTimeout(value)
      )
    }
  }, [])

  return (
    <h3>{timer(timerObj.timer)} </h3>
  )
}

export default Timer
