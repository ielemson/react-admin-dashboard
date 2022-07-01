import React from 'react'
import {FooterComponent, NavComponent} from '../components'
const AppLayout = ({children}) => {
    return (

        <div className="relative w-full">
            <NavComponent/>
            <div className="min-h-screen flex">
                 {children}
                <FooterComponent/>
            </div>
        </div>


    )
}

export default AppLayout
