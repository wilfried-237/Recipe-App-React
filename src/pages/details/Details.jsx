import { useParams } from 'react-router-dom'
import './index.css'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context'

export default function Details() {

    const params = useParams()
    const {recipeDetail, setRecipeDetail} = useContext(GlobalContext)

    async function getRecipe(){
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`);
      const getData = await response.json();

      if(getData){
        setRecipeDetail(getData.data.recipe)
      }
     }

     console.log(recipeDetail)


    useEffect(()=>{
     getRecipe()

    }, [params])

  return (
    <div className='Detail container'>
      <div className="img">
        <img src={recipeDetail?.image_url} alt={recipeDetail?.title} />
      </div>
      <div className="description">
        <h2>{recipeDetail?.title}</h2>
        <button className='btn bg-primary text-light mt-3 mb-4'>Add to Favorites</button>
        {
          recipeDetail && recipeDetail?.ingredients? 
            recipeDetail.ingredients?.map((i, index)=> {
              return(
                <p key={index}>{i?.quantity} {i?.unit} {i?.description}</p>
              )
            })
          :null
        }
        <p>{}</p>
      </div>
    </div>
  )
}
