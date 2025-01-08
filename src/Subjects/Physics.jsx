import styles from "./Subjects.module.css"
import physicsImage from "../assets/Physics.jpg"
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Physics(){

    const {score,updateScore}=useContext(AppContext)
    const navigate=useNavigate();
    const toHome =() => {navigate("../Scholars_Playground/");};

    return(
        <>
            <div className={styles.top}>
                <img src={physicsImage} alt="Physics"></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                 <div className={styles.question}>
                    <p>Q1. Who gave the famous equation : e=mc^2 ?</p>
                    <button onClick={() => updateScore(score-70)}>Issac Newton</button>
                    <button onClick={() => updateScore(score-70)}>de Broglie</button>
                    <button onClick={() => updateScore(score+100)}>Albert Einstein</button>
                    <button onClick={() => updateScore(score-70)}>Neil Bohr</button> 
                </div>
                <div className={styles.question}>
                    <p>Q2. What are the concentric circles joining points in the same phase called?</p>
                    <button onClick={() => updateScore(score-70)}>Equipotential Surface</button>
                    <button onClick={() => updateScore(score+100)}>Wavefront</button>
                    <button onClick={() => updateScore(score-70)}>Gaussian Surface</button>
                    <button onClick={() => updateScore(score-70)}>Shellfront</button>
                </div>
                <div className={styles.question}>
                    <p>Q3. On moving a body in equipotential surface, work done is equal to?</p>
                    <button onClick={() => updateScore(score-70)}>Positive</button>
                    <button onClick={() => updateScore(score+100)}>0</button>
                    <button onClick={() => updateScore(score-70)}>Negative</button>
                    <button onClick={() => updateScore(score-70)}>Can't say</button>
                </div>
                <div className={styles.question}>
                    <p>Q4. Who stated that matter has dual nature?</p>
                    <button onClick={() => updateScore(score-70)}>Issac Newton</button>
                    <button onClick={() => updateScore(score+100)}>de Broglie</button>
                    <button onClick={() => updateScore(score-70)}>Albert Einstein</button>
                    <button onClick={() => updateScore(score-70)}>Neil Bohr</button> 
                </div>
                <div className={styles.question}>
                    <p>Q5. What is the weight of electron?</p>
                    <button onClick={() => updateScore(score-70)}>Weightless</button>
                    <button onClick={() => updateScore(score-70)}>2.4*10^-24 Kg</button>
                    <button onClick={() => updateScore(score+100)}>9.1*10^-31 Kg</button>
                    <button onClick={() => updateScore(score-70)}>2.4*10^-27 Kg</button>
                </div>
            </div>
        </>
    )
}

export default Physics;