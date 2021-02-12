import React from 'react'

export default function BlockedClicker (props) {
  function click () {
    props.handleClick()
    props.removeButton()
  }
  return (
    <div>
      <div style={props.block}>
        {props.counter}
      </div>
      <button style={props.style} onClick={() => { click() }}>
        {props.buttonName}
      </button>

    </div>
  )
}