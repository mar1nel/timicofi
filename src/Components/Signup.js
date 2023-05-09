import React from "react";
import './Signup.scss'
import Crypto from '../Assets/trade.png'
import {motion} from "framer-motion";

const Signup = () => {
    return(
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <motion.div className='left'
                            /*animate={{ rotate: 30 }}
                            transition={{
                                repeat: 1,
                                repeatType: "reverse",
                                duration: 1
                            }}*/

                    initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}

                            whileHover={{
                                scale: 1.1,
                                animationDuration: 0.5
                            }}
                >
                    <img src={Crypto} alt='' />
                </motion.div>

                {/* right */}
                <div className='right'>
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className='input-container'>
                        <input className='input-style' type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup;