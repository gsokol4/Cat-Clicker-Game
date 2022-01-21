
import React, { useState, useEffect } from 'react'
import cats from '../../images/floatingCats.js'
import './KittyGenerator.css'

function inicializeTopPosition () {
  return Math.floor((Math.random() * window.innerWidth) - 10)
}

const randomArrayValue = () => {
  return Math.floor(Math.random() * cats.length)
}
const randomNumberToTen = () => {
  const num = Math.floor(Math.random() * 10)
  return num
}

export default function MakeCat ({ delay }) {
  const [position, setPosition] = useState({
    right: inicializeTopPosition(),
    top: -120,
    width: window.innerWidth,
    height: window.innerHeight,
    catPic: cats[randomArrayValue()]
  })
  const currentPosition = { right: `${position.right}px`, top: `${position.top}px` }
  function moveCat () {
    return setPosition((prev) => { return { ...prev, top: (prev.top + 1.5) } })
  }
  function resetCat () {
    return setPosition((prev) => { return { ...prev, top: -120 } })
  }
  function randomInnerWidth () {
    return Math.floor((Math.random() * position.width) - 10)
  }
  const placeCatHorizontally = React.useCallback(() => {
    return setPosition((prev) => { return { ...prev, right: randomInnerWidth() } })
  }, [randomInnerWidth])
  function setRandomCat () {
    return setPosition((prev) => { return { ...prev, catPic: cats[randomArrayValue()] } })
  }
  useEffect(() => {
    function handleResize () {
      setPosition((prev) => { return { ...prev, width: window.innerWidth, height: window.innerHeight } })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    const oneMove = setInterval(() => { moveCat() }, 10)
    return () => {
      clearInterval(oneMove)
    }
  }, [position.top])

  useEffect(() => {
    if (position.height < position.top - 30) {
      setRandomCat()
      placeCatHorizontally()
      resetCat()
    }
    return () => {
    }
  }, [position, placeCatHorizontally])

  return (
    <>
      <img
        src={position.catPic}
        alt=''
        className='catImageStyles'
        style={currentPosition}
      />
    </>
  )
}
