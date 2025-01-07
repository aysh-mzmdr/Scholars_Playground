import styles from "./Subjects.module.css"
import GKImage from "../assets/GK.jpg"

function GK(){

    return(
        <>
            <div className={styles.top}>
                <img src={GKImage} alt="General Knowledge" style={{}}></img>
            </div>
        
            <div className={styles.middle}>
                <div className={styles.question}>
                    <p>Q1. Who build Qutub Minar ?</p>
                    <button>Mohammad Bin Tughlaq</button>
                    <button>Akbar</button>
                    <button>Qutub-ud-Din Aibak</button>
                    <button>Alauddin Khalji</button> 
                </div>
                <div className={styles.question}>
                    <p>Q2. What is the brightest object in the night sky?</p>
                    <button>Venus</button>
                    <button>Sirus</button>
                    <button>Pole star</button>
                    <button>Moon</button>
                </div>
                <div className={styles.question}>
                    <p>Q3. Which of the following planets has a ring?</p>
                    <button>Venus</button>
                    <button>Jupiter</button>
                    <button>Mars</button>
                    <button>Pluto</button>
                </div>
                <div className={styles.question}>
                    <p>Q4. What is the capital city of Australia?</p>
                    <button>Sydney</button>
                    <button>Melbourne</button>
                    <button>Canberra</button>
                    <button>Perth</button> 
                </div>
                <div className={styles.question}>
                    <p>Q5. Which is the only sea on Earth without any coasts?</p>
                    <button>Sargasso Sea</button>
                    <button>Baltic Sea</button>
                    <button>Dead Sea</button>
                    <button>Red Sea</button>
                </div>
            </div>
        </>
    )
}

export default GK;