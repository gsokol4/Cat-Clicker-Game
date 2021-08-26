
export default function CommentBoard (props) {
  const note = () => {
    let statement = ''
    switch (true) {
      case props.score <= 0 :
        statement = 'I sense a disturbing lack of kitties'
        break
      case props.score === 1 :
        statement = 'one is enough?'
        break
      case props.score <= 5 :
        statement = 'show me your kitties!!!'
        break
      case props.score < 10:
        statement = 'soo cute'
        break
      case props.score === 10:
        statement = 'the apartmen smells like cats'
        break
      case props.score <= 50:
        statement = 'proud kitty mama'
        break
      case props.score <= 99:
        statement = 'your cats no longer fit in your house'
        break
      case props.score <= 130:
        statement = 'I got a hundred problems but cats aren\'t one of them'
        break
      case props.score <= 150:
        statement = 'cats flood into the neighborhood'
        break
      case props.score <= 250:
        statement = 'your block is filled with cats'
        break
      case props.score <= 500:
        statement = 'neighbors start to complain'
        break
      case props.score <= 1000:
        statement = 'cats start to take over the neighborhood'
        break
      case props.score <= 1500:
        statement = 'cats cover the streets in your town'
        break
      case props.score <= 2000 :
        statement = 'your neighbors leave... cats are your neighbors now'
        break
      case props.score <= 3000:
        statement = 'your cats are starting to spread into the surrounding area'
        break
      case props.score <= 4000:
        statement = 'your town is now known as "the cat town"'
        break
      case props.score <= 5000:
        statement = 'at this point one more couldn\'t hurt'
        break
      case props.score <= 6000:
        statement = 'cat town is officially added to the town watertower'
        break
      case props.score <= 7000:
        statement = 'There are more cats then people in your town'
        break
      case props.score <= 8000:
        statement = 'If cats could vote you would be mayor'
        break
      default:
        statement = 'Meow-zers! that is a lot of cats!!!'
    }
    return statement
  }
  return (
    <>
      <p>crazy cat lady notes:</p>
      <p> {note()}</p>
    </>
  )
}
