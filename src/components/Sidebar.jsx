import React from 'react';
import Button from './Button';
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
       <div className="w-72 bg-gradient-to-b from-blue-900 to-blue-600 h-screen p-8 fixed top-0 left-0 flex flex-col">
            <p className='font-bold text-4xl text-white'>Nova Store</p>
            <nav className="mt-8 flex flex-col gap-2">
                <NavLink to="/" className={({ isActive }) =>
                    `p-3 rounded-lg text-white ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
                }>
                    Dashboard
                </NavLink>
                <NavLink to="/Product" className={({ isActive }) =>
                    `p-3 rounded-lg text-white ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
                }>
                    Ürünler
                </NavLink>
                <NavLink to="/Student" className={({ isActive }) =>
                    `p-3 rounded-lg text-white ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
                }>
                    Student
                </NavLink>
                <NavLink to="/Settings" className={({ isActive }) =>
                    `p-3 rounded-lg text-white ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
                }>
                    Ayarlar
                </NavLink>
            </nav>

        </div>
    );
}

export default Sidebar;
