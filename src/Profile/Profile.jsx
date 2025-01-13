import styles from "./Profile.module.css"
import profileImage from "../assets/WelcomeProfile.jpg"
import { gsap } from "gsap"
import { useRef,useContext,useState,useEffect } from "react"
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

function Profile(){

    const profileData=useRef();

    const {score}=useContext(AppContext)
    const {incorrect}=useContext(AppContext)
    const {questions}=useContext(AppContext)

    const navigate=useNavigate();
    const toHome =() => {navigate("../Scholars_Playground/");};

    const [league,updateLeague]=useState("Unranked")

    useEffect(() => {
        if(score>=10000)
            updateLeague(<div style={{color:"hsl(350, 53%, 74%)",paddingLeft:"15px"}}>Legends</div>);
        else if(score>=7000)
            updateLeague(<div style={{color:"hsl(79, 70.40%, 51.00%)",paddingLeft:"15px"}}>Scholars</div>);
        else if(score>=5000)
            updateLeague(<div style={{color:"hsl(120, 67.50%, 39.80%)",paddingLeft:"15px"}}>Emerald</div>);
        else if(score>=4000)
            updateLeague(<div style={{color:"hsl(183, 57.90%, 47.50%)",paddingLeft:"15px"}}>Diamond</div>);
        else if(score>=2500)
            updateLeague(<div style={{color:"gold",paddingLeft:"15px"}}>Gold</div>);
        else if(score>=1500)
            updateLeague(<div style={{color:"silver",paddingLeft:"15px"}}>Silver</div>);
        else if(score>=500)
            updateLeague(<div style={{color:"hsl(35, 100.00%, 50.00%)",paddingLeft:"15px"}}>Bronze</div>);
    },[score])

    return(
        <>
            <div className={styles.top}>
                <img src={profileImage} alt="profile image" style={{height:"100%",width:"100%",objectFit:"cover"}}></img>
            </div>
        
            

            <div ref={profileData} className={styles.middle}>
                <p id="C1" onMouseEnter={() => gsap.to(profileData.current.querySelector("#C1"),{transform:"translateX(150px)",duration:1})} onMouseLeave={() => gsap.to(profileData.current.querySelector("#C1"),{transform:"translateX(0px)",duration:2})}>Name             : <b style={{textShadow:"1.5px 1px 1px white"}}>Ayush Mazumdar</b></p><br></br>
                <p id="C2" onMouseEnter={() => gsap.to(profileData.current.querySelector("#C2"),{transform:"translateX(150px)",duration:1})} onMouseLeave={() => gsap.to(profileData.current.querySelector("#C2"),{transform:"translateX(0px)",duration:2})} style={{display:"flex"}}>League           : <b>{league}</b></p>
                <p id="C3" onMouseEnter={() => gsap.to(profileData.current.querySelector("#C3"),{transform:"translateX(150px)",duration:1})} onMouseLeave={() => gsap.to(profileData.current.querySelector("#C3"),{transform:"translateX(0px)",duration:2})}>Score            : <b style={{textShadow:"1.5px 1px 1px white"}}>{score}</b></p><br></br>
                <p id="C4" onMouseEnter={() => gsap.to(profileData.current.querySelector("#C4"),{transform:"translateX(150px)",duration:1})} onMouseLeave={() => gsap.to(profileData.current.querySelector("#C4"),{transform:"translateX(0px)",duration:2})}>Incorrect        : <b style={{textShadow:"1.5px 1px 1px white"}}>{incorrect}</b></p><br></br>
                <p id="C5" onMouseEnter={() => gsap.to(profileData.current.querySelector("#C5"),{transform:"translateX(150px)",duration:1})} onMouseLeave={() => gsap.to(profileData.current.querySelector("#C5"),{transform:"translateX(0px)",duration:2})}>Questions Solved : <b style={{textShadow:"1.5px 1px 1px white"}}>{questions}</b></p><br></br>
            </div>

            <div>
                <button className={styles.homePage} onClick={() => toHome()}>Back</button>
            </div>
        </>
    )
}

export default Profile;