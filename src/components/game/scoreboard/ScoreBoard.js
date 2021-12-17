import React from 'react'
import CommentBoard from '../commentBoard/CommentBoard'
import Timer from './Timer'
export default function ScoreBoard (props) {
  return (
    <div data-testId='ScoreBoard'>
      <Timer />
      <h6>{props.name}</h6>
      <h3> score: {`${props.score} ${props.score > 1 ? 'cats' : 'cat'}`} </h3>
      <CommentBoard
        score={props.score}
      />
      <div id='score' />
    </div>
  )
}
