import AutomateButton from "./AutomateButton"

export default function AutoClicker (props) {
  return (
    <>
      <h3> Automate your kitten aquisition</h3>
      <AutomateButton
        name='stray cat bait station'
        costOfAutomation={props.costOfAutomation.delivery}
        cats={props.cats}
        reduceCats={props.reduceCats}
        kittensPerSecond={1}
        keyName='delivery'
      />
      <AutomateButton
        name='breeding program'
        costOfAutomation={props.costOfAutomation.breedingProgram}
        cats={props.cats}
        reduceCats={props.reduceCats}
        kittensPerSecond={5}
        keyName='breedingProgram'
      />
    </>
  )
}
