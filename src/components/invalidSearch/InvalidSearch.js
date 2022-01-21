import { Link } from 'react-router-dom' 
import image from '../../images/404Cat.jpg'
import catPhotos from '../../images/floatingCats'
import './invalidSearch.css'

export default function InvalidSearch () {
  return (
    <div className='invalidPage'>
      <h1 className='invalidTitle'>On no! This is a 404 Error!</h1>
      <Link to='/'>
        <button>Take me home buttercup!</button>
      </Link>
      <h3 className='subTextSmall'>
        Oh geez how did we get over here and how did I turn into a real cat?
      </h3>
      <h2 className='subTextMedium'>can we go back to the game please?</h2>
      <img className='invalidCatImage' alt='a cute kitty looks at you' src={image} />
    </div>
  )
}
