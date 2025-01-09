import styles from "./Subjects.module.css"
import GKImage from "../assets/GK.jpg"
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function GK(){

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
                <img src={GKImage} alt="General Knowledge" style={{}}></img>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        
            <div className={styles.middle}>
                <div id="Q1" className={styles.question}>
                    <p>Q1. Who build Qutub Minar ?</p>
                    <button onClick={() => incorrectHandle("Q1")}>Mohammad Bin Tughlaq</button>
                    <button onClick={() => incorrectHandle("Q1")}>Akbar</button>
                    <button className="correct" onClick={() => correctHandle("Q1")}>Qutub-ud-Din Aibak</button>
                    <button onClick={() => incorrectHandle("Q1")}>Alauddin Khalji</button> 
                </div>
                <div id="Q2" className={styles.question}>
                    <p>Q2. What is the brightest object in the night sky?</p>
                    <button onClick={() => incorrectHandle("Q2")}>Venus</button>
                    <button onClick={() => incorrectHandle("Q2")}>Sirus</button>
                    <button onClick={() => incorrectHandle("Q2")}>Pole star</button>
                    <button className="correct" onClick={() => correctHandle("Q2")}>Moon</button>
                </div>
                <div id="Q3" className={styles.question}>
                    <p>Q3. Which of the following planets has a ring?</p>
                    <button onClick={() => incorrectHandle("Q3")}>Venus</button>
                    <button className="correct" onClick={() => correctHandle("Q3")}>Jupiter</button>
                    <button onClick={() => incorrectHandle("Q3")}>Mars</button>
                    <button onClick={() => incorrectHandle("Q3")}>Pluto</button>
                </div>
                <div id="Q4" className={styles.question}>
                    <p>Q4. What is the capital city of Australia?</p>
                    <button onClick={() => incorrectHandle("Q4")}>Sydney</button>
                    <button onClick={() => incorrectHandle("Q4")}>Melbourne</button>
                    <button className="correct" onClick={() => correctHandle("Q4")}>Canberra</button>
                    <button onClick={() => incorrectHandle("Q4")}>Perth</button> 
                </div>
                <div id="Q5" className={styles.question}>
                    <p>Q5. Which is the only sea on Earth without any coasts?</p>
                    <button className="correct" onClick={() => correctHandle("Q5")}>Sargasso Sea</button>
                    <button onClick={() => incorrectHandle("Q5")}>Baltic Sea</button>
                    <button onClick={() => incorrectHandle("Q5")}>Dead Sea</button>
                    <button onClick={() => incorrectHandle("Q5")}>Red Sea</button>
                </div>
            </div>
        </>
    )
}

export default GK;