import React, { useState } from 'react'

function Menu() {
    const [activeMenu, setActiveMenu] = useState("")
    const handleMenuClick = (menu) => {
        if(activeMenu === menu)
            setActiveMenu("")
        else
            setActiveMenu(menu)
    }
  return (
    <div>
        <div className="container">
            <div className='max-w-md mx-auto text-center'>
              <h2 className='section__title'>OUR BEST MENU</h2>
              <div className="separator mx-auto"></div>
              <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa.
              </p>

              <div className='tabs_wrap'>
                <ul className='flex flex-wrap justify-center gap-3 py-10'>

                    {["All","Food", "Snacks","Beverages"].map((menu) => (

                        <li
                        className={` btn bg-primaryColorLight ${
                            activeMenu === menu ? "active" : ""
                        } `}
                        onClick={() => handleMenuClick(menu)}>
                        {menu}
                        </li>
                    ))}

                </ul>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Menu