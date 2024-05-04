import { Link } from 'react-router-dom'
import './index.css'

export default function RecipeItem(item) {
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
