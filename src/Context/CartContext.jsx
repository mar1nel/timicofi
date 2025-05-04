import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null);

    const fetchCart = async () => {
        try {
            const res = await fetch("http://localhost:8080/cart", {
                credentials: "include",
            });
            const data = await res.json();
            setCart(data);
        } catch (err) {
            console.error("Error fetching cart:", err);
        }
    };

    const addToCart = async (coffeeId, quantity) => {
        try {
            const res = await fetch(
                `http://localhost:8080/auth/cart/add?coffeeId=${coffeeId}&quantity=${quantity}`,
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            const data = await res.json();
            setCart(data);
        } catch (err) {
            console.error("Failed to add to cart:", err);
        }
    };


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
