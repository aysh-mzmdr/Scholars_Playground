import styles from "./Subjects.module.css"
import computerImage from "../assets/Computer.jpg"
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Computer(){

    const {score,updateScore}=useContext(AppContext)
    const navigate=useNavigate();
    const toHome =() => {navigate("../Scholars_Playground/");};

    return(
        <>
            <div className={styles.top}>
                <img src={computerImage} alt="Computer"></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                <div className={styles.question}>
                    <p>Q1. Which of the following is an Object-Based programming language ?</p>
                    <button onClick={() => updateScore(score-70)}>Java</button>
                    <button onClick={() => updateScore(score-70)}>Python</button>
                    <button onClick={() => updateScore(score-70)}>C</button>
                    <button onClick={() => updateScore(score+100)}>Ada</button> 
                </div>
                <div className={styles.question}>
                    <p>Q2. Which of the following is a programming language?</p>
                    <button onClick={() => updateScore(score-70)}>Seviper</button>
                    <button onClick={() => updateScore(score+100)}>Ditto</button>
                    <button onClick={() => updateScore(score-70)}>Caterpie</button>
                    <button onClick={() => updateScore(score-70)}>Slugma</button>
                </div>
                <div className={styles.question}>
                    <p>3.What was Java originally known as?</p>
                    <button onClick={() => updateScore(score+100)}>Oak</button>
                    <button onClick={() => updateScore(score-70)}>Timber</button>
                    <button onClick={() => updateScore(score-70)}>Sandlewood</button>
                    <button onClick={() => updateScore(score-70)}>Coffee</button>
                </div>
                <div className={styles.question}>
                    <p>Q4. What is the programming language python named after?</p>
                    <button onClick={() => updateScore(score-70)}>Snake</button>
                    <button onClick={() => updateScore(score+100)}>TV Series</button>
                    <button onClick={() => updateScore(score-70)}>It was just a random name</button>
                    <button onClick={() => updateScore(score-70)}>Perth</button> 
                </div>
                <div className={styles.question}>
                    <p>Q5. Which of the following technologies has been used in Pokemon Go?</p>
                    <button onClick={() => updateScore(score-70)}>Metaverse</button>
                    <button onClick={() => updateScore(score-70)}>Hologram</button>
                    <button onClick={() => updateScore(score-70)}>Virtual Reality</button>
                    <button onClick={() => updateScore(score+100)}>Augmented Reality</button>
                </div>            
            </div>
        </>
    )
}

export default Computer;