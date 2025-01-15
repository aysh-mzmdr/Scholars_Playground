import styles from "./Subjects.module.css"
import computerImage from "../assets/Computer.jpg"
import { AppContext } from "../AppContext";
import { useContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Computer(){

    const {score,updateScore}=useContext(AppContext)
    const {incorrect,updateIncorrect}=useContext(AppContext)                                // Calling variables from AppContext.jsx to use them here
    const {questions,updateQuestions}=useContext(AppContext)

    const [correctButton1,updateCorrectButton1]=useState(styles.unanswered)
    const [correctButton2,updateCorrectButton2]=useState(styles.unanswered)
    const [correctButton3,updateCorrectButton3]=useState(styles.unanswered)                 // Declaring update functions for changing styles for correct option buttons
    const [correctButton4,updateCorrectButton4]=useState(styles.unanswered)
    const [correctButton5,updateCorrectButton5]=useState(styles.unanswered)
    
    const correctHandle=(id)=> {                        // Function to handle correct answering
        const buttons=document.getElementById(id).querySelectorAll("button");
        buttons.forEach((button) => {button.disabled=true;button.classList.replace(styles.unanswered,styles.answered)});
        updateScore(score+100);
        updateQuestions(questions+1);
    }

    const incorrectHandle=(id)=> {                      // Function to handle incorrect answering
        const buttons=document.getElementById(id).querySelectorAll("button");
        buttons.forEach((button) => {button.disabled=true;button.classList.replace(styles.unanswered,styles.answered)});
        updateScore(score-70);
        updateIncorrect(incorrect+1);
        updateQuestions(questions+1);
    }

    const [league,updateLeague]=useState("Unranked")      // Declaring league and updateLeague to store and update user's current league
    
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
                <img src={computerImage} alt="Computer"></img>
            </div>

             <div className={styles.status}>
                <p>Score:  {score}</p>
                <p style={{display:"flex"}}>League: {league}</p>
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
                <button className={styles.homePage} onClick={() => toHome()}>Submit</button>            
            </div>
        </>
    )
}

export default Computer;