import { createContext, useState } from "react";
import Usefetch from "../Usefetch";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [ searchParam, setSearchParam ] = useState("");
  const [data, loading, error] = Usefetch(searchParam);

  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam, data, loading, error }}>
      {children}
    </GlobalContext.Provider>
  );
}
