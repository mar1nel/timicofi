import React from "react";
import {useCart} from "../Context/CartContext";
import HeartTooltip from "./HeartTooltip";
import "./CoffeeCard.scss";

export default function CoffeeCard({
                                       coffeeId,
                                       name,
                                       description,
                                       price,
                                       image,
                                       disabled = false,
                                   }) {
    const {addToCart} = useCart();

    const handleAdd = () => {
        if (!disabled) addToCart(coffeeId, 1);
    };

    return (
        <div className={`card ${disabled ? "card--disabled" : ""}`}>
            <img src={image} alt={name} className="card__icon"/>

            <div className="card__content">
                <h3 className="card__title">{name}</h3>
                <p className="card__description">{description}</p>
                <p className="card__price">${price}</p>
            </div>

            {!disabled && (
                <div className="card__actions">
                    <button className="add-to-cart" onClick={handleAdd}>
                        Add to Cart
                    </button>
                    <button className="like-btn">
                        <HeartTooltip/>
                    </button>
                </div>
            )}

            <div className="card__overlay"/>
            {disabled && <span className="card__overlay-text">Sold Out</span>}
        </div>
    );
}
