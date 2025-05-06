import React from "react";
import "./CoffeeCard.scss";
import HeartTooltip from "./HeartTooltip";
import { useCart } from "../Context/CartContext"; // adjust path if needed

const CoffeeCard = ({ coffeeId, name, description, image }) => {

    const { addToCart } = useCart();
    const handleAdd = () => {
        addToCart(coffeeId, 1);
        alert("Added to cart ✅");
    };

    return (
        <div className="card">
            <img src={image} alt={name} className="card__icon" />

            <div className="card__content">
                <p className="card__title">{name}</p>
                <p className="card__description">{description}</p>
            </div>

            <div className="card__actions">
                <button className="add-to-cart" onClick={handleAdd}>
                    Add to Cart
                </button>
                <div className="like-btn" role="button" tabIndex={0}>
                    <div style={{ transform: "scale(0.9)" }}>
                        <HeartTooltip />
                    </div>
                  </div>
            </div>

            <div className="card__overlay"></div>
        </div>
    );
};




export default CoffeeCard;
