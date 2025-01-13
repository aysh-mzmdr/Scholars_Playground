import styles from "./Home.module.css"
import { gsap } from "gsap"
import { useRef,useEffect,useState, useContext } from "react"
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/Logo.png";
import background from "../assets/Playground.jpg";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

function Home(){

    const {score}=useContext(AppContext);

    const headerGSAP=useRef();
    const logoTaglineGSAP=useRef();
    const benefitsGSAP=useRef();
    const playgroundGSAP=useRef();
    const instructionsGSAP=useRef();

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

    useEffect(() => {
        gsap.fromTo(headerGSAP.current,
            {y:100,opacity:0,},
            {y:0,opacity:1,duration:1.5,})
        },[]);


    useEffect(() => {
        gsap.fromTo(logoTaglineGSAP.current.querySelectorAll("#tagline"),{
            color:"violet",
        }
        ,{
            color:"rgba(238, 130, 238, 0.69)",
            duration:2,
            repeat:-1,
            yoyo:true
        })
    })

    useEffect(() => {

        gsap.to(benefitsGSAP.current.querySelector("h1"),{
            opacity:1,
            transform:"translateX(400px)",
            duration:2,
            scrollTrigger:{
                trigger:benefitsGSAP.current,
                scroller:"body"
            }
        });
        gsap.fromTo(benefitsGSAP.current.querySelectorAll("p"),{
            opacity:0,
        },
        {
            opacity:1,
            duration:2,
            stagger:1,
            scrollTrigger:{
                trigger:benefitsGSAP.current,
                scroller:"body",
                scrub:2,
                start:"top 50%",
                end:"bottom 70%",
            }
        })})
    
    useEffect(() => {
        gsap.fromTo(instructionsGSAP.current.querySelector("#A1"),{
            opacity:0,
        },{
            opacity:1,
            transform:"translateX(150px)",
            duration:2,
            scrollTrigger:{
                trigger:instructionsGSAP.current,
                scroller:"body",
                start:"top 80%",
                end:"bottom 20%",
                
                
            }
        });
        gsap.fromTo(instructionsGSAP.current.querySelector("#A2"),{
            opacity:0,
        },{
            opacity:1,
            transform:"translateX(-150px)",
            duration:2,
            scrollTrigger:{
                trigger:instructionsGSAP.current,
                scroller:"body",
                start:"top 80%",
                end:"bottom 20%",
                
                
            }
        });
        gsap.fromTo(instructionsGSAP.current.querySelector("#A3"),{
            opacity:0,
        },{
            opacity:1,
            transform:"translateX(150px)",
            duration:2,
            scrollTrigger:{
                trigger:instructionsGSAP.current,
                scroller:"body",
                start:"top 80%",
                end:"bottom 20%",
                
                
            }
        });
        gsap.fromTo(instructionsGSAP.current.querySelector("#A4"),{
            opacity:0,
        },{
            opacity:1,
            transform:"translateX(-150px)",
            duration:2,
            scrollTrigger:{
                trigger:instructionsGSAP.current,
                scroller:"body",
                start:"top 80%",
                end:"bottom 20%",
                
                
            }
        });
        gsap.fromTo(instructionsGSAP.current.querySelector("#A5"),{
            color:"white"
        },{
            color:"hsl(0, 0.40%, 44.50%)",
            duration:1,
            repeat:-1,
            yoyo:true,
            scrollTrigger:{
                trigger:instructionsGSAP.current,
                scroller:"body",
                start:"top 80%",
                end:"bottom 20%",
                
            }
        })
    })

    const [hovered1,setHovered1]=useState(false)
    const [hovered2,setHovered2]=useState(false)
    const [hovered3,setHovered3]=useState(false)
    const [hovered4,setHovered4]=useState(false)

   const navigate=useNavigate();
   const toProfile =() => {navigate("/Scholars_Playground/profile");};              // Doing this because hooks can't be called directly inside return statement
   const toPhysics =() => {navigate("/Scholars_Playground/physics");};
   const toChemistry =() => {navigate("/Scholars_Playground/chemistry");};
   const toMaths =() => {navigate("/Scholars_Playground/mathematics");};
   const toGK =() => {navigate("/Scholars_Playground/general_knowledge");};
   const toComputer =() => {navigate("/Scholars_Playground/computer");};

   
    return(
        <>
            <div ref={headerGSAP} className={styles.heading}>
                <div style={{fontSize:"40px",display:"flex"}}>League : {league}</div>
                <div className={styles.head}>
                    <button className={hovered1?styles.headButtonEnter:styles.headButtonExit} onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} onClick={toProfile}>Profile</button>
                    <button className={hovered2?styles.headButtonEnter:styles.headButtonExit} onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)} onClick={() => gsap.to(window,{scrollTo:benefitsGSAP.current,duration:1})}>About us</button>
                    <button className={hovered3?styles.headButtonEnter:styles.headButtonExit} onMouseEnter={() => setHovered3(true)} onMouseLeave={() => setHovered3(false)} onClick={() => gsap.to(window,{scrollTo:playgroundGSAP.current,duration:1})}>Playground</button>
                    <button className={hovered4?styles.headButtonEnter:styles.headButtonExit} onMouseEnter={() => setHovered4(true)} onMouseLeave={() => setHovered4(false)} onClick={() => gsap.to(window,{scrollTo:instructionsGSAP.current,duration:1})}>Instructions</button>
                </div>
            </div>


            <div ref={logoTaglineGSAP} className={styles.logoTagline}>
                <img src={logo} alt="Scholars Playground"></img>
                <b id="tagline" style={{fontSize:"35px",rotate:"345deg",color:"Violet",paddingLeft:"10px"}} onMouseEnter={() => gsap.to(logoTaglineGSAP.current.querySelector("#tagline"),{transform:"scale(2)",duration:0.5})} onMouseLeave={() => gsap.to(logoTaglineGSAP.current.querySelector("#tagline"),{transform:"scale(1) rotate(345deg)",duration:0.5})}>The Playground for the Scholars of tomorrow!</b>
            </div>


            <div ref={playgroundGSAP} className={styles.playground}>
            <h1 style={{fontSize:"80px"}} onMouseEnter={() => gsap.to(playgroundGSAP.current.querySelectorAll("h1"),{transform:"scale(1.5)",color:"green",textShadow:"2px 2px 2px black,-1px 1px 2px yellow",duration:0.5})} onMouseLeave={() => gsap.to(playgroundGSAP.current.querySelectorAll("h1"),{transform:"scale(1)",color:"white",duration:0.5})}>Playground</h1>
                <div class="playarea" style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"50px",padding:"200px",height:"100vh",width:"100vw",backgroundImage:`url(${background})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
                    <button id="B1" className={styles.subjects} onMouseEnter={() => gsap.to(playgroundGSAP.current.querySelector("#B1"),{background:"linear-gradient(90deg,rgb(8, 54, 8),rgba(255, 255, 0, 0))",transform:"scale(1.2)"})} onMouseLeave={() => gsap.to(playgroundGSAP.current.querySelector("#B1"),{background:"linear-gradient(90deg,lime,rgba(255, 255, 0, 0))",transform:"scale(1)"})} onClick={toPhysics}>Physics</button>
                    <button id="B2" className={styles.subjects} onMouseEnter={() => gsap.to(playgroundGSAP.current.querySelector("#B2"),{background:"linear-gradient(90deg,rgb(8, 54, 8),rgba(255, 255, 0, 0))",transform:"scale(1.2)"})} onMouseLeave={() => gsap.to(playgroundGSAP.current.querySelector("#B2"),{background:"linear-gradient(90deg,lime,rgba(255, 255, 0, 0))",transform:"scale(1)"})} onClick={toChemistry}>Chemistry</button>
                    <button id="B3" className={styles.subjects} onMouseEnter={() => gsap.to(playgroundGSAP.current.querySelector("#B3"),{background:"linear-gradient(90deg,rgb(8, 54, 8),rgba(255, 255, 0, 0))",transform:"scale(1.2)"})} onMouseLeave={() => gsap.to(playgroundGSAP.current.querySelector("#B3"),{background:"linear-gradient(90deg,lime,rgba(255, 255, 0, 0))",transform:"scale(1)"})} onClick={toMaths}>Mathematics</button>
                    <button id="B4" className={styles.subjects} onMouseEnter={() => gsap.to(playgroundGSAP.current.querySelector("#B4"),{background:"linear-gradient(90deg,rgb(8, 54, 8),rgba(255, 255, 0, 0))",transform:"scale(1.2)"})} onMouseLeave={() => gsap.to(playgroundGSAP.current.querySelector("#B4"),{background:"linear-gradient(90deg,lime,rgba(255, 255, 0, 0))",transform:"scale(1)"})} onClick={toGK}>General Knowledge</button>
                    <button id="B5" className={styles.subjects} onMouseEnter={() => gsap.to(playgroundGSAP.current.querySelector("#B5"),{background:"linear-gradient(90deg,rgb(8, 54, 8),rgba(255, 255, 0, 0))",transform:"scale(1.2)"})} onMouseLeave={() => gsap.to(playgroundGSAP.current.querySelector("#B5"),{background:"linear-gradient(90deg,lime,rgba(255, 255, 0, 0))",transform:"scale(1)"})} onClick={toComputer}>Computer</button>
                </div>
            </div>


            <div ref={benefitsGSAP} className={styles.benefits}>
                <h1 style={{fontSize:"80px",opacity:0,paddingRight:"800px"}}>Why choose us?</h1>
                <p style={{fontSize:"32px"}}>When we are in a state of playing, we actually are able to learn more than when we learn while studying.</p>
                <p style={{fontSize:"32px"}}>This is because while studying our motive is to somehow just learn it, and as a result things might sometimes get monotonous and boring.</p>
                <p style={{fontSize:"32px"}}>On the other hand while playing, our main motive is to understand it, so that we can enjoy the game better.</p>
                <p style={{fontSize:"32px"}}>This platform uses this psychological factor into consideration, which allows users to study as if it were a game for them to enjoy.</p>
            </div>



            <div ref={instructionsGSAP} className={styles.instructions}>
                <h1 style={{fontSize:"80px"}} onMouseEnter={() => gsap.to(instructionsGSAP.current.querySelectorAll("h1"),{transform:"scale(1.5)",color:"yellow",textShadow:"2px 2px 2px black,-1.5px 1px 2px white",duration:0.5})} onMouseLeave={() => gsap.to(instructionsGSAP.current.querySelectorAll("h1"),{transform:"scale(1)",color:"white",duration:0.5})}>How to play?</h1>
                    <p id="A1" style={{backgroundColor:"grey",padding:"10px"}}>-For every <b><div style={{color:"green",display:"inline",fontSize:"30px",textShadow:"1px 1px 1px black"}}>Correct</div></b> answer, you get <div style={{color:"blue",display:"inline"}}>100 Points</div></p>
                    <p id="A2" style={{backgroundColor:"grey",padding:"10px"}}>-For every <b><div style={{color:"red",display:"inline",fontSize:"30px",textShadow:"1px 1px 1px black"}}>Incorrect</div></b> answer, you loose <div style={{color:"blue",display:"inline"}}>70 Points</div></p>
                    <p id="A3" style={{backgroundColor:"grey",padding:"10px"}}>-On the basis of your <b><div style={{color:"blue",display:"inline",fontSize:"30px",textShadow:"1px 1px 1px black"}}>Score</div></b>, you shall be known in a particular league</p>
                    <p id="A4" style={{backgroundColor:"grey",padding:"10px"}}>-As your league upgrades, negative marking increases.</p>
                    <p id="A5"><b style={{fontSize:"35px"}}>DO YOU HAVE WHAT IT TAKES TO BE A MEMBER OF THE <div style={{color:"hsl(350, 53%, 74%)",display:"inline"}}>LEGENDS LEAGUE!?</div></b></p>
                    <ul style={{backgroundColor:"rgba(200, 15, 15, 0.55)",padding:"10px 50px",borderRadius:"10px"}} onMouseEnter={() => gsap.to(instructionsGSAP.current.querySelectorAll("ul"),{padding:"10px 80px", duration:0.5})} onMouseLeave={() => gsap.to(instructionsGSAP.current.querySelectorAll("ul"),{padding:"10px 50px", duration:0.2})}>
                        <li>500 points  : <div style={{color:"hsl(35, 100.00%, 50.00%)",display:"inline"}}><b>Bronze league</b></div></li>
                        <li>1500 points : <div style={{color:"silver",display:"inline"}}><b>Silver league</b></div></li>
                        <li>2500 points : <div style={{color:"gold",display:"inline"}}><b>Gold league</b></div></li>
                        <li>4000 points : <div style={{color:"hsl(183, 57.90%, 47.50%)",display:"inline"}}><b>Diamond league</b></div></li>
                        <li>5000 points : <div style={{color:"hsl(120, 67.50%, 39.80%)",display:"inline"}}><b>Emerald league</b></div></li>
                        <li>7000 points : <div style={{color:"hsl(79, 70.40%, 51.00%)",display:"inline"}}><b>Scholars league</b></div></li>
                        <li>10000 points: <div style={{color:"hsl(350, 53%, 74%)",display:"inline"}}><b>Legends league</b></div></li>
                    </ul>
                <p>To start playing, go to Playground section and choose your desired subject and let your journey begin!!</p>
            </div>


            <div className={styles.footer}>
                Created by Ayush Mazumdar
            </div>
        </>
    )
};

export default Home