import { useContext } from 'react';
import './index.css'
import { GlobalContext } from '../../context';
import RecipeItem from './../../components/RecipeItem/index';

export default function Favorites() {
  const { favorites } = useContext(GlobalContext);

 

  return (
    <div className="Home">
      {favorites
        ? favorites.map((item) => <RecipeItem key={item.id} item={item} />)
        : <div>No Result Please search for something</div>}
    </div>
  );
}
