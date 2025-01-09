import styles from "./Subjects.module.css"
import mathsImage from "../assets/Maths.png"
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Maths(){

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
                <img src={mathsImage} alt="Maths"></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                <div id="Q1" className={styles.question}>
                    <p>Q1. What is the next element in the series : 2 4 7 11 ?</p>
                    <button onClick={() => incorrectHandle("Q1")}>15</button>
                    <button className="correct" onClick={() => correctHandle("Q1")}>16</button>
                    <button onClick={() => incorrectHandle("Q1")}>17</button>
                    <button onClick={() => incorrectHandle("Q1")}>18</button> 
                </div>
                <div id="Q2" className={styles.question}>
                    <p>Q2. The determinant of a singular matrix is equal to?</p>
                    <button className="correct" onClick={() => correctHandle("Q2")}>0</button>
                    <button onClick={() => incorrectHandle("Q2")}>1</button>
                    <button onClick={() => incorrectHandle("Q2")}>-1</button>
                    <button onClick={() => incorrectHandle("Q2")}>Can't say</button>
                </div>
                <div id="Q3" className={styles.question}>
                    <p>Q3. Transpose of a skew-symmetric matrix A is equal to?</p>
                    <button onClick={() => incorrectHandle("Q3")}>A</button>
                    <button onClick={() => incorrectHandle("Q3")}>I</button>
                    <button onClick={() => incorrectHandle("Q3")}>O</button>
                    <button className="correct" onClick={() => correctHandle("Q3")}>-A</button>
                </div>
                <div id="Q4" className={styles.question}>
                    <p>Q4. Which of the following numbers is divisible by 3?</p>
                    <button onClick={() => incorrectHandle("Q4")}>331478539</button>
                    <button onClick={() => incorrectHandle("Q4")}>487159273</button>
                    <button onClick={() => incorrectHandle("Q4")}>326159548</button> 
                    <button className="correct" onClick={() => correctHandle("Q4")}>968357241</button>
                </div>
                <div id="Q5" className={styles.question}>
                    <p>Q5. What is lcm of 4 and 6</p>
                    <button onClick={() => incorrectHandle("Q5")}>24</button>
                    <button onClick={() => incorrectHandle("Q5")}>20</button>
                    <button onClick={() => incorrectHandle("Q5")}>16</button>
                    <button className="correct" onClick={() => correctHandle("Q5")}>12</button>
                </div>
            </div>
        </>
    )
}

export default Maths;