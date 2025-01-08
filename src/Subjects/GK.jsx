import styles from "./Subjects.module.css"
import GKImage from "../assets/GK.jpg"
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function GK(){

    const {score,updateScore}=useContext(AppContext)
    const navigate=useNavigate();
    const toHome =() => {navigate("../Scholars_Playground/");};

    return(
        <>
            <div className={styles.top}>
                <img src={GKImage} alt="General Knowledge" style={{}}></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                <div className={styles.question}>
                    <p>Q1. Who build Qutub Minar ?</p>
                    <button onClick={() => updateScore(score-70)}>Mohammad Bin Tughlaq</button>
                    <button onClick={() => updateScore(score-70)}>Akbar</button>
                    <button onClick={() => updateScore(score+100)}>Qutub-ud-Din Aibak</button>
                    <button onClick={() => updateScore(score-70)}>Alauddin Khalji</button> 
                </div>
                <div className={styles.question}>
                    <p>Q2. What is the brightest object in the night sky?</p>
                    <button onClick={() => updateScore(score-70)}>Venus</button>
                    <button onClick={() => updateScore(score-70)}>Sirus</button>
                    <button onClick={() => updateScore(score-70)}>Pole star</button>
                    <button onClick={() => updateScore(score+100)}>Moon</button>
                </div>
                <div className={styles.question}>
                    <p>Q3. Which of the following planets has a ring?</p>
                    <button onClick={() => updateScore(score-70)}>Venus</button>
                    <button onClick={() => updateScore(score+100)}>Jupiter</button>
                    <button onClick={() => updateScore(score-70)}>Mars</button>
                    <button onClick={() => updateScore(score-70)}>Pluto</button>
                </div>
                <div className={styles.question}>
                    <p>Q4. What is the capital city of Australia?</p>
                    <button onClick={() => updateScore(score-70)}>Sydney</button>
                    <button onClick={() => updateScore(score-70)}>Melbourne</button>
                    <button onClick={() => updateScore(score+100)}>Canberra</button>
                    <button onClick={() => updateScore(score-70)}>Perth</button> 
                </div>
                <div className={styles.question}>
                    <p>Q5. Which is the only sea on Earth without any coasts?</p>
                    <button onClick={() => updateScore(score+100)}>Sargasso Sea</button>
                    <button onClick={() => updateScore(score-70)}>Baltic Sea</button>
                    <button onClick={() => updateScore(score-70)}>Dead Sea</button>
                    <button onClick={() => updateScore(score-70)}>Red Sea</button>
                </div>
            </div>
        </>
    )
}

export default GK;