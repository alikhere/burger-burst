import React from 'react'

function Card() {
  return (
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
            <div className='bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1 '>
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
            <div className='bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1 '>
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

  )
}

export default Card