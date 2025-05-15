import React, {useState} from "react";
import {useCart} from "../Context/CartContext";
import {loadStripe} from "@stripe/stripe-js";
import "./CheckoutPage.scss";

const stripePromise = loadStripe(
    "pk_test_51RNBGm4Tagxb8m7TZCNHcqUywFhIoX2UmukIDIrKrQB4jP0CeRLyMo0ugUt9kI1FFOo39pofF2uzSpxhgH1zCkCN00PZ1rxbLF"
);

export default function CheckoutPage() {
    const {cart, addToCart, clearCart} = useCart();
    const total = cart.items.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);
    const [proceedHover, setProceedHover] = useState(false);

    const handleProceed = async () => {
        try {
            const resp = await fetch(
                "http://localhost:8080/payments/create-session",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({amount: total}),
                }
            );
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

            <div className="spike-behind"/>

            <h1>Your Cart</h1>

            {cart.items.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <>
                    <div className="checkout-list">
                        {cart.items.filter(item => item.qty > 0).map((item) => (
                            <div key={item.coffeeId} className="checkout-item">
                                <span className="item-desc">
                  <button
                      className="qty-btn"
                      onClick={() => {
                          if (item.qty > 1) {
                              addToCart(item.coffeeId, -1);
                          } else {
                              addToCart(item.coffeeId, -item.qty);
                          }
                      }}
                  >
                    −
                  </button>
                  <span className="qty">{item.qty}</span>
                  <button
                      className="qty-btn"
                      onClick={() => addToCart(item.coffeeId, 1)}
                  >
                    +
                  </button>
                                  <span className="space-name"> x </span> {item.name}
                </span>
                                <span className="item-total">{item.lineTotal} lei</span>
                            </div>
                        ))}
                    </div>

                    <div className="checkout-summary">
                        <span>Total:</span>
                        <span>{total.toFixed(2)} lei</span>
                    </div>

                    <div className="checkout-actions" onMouseEnter={() => setProceedHover(true)}
                         onMouseLeave={() => setProceedHover(false)}>
                        <button className="proceed" onClick={handleProceed}>
                            Proceed to Payment
                        </button>
                        <button className="clear" onClick={clearCart}>
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
            <img
                className={`image-cart${proceedHover ? " shift" : ""}`}
                src="https://png.pngtree.com/png-clipart/20230510/original/pngtree-cute-coffee-cup-png-image_9156461.png"
                alt="Floating coffee"
            />
            <div className="hide-space"/>

            <div className="spike"/>
        </div>
    );
}
