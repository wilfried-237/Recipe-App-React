import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}) {
    
    const {searchParam, setSearchParam} = useState("youmbi")


  return <GlobalContext.Provider value={{searchParam, setSearchParam}}>{children}</GlobalContext.Provider>
}

