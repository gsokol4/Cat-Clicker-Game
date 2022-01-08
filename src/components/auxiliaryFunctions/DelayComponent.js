import { useState, useEffect } from 'react'
import { Component } from 'react/cjs/react.production.min'

const UseDelayedRender = ({ Component, delay }) => {
  const [delayed, setDelayed] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay)
    return () => clearTimeout(timeout)
  }, [delay])
  return (
    !delayed ? <div> {Component} </div> : <div> </div>
  )
}

export default UseDelayedRender
