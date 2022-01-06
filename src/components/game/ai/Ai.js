import React, { useState, useEffect } from 'react'

const names = ['Mo-JO-JO-JO', 'yeetyeet', 'TeamUSA!!!', 'DarthMall', 'ChocolateMMMMMM', 'Mooning Duck', 'Mother Russia', 'asdf', 'Randy Marsh', 'Taco Cat', 'Meme Team', 'Gnar', 'Velcoz', 'Katerina', 'John Cena', 'Kitten Lover', 'Kat Queen', 'Queen', 'Crazy Cat', 'Crude', '2EZ', 'you are losing!', 'Yoink Fish', 'cream custard', 'Han Solo', 'John Cena', 'John Wayne', 'Abraham Lincoln', 'The Spiffing Brit', 'Dunkey', 'Mr.suidesidesheep', 'Goth Emo Kid', 'blue-eyed dragon', 'dragon twister', 'pants on dragon', 'Crazy Cat lady']
function playerName (arr) {
  const ranNum = Math.floor(Math.random() * arr.length)
  return (arr[ranNum])
}
const randomName = playerName(names)

export default function Ai ({ setAiScore, aiScore }) {
  function handleAiScore (prev) {
    setAiScore((prev) => ({ score: (prev.score + prev.AiClickRate), AiClickRate: prev.AiClickRate }))
  }
  function handleAiClickRate () {
    if (aiScore.score < 100) { return }
    setAiScore((prev) => ({ score: prev.score - 100, AiClickRate: prev.AiClickRate + 2 }))
  }
  function randomInt (min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  useEffect(() => {
    const ai = setInterval(() => { handleAiScore() }, randomInt(100, 400))
    return function cleanup () {
      clearInterval(ai)
    }
  }, [aiScore])
  useEffect(() => {
    const clickRate = setInterval(() => handleAiClickRate(), 20000)
    return function cleanup () {
      clearInterval(clickRate)
    }
  }, [aiScore.AiClickRate])
  return (
    <div className='scoreContainer opponent'>
      <h4> opponent:<br />{randomName} </h4>
      <h4>{`${aiScore.score} ${aiScore.score != 1 ? 'cats' : 'cat'}`} </h4>
    </div>
  )
}
