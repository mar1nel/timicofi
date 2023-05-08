import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Featured/>
        <Signup/>
        <Footer/>
    </>
  );
}

export default App;
