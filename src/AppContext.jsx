import React, {createContext,useState} from 'react'

export const AppContext=createContext();

export const AppProvider = ({children}) =>  {
    const [score,updateScore] = useState(0);                            // Declaring variable for storing score
    const [incorrect,updateIncorrect] = useState(0);                    // Declaring variable for storing number of incorrect answers
    const [questions,updateQuestions] = useState(0);                    // Declaring variable for storing number of questions attempted

    return(
        <AppContext.Provider value={{score,updateScore,incorrect,updateIncorrect,questions,updateQuestions}}>
            {children}
        </AppContext.Provider>
    )
}       // Passing score,incorrect and questions variable and their setter methods to be used in other jsx files