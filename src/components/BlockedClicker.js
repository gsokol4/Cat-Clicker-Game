import React from 'react'

export default function BlockedClicker (props) {
  return (
    <div>
      <div style={props.block}>
        {props.counter}
      </div>
      <button style={props.style} onClick={() => { props.handleClick(); props.removeButton() }}>
        {props.buttonName}
      </button>

    </div>
  )
}