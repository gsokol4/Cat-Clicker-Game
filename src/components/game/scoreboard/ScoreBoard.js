import React from 'react'
import CommentBoard from '../commentBoard/CommentBoard'
import Timer from './Timer'
import Ai from '../ai/Ai.js'
import './scoreBoard.css'

export default function ScoreBoard (props) {
  return (
    <div data-testId='ScoreBoard'>
      <Timer />
      <div className='vsBox'>
        <div className='scoreContainer player'>
          <h4 className='playerName'>{props.name}</h4>
          <h4>{`${props.score} ${props.score != 1 ? 'cats' : 'cat'}`} </h4>
        </div>
        <h3>VS</h3>
        <Ai
          aiScore={props.aiScore}
          setAiScore={props.setAiScore}
        />
      </div>
      <CommentBoard
        score={props.score}
      />
      <div id='score' />
    </div>
  )
}
