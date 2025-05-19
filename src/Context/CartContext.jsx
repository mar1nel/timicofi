import React, {createContext, useContext, useEffect, useRef, useState} from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const userId = localStorage.getItem("userId");

    // your cart state
    const [cart, setCart] = useState({id: null, items: []});

    // stock: coffeeId → available units
    const [stock, setStock] = useState({});

    const didFetch = useRef(false);

    useEffect(() => {
        // only once on mount
        if (didFetch.current) return;
        didFetch.current = true;

        // fetch both cart and stock if logged in
        if (userId) {
            fetchCart();
            fetchStock();
        } else {
            setCart({id: null, items: []});
        }
    }, [userId]);

    // 1) Fetch cart as before
    const fetchCart = async () => {
        try {
            const res = await fetch(
                `http://localhost:8080/reports/view?userId=${userId}`
            );
            if (!res.ok) throw new Error(await res.text());
            const data = await res.json();
            setCart(data);
        } catch (err) {
            console.error("[CartContext] Error fetching cart:", err);
            setCart({id: null, items: []});
        }
    };

    // 2) New! Fetch your stock data from the server
    const fetchStock = async () => {
        try {
            const res = await fetch("http://localhost:8080/reports/stock");
            if (!res.ok) throw new Error(await res.text());
            // expects: [{ id: 1, name: "...", price: ..., stock: 20 }, ...]
            const data = await res.json();
            const map = {};
            data.forEach((coffee) => {
                map[coffee.id] = coffee.stock;
            });
            setStock(map);
        } catch (err) {
            console.error("[CartContext] Error fetching stock:", err);
        }
    };

    // 3) addToCart with a guard against exceeding stock
    const addToCart = async (coffeeId, qty = 1) => {
        if (!userId) {
            alert("Please log in to add items to your cart.");
            return;
        }
        const available = stock[coffeeId] ?? 0;
        const inCart = cart.items.find((i) => i.coffeeId === coffeeId)?.qty ?? 0;
        if (inCart + qty > available) {
            alert(`Only ${available - inCart} left in stock.`);
            return;
        }

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

    // 4) clearCart as before
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

    const decrementStock = (coffeeId, amount) => {
        setStock((current) => ({
            ...current,
            [coffeeId]: Math.max(0, (current[coffeeId] ?? 0) - amount),
        }));
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                stock,
                addToCart,
                clearCart,
                decrementStock,
                currentUserId: userId,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
