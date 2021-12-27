import { useContext } from 'react'
import timerContext from '../context/timerContext'
import clock from '../auxiliaryFunctions/clock'

export default function SelectTimer (props) {
  const timerObj = useContext(timerContext)

  return (
    <>
      <h4>{clock(timerObj.timer)}</h4>
      <label> Select Match Time Limit </label>
      <div className='options'>
        <div className='form-check'>
          <label>
            <input
              type='radio'
              name='react-tips'
              value='5 min'
              className='form-check-input'
              onClick={() => timerObj.handleTimer(60)}
            />
          1 min
          </label>
        </div>
        <div className='form-check'>
          <label>
            <input
              type='radio'
              name='react-tips'
              value='two minutes'
              className='form-check-input'
              onClick={() => timerObj.handleTimer(120)}
            />
          2 min
          </label>
        </div>
        <div className='form-check'>
          <label>
            <input
              type='radio'
              name='react-tips'
              value='three minutes'
              className='form-check-input'
              onClick={() => timerObj.handleTimer(180)}
            />
          3 min
          </label>
        </div>
        <div className='form-check'>
          <label>
            <input
              type='radio'
              name='react-tips'
              value='four minutes'
              className='form-check-input'
              onClick={() => timerObj.handleTimer(240)}
            />
          4 min
          </label>
        </div>
        <div className='form-check'>
          <label>
            <input
              type='radio'
              name='react-tips'
              value='five minutes'
              className='form-check-input'
              onClick={() => timerObj.handleTimer(300)}
            />
            5 min
          </label>
        </div>
      </div>
    </>
  )
}
