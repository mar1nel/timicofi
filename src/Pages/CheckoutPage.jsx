import React from "react";
import {useCart} from "../Context/CartContext";
import {loadStripe} from "@stripe/stripe-js";
import "./CheckoutPage.scss";

const stripePromise = loadStripe("pk_test_51RNBGm4Tagxb8m7TZCNHcqUywFhIoX2UmukIDIrKrQB4jP0CeRLyMo0ugUt9kI1FFOo39pofF2uzSpxhgH1zCkCN00PZ1rxbLF");

export default function CheckoutPage() {
    const {cart, clearCart} = useCart();
    const total = cart.items.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);

    const handleProceed = async () => {
        try {
            const resp = await fetch("http://localhost:8080/payments/create-session", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({amount: total}),
            });
            const {id: sessionId} = await resp.json();
            const stripe = await stripePromise;
            await stripe.redirectToCheckout({sessionId});
        } catch (err) {
            console.error("Stripe checkout error:", err);
            alert("Payment failed to start.");
        }
    };

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
                        <button className="proceed" onClick={handleProceed}>
                            Proceed to Payment
                        </button>
                        <button className="clear" onClick={clearCart}>
                            Clear Cart
                        </button>
                    </div>
                </>
            )}

            <div className="spike-behind"/>
            <div className="spike"/>
            
        </div>
    );
}
