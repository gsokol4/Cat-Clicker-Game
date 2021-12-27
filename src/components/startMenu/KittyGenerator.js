
import { useState, useEffect } from 'react'
import cats from '../../images/floatingCats.js'
import './KittyGenerator.css'

export default function MakeCat () {
  const [position, setPosition] = useState({ right: 0, top: 9, width: window.innerWidth, height: window.innerHeight })
  let currentPosition = { right: `${position.right}px`, top: `${position.top}px` }
  function moveCat () {
    return setPosition((prev) => { return { ...prev, top: (prev.top + 0) } })
  }
  useEffect(() => {
    function handleResize() {
      setPosition((prev) => { return { ...prev, width: window.innerWidth, height: window.innerHeight } })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    setInterval(() => { moveCat() }, 40)
    return () => {
    }
  }, [])

  return (
    <>
      <img
        src={cats[0]}
        alt=''
        className='f'
        style={currentPosition}
      />
    </>
  )
}
