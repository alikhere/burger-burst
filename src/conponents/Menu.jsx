import React, { useState } from 'react';

function Menu() {
    const [activeMenu, setActiveMenu] = useState("All");

    const handleMenuClick = (menu) => {
        if (activeMenu === menu) {
            setActiveMenu("All"); // Reset to "All" if the same menu is clicked
        } else {
            setActiveMenu(menu);
        }
    };

    // Menu items categorized
    const foodItems = [
        {
            imgSrc: "img/burger-1.png",
            title: "REGULAR TOMATO BURGER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$8"
        },
        {
            imgSrc: "img/burger-2.png",
            title: "REGULAR CHEESE BURGER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$10"
        },
        {
            imgSrc: "img/burger-3.png",
            title: "REGULAR LETTUCE BURGER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$9"
        },
        {
            imgSrc: "img/burger-4.png",
            title: "REGULAR CHICKEN BURGER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$14"
        },
        {
            imgSrc: "img/burger-6.png",
            title: "REGULAR BBQ BCON BURGER",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$5"
        }
    ];

    const snackItems = [
        {
            imgSrc: "img/snack-1.png",
            title: "CURLY FRIES",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$6"
        },
        {
            imgSrc: "img/snack-2.png",
            title: "FRENCH FRIES",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$5.5"
        },
        {
            imgSrc: "img/snack-4.png",
            title: "POTATO CHIPS",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$5"
        },
        {
            imgSrc: "img/snack-5.png",
            title: "WAFFLE FRIES",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$7.5"
        },
        {
            imgSrc: "img/snack-6.png",
            title: "POPCORN",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$4"
        }
    ];

    const beverageItems = [
        {
            imgSrc: "img/beverage-1.png",
            title: "SWEET SMOOTHIE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$4"
        },
        {
            imgSrc: "img/beverage-2.png",
            title: "MIXED JUICE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$5.5"
        },
        {
            imgSrc: "img/beverage-3.png",
            title: "LEMONADE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$4"
        },
        {
            imgSrc: "img/beverage-4.png",
            title: "MANGO JUICE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$4"
        },
        {
            imgSrc: "img/beverage-5.png",
            title: "APPLE SMOOTHIE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$6"
        }
    ];

    // Determine which items to display based on active menu
    let displayedItems = [];
    if (activeMenu === "Food") {
        displayedItems = foodItems;
    } else if (activeMenu === "Snacks") {
        displayedItems = snackItems;
    } else if (activeMenu === "Beverages") {
        displayedItems = beverageItems;
    } else if (activeMenu === "All") {
        displayedItems = [...foodItems, ...snackItems, ...beverageItems];
    }

    return (
        <div>
            <div className="container">
                <div className='max-w-md mx-auto text-center'>
                    <h2 className='section__title'>OUR BEST MENU</h2>
                    <div className="separator mx-auto"></div>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>

                    <div className='tabs_wrap'>
                        <ul className='flex flex-wrap justify-center gap-3 py-10'>
                            {["All", "Food", "Snacks", "Beverages"].map((menu) => (
                                <li
                                    key={menu}
                                    className={`btn bg-primaryColorLight dark:bg-darkColorLight  ${activeMenu === menu ? "active" : ""}`}
                                    onClick={() => handleMenuClick(menu)}>
                                    {menu}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <ul className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 gp-12'>
                        {displayedItems.map((item, index) => (
                            <li key={index}>
                                <div className='h-56 grid place-items-center dark:bg-darkColorLight dark:hover:bg-secondaryColor bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40'>
                                    <img src={item.imgSrc} alt="food image" className='w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24' />
                                </div>

                                <div className='pt-5'>
                                    <div className='mb-2'>
                                        <h4 className="card_title">{item.title}</h4>
                                        <p className="paragraph">{item.description}</p>
                                    </div>
                                    <p className="text-secondaryColor">{item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;
