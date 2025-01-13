import styles from "./Subjects.module.css"
import mathsImage from "../assets/Maths.png"
import { AppContext } from "../AppContext";
import { useContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Maths(){

    const {score,updateScore}=useContext(AppContext)
    const {incorrect,updateIncorrect}=useContext(AppContext)
    const {questions,updateQuestions}=useContext(AppContext)

    const [correctButton1,updateCorrectButton1]=useState(styles.unanswered)
    const [correctButton2,updateCorrectButton2]=useState(styles.unanswered)
    const [correctButton3,updateCorrectButton3]=useState(styles.unanswered)
    const [correctButton4,updateCorrectButton4]=useState(styles.unanswered)
    const [correctButton5,updateCorrectButton5]=useState(styles.unanswered)
        
    const correctHandle=(id)=> {
        const buttons=document.getElementById(id).querySelectorAll("button");
        buttons.forEach((button) => {button.disabled=true;button.classList.replace(styles.unanswered,styles.answered)});
        updateScore(score+100);
        updateQuestions(questions+1);
    }
    
    const incorrectHandle=(id)=> {
        const buttons=document.getElementById(id).querySelectorAll("button");
        buttons.forEach((button) => {button.disabled=true;button.classList.replace(styles.unanswered,styles.answered)});
        updateScore(score-70);
        updateIncorrect(incorrect+1);
        updateQuestions(questions+1);
    }

    const [league,updateLeague]=useState("Unranked")
    
    useEffect(() => {
        if(score>=10000)
            updateLeague(<div style={{color:"hsl(350, 53%, 74%)",paddingLeft:"15px"}}>Legends</div>);
        else if(score>=7000)
            updateLeague(<div style={{color:"hsl(79, 70.40%, 51.00%)",paddingLeft:"15px"}}>Scholars</div>);
        else if(score>=5000)
            updateLeague(<div style={{color:"hsl(120, 67.50%, 39.80%)",paddingLeft:"15px"}}>Emerald</div>);
        else if(score>=4000)
            updateLeague(<div style={{color:"hsl(183, 57.90%, 47.50%)",paddingLeft:"15px"}}>Diamond</div>);
        else if(score>=2500)
            updateLeague(<div style={{color:"gold",paddingLeft:"15px"}}>Gold</div>);
        else if(score>=1500)
            updateLeague(<div style={{color:"silver",paddingLeft:"15px"}}>Silver</div>);
        else if(score>=500)
            updateLeague(<div style={{color:"hsl(35, 100.00%, 50.00%)",paddingLeft:"15px"}}>Bronze</div>);
    },[score])

    const navigate=useNavigate();
    const toHome =() => {navigate("../Scholars_Playground/");};

    return(
        <>
            <div className={styles.top}>
                <img src={mathsImage} alt="Maths"></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>

             <div className={styles.status}>
                <p>Score:  {score}</p>
                <p style={{display:"flex"}}>League: {league}</p>
            </div>

        
            <div className={styles.middle}>
                <div id="Q1" className={styles.question}>
                    <p>Q1. What is the next element in the series : 2 4 7 11 ?</p>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q1");updateCorrectButton1(styles.correct)}}>15</button>
                    <button className={correctButton1} onClick={() => {correctHandle("Q1");updateCorrectButton1(styles.correct)}}>16</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q1");updateCorrectButton1(styles.correct)}}>17</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q1");updateCorrectButton1(styles.correct)}}>18</button> 
                </div>
                <div id="Q2" className={styles.question}>
                    <p>Q2. The determinant of a singular matrix is equal to?</p>
                    <button className={correctButton2} onClick={() => {correctHandle("Q2");updateCorrectButton2(styles.correct)}}>0</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q2");updateCorrectButton2(styles.correct)}}>1</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q2");updateCorrectButton2(styles.correct)}}>-1</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q2");updateCorrectButton2(styles.correct)}}>Can't say</button>
                </div>
                <div id="Q3" className={styles.question}>
                    <p>Q3. Transpose of a skew-symmetric matrix A is equal to?</p>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q3");updateCorrectButton3(styles.correct)}}>A</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q3");updateCorrectButton3(styles.correct)}}>I</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q3");updateCorrectButton3(styles.correct)}}>O</button>
                    <button className={correctButton3}  onClick={() => {correctHandle("Q3");updateCorrectButton3(styles.correct)}}>-A</button>
                </div>
                <div id="Q4" className={styles.question}>
                    <p>Q4. Which of the following numbers is divisible by 3?</p>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q4");updateCorrectButton4(styles.correct)}}>331478539</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q4");updateCorrectButton4(styles.correct)}}>487159273</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q4");updateCorrectButton4(styles.correct)}}>326159548</button> 
                    <button className={correctButton4} onClick={() => {correctHandle("Q4");updateCorrectButton4(styles.correct)}}>968357241</button>
                </div>
                <div id="Q5" className={styles.question}>
                    <p>Q5. What is lcm of 4 and 6</p>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q5");updateCorrectButton5(styles.correct)}}>24</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q5");updateCorrectButton5(styles.correct)}}>20</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q5");updateCorrectButton5(styles.correct)}}>16</button>
                    <button className={correctButton5} onClick={() => {correctHandle("Q5");updateCorrectButton5(styles.correct)}}>12</button>
                </div>
            </div>
        </>
    )
}

export default Maths;