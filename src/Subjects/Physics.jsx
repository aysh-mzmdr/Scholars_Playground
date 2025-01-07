import styles from "./Subjects.module.css"
import physicsImage from "../assets/Physics.jpg"

function Physics(){

    return(
        <>
            <div className={styles.top}>
                <img src={physicsImage} alt="Physics"></img>
            </div>
        
            <div className={styles.middle}>
                 <div className={styles.question}>
                    <p>Q1. Who gave the famous equation : e=mc^2 ?</p>
                    <button>Issac Newton</button>
                    <button>de Broglie</button>
                    <button>Albert Einstein</button>
                    <button>Neil Bohr</button> 
                </div>
                <div className={styles.question}>
                    <p>Q2. What are the concentric circles joining points in the same phase called?</p>
                    <button>Equipotential Surface</button>
                    <button>Wavefront</button>
                    <button>Gaussian Surface</button>
                    <button>Shellfront</button>
                </div>
                <div className={styles.question}>
                    <p>Q3. On moving a body in equipotential surface, work done is equal to?</p>
                    <button>Positive</button>
                    <button>0</button>
                    <button>Negative</button>
                    <button>Can't say</button>
                </div>
                <div className={styles.question}>
                    <p>Q4. Who stated that matter has dual nature?</p>
                    <button>Issac Newton</button>
                    <button>de Broglie</button>
                    <button>Albert Einstein</button>
                    <button>Neil Bohr</button> 
                </div>
                <div className={styles.question}>
                    <p>Q5. What is the weight of electron?</p>
                    <button>Weightless</button>
                    <button>2.4*10^-24 Kg</button>
                    <button>9.1*10^-31 Kg</button>
                    <button>2.4*10^-27 Kg</button>
                </div>
            </div>
        </>
    )
}

export default Physics;