import React from 'react';
import './Hero.scss';

export default function Hero() {

    return (
        <div>

            <section className="hero-section hero-section--split" id="intro">
                <div className="wrapper">
                    <div className="text-block">
                        <h2>Best Coffee <span className="highlight">since 2025</span></h2>
                        <p style={{marginTop: '40px'}}>
                            Bringing you homemade tasty treats, banging burgers, proper pancakes & so much more!
                        </p>
                        <button
                            style={{maxWidth: '300px', marginTop: '40px'}}
                            className="btn btn--primary"
                        >
                            View our menu
                        </button>
                    </div>
                    <div
                        className="image-block"
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80)',
                        }}
                    />
                </div>
            </section>

            <section
                className="hero-section hero-section--full hero-section--orange"
                id="whatscooking"
            >
                <div className="wrapper">
                    <h2>What’s cookin’ good lookin’?</h2>
                </div>
            </section>

            <section className="hero-section hero-section--gallery" id="foodshot">
                <div className="wrapper">
                    <div
                        className="image-block"
                        style={{
                            backgroundImage:
                                'url(https://coffee-break.ro/wp-content/uploads/2016/05/coffee-bk1920x1080.jpg)',
                        }}
                    />
                    <div
                        className="image-block"
                        style={{
                            backgroundImage:
                                'url(https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2024/02/04180615/Montage-photo-article-PARIS-SECRET-OFFICIEL-1620-x-1080-px-1024x683.jpg)',
                        }}
                    />
                    <div
                        className="image-block"
                        style={{
                            backgroundImage:
                                'url(https://frenchmarketcoffee.com/wp-content/uploads/2022/03/WIDE_HD_1920X1080-FMC-Recipe_Vietnamese-Iced-Coffee-40-2.jpg)',
                        }}
                    />
                </div>
            </section>

            <section className="hero-section hero-section--full hero-section--pink" id="realpeople">
                <div className="wrapper hero-signup">
                    <div className="signup-form">
                        <input
                            style={{maxWidth: '400px'}}
                            type="email"
                            className="subscribe-form__input"
                            placeholder="Enter your email"
                        />
                        <button type="submit" className="btn btn--secondary subscribe-form__button">
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

            <section
                className="hero-section hero-section--split hero-section--reverse"
                id="delivery"
            >
                <div className="wrapper">
                    <div className="text-block">
                        <h2>
                            Funky fresh, straight to your <span className="highlight">FRONT DOOR!</span>
                        </h2>
                        <button style={{marginTop: '40px'}} className="btn btn--secondary">
                            Order online
                        </button>
                    </div>
                    <div
                        className="image-block"
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80)',
                        }}
                    />
                </div>
            </section>
        </div>
    );
}
