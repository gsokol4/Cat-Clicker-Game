import React, { useState, useEffect } from 'react'

export default function WindowWidth () {
  const [windowSize, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })
  return (<div>{windowSize}</div>)
}
