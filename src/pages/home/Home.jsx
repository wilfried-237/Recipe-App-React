import { useContext } from 'react'
import './index.css'
import { GlobalContext } from './../../context/index';

export default function Home() {
  const {data, loading, error } = useContext(GlobalContext)

  console.log(data)

  if(loading){
    return <div className='return'><span>Data Loading Please wait...</span></div>
  }

  if(error){
    return <div className='return'><span>An Error Occured ! {error}</span></div>
  }
  return (
    <div>Home</div>
  )
}
