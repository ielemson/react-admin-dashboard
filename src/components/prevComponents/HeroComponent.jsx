import React from 'react'
import { Link } from 'react-router-dom'
const HeroComponent = () => {
  return (
    <div className="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
    <div className="flex items-center flex-wrap gap-12 lg:gap-0">
        <div className="lg:w-5/12 space-y-8">
            <span className="flex space-x-2">
                <span className="block w-14 mb-2 border-b-2 border-gray-600"></span>
                <span className="font-medium text-gray-600">Office Space</span>
            </span>
            <h1 className="text-4xl font-bold md:text-6xl">The New <br/> Way To Discover</h1>
            <p className="text-xl text-gray-700">Booking Company-Wide Savings, Invoicing and reporting docs.</p>
            
            <div className="flex space-x-4">
                <Link to='auth/login' className="w-full py-3 px-6 text-center transition bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max">
                    <span className="block text-white font-semibold">
                        Login
                    </span>
                </Link>
                <Link to='auth/register' className="w-full py-3 px-6 text-center transition bg-gray-900 hover:bg-gray-800 active:bg-gray-700 focus:bg-gray-800 sm:w-max">
                    <span className="block text-white font-semibold">
                        Resgiter
                    </span>
                </Link>
               
            </div>
        </div>

        <div className="hidden relative md:block lg:w-7/12">
            <div aria-hidden="true" className="absolute inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-yellow-200">

            </div>
            <img src="https://tailus.io/sources/blocks/ecommerce-shoes/preview/images/shoes.png" className="relative ml-auto" alt=""/>
        </div>
    </div>
</div>
  )
}

export default HeroComponent