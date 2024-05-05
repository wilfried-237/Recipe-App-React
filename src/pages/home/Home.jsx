import { useContext } from "react";
import "./index.css";
import { GlobalContext } from "./../../context/index";
import RecipeItem from "./../../components/RecipeItem/index";

export default function Home() {
  const { data, loading, error } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="return">
        <div className="spinner-border text-primary mt-5"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="return">
        <span>An Error Occured ! {error}</span>
      </div>
    );
  }

  return (
    <div className="Home">
      {data
        ? data.map((item, index) => <RecipeItem key={index} item={item} />)
        : <div>No Result Please search for something</div>}
    </div>
  );
}
