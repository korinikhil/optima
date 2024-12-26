import React from 'react'
import Navbar from './Navbar'
import logo from '../../../assets/logo.png'
import Login from '../../pages/Login'
const Header = () => {
    return (
        <>
            <header className=''>
                <div className="div flex shadow-lg   rounded-3xl bg-[#6ea0bb] mt-5 md:px-12 justify-between mx-[4rem] items-center">
                <div className="logo">
                    <img src={logo} className='md:w-[50%]' alt="" />
                </div>
                <div className="nav text-sm hidden md:flex">
                    <Navbar />

                </div>
                <div className="login flex pb-4 relative text-sm items-center pt-3 px-10 py-1 m-1 text-white rounded-lg left-5 bg-[#6ea0bb] border-2  md:bg-gray-800">
                    <button onClick={()=>window.location.href="tel:+917990402535"}>Call Now</button>
                </div>
            </div>
            </header>

            {/* mobile friendly */}

            <div className="div md:hidden ml-8">

                <Navbar />
            </div>
        </>
    )
}

export default Header
