import './index.css'

export default function RecipeItem(item) {
  console.log(item)
  return (
    <div className='item'>
        <img src={item.item.image_url} alt={item.item.publisher} />
        <div className="desc">
        <p>{item.item.title}</p>
        <button>Add to favorite</button>
        </div>
    </div>
  )
}
