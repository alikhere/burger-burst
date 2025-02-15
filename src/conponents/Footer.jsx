import React, { Component } from 'react'

function Footer() {
    return (
      <div>
        <div className="container">
            <ul className="grid grid-cols-1 items-start gap-5 mt-10 pb-5 md:grid-cols-2 lg:grid-cols-4">
                <li>
                    <div className="space-y-3">
                        <a href="" className="text-4xl font-oswald uppercase">
                            Burger <span className='text-secondaryColor'>Burst</span>
                        </a>

                        <p className="text-xs">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, temporibus odio. Nobis nesciunt illo asperiores maiores nemo enim mollitia distinctio?
                        </p>
                    </div>
                </li>
                
                <li>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg uppercase font-oswald">SUPPORT</h3>

                        <a href="" className="text-xs hover:text-secondaryColor">FAQ's</a>
                        <a href="" className="text-xs hover:text-secondaryColor">Policy</a>
                        <a href="" className="text-xs hover:text-secondaryColor">Terms & Conditions</a>
                        <a href="" className="text-xs hover:text-secondaryColor">Contact</a>
                    </div>
                </li>

                <li className='space-y-8'>
                    <div className="space-y-2">
                        <h3 className="text-lg uppercase font-osward">Phone</h3>

                        <p className="flex items-center gap-2 text-xs">
                            <i class="fa-solid fa-phone text-lg text-secondaryColor"></i>
                            +91 111 000 0000
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg uppercase font-osward">Email</h3>

                        <p className="flex items-center gap-2 text-xs">
                            <i class="fa-solid fa-envelope text-lg text-secondaryColor"></i>
                            burger.info@email.com
                        </p>
                    </div>
                </li>

                <li className='space-y-8'>
                    <div className="space-y-2">
                        <h3 className="text-lg uppercase font-osward">address</h3>

                        <p className="flex items-center gap-2 text-xs">
                        <i class="fa-solid fa-location-dot text-lg text-secondaryColor"></i>
                            23/2 Coffee Day Square, Vittal Mallya Rd, near Cubbon Park, Bengaluru, Karnataka 560001
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-lg uppercase font-osward">Follow us</h3>

                        <div className="space-x-3">
                            <i class="fa-brands fa-facebook-f text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                            <i class="fa-brands fa-twitter text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                            <i class="fa-brands fa-square-instagram text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in duration-200"></i>
                        </div>

                    </div>
                </li>
            </ul>

            <div className="flex flex-col items-center border-t border-primaryColorLight dark:border-darkColorLight py-5 md:flex-row md:justify-between ">
                <p className=" text-sm ">
                    Burger Template Kit by Light Code
                </p>
                <p className="text-sm">
                    Copyright © 2024. All right reserved.
                </p>
            </div>
        </div>
      </div>
    )
}

export default Footer