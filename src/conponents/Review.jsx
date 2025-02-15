import { useEffect } from "react";

export default function Review() {
  useEffect(() => {
    // Dynamically load the Swiper JS script
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
    script.async = true;
    script.onload = () => {
      // Initialize Swiper once script is loaded
      new Swiper(".swiper", {
        speed: 400,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        grabCursor: true,
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-primaryColorLight dark:bg-darkColorLight">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h2 className="section__title"> CUSTOMER REVIEW</h2>
          <div className="separator mx-auto"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>

        {/* Swiper Wrapper */}
        <div className="swiper py-10">
          <ul className="swiper-wrapper">

            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6 dark:bg-darkColor">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia velit dignissimos, illum ab ipsum eaque minima.
                </p>
                <div className="flex items-center">
                  <img src="img/review-1.jpg" alt="" className="w-12 h-12 rounded-full" />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>

            <li className="swiper-slide">
                <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6 dark:bg-darkColor">
                    <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia velit dignissimos, illum ab ipsum eaque minima.
                    </p>
                    <div className="flex items-center">
                    <img src="img/review-2.jpg" alt="" className="w-12 h-12 rounded-full" />
                    <div className="ml-2">
                        <p className="font-oswald uppercase">Sara Dar</p>
                        <p className="paragraph">Designer</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                    </div>
                </div>
            </li>

                <li className="swiper-slide">
                    <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6 dark:bg-darkColor">
                        <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia velit dignissimos, illum ab ipsum eaque minima.
                        </p>
                        <div className="flex items-center">
                        <img src="img/review-3.jpg" alt="" className="w-12 h-12 rounded-full" />
                        <div className="ml-2">
                            <p className="font-oswald uppercase">Andy Maggy</p>
                            <p className="paragraph">Frontend Dev.</p>
                        </div>
                        <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                        </div>
                    </div>
                </li>

                <li className="swiper-slide">
                    <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6 dark:bg-darkColor">
                        <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia velit dignissimos, illum ab ipsum eaque minima.
                        </p>
                        <div className="flex items-center">
                        <img src="img/review-4.jpg" alt="" className="w-12 h-12 rounded-full" />
                        <div className="ml-2">
                            <p className="font-oswald uppercase">Anna D.</p>
                            <p className="paragraph">Designer</p>
                        </div>
                        <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                        </div>
                    </div>
                </li>

                <li className="swiper-slide">
                    <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6 dark:bg-darkColor">
                        <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia velit dignissimos, illum ab ipsum eaque minima.
                        </p>
                        <div className="flex items-center">
                        <img src="img/review-5.jpg" alt="" className="w-12 h-12 rounded-full" />
                        <div className="ml-2">
                            <p className="font-oswald uppercase">Christan Mate</p>
                            <p className="paragraph">Designer</p>
                        </div>
                        <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                        </div>
                    </div>
                </li>


            
            {/* Repeat list items for other reviews */}
          </ul>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
