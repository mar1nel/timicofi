import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);

    //cand user-ul apasa butonul de cart tu sa mai faci inca o data un request aici sa se vada itemele corespunzator
    const fetchCart = async () => {
        try {
            const res = await fetch(
                "http://localhost:8080/reports/view?userId=1",
                {
                    method: "GET",
                    headers: { "Accept": "application/json" },
                }
            );

            if (!res.ok) {
                throw new Error(await res.text());
            }
            const data = await res.json();  // CartDTO
            setCart(data);
        } catch (err) {
            console.error("Error fetching cart:", err);
        }
    };

    const addToCart = async (coffeeId, qty = 1) => {
        try {
            const res = await fetch(
                "http://localhost:8080/reports/items?userId=1", // hard‑coded user #1
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ coffeeId, qty }),
                }
            );

            if (!res.ok) {
                throw new Error(await res.text());
            }

            const cart = await res.json();
            setCart(cart);
        } catch (err) {
            console.error("Failed to add to cart:", err);
        }
    };

    //
    const clearCart = () => setCart(null); // Optional logic

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <CartContext.Provider value={{ cart, addToCart, fetchCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
