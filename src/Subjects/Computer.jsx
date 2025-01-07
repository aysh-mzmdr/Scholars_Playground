import styles from "./Subjects.module.css"
import computerImage from "../assets/Computer.jpg"

function Computer(){

    return(
        <>
            <div className={styles.top}>
                <img src={computerImage} alt="Computer"></img>
            </div>
        
            <div className={styles.middle}>
                <div className={styles.question}>
                    <p>Q1. Which of the following is an Object-Based programming language ?</p>
                    <button>Java</button>
                    <button>Python</button>
                    <button>C</button>
                    <button>Ada</button> 
                </div>
                <div className={styles.question}>
                    <p>Q2. Which of the following is a programming language?</p>
                    <button>Seviper</button>
                    <button>Ditto</button>
                    <button>Caterpie</button>
                    <button>Slugma</button>
                </div>
                <div className={styles.question}>
                    <p>3.What was Java originally known as?</p>
                    <button>Oak</button>
                    <button>Timber</button>
                    <button>Sandlewood</button>
                    <button>Coffee</button>
                </div>
                <div className={styles.question}>
                    <p>Q4. What is the programming language python named after?</p>
                    <button>Snake</button>
                    <button>TV Series</button>
                    <button>It was just a random name</button>
                    <button>Perth</button> 
                </div>
                <div className={styles.question}>
                    <p>Q5. Which of the following technologies has been used in Pokemon Go?</p>
                    <button>Metaverse</button>
                    <button>Hologram</button>
                    <button>Virtual Reality</button>
                    <button>Augmented Reality</button>
                </div>            
            </div>
        </>
    )
}

export default Computer;