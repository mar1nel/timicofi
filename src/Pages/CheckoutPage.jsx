import React, {useEffect, useState} from "react";
import {useCart} from "../Context/CartContext";
import {loadStripe} from "@stripe/stripe-js";
import {Link, useLocation} from "react-router-dom";
import "./CheckoutPage.scss";

const stripePromise = loadStripe(
    "pk_test_51RNBGm4Tagxb8m7TZCNHcqUywFhIoX2UmukIDIrKrQB4jP0CeRLyMo0ugUt9kI1FFOo39pofF2uzSpxhgH1zCkCN00PZ1rxbLF"
);

export default function CheckoutPage() {
    const {cart, addToCart, clearCart, decrementStock} = useCart();
    const total = cart.items.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const {search} = useLocation();
    const params = new URLSearchParams(search);
    const isSuccess = params.get("success") === "true";
    const isCanceled = params.get("canceled") === "true";

    useEffect(() => {
        if (!isSuccess) return;

        async function persistStock() {
            // build the payload: list of { id, stock: amountToSubtract }
            const payload = cart.items.map(item => ({
                id: item.coffeeId,
                stock: item.qty
            }));

            try {
                const res = await fetch(
                    "http://localhost:8080/reports/stock/decrement",
                    {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(payload)
                    }
                );
                if (!res.ok) {
                    const text = await res.text();
                    console.error("Failed to decrement stock:", res.status, text);
                } else {
                    // update your in-memory stock as well
                    cart.items.forEach(item => {
                        decrementStock(item.coffeeId, item.qty);
                    });
                }
            } catch (err) {
                console.error("Error decrementing stock:", err);
            }

            // now clear the cart and show success
            clearCart();
            setShowSuccess(true);
            window.history.replaceState({}, document.title, "/checkout");
        }

        persistStock();
    }, [isSuccess, cart.items, decrementStock, clearCart]);

    const handleProceed = async () => {
        setIsLoading(true);

        // Build the payload your CreateSessionRequest expects
        const payload = {
            items: cart.items.map(item => ({
                coffeeId: item.coffeeId,
                name: item.name,
                unitPrice: item.unitPrice,
                quantity: item.qty
            }))
        };

        try {
            const resp = await fetch(
                "http://localhost:8080/payments/create-session",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(payload),
                }
            );

            if (!resp.ok) {
                // Grab the real server error to help debug
                const errText = await resp.text();
                console.error("Backend error:", resp.status, errText);
                alert("Payment failed:\n" + errText);
                setIsLoading(false);
                return;
            }

            const {id: sessionId} = await resp.json();
            const stripe = await stripePromise;
            await stripe.redirectToCheckout({sessionId});
        } catch (err) {
            console.error("Stripe error:", err);
            alert("Could not start payment. Please try again.");
            setIsLoading(false);
        }
    };


    if (isCanceled) {
        return (
            <div className="checkout">
                <h1>Payment Cancelled</h1>
                <p>Looks like you backed out. No worries—feel free to try again.</p>
            </div>
        );
    }

    return (
        <div className="checkout">
            {showSuccess && (
                <div className="success-banner">
                    Thank you for your purchase!
                </div>
            )}

            <Link className="return-link" to="/shop-page">
                ← Go back
            </Link>

            <h1>Your Cart</h1>

            {cart.items.length === 0 ? (
                <p className="text-center">
                    {showSuccess ? "Your cart is now empty." : "Your cart is empty."}
                </p>
            ) : (
                <>
                    <div className="checkout-list">
                        {cart.items.map(item => (
                            <div key={item.coffeeId} className="checkout-item">
                <span className="item-desc">
                  <button
                      className="qty-btn"
                      onClick={() =>
                          item.qty > 1
                              ? addToCart(item.coffeeId, -1)
                              : addToCart(item.coffeeId, -item.qty)
                      }
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
                  <span className="space-name"> x </span>
                    {item.name}
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
                        <button
                            className="proceed"
                            onClick={handleProceed}
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading…" : "Proceed to Payment"}
                        </button>
                        <button
                            className="clear"
                            onClick={clearCart}
                            disabled={isLoading}
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
