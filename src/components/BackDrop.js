import React, { useState, useEffect } from 'react'

export default function BackDrop (props) {
  const [backDropWidth, changeBackDropWidth] = useState(document.body.clientWidth)
  function handleInnerWidthChange () {
    changeBackDropWidth(document.body.clientWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleInnerWidthChange)

    return () => { console.log('event fired') }
  }, [backDropWidth])
  const backdropStyle = {
    backgroundColor: 'black',
    opacity: 0.9,
    height: '100%',
    width: (backDropWidth / 10) * 6,
    position: 'absolute',
    left: (backDropWidth / 10) * 2,
    zIndex: -1
  }
  const backDropPhone = {
    backgroundColor: 'black',
    opacity: 0.8,
    height: '100%',
    width: document.body.clientWidth,
    position: 'absolute',
    zIndex: -1
  }
  return (
    <section>
      <div style={backDropWidth > 850 ? backdropStyle : backDropPhone} />
    </section>
  )
}
