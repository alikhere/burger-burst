import React from 'react'

function Promo() {
  return (
    <section>
    <div className='container flex flex-col gap-5 lg:gap-10 lg:flex-row  '>
      {/* card 1 */}
      <div className='bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1 dark:bg-darkColorLight'>
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
      <div className='bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1 dark:bg-darkColorLight'>
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
  )
}

export default Promo