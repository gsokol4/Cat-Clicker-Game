import './App.css'
import Game from './components/Game'
import WindowWidth from './components/WindowWidth'
import NewClicker from './components/NewClicker'
import Background from './components/BackDrop'
import groupCat from './images/groupCat.jpg'

const background = {
  backgroundImage: 'url(' + groupCat + ')',
  height: window.screen.height,
  backgroundSize: 'cover',
  position: 'relative',
  zIndex: 1,
  color: 'white'
}
function App () {
  return (
    <div style={background} className='App'>
      <Game />
    </div>
  )
}

export default App
