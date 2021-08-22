import './App.css'
import Game from './components/Game'
import StartMenu from './components/startMenu/StartMenu'
import groupCat from './images/groupCat.jpg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
    <Router>
      <Switch>
        <Route exact path='/'>
          <StartMenu />
        </Route>
        <Route path='/game'>
          <div style={background} className='App'>
            <Game />
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
