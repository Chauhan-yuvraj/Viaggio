import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import viaggio from '../../assets/viaggio.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navigationbar = () => {
    const[visible , setVisible] = useState(true)
    return (
        <>
            <header className="shadow sticky z-50 top-0">
                <nav className=" bg-[#e9ecef] border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link to="/" className="flex items-center">
                            <img
                                src={viaggio}
                                className="mr-3 h-12"
                                alt="Logo"
                            />
                              
                        </Link>
                        <li className='md:hidden inline w-20 scale-125 ' onClick={()=>setVisible(!visible)}>
                                    <GiHamburgerMenu  className={visible ? 'inline' : 'hidden'}/>
                                    <RxCross2 className={visible ? 'hidden' : 'inline'} />
                                </li>
                        <div
                            className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${visible ? 'hidden' : 'block'}`}
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                                <li >
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FFCA51]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFCA51] lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/product"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FFCA51]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFCA51] lg:p-0`
                                        }
                                    >
                                        Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blog"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FFCA51]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFCA51] lg:p-0`
                                        }
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FFCA51]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFCA51] lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FFCA51]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#FFCA51] lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navigationbar
