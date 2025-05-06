import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [] });

    //cand user-ul apasa butonul de cart tu sa mai faci inca o data un request aici sa se vada itemele corespunzator
    const fetchCart = async () => {
        try {
            const res = await fetch("http://localhost:8080/cart/view?userId=1")

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
                `http://localhost:8080/cart/add?userId=1&coffeeId=${coffeeId}&quantity=${qty}`,
                {
                    method: "POST",
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

    useEffect(() => {
        fetch("http://localhost:8080/cart/ping")
            .then(res => res.text())
            .then(txt => console.log("Ping response:", txt))
            .catch(err => console.error("Ping failed:", err));
    }, []);


    useEffect(() => {
        fetch("http://localhost:8080/cart/view?userId=1")
            .then(res => res.json())
            .then(data => console.log("Cart data:", data))
            .catch(err => console.error("Cart view failed:", err));
    }, []);




    return (
        <CartContext.Provider value={{ cart, addToCart, fetchCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
