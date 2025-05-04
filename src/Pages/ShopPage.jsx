import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import CoffeeCard from "../Components/CoffeeCard";

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [discounted, setDiscounted] = useState([]);

    useEffect(() => {
        setProducts([
            {
                id: 1,
                name: "Dark Roast Espresso",
                description: "Bold, chocolatey, with hints of caramel.",
                image: "https://laplacinte.md/public/product_images/53/1353/ebe5293ee9a3ea9510c9cf0a6efeddcb.webp",
            },
            {
                id: 2,
                name: "Vanilla Cold Brew",
                description: "Smooth vanilla cold brew with light sweetness.",
                image: "https://cdn.vox-cdn.com/thumbor/55qeE2HVO7IKfv8U0brNAMFv_mI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13664841/best_coffee_london.jpg",
            },
            {
                id: 3,
                name: "Hazelnut Latte",
                description: "Nutty, rich, and irresistibly creamy.",
                image: "https://t3.ftcdn.net/jpg/03/08/20/04/360_F_308200475_G0NDeL0Ep3KqpbntrAJEifYv2qvqxfK4.jpg",
            },
            {
                id: 4,
                name: "Hazelnut Latte",
                description: "Nutty, rich, and irresistibly creamy.",
                image: "https://sulaandspice.com/wp-content/uploads/2022/09/matcha-latte-7-square.jpg",
            },
        ]);

        setDiscounted([
            {
                id: 4,
                name: "Caramel Macchiato -20%",
                description: "Sweet caramel with creamy espresso.",
                image: "https://images.unsplash.com/photo-1605470661922-03fdc9b2ad55?auto=format&fit=crop&w=600&q=80",
            },
            {
                id: 5,
                name: "Iced Americano -15%",
                description: "Cool and bold with less acidity.",
                image: "https://images.unsplash.com/photo-1551892589-865f69869443?auto=format&fit=crop&w=800&q=80",
            },
            {
                id: 6,
                name: "Mocha Fusion -10%",
                description: "Espresso and chocolate, sweet harmony.",
                image: "https://images.unsplash.com/photo-1623131922357-25c3bfc117f9?auto=format&fit=crop&w=800&q=80",
            },
        ]);
    }, []);

    return (
        <>
            <Navbar />

            <section className="py-16 px-4 bg-white">
                <h2 className="text-3xl font-bold text-left text-brown-800 mb-6">
                    Featured Blends
                </h2>
                <div className="w-full overflow-hidden">
                    <div className="flex flex-row gap-6 flex-wrap">
                        {products.map((item) => (
                            <CoffeeCard
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
            </section>


            {/* Discount Picks */}
            <section className="py-16 px-4 bg-yellow-50">
                <h2 className="text-3xl font-bold text-left text-brown-800 mb-6">
                    Discount Picks
                </h2>
                <div className="w-full overflow-hidden">
                    <div className="flex flex-row flex-wrap gap-6">
                        {discounted.map((item) => (
                            <CoffeeCard
                                key={item.id}
                                coffeeId={item.id}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />

                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default ShopPage;
