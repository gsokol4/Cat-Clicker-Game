import React from 'react'

export default function ScoreBoard (props) {
  return (
    <div>
      <h3 style={props.style}>You currently have this many cats</h3>
      <div>
        {props.score}
      </div>
    </div>
  )
}
