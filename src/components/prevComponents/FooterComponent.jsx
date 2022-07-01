import React from 'react'

const FooterComponent = () => {
  return (
   
<div className="absolute bottom-8 w-full bg-gray-50">
            <div className="container m-auto px-6 flex items-end justify-between md:px-12 lg:px-7">
                <div className="hidden space-x-4 md:flex md:items-center">
                    <img className="w-14 h-14 rounded-full object-cover" src="images/user.png" alt=""/>
                    <div className="text-gray-600">
                        <span className="text-sm">Question ?</span>
                        <p className="font-semibold text-gray-700">Talk to our assistant</p>
                    </div>
                </div>
                <div>
                    <a href="#" className="hover:text-yellow-700">Facebook /</a>
                    <a href="#" className="hover:text-yellow-700">YouTube / </a>
                    <a href="#" className="hover:text-yellow-700">Twitter</a>
                </div>
            </div>
        </div>                        
  )
}

export default FooterComponent