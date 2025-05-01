import React from "react";
import './Featured.scss';
import Beans from '../Assets/beans.png';
import { NextUIProvider } from "@nextui-org/react";
import { Card } from "@nextui-org/react";

const products = [
    {
        name: "Espresso Boost",
        price: "4.50",
        image: Beans,
    },
    {
        name: "Vanilla Brew",
        price: "5.20",
        image: Beans,
    },
    {
        name: "Iced Americano",
        price: "4.00",
        image: Beans,
    },
    {
        name: "BrewBoost Energy",
        price: "6.00",
        image: Beans,
    },
    {
        name: "Hazelnut Vibe",
        price: "5.75",
        image: Beans,
    },
    {
        name: "Caramel Cloud",
        price: "5.30",
        image: Beans,
    },
];

const Featured = () => {
    return (
        <NextUIProvider>
            <div className="featured">
                <div className="container">
                    <div className="left">
                        <h2>Explore our Top Picks</h2>
                        <p>Carefully brewed to energize your day with bold flavors and natural ingredients.</p>
                        <p>
                            From rich espresso blends to refreshing non-alcoholic brews, every sip is crafted to boost your focus and mood —
                            without the crash.
                        </p>
                        <p>Discover your next favorite from our curated selection of customer-loved brews.</p>
                        <button className="btn">Shop All Brews</button>
                    </div>


                    <div className="right">
                        {products.map((item, index) => (
                            <Card
                                key={index}
                                isPressable
                                variant="bordered"
                                css={{
                                    mw: "180px",
                                    mh: "180px",
                                    display: "flex",
                                    border: "1px solid #C19A6B",
                                    padding: "12px 22px",
                                    margin: "0.4rem",
                                    backgroundColor: "#FFF8F0",
                                }}
                            >
                                <Card.Body
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div className="top">
                                        <img src={item.image} alt={item.name} style={{ width: 60 }} />
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <h5>{item.name}</h5>
                                        <p style={{ fontWeight: 600 }}>${item.price}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </NextUIProvider>
    );
};

export default Featured;
