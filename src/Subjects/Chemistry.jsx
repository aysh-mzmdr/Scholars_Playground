import styles from "./Subjects.module.css"
import chemistryImage from "../assets/Chemistry.jpg"
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Chemistry(){

    const {score,updateScore}=useContext(AppContext)
    const {incorrect,updateIncorrect}=useContext(AppContext)
    const {questions,updateQuestions}=useContext(AppContext)

    const correctHandle=(id)=> {
        const buttons=document.getElementById(id).querySelectorAll("button");
        buttons.forEach((button) => {button.disabled=true});
        updateScore(score+100);
        updateQuestions(questions+1);
    }
    
    const incorrectHandle=(id)=> {
        const buttons=document.getElementById(id).querySelectorAll("button");
        buttons.forEach((button) => {button.disabled=true});
        updateScore(score-70);
        updateIncorrect(incorrect+1);
        updateQuestions(questions+1);
    }

    const navigate=useNavigate();
    const toHome =() => {navigate("../Scholars_Playground/");};

    return(

        <>
            <div className={styles.top}>
                <img src={chemistryImage} alt="Chemistry"></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                <div id="Q1" className={styles.question}>
                    <p>Q1. Which of the following can react with gold ?</p>
                    <button onClick={() => incorrectHandle("Q1")}>Oxygen</button>
                    <button onClick={() => incorrectHandle("Q1")}>Nitrogen Dioxide</button>
                    <button onClick={() => incorrectHandle("Q1")}>Methanal</button>
                    <button className="correct" onClick={() => correctHandle("Q1")}>Aqua Regia</button> 
                </div>
                <div id="Q2" className={styles.question}>
                    <p>Q2. Which of the following can only exist as -1 and 0 oxidation state ?</p>
                    <button className="correct" onClick={() => correctHandle("Q2")}>Fluorine</button>
                    <button onClick={() => incorrectHandle("Q2")}>Oxygen</button>
                    <button onClick={() => incorrectHandle("Q2")}>Astatine</button>
                    <button onClick={() => incorrectHandle("Q2")}>Hydrogen</button>
                </div>
                <div id="Q3" className={styles.question}>
                    <p>Q3. Which element is known by the symbol W ?</p>
                    <button onClick={() => incorrectHandle("Q3")}>Winterium</button>
                    <button className="correct" onClick={() => correctHandle("Q3")}>Tungsten</button>
                    <button onClick={() => incorrectHandle("Q3")}>Warium</button>
                    <button onClick={() => incorrectHandle("Q3")}>Iridium</button>
                </div>
                <div id="Q4" className={styles.question}>
                    <p>Q4. How many elements are currently present in the periodic table ?</p>
                    <button className="correct" onClick={() => correctHandle("Q4")}>118</button>
                    <button onClick={() => incorrectHandle("Q4")}>119</button>
                    <button onClick={() => incorrectHandle("Q4")}>120</button>
                    <button onClick={() => incorrectHandle("Q4")}>117</button> 
                </div>
                <div id="Q5" className={styles.question}>
                    <p>Q5. Who is known as the Father of Chemistry ?</p>
                    <button className="correct" onClick={() => correctHandle("Q5")}>Antoine Lavoisier</button>
                    <button onClick={() => incorrectHandle("Q5")}>Neil Bohr</button>
                    <button onClick={() => incorrectHandle("Q5")}>Victor Grignard</button>
                    <button onClick={() => incorrectHandle("Q5")}>Ernest Rutherford</button>
                </div>                  
            </div>
        </>
    )
}

export default Chemistry;