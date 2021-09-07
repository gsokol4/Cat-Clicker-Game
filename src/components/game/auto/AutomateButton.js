import { useEffect } from 'react'

const intervals = []
export default function AutomateButton (props) {
  function handleClick () {
    props.reduceCats(props.costOfAutomation, props.kittensPerSecond, props.keyName)

    const autoClicker = setInterval(() => {
      props.changeState((prevState) => ({ score: prevState.score + props.kittensPerSecond }))
    }, 1000)
    intervals.push(autoClicker)
  }
  useEffect(() => {
    return () => {
      intervals.forEach(
        (node, index) => { clearInterval(intervals[index]) }
      )
    }
  }, [])

  return (
    <button
      className={props.costOfAutomation > props.cats.score ? 'disabled' : 'btn-success-outline'}
      onClick={() => handleClick()}
    >
      {props.name}
      <br />
        Cost: {props.costOfAutomation} cats
      <br />
        adds {`${props.kittensPerSecond} ${props.kittensPerSecond > 1 ? 'kittens' : 'cat'}`} per second
    </button>
  )
}
