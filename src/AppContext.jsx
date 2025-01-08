import React, {createContext,useState} from 'react'

export const AppContext=createContext();

export const AppProvider = ({children}) =>  {
    const [score,updateScore] = useState(0);

    return(
        <AppContext.Provider value={{score,updateScore}}>
            {children}
        </AppContext.Provider>
    )
}