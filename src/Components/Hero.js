import React from "react";
import './Hero.scss';
import Crypto from '../Assets/hero-img.png'


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
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;