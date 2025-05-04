import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../Context/CartContext";
import "./Navbar.scss";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const navigate = useNavigate();
    const { cart } = useCart();

    const handleBuyClick = () => {
        const isLoggedIn = localStorage.getItem("loggedIn") === "true";
        navigate(isLoggedIn ? "/shop-page" : "/auth");
    };

    const totalItems = cart?.items?.reduce((sum, i) => sum + i.quantity, 0) || 0;

    return (
        <div className="header">
            <div className="container">
                <h2 style={{ marginLeft: "20px" }}>
                    Timi<span className="primary">cofi</span>
                </h2>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/featured-page">Featured</Link>
                    </li>
                    <li>
                        <Link to="/shop-page">Our Coffee</Link>
                    </li>
                    <li>
                        <Link to="/table">Tables</Link>
                    </li>
                    <li>
                        <Link to="/contact-page">Contact</Link>
                    </li>
                </ul>

                <div className="btn_group" style={{ marginRight: "20px", display: "flex", alignItems: "center", gap: "1rem" }}>
                    <motion.button
                        className="btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleBuyClick}
                    >
                        Account
                    </motion.button>

                    <div className="cart-icon" onClick={() => navigate("/cart")}
                         style={{ position: "relative", cursor: "pointer" }}>
                        <FaShoppingCart size={22} color="#6F4E37" />
                        {totalItems > 0 && <span>{totalItems}</span>}

                        {totalItems > 0 && (
                            <span style={{
                                position: "absolute",
                                top: "-8px",
                                right: "-10px",
                                background: "#f87171",
                                color: "white",
                                fontSize: "12px",
                                padding: "2px 6px",
                                borderRadius: "999px",
                                animation: "pulse 0.6s ease-out"
                            }}>
                {totalItems}
              </span>
                        )}
                    </div>
                </div>

                <div className="hamburger" style={{ marginRight: "20px" }} onClick={handleClick}>
                    {click ? (
                        <FaTimes size={18} style={{ color: "#6F4E37" }} />
                    ) : (
                        <FaBars size={20} style={{ color: "#6F4E37" }} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;