import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const navigate = useNavigate();

    const handleBuyClick = () => {
        const isLoggedIn = localStorage.getItem("loggedIn") === "true";
        if (isLoggedIn) {
            navigate("/shop-page");
        } else {
            navigate("/auth");
        }
    };
    return (
        <div className="header">
            <div className="container">
                <h2 style={{marginLeft: "20px"}}>
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

                <div className="btn_group" style={{marginRight: "20px"}}>
                    <motion.button
                        className="btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleBuyClick}
                    >
                        Account
                    </motion.button>
                </div>

                <div className="hamburger" style={{marginRight: "20px"}} onClick={handleClick}>
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
