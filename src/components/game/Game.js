import Clicker from './Clicker.js'
import ScoreBoard from './scoreboard/ScoreBoard'
import NewClicker from './NewClicker.js'
import BackDrop from './BackDrop.js'
import AutoClicker from './auto/menu'
import Ai from './ai/Ai'
import emojies from '../../images/emojies.js'
import './game.css'

export default function Game (
  // destructuring props
  { state, name, handleAddCat, changeState, autoCatDelivery, reduceCats, aiScore, setAiScore }
) {
  return (
    <div className='gamePage'>
      <div className='gameBody'>
        <BackDrop />
        <ScoreBoard
          name={name}
          score={state.score}
          aiScore={aiScore}
          setAiScore={setAiScore}
        />
        <div className='clickerContainer'>
          <Clicker
            className='button1'
            id='add1'
            handleClick={() => handleAddCat(1)}
            buttonName='Get a kitty'
            emoji={emojies.cat}
          />
          {state.score > 4 && <NewClicker
            className='button2'
            cats={state}
            counter={0.5}
            handleClick={() => handleAddCat(5)}
            name='Get a box of kittens'
            catsPerClick={5}
            emoji={emojies.box}
          />}
          {state.score > 10 && <NewClicker
            className='button3'
            cats={state}
            counter={2}
            handleClick={() => handleAddCat(10)}
            catsPerClick={10}
            name='A cartload of kitties'
            emoji={emojies.cart}
          />}
          {state.score > 100 && <NewClicker
            className='button4'
            cats={state}
            counter={3}
            handleClick={() => handleAddCat(20)}
            catsPerClick={20}
            name='a boatload of kitties'
            emoji={emojies.boat}
          />}
          {state.score > 500 && <NewClicker
            className='button5'
            cats={state}
            counter={4}
            handleClick={() => handleAddCat(50)}
            catsPerClick={50}
            name='A truckload of kitties'
            emoji={emojies.truck + emojies.dash}
          />}
          {state.score > 1000 && <NewClicker
            className='button6'
            cats={state}
            counter={5}
            handleClick={() => handleAddCat(100)}
            catsPerClick={100}
            name='Airdrop some kitties'
            emoji={emojies.airPlane}
          />}

          {state.score > 5000 && <NewClicker
            className='button7'
            cats={state}
            counter={10}
            handleClick={() => handleAddCat(500)}
            catsPerClick={500}
            name='Recruit a cat army'
            emoji={emojies.gun + emojies.cat}
          />}
          {state.score > 10000 && <NewClicker
            className='button8'
            cats={state}
            counter={20}
            handleClick={() => handleAddCat(1000)}
            catsPerClick={1000}
            name='Found a cat city'
            emoji={emojies.cat + emojies.city}
          />}
          {state.score > 10000 && <NewClicker
            className='button9'
            cats={state}
            counter={20}
            handleClick={() => handleAddCat(10000)}
            catsPerClick={10000}
            name='interdimensional cat portal'
            emoji={emojies.cat + emojies.portal}
          />}
        </div>
        <AutoClicker
          cats={state}
          reduceCats={(num, num2, state, stateKey) => reduceCats(num, num2, state, stateKey)}
          costOfAutomation={autoCatDelivery}
          changeState={changeState}
        />
      </div>
    </div>
  )
}
