import { Link } from 'react-router-dom'
import './index.css'
import Details from './../../pages/details/Details';

export default function RecipeItem(item) {
  console.log(item)
  return (
    <div className='item'>
        <img src={item.item.image_url} alt={item.item.publisher} />
        <div className="desc">
        <p>{item.item.title}</p>
        <Link className='button' to={`/recipe-item/${item.item.id}`}>Details</Link>
        </div>
    </div>
  )
}
