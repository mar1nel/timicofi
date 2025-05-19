import React, {createContext, useContext, useEffect, useRef, useState} from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const userId = localStorage.getItem("userId");
    const [cart, setCart] = useState({id: null, items: []});
    const didFetch = useRef(false);

    useEffect(() => {
        if (didFetch.current) return;
        didFetch.current = true;

        console.log("[CartContext] fetching cart for:", userId);
        if (userId) {
            fetchCart();
        } else {
            setCart({id: null, items: []});
        }
    }, [userId]);

    const fetchCart = async () => {
        if (!userId) return setCart({id: null, items: []});
        try {
            const res = await fetch(
                `http://localhost:8080/reports/view?userId=${userId}`
            );
            const data = await res.json();
            console.log("[CartContext] fetched cart:", data);
            setCart(data);
        } catch (err) {
            console.error("[CartContext] Error fetching cart:", err);
        }
    };

    const addToCart = async (coffeeId, qty = 1) => {
        if (!userId) {
            alert("Please log in to add items to your cart.");
            return;
        }
        console.log("[CartContext] addToCart coffeeId=", coffeeId, "qty=", qty, "userId=", userId);
        try {
            const res = await fetch(
                `http://localhost:8080/reports/items?userId=${userId}`,
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({coffeeId, qty}),
                }
            );
            if (!res.ok) throw new Error(await res.text());
            const updated = await res.json();
            setCart(updated);
        } catch (err) {
            console.error("[CartContext] Failed to add to cart:", err);
        }
    };

    const clearCart = async () => {
        if (!userId) return;
        try {
            const res = await fetch(
                `http://localhost:8080/reports/clear?userId=${userId}`,
                {method: "POST"}
            );
            if (!res.ok) throw new Error(await res.text());
            const empty = await res.json();
            setCart(empty);
        } catch (e) {
            console.error("Failed to clear cart:", e);
        }
    };


    return (
        <CartContext.Provider value={{cart, addToCart, fetchCart, clearCart, currentUserId: userId}}>
            {children}
        </CartContext.Provider>
    );
};
