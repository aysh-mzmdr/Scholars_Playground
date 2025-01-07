import styles from "./Subjects.module.css"
import mathsImage from "../assets/Maths.png"

function Maths(){

    return(
        <>
            <div className={styles.top}>
                <img src={mathsImage} alt="Maths"></img>
            </div>
        
            <div className={styles.middle}>
                <div className={styles.question}>
                    <p>Q1. What is the next element in the series : 2 4 7 11 ?</p>
                    <button>15</button>
                    <button>16</button>
                    <button>17</button>
                    <button>18</button> 
                </div>
                <div className={styles.question}>
                    <p>Q2. The determinant of a singular matrix is equal to?</p>
                    <button>0</button>
                    <button>1</button>
                    <button>-1</button>
                    <button>Can't say</button>
                </div>
                <div className={styles.question}>
                    <p>Q3. Transpose of a skew-symmetric matrix A is equal to?</p>
                    <button>A</button>
                    <button>I</button>
                    <button>O</button>
                    <button>-A</button>
                </div>
                <div className={styles.question}>
                    <p>Q4. Which of the following numbers is divisible by 3?</p>
                    <button>331478539</button>
                    <button>487159273</button>
                    <button>326159548</button> 
                    <button>968357241</button>
                </div>
                <div className={styles.question}>
                    <p>Q5. What is lcm of 4 and 6</p>
                    <button>24</button>
                    <button>20</button>
                    <button>16</button>
                    <button>12</button>
                </div>
            </div>
        </>
    )
}

export default Maths;