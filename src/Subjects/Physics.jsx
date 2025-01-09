import styles from "./Subjects.module.css"
import physicsImage from "../assets/Physics.jpg"
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Physics(){

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
                <img src={physicsImage} alt="Physics"></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                 <div id="Q1" className={styles.question}>
                    <p>Q1. Who gave the famous equation : e=mc^2 ?</p>
                    <button onClick={() => incorrectHandle("Q1")}>Issac Newton</button>
                    <button onClick={() => incorrectHandle("Q1")}>de Broglie</button>
                    <button className="correct" onClick={() => correctHandle("Q1")}>Albert Einstein</button>
                    <button onClick={() => incorrectHandle("Q1")}>Neil Bohr</button> 
                </div>
                <div id="Q2" className={styles.question}>
                    <p>Q2. What are the concentric circles joining points in the same phase called?</p>
                    <button onClick={() => incorrectHandle("Q2")}>Equipotential Surface</button>
                    <button className="correct" onClick={() => correctHandle("Q2")}>Wavefront</button>
                    <button onClick={() => incorrectHandle("Q2")}>Gaussian Surface</button>
                    <button onClick={() => incorrectHandle("Q2")}>Shellfront</button>
                </div>
                <div id="Q3" className={styles.question}>
                    <p>Q3. On moving a body in equipotential surface, work done is equal to?</p>
                    <button onClick={() => incorrectHandle("Q3")}>Positive</button>
                    <button className="correct" onClick={() => correctHandle("Q3")}>0</button>
                    <button onClick={() => incorrectHandle("Q3")}>Negative</button>
                    <button onClick={() => incorrectHandle("Q3")}>Can't say</button>
                </div>
                <div id="Q4" className={styles.question}>
                    <p>Q4. Who stated that matter has dual nature?</p>
                    <button onClick={() => incorrectHandle("Q4")}>Issac Newton</button>
                    <button className="correct" onClick={() => correctHandle("Q4")}>de Broglie</button>
                    <button onClick={() => incorrectHandle("Q4")}>Albert Einstein</button>
                    <button onClick={() => incorrectHandle("Q4")}>Neil Bohr</button> 
                </div>
                <div id="Q5" className={styles.question}>
                    <p>Q5. What is the weight of electron?</p>
                    <button onClick={() => incorrectHandle("Q5")}>Weightless</button>
                    <button onClick={() => incorrectHandle("Q5")}>2.4*10^-24 Kg</button>
                    <button className="correct" onClick={() => correctHandle("Q5")}>9.1*10^-31 Kg</button>
                    <button onClick={() => incorrectHandle("Q5")}>2.4*10^-27 Kg</button>
                </div>
            </div>
        </>
    )
}

export default Physics;