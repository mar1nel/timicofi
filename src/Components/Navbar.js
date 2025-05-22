import React, {useState, useEffect} from "react";
import {FaBars, FaTimes, FaShoppingCart} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {useCart} from "../Context/CartContext";
import {motion} from "framer-motion";
import "./Navbar.scss";

export default function Navbar() {
    const {cart} = useCart();
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const [badgeClass, setBadgeClass] = useState("");
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    const totalItems = cart?.items?.reduce((sum, i) => sum + i.qty, 0) || 0;
    useEffect(() => {
        if (totalItems > 0) {
            setBadgeClass("pop");
            const timer = setTimeout(() => setBadgeClass(""), 400);
            return () => clearTimeout(timer);
        }
    }, [totalItems]);

    const handleAccount = () => {
        const isLoggedIn = localStorage.getItem("loggedIn") === "true";
        navigate(isLoggedIn ? "/shop-page" : "/auth");
    };

    return (
        <div className="header">
            <div className="container">
                <h2 className="logo">
                    L'Oli<span className="primary">vibes</span>
                </h2>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="/">Home</Link></li>
                    {/*<li><Link to="/table">Tables</Link></li>*/}
                    <li><Link to="/shop-page">Our Products</Link></li>
                    <li><Link to="/contact-page">Contact</Link></li>
                </ul>

                <div className="btn_group">
                    <motion.button
                        className="btn btn--account"
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        onClick={handleAccount}
                    >
                        {/*Account*/}
                        Buy Coffee
                    </motion.button>
                </div>

                <div className="icon-group">
                    <div className="cart-icon" onClick={() => navigate("/checkout")}>
                        <FaShoppingCart size={24}/>
                        {totalItems > 0 && (
                            <span className={`cart-badge ${badgeClass}`}>{totalItems}</span>
                        )}
                    </div>
                    {isLoggedIn ? (
                        <Link
                            to="/"
                            className="exit-btn"
                            onClick={() => {
                                localStorage.clear();
                                navigate("/");
                            }}
                        >
                            EXIT
                        </Link>
                    ) : (
                        <Link
                            to="/auth"
                            className="exit-btn"
                        >
                            LOGIN
                        </Link>
                    )}
                    <div className="hamburger" onClick={() => setClick(!click)}>
                        {click ? <FaTimes size={18}/> : <FaBars size={20}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}