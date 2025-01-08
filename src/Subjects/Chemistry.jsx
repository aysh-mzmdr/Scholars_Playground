import styles from "./Subjects.module.css"
import chemistryImage from "../assets/Chemistry.jpg"
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Chemistry(){

    const {score,updateScore}=useContext(AppContext)
    const navigate=useNavigate();
    const toHome =() => {navigate("../Scholars_Playground/");};

    return(

        <>
            <div className={styles.top}>
                <img src={chemistryImage} alt="Chemistry"></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                <div id="D1" className={styles.question}>
                    <p>Q1. Which of the following can react with gold ?</p>
                    <button onClick={() => updateScore(score-70)}>Oxygen</button>
                    <button onClick={() => updateScore(score-70)}>Nitrogen Dioxide</button>
                    <button onClick={() => updateScore(score-70)}>Methanal</button>
                    <button onClick={() => updateScore(score+100)}>Aqua Regia</button> 
                </div>
                <div className={styles.question}>
                    <p>Q2. Which of the following can only exist as -1 and 0 oxidation state ?</p>
                    <button onClick={() => updateScore(score+100)}>Fluorine</button>
                    <button onClick={() => updateScore(score-70)}>Oxygen</button>
                    <button onClick={() => updateScore(score-70)}>Astatine</button>
                    <button onClick={() => updateScore(score-70)}>Hydrogen</button>
                </div>
                <div className={styles.question}>
                    <p>Q3. Which element is known by the symbol W ?</p>
                    <button onClick={() => updateScore(score-70)}>Winterium</button>
                    <button onClick={() => updateScore(score+100)}>Tungsten</button>
                    <button onClick={() => updateScore(score-70)}>Warium</button>
                    <button onClick={() => updateScore(score-70)}>Iridium</button>
                </div>
                <div className={styles.question}>
                    <p>Q4. How many elements are currently present in the periodic table ?</p>
                    <button onClick={() => updateScore(score+100)}>118</button>
                    <button onClick={() => updateScore(score-70)}>119</button>
                    <button onClick={() => updateScore(score-70)}>120</button>
                    <button onClick={() => updateScore(score-70)}>117</button> 
                </div>
                <div className={styles.question}>
                    <p>Q5. Who is known as the Father of Chemistry ?</p>
                    <button onClick={() => updateScore(score+100)}>Antoine Lavoisier</button>
                    <button onClick={() => updateScore(score-70)}>Neil Bohr</button>
                    <button onClick={() => updateScore(score-70)}>Victor Grignard</button>
                    <button onClick={() => updateScore(score-70)}>Ernest Rutherford</button>
                </div>                  
            </div>
        </>
    )
}

export default Chemistry;