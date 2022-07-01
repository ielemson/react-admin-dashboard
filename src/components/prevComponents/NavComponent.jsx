import React from 'react'
import {NavLink} from "react-router-dom"
const NavComponent = () => {
    return (
        <nav className="absolute w-full">
            <div className="container m-auto px-6 md:px-12 lg:px-7">
                <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0">
                    <div className="w-full px-6 flex justify-between md:w-max md:px-0">
                        <a href="#" aria-label="logo">
                            <img src="https://tailus.io/sources/blocks/ecommerce-shoes/preview/images/logo.svg" className="w-36 grayscale contrast-200" alt="tailus logo" width="144" height="68"/>
                        </a>

                        <button aria-label="humburger" id="hamburger" className="relative w-10 h-10 -mr-2 md:hidden">
                            <div aria-hidden="true" id="line" className="inset-0 w-6 h-0.5 m-auto rounded bg-gray-500 transtion duration-300"></div>
                            <div aria-hidden="true" id="line2" className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-gray-500 transtion duration-300"></div>
                        </button>

                    </div>
                    <div className="hidden lg:flex flex-wrap justify-between items-center space-y-4 p-6 rounded-xl bg-white md:w-8/12 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
                        <div className="block w-full">
                            <ul className="space-y-4 tracking-wide font-medium md:flex md:space-y-0">
                                <li >
                                    <NavLink to="/" className={({ isActive }) => isActive ? "relative text-yellow-800 before:absolute before:-inset-2 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 block md:px-3" : "block md:px-3"}>
                                        <div>
                                            <span>Home</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to="products" className={({ isActive }) => isActive ? "relative text-yellow-800 before:absolute before:-inset-2 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 block md:px-3" : "block md:px-3"}>
                                        <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                            <span className="transition group-hover:text-yellow-700">Products</span>
                                        </div>
                                </NavLink>
                                </li>
                                <li>
                                    <a href="#" className="block md:px-3 group">
                                        <div className="relative text-gray-600 before:absolute before:-inset-2 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                                            <span className="transition group-hover:text-yellow-700">Cart</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full space-y-4 md:w-max md:space-y-0 md:space-x-4 md:flex">
                            <NavLink to={'login'} className={({ isActive }) => isActive ? "group w-full py-3 px-6 text-center transition bg-yellow-200 focus:bg-yellow-100 sm:w-max" : "group w-full py-3 px-6 text-center transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"} title="Login">
                                <span className="block text-gray-700 font-semibold group-focus:text-yellow-700">
                                    Login
                                </span>
                            </NavLink>
                            <NavLink to={'register'}  title="Start buying" className="w-full py-3 px-6 text-center transition bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max">
                                <span className="block text-white font-semibold">
                                    Register
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavComponent
