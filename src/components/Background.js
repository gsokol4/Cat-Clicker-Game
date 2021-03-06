import React, { useState } from 'react'

const backgroundStart = {
  position: 'absolute',
  zIndex: '-10',
  top: '-100px',
  backgroundImage: 'url(/chessCat.jpg)',
  height: '100vh',
  width: '100vw',
  backgroundSize: 'Cover'
}

export default function Background () {
  let [ background, changeBackround ] = useState(backgroundStart)
  return (
    <section>
      <div style={background}></div>
    </section>
  )
}
