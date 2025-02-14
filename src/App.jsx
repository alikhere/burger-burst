import React, { useState } from 'react';
import Navbar from './conponents/Navbar';
import Menu from './conponents/Menu';


function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <> {/* Header  */}
      <header className='bg-primaryColor fixed top-0 left-0 w-full z-50'>
        <Navbar/>
      </header>

      {/* main seciton */}
      <main>
      {/* home seciton */}
        <section>
          <div className='container flex flex-col items-center gap-10 md:flex-row '>
            <div className='mx-auto md:basis-1/2 lg:basis-2/5'>
              <img src="img/home-image.png" alt="" className='w-60 md:w-full animate-movingY' />
            </div>

            <div className='text-center md:basis-1/2 md:text-start lg:basis-3/5 '>
              <h1 className='home_title'>HAPPY TUMMY WITH TASTY BURGERS.</h1>

              <div className='separator mx-auto md:mx-0'></div>

              <p className='paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ducimus laboriosam excepturi temporibus harum iste commodi praesentium, itaque ratione illum blanditiis deserunt, facere explicabo dignissimos possimus quae natus delectus ab!
              </p>

              <div className='text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20 '>
                <div className='text-center'>
                  <i className="fa-solid fa-utensils text-secondaryColor text-4xl"></i>
                  <br/>
                  Delicious
                </div>
                
                <div className='text-center'>
                <i className="fa-solid fa-droplet fa-solid fa-utensils text-secondaryColor text-4xl"></i>
                  <br/>
                  Fresh
                </div>

                <div className='text-center'>
                <i className="fa-brands fa-envira fa-solid fa-utensils text-secondaryColor text-4xl"></i>
                  <br/>
                  Organic
                </div>
              </div>

            <a href="# "className='btn btn-primary'>Learn More</a>
            </div>
          </div>
        </section>

        {/* category seciton */}
        <section >
          <div className='container flex flex-col gap-5 md:flex-row md:justify-evenly lg:gap-20'>
            {/* card 1 */}
            <div className='bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1'>
              <div className='basis-1/3 relative'><img src="img/burger-1.png" alt="category imge" className='absolute w-28 -bottom-4 -left-4' /></div>

              <div>
                <div className='mb-2'>
                  <h4 className='card_title'>Burger</h4>
                  <p className='text-xs'>Lorem ipsum dolor sit amet.</p>
                </div>
                <a href="#" className='text-black cursor-pointer'>Buy online</a>
              </div>
            </div>
            {/* card 2 */}
            <div className='bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1'>
              <div className='basis-1/3 relative'><img src="img/snack-1.png" alt="category imge" className='absolute w-28 -bottom-4 -left-4' /></div>

              <div>
                <div className='mb-2'>
                  <h4 className='card_title'>Snacks</h4>
                  <p className='text-xs'>Lorem ipsum dolor sit amet.</p>
                </div>
                <a href="#" className='text-secondaryColor cursor-pointer'>Buy online</a>
              </div>
            </div>
            {/* card 3 */}
            <div className='bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1'>
              <div className='basis-1/3 relative'><img src="img/beverage-2.png" alt="category imge" className='absolute w-28 -bottom-4 -left-4' /></div>

              <div>
                <div className='mb-2'>
                  <h4 className='card_title'>Beverages</h4>
                  <p className='text-xs'>Lorem ipsum dolor sit amet.</p>
                </div>
                <a href="#" className='text-secondaryColor cursor-pointer'>Buy online</a>
              </div>
            </div>
          </div>
        </section>

        {/* promo seciton */}
        <section>
          <div className='container flex flex-col gap-5 lg:gap-10 lg:flex-row '>
            {/* card 1 */}
            <div className='bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1'>
              <img src="img/promo-1.png" alt="promo image" className='w-40 mx-auto hover:animate-movingY md:mx-5 '/>

              <div className='space-y-2 pt-5 md:pt-0 '>
                <p className='text-xs text-secondaryColor'> Payday promo</p>
                <h3 className='card_title'>GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Buy online
                </p>
                <a href="#" className='text-xs  text-secondaryColor'>Buy online</a>
              </div>
            </div>
            {/* card 2 */}
            <div className='bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1'>
              <img src="img/promo-2.png" alt="promo image" className='w-40 mx-auto hover:animate-movingY md:mx-5  '/>

              <div className='space-y-2 pt-5 md:pt-0 '>
                <p className='text-xs text-secondaryColor'> Payday promo</p>
                <h3 className='card_title'>GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Buy online
                </p>
                <a href="#" className='text-xs  text-secondaryColor'>Buy online</a>
              </div>
            </div>
          </div>
        </section>

        {/* about section */}
        <section>
          <div className='container flex flex-col gap-10 md:flex-row '>
            <div className='flex-1'>
              <img src="img/about.jpg" alt="about image" className='rounded-lg'/>
            </div>

            <div className='flex-1' >
              <h2 className='section__title'>FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE.</h2>
              <div className="separator"></div>
              <p className='paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio perferendis eos quos error modi sapiente deserunt ut. Expedita quasi itaque neque cum, nisi dolorum.</p>

              <ul className='grid grid-cols-2 py-5 space-y-1'> 
                <li className='text-xs text-paragraphColor'>
                  <i className="fa-solid fa-check text-secondaryColor"></i> 
                  Best Price
                </li>
                <li className='text-xs text-paragraphColor'>
                  <i className="fa-solid fa-check text-secondaryColor"></i> 
                  Fresh Ingredient
                </li>
                <li className='text-xs text-paragraphColor'>
                  <i className="fa-solid fa-check text-secondaryColor"></i> 
                  Best Service
                </li>
                <li className='text-xs text-paragraphColor'>
                  <i className="fa-solid fa-check text-secondaryColor"></i> 
                  Health Protocol
                </li>
              </ul>
              <a href="" className='btn btn-primary'>About Us</a>
            </div>
          </div>
        </section>

        {/* menu section */}
        <section>
          <Menu/>
        </section>

      </main>
    </>
  );
}

export default App;
