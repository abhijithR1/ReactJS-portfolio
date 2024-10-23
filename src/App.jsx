
import { useRef } from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/navbar";
import Contact from "./Components/contact/Contact";
import Cursor from "./Components/cursor/Cursor";
import Parallax from "./Components/parallax/Parallax";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";
import "./app.scss"
 
const App = () => {
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>   
      <Hero contactRef={contactRef} portfolioRef={portfolioRef}/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio" ref={portfolioRef}><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact" ref={contactRef}><Contact/></section>
  </div>; 
}

export default App;
