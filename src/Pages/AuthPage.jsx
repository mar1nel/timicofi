import React, {useState} from "react";
import {Input, Button, Card, Modal, Text} from "@nextui-org/react";
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

    const [showVerifyModal, setShowVerifyModal] = useState(false);
    const [verifyCode, setVerifyCode] = useState("");
    const [verifyError, setVerifyError] = useState("");
    const [isVerifying, setIsVerifying] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({email: "", password: "", confirmPassword: ""});
        setVerifyError("");
    };

    const handleChange = (e) =>
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLogin && formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            if (isLogin) {
                // LOGIN
                const resp = await fetch("http://localhost:8080/auth/login", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                });
                const {userId, message} = await resp.json();
                if (resp.ok) {
                    localStorage.setItem("userId", String(userId));
                    localStorage.setItem("loggedIn", "true");
                    fetchCart();
                    alert(message);
                    navigate("/shop-page");
                } else {
                    alert(`Login failed: ${message}`);
                }
            } else {
                // SIGN UP
                const resp = await fetch("http://localhost:8080/auth/register", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        username: formData.email.split("@")[0],
                        email: formData.email,
                        password: formData.password,
                    }),
                });
                const text = await resp.text();
                if (resp.ok) {
                    // Open verification modal
                    setShowVerifyModal(true);
                } else {
                    alert(`Registration failed: ${text}`);
                }
            }
        } catch (err) {
            console.error(isLogin ? "Login error:" : "Signup error:", err);
            alert("Server error. Try again later.");
        }
    };

    const handleVerify = async () => {
        setIsVerifying(true);
        setVerifyError("");
        try {
            const resp = await fetch("http://localhost:8080/auth/verify-code", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email: formData.email, code: verifyCode}),
            });
            const text = await resp.text();
            if (resp.ok) {
                alert("✅ " + text);
                setShowVerifyModal(false);
                setIsLogin(true);
                setFormData({email: formData.email, password: "", confirmPassword: ""});
            } else {
                setVerifyError(text);
            }
        } catch (err) {
            console.error("Verify error:", err);
            setVerifyError("Server error. Please try again.");
        } finally {
            setIsVerifying(false);
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
                <h2 className="auth-title">{isLogin ? "Welcome Back" : "Join TimiCofi Family"}</h2>
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
                    <Button type="submit" className={`btn ${isLogin ? "btn--primary" : "btn--secondary"}`}>
                        {isLogin ? "Login" : "Sign Up"}
                    </Button>
                </form>
                <div className="toggle-line">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button onClick={toggleForm}>{isLogin ? "Sign Up" : "Login"}</button>
                </div>
            </Card>
            {localStorage.getItem("loggedIn") === "true" && (
                <Button onClick={handleLogout} className="logout-btn">Logout</Button>
            )}

            <Modal
                className="verify-modal"
                closeButton
                open={(showVerifyModal)}
                onClose={() => setShowVerifyModal(false)}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18} b>
                        Verify Your Email
                    </Text>
                </Modal.Header>

                <Modal.Body>
                    <Text>
                        We’ve sent a code to <b>{formData.email}</b>. Please enter it below:
                    </Text>
                    <Input
                        clearable
                        underlined
                        placeholder="6-digit code"
                        fullWidth
                        value={verifyCode}
                        onChange={e => setVerifyCode(e.target.value)}
                        required
                    />
                    {verifyError && (
                        <Text color="error" small css={{mt: "$5"}}>
                            {verifyError}
                        </Text>
                    )}
                </Modal.Body>

                <Modal.Footer>
                    <Button flat auto onPress={() => setShowVerifyModal(false)}>
                        Cancel
                    </Button>
                    <Button
                        auto
                        onPress={handleVerify}
                        disabled={isVerifying || verifyCode.length === 0}
                    >
                        {isVerifying ? "Verifying..." : "Verify"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
