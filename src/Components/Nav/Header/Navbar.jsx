import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

            <div className='space-x-5  pb-2 m-auto md:text-[16px] flex'>


                <NavLink className={({ isActive }) => (isActive ? 'border-b-white pb-2 border-b-2' : '')} to='/'> Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-white pb-2 border-b-2' : '')} to='/about'>About</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-white pb-2 border-b-2' : '')} to='/contact'>Contact US</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-white pb-2 border-b-2' : '')} to='/catalogue'>Catalogue</NavLink>

            </div>
            

        </>
    )
}

export default Navbar
