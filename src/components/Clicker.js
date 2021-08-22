import React from 'react'

export default function Clicker (props) {
  return (
    <div className={props.className}>
      <button id={props.id} className='btn-success-outline clickerButton' onClick={() => { props.handleClick() }}>
        {props.buttonName + ' +1 ' + props.emoji}
      </button>
    </div>
  )
}
