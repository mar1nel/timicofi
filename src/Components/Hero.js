import React from 'react';
import './Hero.scss';
import {useNavigate} from "react-router-dom";

const decorativeImages = [
    {
        src: 'https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/652240ae327f8-Cup%20of%20coffee%20isolated.png',
        alt: 'Coffee cup',
        width: 240,
        top: 320,
        left: 180,
        transform: 'rotate(-10deg)',
    },
    {src: 'https://pngimg.com/d/pancake_PNG120.png', alt: 'Pancake', width: 320, top: 500, left: 1700},
    {src: 'https://svgsilh.com/svg/1873960.svg', alt: 'Tea icon', width: 400, top: 1400, left: 1650},
    {
        src: 'https://static.vecteezy.com/system/resources/previews/045/091/641/non_2x/the-elegance-of-tea-plant-leaves-free-png.png',
        alt: 'Tea leaves',
        width: 500,
        top: 1150,
        left: -120,
        mirrored: true
    }
];

export default function Hero() {
    const navigate = useNavigate();

    return (
        <div className="hero-container">
            <section className="hero-section hero-section--split" id="intro">
                <div className="wrapper">
                    <div className="text-block">
                        <h2>
                            Best Coffee <span className="highlight">since 2025</span>
                        </h2>
                        <p className="mt-40">
                            Bringing you homemade tasty treats, banging burgers, proper pancakes & so much more!
                        </p>
                        <button onClick={() => navigate("/shop-page")} className="btn btn--primary mt-40"
                                style={{maxWidth: '300px'}}>
                            View our menu
                        </button>
                    </div>
                    <div
                        className="image-block"
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80)'
                        }}
                    />
                </div>
            </section>
            {decorativeImages.map((img, idx) => (
                <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    className={`decorative-img ${img.mirrored ? 'mirrored' : ''}`}
                    style={{
                        top: img.top,
                        left: img.left,
                        width: img.width,
                        transform: img.transform,
                    }}
                />
            ))}

            <section className="hero-section hero-section--full hero-section--orange" id="whatscooking">
                <div className="wrapper">
                    <h2>What’s cookin’ good lookin’?</h2>
                </div>
            </section>

            <section className="hero-section hero-section--gallery" id="foodshot">
                <div className="wrapper">
                    {[
                        'https://coffee-break.ro/wp-content/uploads/2016/05/coffee-bk1920x1080.jpg',
                        'https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2024/02/04180615/Montage-photo-article-PARIS-SECRET-OFFICIEL-1620-x-1080-px-1024x683.jpg',
                        'https://frenchmarketcoffee.com/wp-content/uploads/2022/03/WIDE_HD_1920X1080-FMC-Recipe_Vietnamese-Iced-Coffee-40-2.jpg'
                    ].map((url, i) => (
                        <div
                            key={i}
                            className="image-block"
                            style={{backgroundImage: `url(${url})`}}
                        />
                    ))}
                </div>
            </section>

            <section className="hero-section hero-section--full hero-section--pink" id="realpeople">
                <div className="wrapper hero-signup">
                    <div className="signup-form">
                        <input
                            className="subscribe-form__input"
                            style={{maxWidth: '400px'}}
                            type="email"
                            placeholder="Enter your email"
                        />
                        <button className="btn btn--secondary subscribe-form__button">
                            Join our newsletter
                        </button>
                    </div>
                    <div className="signup-copy">
                        <h2>
                            REAL PEOPLE <span>with real history</span>
                        </h2>
                        <p>We’ve been through thick & thin to bring the best coffee to Timisoara.</p>
                    </div>
                </div>
            </section>

            <section className="hero-section hero-section--split hero-section--reverse" id="delivery">
                <div className="wrapper">
                    <div className="text-block">
                        <h2>
                            Funky fresh, straight to your <span className="highlight">FRONT DOOR!</span>
                        </h2>
                        <button onClick={() => navigate("/shop-page")} className="btn btn--secondary mt-40">Order
                            online
                        </button>
                    </div>
                    <div
                        className="image-block"
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80)'
                        }}
                    />
                </div>
            </section>
        </div>
    );
}
