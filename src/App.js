import Featured from "./Components/Featured";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import {useEffect} from "react";
import './App.css';

function App() {

    useEffect(() => {
        // Test the view cart endpoint
        fetch("http://localhost:8080/reports/view?userId=1")
            .then(res => {
                if (!res.ok) throw new Error(res.status + " " + res.statusText);
                return res.json();
            })
            .then(data => console.log("🛒 Cart data:", data))
            .catch(err => console.error("❌ Cart view failed:", err));
    }, []);


    return (
        <>

            <Navbar />
            <Hero/>
            <Featured/>
            <Signup />
            {/*<AuthPage />*/}
            <Footer />

        </>
    );
}

export default App;
