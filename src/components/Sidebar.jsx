// Sidebar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Butonu — sadece mobilde görünür */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg lg:hidden"
      >
        ☰
      </button>

      {/* Karartma — mobilde sidebar açıkken */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        w-72 bg-gradient-to-b from-blue-900 to-blue-600 h-screen p-8 fixed top-0 left-0 flex flex-col z-50
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}>
        <p className="font-bold text-4xl text-white">Nova Store</p>
        <nav className="mt-8 flex flex-col gap-2">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) =>
            `p-3 rounded-lg text-white ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
          }>Dashboard</NavLink>
          <NavLink to="/Product" onClick={() => setIsOpen(false)} className={({ isActive }) =>
            `p-3 rounded-lg text-white ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
          }>Ürünler</NavLink>
          <NavLink to="/Categories" onClick={() => setIsOpen(false)} className={({ isActive }) =>
            `p-3 rounded-lg text-white ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
          }>Kategoriler</NavLink>
          <NavLink to="/Student" onClick={() => setIsOpen(false)} className={({ isActive }) =>
            `p-3 rounded-lg text-white ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
          }>Öğrenciler</NavLink>
          <NavLink to="/settings" onClick={() => setIsOpen(false)} className={({ isActive }) =>
            `p-3 rounded-lg text-white ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
          }>Ayarlar</NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;