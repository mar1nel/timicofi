import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [] });

    //cand user-ul apasa butonul de cart tu sa mai faci inca o data un request aici sa se vada itemele corespunzator
    const fetchCart = async () => {
        try {
            const res = await fetch("http://localhost:8080/reports/view?userId=1")

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
        const res = await fetch(
            "http://localhost:8080/reports/items?userId=1",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({coffeeId, qty}),
            }
        );
    }

    // read the current userId from localStorage
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (userId) {
            fetchCart();
        } else {
            // if no userId, reset to empty
            setCart({ items: [] });
        }
    }, [userId]);

    const clearCart = () => {
           localStorage.removeItem("userId");
           setCart({ items: [] });
        };

    useEffect(() => {
        fetch("http://localhost:8080/reports/view?userId=1")
            .then(res => res.json())
            .then(data => console.log("Cart data:", data))
            .catch(err => console.error("Cart view failed:", err));
    }, []);

    return (
        <CartContext.Provider value={{ cart, addToCart, fetchCart, clearCart, currentUserId: userId}}>
            {children}
        </CartContext.Provider>
    );
};
