import React, {useRef, useState, useLayoutEffect} from 'react';
import PhotoCard from './Components/PhotoCard';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import './App.css';

const cardsData = [
    {
        src: 'https://as2.ftcdn.net/jpg/05/80/27/67/1000_F_580276706_k9VxSfGG10gIy8G3uaEy2FG2pOFba62G.jpg',
        alt: 'Coffee cup',
        caption: 'Family and me. Autumn 2025'
    }, {
        src: 'https://photos.peopleimages.com/picture/202302/2612420-indian-man-portrait-and-coffee-shop-owner-at-small-business-ready-for-work-with-a-smile.-happy-cafe-and-restaurant-barista-feeling-proud-of-waiter-service-and-boss-management-at-professional-job-fit_400_400.jpg',
        alt: 'Nicholas',
        caption: 'Best Worker this month!!'
    },
    {
        src: 'https://images.squarespace-cdn.com/content/v1/56b0c873f699bb770fa8ef96/1571372180462-DCR42AIKV5AGY6JYVHL5/laughing-man.jpg',
        alt: 'Friends',
        caption: 'Sunny brunch in Timisoara :))'
    }
];

function App() {
    const pageRef = useRef(null);
    const [initials, setInitials] = useState(null);

    useLayoutEffect(() => {
        if (!pageRef.current) return;

        const scrollY = window.scrollY;
        const SPAWN_WIDTH = 1500;
        const SPAWN_HEIGHT = 300;
        const CARD_W = 250;
        const CARD_H = 300;
        const MIN_DIST = 120;

        const positions = [];

        const isTooClose = (x, y) => {
            return positions.some(({x: px, y: py}) => {
                const dx = px - x;
                const dy = py - y;
                return Math.hypot(dx, dy) < MIN_DIST;
            });
        };

        cardsData.forEach(() => {
            let x, y;
            let attempts = 0;
            do {
                x = Math.random() * (SPAWN_WIDTH - CARD_W);
                y = scrollY + Math.random() * (SPAWN_HEIGHT - CARD_H);
                attempts++;
                // safety break after 100 tries
                if (attempts > 100) break;
            } while (isTooClose(x, y));
            positions.push({x, y});
        });

        setInitials(positions);
    }, []);


    // until we have positions, render content only
    if (!initials) {
        return (
            <div ref={pageRef} style={{position: 'relative'}}>
                <Navbar/>
                <Hero/>
                <Footer/>
            </div>
        );
    }

    return (
        <div ref={pageRef} style={{position: 'relative'}}>
            {cardsData.map((c, i) => (
                <PhotoCard
                    key={i}
                    src={c.src}
                    alt={c.alt}
                    caption={c.caption}
                    constraintsRef={pageRef}
                    initial={initials[i]}
                />
            ))}

            <Navbar/>
            <Hero/>
            <Footer/>
        </div>
    );
}

export default App;
