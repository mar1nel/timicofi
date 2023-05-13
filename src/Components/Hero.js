import React from "react";
import './Hero.scss';
import Planet from '../Assets/planet.png'
import {motion} from "framer-motion";
import Confetti from "./Confetti";


const Hero = () => {
    return(
        <div className='hero'>
            <div className='container'>
                {/*left side*/}
                <div className='left'>
                    <p>Buy & Sell  using your account</p>
                    <h1>Invest today in <span className='primary'>Cryptocurrency</span> with vicoin</h1>
                    <p>Buy, Sell and Store hundreds of crypto coins</p>
                    <div className='input-container'>
                        <input className='input-style' type='Email' placeholder='Enter your Email'/>
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
                {/*right side*/}
                <div className='right'>

                    <motion.div className='img-container'
                                initial={{opacity: 0}}
                    animate={{x:10, y:10, opacity:1}}
                                transition={{
                                    ease: "linear",
                                    duration: 1,
                                    x: { duration: 1 },
                                    y: { duration: 1 }
                                }}
                    >
                        {/*<div className="confetti"><Confetti ></Confetti></div>*/}

                        <img src={Planet} alt=''/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Hero;