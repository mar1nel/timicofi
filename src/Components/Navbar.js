import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="header">
            <div className="container">
                <h2>
                    vic<span className="primary">oin</span>
                </h2>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/featured-page">Featured</Link>
                    </li>
                    <li>
                        <Link to="/earn-page">Earn</Link>
                    </li>
                    <li>
                        <Link to="/crypto-table">Tables</Link>
                    </li>
                    <li>
                        <Link to="/contact-page">Contact</Link>
                    </li>
                </ul>

                <div className="btn_group">
                    <motion.button
                        className="btn"
                        whileHover={{
                            scale: 1.1,
                        }}
                        whileTap={{ scale: 0.95, duration: 0.5 }}
                    >
                        Connect Wallet NOW
                    </motion.button>
                </div>

                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={18} style={{ color: "#5d8efd" }} />
                    ) : (
                        <FaBars size={20} style={{ color: "#5d8efd" }} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
