import Ai from '../game/ai/Ai'
import Loss from './componets/Loss'
import Win from './componets/Win'

function EndGameScreen ({ state, aiScore }) {
  return (
    <>
      <h1 data-testid='title' style={{ backgroundColor: 'pink', zIndex: 100, position: 'relative', margin: 0 }}>You Lost</h1>
      {state.score >= aiScore.score && <Win />}
      {state.score < aiScore.score && <Loss />}
      <h5>your score: {state.score}</h5>
      <h5>Ai's score: {aiScore.score}</h5>
      <button>back to menu</button>
    </>
  )
}

export default EndGameScreen
