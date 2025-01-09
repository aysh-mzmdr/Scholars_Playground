import styles from "./Subjects.module.css"
import GKImage from "../assets/GK.jpg"
import { AppContext } from "../AppContext";
import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";

function GK(){

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

    const navigate=useNavigate();
    const toHome =() => {navigate("../Scholars_Playground/");};

    return(
        <>
            <div className={styles.top}>
                <img src={GKImage} alt="General Knowledge" style={{}}></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                <div id="Q1" className={styles.question}>
                    <p>Q1. Who build Qutub Minar ?</p>
                    <button className={styles.unanswered}onClick={() => {incorrectHandle("Q1");updateCorrectButton1(styles.correct)}}>Mohammad Bin Tughlaq</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q1");updateCorrectButton1(styles.correct)}}>Akbar</button>
                    <button className={correctButton1} onClick={() => {correctHandle("Q1");updateCorrectButton1(styles.correct)}}>Qutub-ud-Din Aibak</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q1");updateCorrectButton1(styles.correct)}}>Alauddin Khalji</button> 
                </div>
                <div id="Q2" className={styles.question}>
                    <p>Q2. What is the brightest object in the night sky?</p>
                    <button className={styles.unanswered} lick={() => {incorrectHandle("Q2");updateCorrectButton2(styles.correct)}}>Venus</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q2");updateCorrectButton2(styles.correct)}}>Sirus</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q2");updateCorrectButton2(styles.correct)}}>Pole star</button>
                    <button className={correctButton2} onClick={() => {correctHandle("Q2");updateCorrectButton2(styles.correct)}}>Moon</button>
                </div>
                <div id="Q3" className={styles.question}>
                    <p>Q3. Which of the following planets has a ring?</p>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q3");updateCorrectButton3(styles.correct)}}>Venus</button>
                    <button className={correctButton3} onClick={() => {correctHandle("Q3");updateCorrectButton3(styles.correct)}}>Jupiter</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q3");updateCorrectButton3(styles.correct)}}>Mars</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q3");updateCorrectButton3(styles.correct)}}>Pluto</button>
                </div>
                <div id="Q4" className={styles.question}>
                    <p>Q4. What is the capital city of Australia?</p>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q4");updateCorrectButton4(styles.correct)}}>Sydney</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q4");updateCorrectButton4(styles.correct)}}>Melbourne</button>
                    <button className={correctButton4} onClick={() => {correctHandle("Q4");updateCorrectButton4(styles.correct)}}>Canberra</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q4");updateCorrectButton4(styles.correct)}}>Perth</button> 
                </div>
                <div id="Q5" className={styles.question}>
                    <p>Q5. Which is the only sea on Earth without any coasts?</p>
                    <button className={correctButton5} onClick={() => {correctHandle("Q5");updateCorrectButton5(styles.correct)}}>Sargasso Sea</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q5");updateCorrectButton5(styles.correct)}}>Baltic Sea</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q5");updateCorrectButton5(styles.correct)}}>Dead Sea</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q5");updateCorrectButton5(styles.correct)}}>Red Sea</button>
                </div>
            </div>
        </>
    )
}

export default GK;