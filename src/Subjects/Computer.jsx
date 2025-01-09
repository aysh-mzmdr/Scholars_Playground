import styles from "./Subjects.module.css"
import computerImage from "../assets/Computer.jpg"
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Computer(){

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
                <img src={computerImage} alt="Computer"></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                <div id="Q1" className={styles.question}>
                    <p>Q1. Which of the following is an Object-Based programming language ?</p>
                    <button onClick={() => incorrectHandle("Q1")}>Java</button>
                    <button onClick={() => incorrectHandle("Q1")}>Python</button>
                    <button onClick={() => incorrectHandle("Q1")}>C</button>
                    <button className="correct" onClick={() => correctHandle("Q1")}>Ada</button> 
                </div>
                <div id="Q2" className={styles.question}>
                    <p>Q2. Which of the following is a programming language?</p>
                    <button onClick={() => incorrectHandle("Q2")}>Seviper</button>
                    <button className="correct" onClick={() => correctHandle("Q2")}>Ditto</button>
                    <button onClick={() => incorrectHandle("Q2")}>Caterpie</button>
                    <button onClick={() => incorrectHandle("Q2")}>Slugma</button>
                </div>
                <div id="Q3" className={styles.question}>
                    <p>3.What was Java originally known as?</p>
                    <button className="correct" onClick={() => correctHandle("Q3")}>Oak</button>
                    <button onClick={() => incorrectHandle("Q3")}>Timber</button>       
                    <button onClick={() => incorrectHandle("Q3")}>Sandlewood</button>
                    <button onClick={() => incorrectHandle("Q3")}>Coffee</button>
                </div>
                <div id="Q4" className={styles.question}>
                    <p>Q4. What is the programming language python named after?</p>
                    <button onClick={() => incorrectHandle("Q4")}>Snake</button>
                    <button className="correct" onClick={() => correctHandle("Q4")}>TV Series</button>
                    <button onClick={() => incorrectHandle("Q4")}>It was just a random name</button>
                    <button onClick={() => incorrectHandle("Q4")}>Perth</button> 
                </div>
                <div id="Q5" className={styles.question}>
                    <p>Q5. Which of the following technologies has been used in Pokemon Go?</p>
                    <button onClick={() => incorrectHandle("Q5")}>Metaverse</button>
                    <button onClick={() => incorrectHandle("Q5")}>Hologram</button>
                    <button onClick={() => incorrectHandle("Q5")}>Virtual Reality</button>
                    <button className="correct" onClick={() => correctHandle("Q5")}>Augmented Reality</button>
                </div>            
            </div>
        </>
    )
}

export default Computer;