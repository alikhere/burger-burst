import React from 'react'

function Contact() {
  return (
    <div id="contact" className='bg-secondaryColor py-16 '>
        <div className='container flex flex-col gap-5 md:items-center md:flex-row'>
            <div className='space-y-4 md:flex-1'>
                <h2 className='section__title text-black'>GET EXCLUSIVE UPDATE</h2>
                <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, similique cumque. Deleniti?</p>
            </div>

            <div className='flex flex-col gap-3 md:flex-row md:flex1'>
                <input type="email" placeholder='Email address' className='p-2 text-black rounded-lg outline-none md:w-full' />
                <a href=""className='flex item-center justify-center gap-2 btn bg-blackColor hover:opacity-75'>
                    <i class="fa-solid fa-paper-plane"></i>
                    Subscribe
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact