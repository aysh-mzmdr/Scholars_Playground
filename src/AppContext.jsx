import React, {createContext,useState} from 'react'

export const AppContext=createContext();

export const AppProvider = ({children}) =>  {
    const [score,updateScore] = useState(0);
    const [incorrect,updateIncorrect] = useState(0);
    const [questions,updateQuestions] = useState(0);

    return(
        <AppContext.Provider value={{score,updateScore,incorrect,updateIncorrect,questions,updateQuestions}}>
            {children}
        </AppContext.Provider>
    )
}