import { useEffect } from 'react'

export default function AutomateButton (props) {

  useEffect(() => {
    return () => {
      () => props.reduceCats(props.costOfAutomation, props.kittensPerSecond, props.keyName)
      console.log('clean up ran')
    }
  }, [input])

  return (
    <button
      className={props.costOfAutomation > props.cats.score ? 'disabled' : 'btn-success-outline'}
      onClick={() => props.reduceCats(props.costOfAutomation, props.kittensPerSecond, props.keyName)}
    >
      {props.name}
      <br />
        Cost: {props.costOfAutomation} cats
      <br />
        adds {`${props.kittensPerSecond} ${props.kittensPerSecond > 1 ? 'kittens' : 'cat'}`} per second
    </button>
  )
}
