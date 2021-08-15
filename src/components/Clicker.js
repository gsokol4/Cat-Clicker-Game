import React from 'react'

export default function Clicker (props) {
  return (
    <div>
      <button id={props.id} className='btn-success-outline' onClick={() => { props.handleClick() }}>
        {props.buttonName + ' +1 ' + props.emoji}
      </button>
    </div>
  )
}
