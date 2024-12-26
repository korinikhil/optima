import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div>
            <footer className="bg-gray-900 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>© {year} Optimawebdesigns. All Rights Reserved.</p>
                    <div className="flex justify-center mt-2 space-x-4">
                        <NavLink to="/privacy-policy" className="hover:underline">
                            Privacy Policy
                        </NavLink>
                        <NavLink to="/terms" className="hover:underline">
                            Terms & Conditions
                        </NavLink>
                        <NavLink to="/refund" className="hover:underline">
                            Refund policy
                        </NavLink>
                        
                    </div>
                </div>
            </footer>
        </div>
    )
}



export default Footer