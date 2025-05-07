// src/Components/CoffeeCard.jsx
import React from "react";
import { useCart } from "../Context/CartContext";
import HeartTooltip from "./HeartTooltip";
import "./CoffeeCard.scss";

export default function CoffeeCard({
                                       coffeeId,
                                       name,
                                       description,
                                       price,
                                       image,
                                   }) {
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart(coffeeId, 1);
    };

    return (
        <div className="card">
            <img src={image} alt={name} className="card__icon" />

            <div className="card__content">
                <h3 className="card__title">{name}</h3>
                <p className="card__description">{description}</p>
                <p className="card__price">${price.toFixed(2)}</p>
            </div>

            <div className="card__actions">
                <div
                    className="add-to-cart"
                    onClick={handleAdd}
                >
                    Add to Cart
                </div>
                <div className="like-btn">
                    <div style={{ transform: "scale(0.9)", transformOrigin: "center" }}>
                        <HeartTooltip />
                    </div>
                </div>
            </div>

            <div className="card__overlay" />
        </div>
    );
}
