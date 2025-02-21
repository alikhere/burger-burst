import React from 'react'

function AboutUs() {
  return (
    <section id="about">
          <div className='container flex flex-col gap-10 md:flex-row '>
            <div className='flex-1'>
              <img src="img/about.jpg" alt="about image" className='rounded-lg'/>
            </div>

            <div className='flex-1 y' >

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

              <a href="" className='btn btn-primary mx-auto'>About Us</a>
            </div>
          </div>
    </section>
  )
}

export default AboutUs