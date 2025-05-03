import React from "react";
import "./CoffeeCard.scss";
import HeartTooltip from "./HeartTooltip";

const CoffeeCard = ({ name, description, image }) => {
    return (
        <div className="card">
            <img src={image} alt={name} className="card__icon" />

            <div className="card__content"> testststts
                <p className="card__title">{name}</p>
                <p className="card__description">{description}</p>
            </div>

            <div className="card__actions">
                <button className="add-to-cart">Add to Cart</button>
                <button className="like-btn">
                    <div style={{ transform: "scale(0.9)", transformOrigin: "center" }}>
                        <HeartTooltip />
                    </div>
                </button>

            </div>

            {/* Background fade */}
            <div className="card__overlay"></div>
        </div>

    );
};



export default CoffeeCard;
