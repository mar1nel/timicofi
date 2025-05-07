// src/Pages/ShopPage.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import CoffeeCard from "../Components/CoffeeCard";

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [discounted, setDiscounted] = useState([]);

    // Fetch the catalog from the backend
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("http://localhost:8080/reports/coffees");
                if (!res.ok) throw new Error(await res.text());
                const data = await res.json(); // [{ id, name, description, price, ... }, …]
                setProducts(data);
            } catch (err) {
                console.error("Failed to load coffees:", err);
            }
        })();
    }, []);

    return (
        <>
            <Navbar />

            {/* Featured Blends */}
            <section className="py-16 px-4 bg-white">
                <h2 className="text-3xl font-bold text-left text-brown-800 mb-6">
                    Featured Blends
                </h2>
                <div className="flex flex-row gap-6 flex-wrap">
                    {products.map((c) => (
                        <CoffeeCard
                            key={c.id}
                            coffeeId={c.id}
                            name={c.name}
                            description={c.description}
                            price={c.price}
                            image={c.imageUrl /* or c.image if that’s your field */}
                        />
                    ))}
                </div>
            </section>

            {/* Discount Picks */}
            <section className="py-16 px-4 bg-yellow-50">
                <h2 className="text-3xl font-bold text-left text-brown-800 mb-6">
                    Discount Picks
                </h2>
                <div className="flex flex-row gap-6 flex-wrap">
                    {products.map((c) => (
                        <CoffeeCard
                            key={c.id}
                            coffeeId={c.id}
                            name={c.name}
                            description={c.description}
                            price={c.price}
                            image={c.imageUrl /* or c.image if that’s your field */}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default ShopPage;
