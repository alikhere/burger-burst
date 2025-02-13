import React, { useState } from 'react';
import './App.css'

function App() {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <>
      {/* Header */}
      <header className='bg-primaryColor fixed top-0 left-0 w-full z-50'>
        <nav className='container relative h-14 flex justify-between items-center'>
          <div>
            <a href="#" className='text-2xl uppercase font-oswald'>
              BUR<span className='text-secondaryColor'>Ger</span>
            </a>
          </div>

          {/* Navbar Menu */}
          <div className={`${isNavActive ? "flex flex-col items-center" : "hidden"} absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto  md:ml-auto ` }>
            <ul className='flex flex-col text-center gap-5 md:flex-row'>
              <li>
                <a href="#home" className='hover:text-secondaryColor ease-in duration-200' onClick={() => setIsNavActive(false)}>Home</a>
              </li>
              <li>
                <a href="#about" className='hover:text-secondaryColor ease-in duration-200' onClick={() => setIsNavActive(false)}>About Us</a>
              </li>
              <li>
                <a href="#menu" className='hover:text-secondaryColor ease-in duration-200' onClick={() => setIsNavActive(false)}>Menu</a>
              </li>
              <li>
                <a href="#review" className='hover:text-secondaryColor ease-in duration-200' onClick={() => setIsNavActive(false)}>Review</a>
              </li>
              <li>
                <a href="#contact" className='hover:text-secondaryColor ease-in duration-200' onClick={() => setIsNavActive(false)}>Contact</a>
              </li>
            </ul>


            {/* Close Button */}
            <div className='absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden'>
              <i className="ri-close-line " onClick={() => setIsNavActive(false)}></i>
            </div>
          </div>

          {/* Menu Icon */}
          <div className='flex items-center gap-5'>
            <i className="ri-moon-line cursor-pointer ml-4 text-xl"></i>

            <div className='md:hidden'>
              <i className="ri-menu-2-line cursor-pointer text-xl" onClick={() => setIsNavActive(true)}></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;
