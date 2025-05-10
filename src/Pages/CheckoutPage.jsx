import React from "react";
import {useCart} from "../Context/CartContext";
import "./CheckoutPage.scss";

export default function CheckoutPage() {
    const {cart, clearCart} = useCart();
    const total = cart.items.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);

    return (
        <div className="checkout">
            <h1>Your Cart</h1>

            {cart.items.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <>
                    <div className="checkout-list">
                        {cart.items.map((item) => (
                            <div key={item.coffeeId} className="checkout-item">
                <span className="item-desc">
                  {item.name} × {item.qty}
                </span>
                                <span className="item-total">{item.lineTotal} lei</span>
                            </div>
                        ))}
                    </div>

                    <div className="checkout-summary">
                        <span>Total:</span>
                        <span>{total.toFixed(2)} lei</span>
                    </div>

                    <div className="checkout-actions">
                        <button className="proceed" onClick={() => alert("Proceeding…")}>
                            Proceed to Payment
                        </button>
                        <button className="clear" onClick={clearCart}>
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
