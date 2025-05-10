import Featured from "./Components/Featured";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import './App.css';

function App() {
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
