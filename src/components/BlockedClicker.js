import React from 'react'

export default function BlockedClicker (props) {
  function click () {
    /*
    setTimeout(() => {
      props.removeButton()
    }, 500)
    */
    return props.handleClick()
  }
  return (
    <div>
      <div style={props.block}>
        {props.counter}
      </div>
      <button style={props.style} onClick={function () { click() }}>
        {props.buttonName}
      </button>

    </div>
  )
}