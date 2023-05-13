import React, {useEffect, useState} from "react";
import './Featured.scss';
import BTC from '../Assets/btc-img.png'
/*import {FaArrowRight} from "react-icons/all";*/
import {FiArrowRight, FiArrowDown} from "react-icons/fi";
import axios from "axios";
import { NextUIProvider } from '@nextui-org/react';
import {Button} from "@nextui-org/react";
import { Card, Text } from "@nextui-org/react";

const Featured = () => {

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
        <NextUIProvider>
    <div className='featured'>
        <div className='container'>
            <div className='left'>
                <h2>Explore Cryptocurrencies like Bitcoin, Etherium and more!</h2>
                <p>See all available assets: Crypto and NFT</p>
                <button className='btn'>See More Coins</button>
            </div>

            <div className='right'>

                {/*card1*/}
                {/*<div className='card'>*/}
                <Card
                    isPressable
                    // isHoverable
                    variant="bordered"
                    css={{
                        mw: "180px",
                        mh: "180px",
                        display: "flex",
                        border: "1px solid #ced5ff",
                        padding: "12px 22px",
                        margin: "0.4rem",
                        // background: "#dde3ff"
                    }}>
                    <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                        <div className='top'>
                            {/*<img src={BTC} alt='/'/>*/}
                            <img src={data[9].image} alt=''/>
                        </div>
                        <div style={{ textAlign: "center", overflow: "hidden" }}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h5>{data[9].name}</h5>
                                <p>${data[9].current_price.toLocaleString()}</p>
                            </div>
                        </div>

                        {data[9].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                 <FiArrowDown className='icon'/>
                                {data[9].price_change_percentage_24h}%
                              </span>
                                    ) : (
                              <span className='green'>
                                <FiArrowRight  className='icon'/>
                                {data[9].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </Card.Body>
                </Card>


                {/*card2*/}
                <Card
                    isPressable
                    // isHoverable
                    variant="bordered"
                    css={{
                        mw: "180px",
                        mh: "180px",
                        display: "flex",
                        border: "1px solid #ced5ff",
                        padding: "12px 22px",
                        margin: "0.4rem",
                        // background: "#dde3ff"
                    }}>
                    <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                        <div className='top'>
                            {/*<img src={BTC} alt='/'/>*/}
                            <img src={data[1].image} alt=''/>
                        </div>
                        <div style={{ textAlign: "center", overflow: "hidden" }}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h5>{data[1].name}</h5>
                                <p><h5>${data[1].current_price.toLocaleString()}</h5></p>
                            </div>
                        </div>

                        {data[1].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                 <FiArrowDown className='icon'/>
                                {data[1].price_change_percentage_24h}%
                              </span>
                        ) : (
                            <span className='green'>
                                <FiArrowRight  className='icon'/>
                                {data[1].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </Card.Body>
                </Card>

                {/*card3*/}
                <Card
                    isPressable
                    // isHoverable
                    variant="bordered"
                    css={{
                        mw: "180px",
                        mh: "180px",
                        display: "flex",
                        border: "1px solid #ced5ff",
                        padding: "12px 22px",
                        margin: "0.4rem",
                        // background: "#dde3ff"
                    }}>
                    <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                        <div className='top'>
                            {/*<img src={BTC} alt='/'/>*/}
                            <img src={data[2].image} alt=''/>
                        </div>
                        <div style={{ textAlign: "center", overflow: "hidden" }}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h5>{data[2].name}</h5>
                                <p><h5>${data[2].current_price.toLocaleString()}</h5></p>
                            </div>
                        </div>

                        {data[2].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                 <FiArrowDown className='icon'/>
                                {data[2].price_change_percentage_24h}%
                              </span>
                        ) : (
                            <span className='green'>
                                <FiArrowRight  className='icon'/>
                                {data[2].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </Card.Body>
                </Card>

                {/*card4*/}
                <Card
                    isPressable
                    // isHoverable
                    variant="bordered"
                    css={{
                        mw: "180px",
                        mh: "180px",
                        display: "flex",
                        border: "1px solid #ced5ff",
                        padding: "12px 22px",
                        margin: "0.4rem",
                        // background: "#dde3ff"
                    }}>
                    <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                        <div className='top'>
                            {/*<img src={BTC} alt='/'/>*/}
                            <img src={data[3].image} alt=''/>
                        </div>
                        <div style={{ textAlign: "center", overflow: "hidden" }}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h5>{data[3].name}</h5>
                                <p><h5>${data[3].current_price.toLocaleString()}</h5></p>
                            </div>
                        </div>

                        {data[3].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                 <FiArrowDown className='icon'/>
                                {data[3].price_change_percentage_24h}%
                              </span>
                        ) : (
                            <span className='green'>
                                <FiArrowRight  className='icon'/>
                                {data[3].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </Card.Body>
                </Card>

                {/*card5*/}
                <Card
                    isPressable
                    // isHoverable
                    variant="bordered"
                    css={{
                        mw: "180px",
                        mh: "180px",
                        display: "flex",
                        border: "1px solid #ced5ff",
                        padding: "12px 22px",
                        margin: "0.4rem",
                        // background: "#dde3ff"
                    }}>
                    <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                        <div className='top'>
                            {/*<img src={BTC} alt='/'/>*/}
                            <img src={data[7].image} alt=''/>
                        </div>
                        <div style={{ textAlign: "center", overflow: "hidden" }}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h5>{data[7].name}</h5>
                                <p><h5>${data[7].current_price.toLocaleString()}</h5></p>
                            </div>
                        </div>

                        {data[7].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                 <FiArrowDown className='icon'/>
                                {data[7].price_change_percentage_24h}%
                              </span>
                        ) : (
                            <span className='green'>
                                <FiArrowRight  className='icon'/>
                                {data[7].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </Card.Body>
                </Card>

                {/*card6*/}
                <Card
                    isPressable
                    // isHoverable
                    variant="bordered"
                    css={{
                        mw: "180px",
                        mh: "180px",
                        display: "flex",
                        border: "1px solid #ced5ff",
                        padding: "12px 22px",
                        margin: "0.4rem",
                        // background: "#dde3ff"
                    }}>
                    <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                        <div className='top'>
                            {/*<img src={BTC} alt='/'/>*/}
                            <img src={data[6].image} alt=''/>
                        </div>
                        <div style={{ textAlign: "center", overflow: "hidden" }}>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <h5>{data[6].name}</h5>
                                <p><h5>${data[6].current_price.toLocaleString()}</h5></p>
                            </div>
                        </div>

                        {data[10].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                 <FiArrowDown className='icon'/>
                                {data[6].price_change_percentage_24h}%
                              </span>
                        ) : (
                            <span className='green'>
                                <FiArrowRight  className='icon'/>
                                {data[6].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}
                    </Card.Body>
                </Card>

            </div>
        </div>
    </div>
            </NextUIProvider>
    )
}

export default Featured;