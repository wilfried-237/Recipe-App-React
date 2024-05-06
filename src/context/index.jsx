import { createContext, useState } from "react";
import Usefetch from "../Usefetch";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [recipeDetail, setRecipeDetail] = useState(null);
  const [data, loading, error] = Usefetch(searchParam);

  function addFavorites(currentItem) {
    const copyFav = [...favorites];
    const index = copyFav.findIndex((item) => item.id === currentItem.id);

    if (index === -1) {
      copyFav.push(currentItem);
    } else {
      copyFav.splice(index, 1);
    }

    setFavorites(copyFav);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        data,
        loading,
        error,
        recipeDetail,
        setRecipeDetail,
        addFavorites,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
