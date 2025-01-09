import styles from "./Subjects.module.css"
import computerImage from "../assets/Computer.jpg"
import { AppContext } from "../AppContext";
import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";

function Computer(){

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
                <img src={computerImage} alt="Computer"></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                <div id="Q1" className={styles.question}>
                    <p>Q1. Which of the following is an Object-Based programming language ?</p>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q1");updateCorrectButton1(styles.correct)}}>Java</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q1");updateCorrectButton1(styles.correct)}}>Python</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q1");updateCorrectButton1(styles.correct)}}>C</button>
                    <button className={correctButton1} onClick={() => {correctHandle("Q1");updateCorrectButton1(styles.correct)}}>Ada</button> 
                </div>
                <div id="Q2" className={styles.question}>
                    <p>Q2. Which of the following is a programming language?</p>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q2");updateCorrectButton2(styles.correct)}}>Seviper</button>
                    <button className={correctButton2} onClick={() => {correctHandle("Q2");updateCorrectButton2(styles.correct)}}>Ditto</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q2");updateCorrectButton2(styles.correct)}}>Caterpie</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q2");updateCorrectButton2(styles.correct)}}>Slugma</button>
                </div>
                <div id="Q3" className={styles.question}>
                    <p>3.What was Java originally known as?</p>
                    <button className={correctButton3} onClick={() => {correctHandle("Q3");updateCorrectButton3(styles.correct)}}>Oak</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q3");updateCorrectButton3(styles.correct)}}>Timber</button>       
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q3");updateCorrectButton3(styles.correct)}}>Sandlewood</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q3");updateCorrectButton3(styles.correct)}}>Coffee</button>
                </div>
                <div id="Q4" className={styles.question}>
                    <p>Q4. What is the programming language python named after?</p>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q4");updateCorrectButton4(styles.correct)}}>Snake</button>
                    <button className={correctButton4} onClick={() => {correctHandle("Q4");updateCorrectButton4(styles.correct)}}>TV Series</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q4");updateCorrectButton4(styles.correct)}}>It was just a random name</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q4");updateCorrectButton4(styles.correct)}}>Perth</button> 
                </div>
                <div id="Q5" className={styles.question}>
                    <p>Q5. Which of the following technologies has been used in Pokemon Go?</p>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q5");updateCorrectButton5(styles.correct)}}>Metaverse</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q5");updateCorrectButton5(styles.correct)}}>Hologram</button>
                    <button className={styles.unanswered} onClick={() => {incorrectHandle("Q5");updateCorrectButton5(styles.correct)}}>Virtual Reality</button>
                    <button className={correctButton5} onClick={() => {correctHandle("Q5");updateCorrectButton5(styles.correct)}}>Augmented Reality</button>
                </div>            
            </div>
        </>
    )
}

export default Computer;