
import { useState, useEffect } from 'react'
import cats from '../../images/floatingCats.js'
import './KittyGenerator.css'

function inicializeTopPosition () {
  return Math.floor((Math.random() * window.innerWidth) - 10)
}

export default function MakeCat () {
  const [position, setPosition] = useState({ right: inicializeTopPosition(), top: 9, width: window.innerWidth, height: window.innerHeight })
  let currentPosition = { right: `${position.right}px`, top: `${position.top}px` }
  function moveCat () {
    return setPosition((prev) => { return { ...prev, top: (prev.top + 1.5) } })
  }
  function resetCat () {
    return setPosition((prev) => { return { ...prev, top: -30 } })
  }
  function randomInnerWidth () {
    return Math.floor((Math.random() * position.width) - 10)
  }
  function placeCatHorizontally () {
    return setPosition((prev) => { return { ...prev, right: randomInnerWidth() } })
  }
  useEffect(() => {
    function handleResize() {
      setPosition((prev) => { return { ...prev, width: window.innerWidth, height: window.innerHeight } })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    let oneMove = setInterval(() => { moveCat() }, 10)
    return () => {
      clearInterval(oneMove)
    }
  }, [position.top])

  useEffect(() => {
    if( position.height < position.top - 30 ){
      placeCatHorizontally()
      resetCat()
    }
    return () => {
    }
  }, [position.top])


  return (
    <>
      <img
        src={cats[9]}
        alt=''
        className='f'
        style={currentPosition}
      />
    </>
  )
}
