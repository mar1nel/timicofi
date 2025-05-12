import React from "react";
import './Hero.scss';
import Beans from '../Assets/beans.png'; // can be a nice coffee beans photo
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='left'>
                    <p className="text-subtle">Your daily dose of energy, taste, and comfort</p>
                    <h1>
                        Start your day with Timi<span className="primary">cofi</span>
                    </h1>
                    <p>Artisan-crafted non-alcoholic brown beer meets energizing botanicals</p>

                    <div className='input-container'>
                        <input className='input-style' style={{marginBottom: "20px"}} type='email' placeholder='Join our coffee club' />
                        <button className='btn'>Get Started</button>
                    </div>
                </div>

                <div className='right'>
                    <motion.div
                        className='img-container'
                        initial={{ opacity: 0 }}
                        animate={{ x: 10, y: 10, opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 1 },
                            y: { duration: 1 }
                        }}
                    >
                        <img src={Beans} alt='Fresh roasted beans' />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
