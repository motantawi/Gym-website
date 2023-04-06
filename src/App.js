import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Exercises from "./components/UI/Exercises";
import Hero from "./components/UI/Hero";
import Start from "./components/UI/Start";
import Pricing from "./components/UI/Pricing";
import Testimonials from "./components/UI/Testimonials";
import Footer from "./components/Footer/Footer";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
