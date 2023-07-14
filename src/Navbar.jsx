import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import logo from '../src/assets/Logo.png'
import CartContext from './CartContext'
function Navbar() {
    const navList = ["Home", "Product", "Contact", 'News', 'Portfolio'];
    const { item } = useContext(CartContext);

    const location = useLocation();


    return (

        <>
            <nav className="bg-gray-800 shadow-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img src={logo} alt="LOGO" width={120} />
                        </div>
                        {/* Navigation */}
                        <div className="flex items-center justify-center flex-grow">
                            <ul className="flex space-x-4">
                                {
                                    navList.map((list, id) => {
                                        return (
                                            <div key={id} className="flex px-3">
                                                <Link key={list.id} to={`${list.toLowerCase()}`} className="relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
                                                    {list}
                                                </Link>
                                            </div>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        {/* Button and Cart Icon */}
                        <div className="flex items-center space-x-6">
                            <Link to={'/cart'} className="relative ml-4">
                                <AiOutlineShoppingCart color='#fff' size={30} />
                                <span className="bg-red-500 text-white absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center rounded-full text-xs">
                                    {item.length}
                                </span>
                            </Link>
                            <Link to={location.pathname === '/signup' ? '/login' : '/signup'} className="bg-gray-700 text-sm hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded">
                                {location.pathname === '/signup' ? 'Login' : 'Sign up'}
                            </Link>

                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar