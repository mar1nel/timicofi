import React, {useState} from "react";
import {Input, Button, Card} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";
import {useCart} from "../Context/CartContext";

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

    const handleChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Password match check on signup
        if (!isLogin && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (isLogin) {
            // LOGIN logic
            try {
                const response = await fetch("http://localhost:8080/auth/login", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                });

                // const data = await response.json();
                // const { userId, message } = data;

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
            // SIGN UP logic
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
        // clearCart();
        localStorage.removeItem("userId");
        localStorage.removeItem("loggedIn");
        navigate("/auth");
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-zinc-100 to-slate-200 px-4">
            <Card className="w-full max-w-md shadow-xl rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-center mb-6">
                    {isLogin ? "Login to Coffee Project" : "Create an Account"}
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {!isLogin && (
                        <Input
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <Button type="submit" color="primary" className="mt-2">
                        {isLogin ? "Login" : "Sign Up"}
                    </Button>
                </form>
                <p className="text-sm text-center mt-4">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button type="button" className="text-blue-600 underline" onClick={toggleForm}>
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </p>
            </Card>
            {localStorage.getItem("loggedIn") === "true" && (
                <Button color="danger" onClick={handleLogout} className="mt-4">
                    Logout
                </Button>
            )}
        </div>
    );
}
