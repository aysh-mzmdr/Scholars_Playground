import styles from "./Subjects.module.css"
import mathsImage from "../assets/Maths.png"
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Maths(){

    const {score,updateScore}=useContext(AppContext)
    const navigate=useNavigate();
    const toHome =() => {navigate("../Scholars_Playground/");};

    return(
        <>
            <div className={styles.top}>
                <img src={mathsImage} alt="Maths"></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                <div className={styles.question}>
                    <p>Q1. What is the next element in the series : 2 4 7 11 ?</p>
                    <button onClick={() => updateScore(score-70)}>15</button>
                    <button onClick={() => updateScore(score+100)}>16</button>
                    <button onClick={() => updateScore(score-70)}>17</button>
                    <button onClick={() => updateScore(score-70)}>18</button> 
                </div>
                <div className={styles.question}>
                    <p>Q2. The determinant of a singular matrix is equal to?</p>
                    <button onClick={() => updateScore(score+100)}>0</button>
                    <button onClick={() => updateScore(score-70)}>1</button>
                    <button onClick={() => updateScore(score-70)}>-1</button>
                    <button onClick={() => updateScore(score-70)}>Can't say</button>
                </div>
                <div className={styles.question}>
                    <p>Q3. Transpose of a skew-symmetric matrix A is equal to?</p>
                    <button onClick={() => updateScore(score-70)}>A</button>
                    <button onClick={() => updateScore(score-70)}>I</button>
                    <button onClick={() => updateScore(score-70)}>O</button>
                    <button onClick={() => updateScore(score+100)}>-A</button>
                </div>
                <div className={styles.question}>
                    <p>Q4. Which of the following numbers is divisible by 3?</p>
                    <button onClick={() => updateScore(score-70)}>331478539</button>
                    <button onClick={() => updateScore(score-70)}>487159273</button>
                    <button onClick={() => updateScore(score-70)}>326159548</button> 
                    <button onClick={() => updateScore(score+100)}>968357241</button>
                </div>
                <div className={styles.question}>
                    <p>Q5. What is lcm of 4 and 6</p>
                    <button onClick={() => updateScore(score-70)}>24</button>
                    <button onClick={() => updateScore(score-70)}>20</button>
                    <button onClick={() => updateScore(score-70)}>16</button>
                    <button onClick={() => updateScore(score+100)}>12</button>
                </div>
            </div>
        </>
    )
}

export default Maths;