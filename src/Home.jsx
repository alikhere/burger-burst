import React from 'react'

function Home() {
  return (
    <div>
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
    </div>
  )
}

export default Home