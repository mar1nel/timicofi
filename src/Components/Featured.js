import React from "react";
import './Featured.scss';
import BTC from '../Assets/btc-img.png'
/*import {FaArrowRight} from "react-icons/all";*/
import {FiArrowRight, FiArrowDown} from "react-icons/fi";

const Featured = () => {

    return(
    <div className='featured'>
        <div className='container'>
            <div className='left'>
                <h2>Explore Cryptocurrencies like Bitcoin, Etherium and more!</h2>
                <p>See all available assets: Crypto and NFT</p>
                <button className='btn'>See More Coins</button>
            </div>

            <div className='right'>
                <div className='top'>
                    <img src={BTC} alt='/'/>
                </div>
                <div>
                    <h5>Bitcoin</h5>
                    <p>$47,310</p>
                </div>
                <span><FiArrowRight/>2,5%</span>
            </div>
        </div>
    </div>
    )
}

export default Featured;