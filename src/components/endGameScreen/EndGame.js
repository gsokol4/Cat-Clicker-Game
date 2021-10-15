import { Link } from 'react-router-dom'
import Loss from './componets/Loss'
import Win from './componets/Win'
import Tie from './componets/Tie'
import './EndGame.css'

function EndGameScreen ({ state, aiScore }) {
  return (
    <div className='endGameWrapper'>
      {state.score > aiScore.score && <Win />}
      {state.score === aiScore.score && <Tie />}
      {state.score < aiScore.score && <Loss />}
      <h5 className='endGamePlayerScore article'>your score: {state.score}</h5>
      <h5 className='endGameAiScore article'>Ai's score: {aiScore.score}</h5>
      <Link to='/'>
        <button>back to menu</button>
      </Link>
    </div>
  )
}

export default EndGameScreen
