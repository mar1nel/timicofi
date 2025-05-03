import React, { useState } from "react";
import { Input, Button, Card } from "@nextui-org/react";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isLogin && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (isLogin) {
            // LOGIN LOGIC
            try {
                const response = await fetch("http://localhost:8080/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                });

                const message = await response.text();

                if (response.ok) {
                    alert(message); // Optional
                    localStorage.setItem("loggedIn", "true");
                    window.location.href = "/shop"; // Or use useNavigate
                } else {
                    alert(`Login failed: ${message}`);
                }
            } catch (err) {
                console.error("Login error:", err);
                alert("Server error. Try again later.");
            }

            return;
        }

        // SIGN UP LOGIC
        try {
            const response = await fetch("http://localhost:8080/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formData.email.split("@")[0],
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const message = await response.text();

            if (response.ok) {
                alert(message);
            } else {
                alert(`Error: ${message}`);
            }
        } catch (err) {
            console.error("Signup error:", err);
            alert("Server error. Try again later.");
        }
    };



    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-zinc-100 to-slate-200 px-4">
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
                        isRequired
                    />
                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        isRequired
                    />
                    {!isLogin && (
                        <Input
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            isRequired
                        />
                    )}
                    <Button type="submit" color="primary" className="mt-2">
                        {isLogin ? "Login" : "Sign Up"}
                    </Button>
                </form>
                <p className="text-sm text-center mt-4">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        type="button"
                        className="text-blue-600 underline"
                        onClick={toggleForm}
                    >
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </p>
            </Card>
        </div>
    );
}

