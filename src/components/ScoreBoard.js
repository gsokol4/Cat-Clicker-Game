import React from 'react'
import CommentBoard from './commentBoard/CommentBoard'

export default function ScoreBoard (props) {
  return (
    <div>
      {props.score < 10 &&
        <>
          <h3>Welcome to CatClicker <br /> the goal of the game is to get as many cats as possible</h3>
          <p>click the below buttons to aquire kittens</p>
          <p>the automate section allows you to spend cats to earn automated clicks</p>
        </>}
      <h3>score: {`${props.score} ${props.score > 1 ? 'cats' : 'cat'}`} </h3>
      <CommentBoard
        score={props.score}
      />
      <div id='score' />

    </div>
  )
}
