import React, {useState} from "react";
import {Input, Button, Card} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import {useCart} from "../Context/CartContext";
import "./AuthPage.scss";

export default function AuthPage() {
    const navigate = useNavigate();
    const {clearCart, fetchCart} = useCart();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({email: "", password: "", confirmPassword: ""});
    };

    const handleChange = (e) =>
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));

    const handleSubmit = async (e) => {
        e.preventDefault();

        // SIGNUP password match
        if (!isLogin && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (isLogin) {
            // LOGIN
            try {
                const response = await fetch("http://localhost:8080/auth/login", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                });

                const {userId, message} = await response.json();
                if (response.ok) {
                    localStorage.setItem("userId", String(userId));
                    localStorage.setItem("loggedIn", "true");
                    fetchCart();
                    alert(message);
                    navigate("/shop-page");
                } else {
                    alert(`Login failed: ${message}`);
                }
            } catch (err) {
                console.error("Login error:", err);
                alert("Server error. Try again later.");
            }
        } else {
            // SIGN UP
            try {
                const response = await fetch("http://localhost:8080/auth/register", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        username: formData.email.split("@")[0],
                        email: formData.email,
                        password: formData.password,
                    }),
                });

                const message = await response.text();
                if (response.ok) {
                    alert(message);
                    setIsLogin(true);
                } else {
                    alert(`Registration failed: ${message}`);
                }
            } catch (err) {
                console.error("Signup error:", err);
                alert("Server error. Try again later.");
            }
        }
    };

    const handleLogout = () => {
        clearCart();
        localStorage.removeItem("userId");
        localStorage.removeItem("loggedIn");
        navigate("/auth");
    };

    return (
        <div className="auth-hero">
            <Card className="auth-card">
                <h2 className="auth-title">
                    {isLogin ? "Welcome Back" : "Join TimiCofi Family"}
                </h2>

                <form onSubmit={handleSubmit} className="auth-form">
                    <Input
                        clearable
                        underlined
                        labelPlaceholder="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        clearable
                        underlined
                        labelPlaceholder="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {!isLogin && (
                        <Input
                            clearable
                            underlined
                            labelPlaceholder="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    )}

                    <Button
                        type="submit"
                        className={`btn ${isLogin ? "btn--primary" : "btn--secondary"}`}
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </Button>
                </form>

                <div className="toggle-line">
                    {isLogin
                        ? "Don't have an account? "
                        : "Already have an account? "}
                    <button onClick={toggleForm}>
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </div>
            </Card>

            {localStorage.getItem("loggedIn") === "true" && (
                <Button onClick={handleLogout} className="logout-btn">
                    Logout
                </Button>
            )}
        </div>
    );
}
