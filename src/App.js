import { Routes, Route } from "react-router-dom";
import Featured from "./Components/Featured";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Table from "./Pages/Table";
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Featured/>
            <Signup />
            <Footer />

        </>
    );
}

export default App;
