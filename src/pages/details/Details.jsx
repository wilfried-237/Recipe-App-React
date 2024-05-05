import { useParams } from 'react-router-dom'
import './index.css'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context'

export default function Details() {

    const params = useParams()
    const {recipeDetail, setRecipeDetail, addFavorites, favorites} = useContext(GlobalContext)

    async function getRecipe(){
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`);
      const getData = await response.json();

      if(getData){
        setRecipeDetail(getData.data.recipe)
      }
     }

    useEffect(()=>{
     getRecipe()

    }, [params])

    const index = favorites.findIndex(item => item.id === recipeDetail.id);

  return (
    <>
      {
        recipeDetail && <div className='Detail container'>
        <div className="img">
          <img src={recipeDetail?.image_url} className="img-thumbnail" alt={recipeDetail?.title} />
        </div>
        <div className="description">
          <h2>{recipeDetail?.title}</h2>
          
          <button onClick={()=> addFavorites(recipeDetail)} className='btn bg-primary text-light mt-3 mb-4'>{index === -1? "Add to Favorites" : "Remove from Favorites"}</button>
          {
            recipeDetail && recipeDetail?.ingredients? 
              recipeDetail.ingredients?.map((i, index)=> {
                return(
                  <p key={index}>{i?.quantity} {i?.unit} {i?.description}</p>
                )
              })
            :null
          }
        </div>
      </div>
      }
    </>
  )
}
