import React from 'react'

export default function Clicker (props) {
  return (
    <div>
      <button style={props.style} onClick={() => { props.handleClick() }}>
        {props.buttonName}
      </button>
    </div>
  )
}
