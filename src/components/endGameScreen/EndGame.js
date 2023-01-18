import { Link } from 'react-router-dom'
import Loss from './componets/Loss'
import Win from './componets/Win'
import Tie from './componets/Tie'
import './EndGame.css'

function EndGameScreen ({ state, aiScore }) {
  return (
    <div className='page'>
      <div className='endGameWrapper'>
        {state.score > aiScore.score && <Win />}
        {state.score === aiScore.score && <Tie />}
        {state.score < aiScore.score && <Loss />}
        <h5 className='endGamePlayerScore article subtext'>your score: {state.score}</h5>
        <h5 className='endGameAiScore article subtext'>Ai's score: {aiScore.score}</h5>
        <Link to='/cat-clicker'>
          <button>back to menu</button>
        </Link>
      </div>
      <footer className='endGameFooter'>
        Thank you for trying out my game :) for other samples of my work and to find out more about me as
        a developer please visit <br />
        <a className='footerLink' href='https://gabrielsokol.com'>my portfolio website</a>.
      </footer>
    </div>
  )
}

export default EndGameScreen
