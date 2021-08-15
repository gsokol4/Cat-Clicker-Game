import React, { useState, useEffect } from 'react'

export default function BackDrop (props) {
  const [backDropWidth, changeBackDropWidth] = useState(window.innerWidth)
  function handleInnerWidthChange () {
    changeBackDropWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleInnerWidthChange)
  })
  const backdropStyle = {
    backgroundColor: 'black',
    opacity: 0.9,
    height: '100vh',
    width: (backDropWidth / 10) * 6,
    position: 'absolute',
    left: (backDropWidth / 10) * 2,
    zIndex: -1
  }
  const backDropPhone = {
    backgroundColor: 'black',
    opacity: 0.8,
    height: '100vh',
    width: backDropWidth,
    position: 'absolute',
    zIndex: -1
  }
  return (
    <section>
      <div style={backDropWidth > 850 ? backdropStyle : backDropPhone} />
    </section>
  )
}
