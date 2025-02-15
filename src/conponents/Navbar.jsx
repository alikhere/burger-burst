import React, { useState, useEffect } from "react";

function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("mode") === "dark"
  );

  // Apply theme when component mounts
  useEffect(() => {
    const html = document.querySelector("html");
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Toggle Dark Mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("mode", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <nav className="container relative h-14 flex justify-between items-center">
      <div>
        <a href="#" className="text-3xl uppercase font-oswald ">
          BURGER<span className="text-secondaryColor">BURST</span>
        </a>
      </div>

      {/* Navbar Menu */}
      <div
        className={`${
          isNavActive ? "flex flex-col items-center" : "hidden"
        } dark:bg-darkColor absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto  md:ml-auto `}
      >
        <ul className="flex flex-col text-center gap-5 md:flex-row">
          <li>
            <a
              href="#home"
              className="hover:text-secondaryColor ease-in duration-200"
              onClick={() => setIsNavActive(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-secondaryColor ease-in duration-200"
              onClick={() => setIsNavActive(false)}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="hover:text-secondaryColor ease-in duration-200"
              onClick={() => setIsNavActive(false)}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#review"
              className="hover:text-secondaryColor ease-in duration-200"
              onClick={() => setIsNavActive(false)}
            >
              Review
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-secondaryColor ease-in duration-200"
              onClick={() => setIsNavActive(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Close Button */}
        <div className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden">
          <i className="ri-close-line " onClick={() => setIsNavActive(false)}></i>
        </div>
      </div>

      {/* Menu & Dark Mode Icons */}
      <div className="flex items-center gap-5">
        {/* Dark Mode Toggle */}
        <i
          className={`theme-toggle ml-4 ${
            isDarkMode ? "ri-sun-line" : "ri-moon-line"
          } cursor-pointer text-xl`}
          onClick={toggleTheme}
        ></i>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <i
            className="ri-menu-2-line cursor-pointer text-xl"
            onClick={() => setIsNavActive(true)}
          ></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
