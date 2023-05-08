import React, {useEffect, useState} from "react";
import './Featured.scss';
import BTC from '../Assets/btc-img.png'
/*import {FaArrowRight} from "react-icons/all";*/
import {FiArrowRight, FiArrowDown} from "react-icons/fi";
import axios from "axios";

const Featured = () => {

    // eslint-disable-next-line no-unused-vars
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=12&page=1&sparkline=false&locale=en'

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(data)
    if (!data) return null


    return(
    <div className='featured'>
        <div className='container'>
            <div className='left'>
                <h2>Explore Cryptocurrencies like Bitcoin, Etherium and more!</h2>
                <p>See all available assets: Crypto and NFT</p>
                <button className='btn'>See More Coins</button>
            </div>

            <div className='right'>

                {/*card1*/}
                <div className='card'>
                <div className='top'>
                    {/*<img src={BTC} alt='/'/>*/}
                    <img src={data[10].image} alt=''/>
                </div>
                <div>
                    <h5>{data[10].name}</h5>
                    <p>${data[10].current_price.toLocaleString()}</p>
                </div>

                {data[10].price_change_percentage_24h < 0 ? (
                    <span className='red'>
                        <FiArrowDown className='icon'/>
                        {data[10].price_change_percentage_24h}%
                    </span>
                ) : (
                    <span className='green'>
                        <FiArrowRight  className='icon'/>
                        {data[0].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
                </div>

                {/*card2*/}
                <div className='card'>
                    <div className='top'>
                        {/*<img src={BTC} alt='/'/>*/}
                        <img src={data[1].image} alt=''/>
                    </div>
                    <div>
                        <h5>{data[1].name}</h5>
                        <p>${data[1].current_price.toLocaleString()}</p>
                    </div>

                    {data[1].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                        <FiArrowDown  className='icon'/>
                            {data[1].price_change_percentage_24h}%
                    </span>
                    ) : (
                        <span className='green'>
                        <FiArrowRight  className='icon'/>
                            {data[1].price_change_percentage_24h.toFixed(2)}%
                    </span>
                    )}
                </div>

                {/*card3*/}
                <div className='card'>
                    <div className='top'>
                        {/*<img src={BTC} alt='/'/>*/}
                        <img src={data[2].image} alt=''/>
                    </div>
                    <div>
                        <h5>{data[2].name}</h5>
                        <p>${data[2].current_price.toLocaleString()}</p>
                    </div>

                    {data[2].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                        <FiArrowDown  className='icon'/>
                            {data[2].price_change_percentage_24h}%
                    </span>
                    ) : (
                        <span className='green'>
                        <FiArrowRight className='icon'/>
                            {data[2].price_change_percentage_24h.toFixed(2)}%
                    </span>
                    )}
                </div>

                {/*card4*/}
                <div className='card'>
                    <div className='top'>
                        {/*<img src={BTC} alt='/'/>*/}
                        <img src={data[6].image} alt=''/>
                    </div>
                    <div>
                        <h5>{data[6].name}</h5>
                        <p>${data[6].current_price.toLocaleString()}</p>
                    </div>

                    {data[7].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                        <FiArrowDown className='icon'/>
                            {data[6].price_change_percentage_24h}%
                    </span>
                    ) : (
                        <span className='green'>
                        <FiArrowRight className='icon'/>
                            {data[6].price_change_percentage_24h.toFixed(2)}%
                    </span>
                    )}
                </div>

                {/*card5*/}
                <div className='card'>
                    <div className='top'>
                        {/*<img src={BTC} alt='/'/>*/}
                        <img src={data[9].image} alt=''/>
                    </div>
                    <div>
                        <h5>{data[9].name}</h5>
                        <p>${data[9].current_price.toLocaleString()}</p>
                    </div>

                    {data[9].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                        <FiArrowDown className='icon'/>
                            {data[9].price_change_percentage_24h}%
                    </span>
                    ) : (
                        <span className='green'>
                        <FiArrowRight className='icon'/>
                            {data[9].price_change_percentage_24h.toFixed(2)}%
                    </span>
                    )}
                </div>

                {/*card6*/}
                <div className='card'>
                    <div className='top'>
                        {/*<img src={BTC} alt='/'/>*/}
                        <img src={data[5].image} alt=''/>
                    </div>
                    <div>
                        <h5>{data[5].name}</h5>
                        <p>${data[5].current_price.toLocaleString()}</p>
                    </div>

                    {data[5].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                        <FiArrowDown className='icon'/>
                            {data[5].price_change_percentage_24h}%
                    </span>
                    ) : (
                        <span className='green'>
                        <FiArrowRight className='icon'/>
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                    </span>
                    )}
                </div>

            </div>
        </div>
    </div>
    )
}

export default Featured;