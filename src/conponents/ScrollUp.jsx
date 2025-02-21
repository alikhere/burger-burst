import React, { useState, useEffect } from "react";

const ScrollUp = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [headerClass, setHeaderClass] = useState("");

  useEffect(() => {
    // Scroll up button visibility
    const scrollUp = () => {
      if (window.scrollY >= 250) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    // Header background change
    const scrollHeader = () => {
      if (window.scrollY >= 50) {
        setHeaderClass("border-b-2 border-secondaryColor"); // Border applied here
      } else {
        setHeaderClass("");
      }
    };

    window.addEventListener("scroll", () => {
      scrollUp();
      scrollHeader();
    });

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", scrollUp);
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Header */}
      <header id="header" className={`transition-all ${headerClass}`}>
        <h1>Header</h1>
        {/* Add your header content here */}
      </header>

      {/* Scroll Up Button */}
      {showScrollUp && (
        <a
          href="#scroll-up"
          id="scroll-up"
          className="fixed right-4 bottom-4 bg-secondaryColor shadow-sm inline-block px-4 py-2 rounded-full text-lg text-blackColor z-50 hover:-translate-y-1 ease-in duration-200"
          onClick={scrollToTop}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      )}
    </div>
  );
};

export default ScrollUp;
