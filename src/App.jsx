import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import Home from "./Home";
import Card from "./components/Card";
import Promo from "./components/Promo";
import AboutUs from "./components/AboutUs";

function App() {
  const [activeSection, setActiveSection] = useState("");

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-primaryColor fixed top-0 left-0 w-full z-50 dark:bg-darkColor">
        <Navbar activeSection={activeSection} onSetActive={handleSetActive} />
      </header>

      {/* Main Section */}
      <main>
        <Home id="home" />
        <Card />
        <Promo />
        <AboutUs id="about" />
        <Menu id="menu" />
        <Review id="review" />
        <Contact id="contact" />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

      <ScrollUp />
    </>
  );
}

export default App;
