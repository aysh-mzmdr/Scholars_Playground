import styles from "./Subjects.module.css"
import chemistryImage from "../assets/Chemistry.jpg"

function Chemistry(){

    return(
        <>
            <div className={styles.top}>
                <img src={chemistryImage} alt="Chemistry"></img>
            </div>
        
            <div className={styles.middle}>
                <div className={styles.question}>
                    <p>Q1. Which of the following can react with gold ?</p>
                    <button>Oxygen</button>
                    <button>Nitrogen Dioxide</button>
                    <button>Methanal</button>
                    <button>Aqua Regia</button> 
                </div>
                <div className={styles.question}>
                    <p>Q2. Which of the following can only exist as -1 and 0 oxidation state ?</p>
                    <button>Fluorine</button>
                    <button>Oxygen</button>
                    <button>Astatine</button>
                    <button>Hydrogen</button>
                </div>
                <div className={styles.question}>
                    <p>Q3. Which element is known by the symbol W ?</p>
                    <button>Winterium</button>
                    <button>Tungsten</button>
                    <button>Warium</button>
                    <button>Iridium</button>
                </div>
                <div className={styles.question}>
                    <p>Q4. How many elements are currently present in the periodic table ?</p>
                    <button>118</button>
                    <button>119</button>
                    <button>120</button>
                    <button>117</button> 
                </div>
                <div className={styles.question}>
                    <p>Q5. Who is known as the Father of Chemistry ?</p>
                    <button>Antoine Lavoisier</button>
                    <button>Neil Bohr</button>
                    <button>Victor Grignard</button>
                    <button>Ernest Rutherford</button>
                </div>                  
            </div>
        </>
    )
}

export default Chemistry;