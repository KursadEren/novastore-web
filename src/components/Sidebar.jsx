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
        className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-3 rounded-lg lg:hidden hover:bg-blue-700 transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Karartma — mobilde sidebar açıkken */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        w-72 bg-gradient-to-b from-blue-900 to-blue-600 h-screen p-8 fixed top-0 left-0 flex flex-col z-50
        transition-all duration-300 ease-out shadow-2xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}>
        {/* Close Button - Mobile Only */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="font-bold text-4xl text-white mb-2">Nova Store</p>
        <p className="text-blue-200 text-sm">Kantin Yönetim Paneli</p>

        <nav className="mt-8 flex flex-col gap-2">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) =>
            `p-3 rounded-lg text-white transition-all duration-200 ${isActive ? "bg-white/20 shadow-lg" : "hover:bg-white/10 hover:translate-x-2"}`
          }>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </span>
          </NavLink>
          <NavLink to="/Product" onClick={() => setIsOpen(false)} className={({ isActive }) =>
            `p-3 rounded-lg text-white transition-all duration-200 ${isActive ? "bg-white/20 shadow-lg" : "hover:bg-white/10 hover:translate-x-2"}`
          }>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Ürünler
            </span>
          </NavLink>
          <NavLink to="/Student" onClick={() => setIsOpen(false)} className={({ isActive }) =>
            `p-3 rounded-lg text-white transition-all duration-200 ${isActive ? "bg-white/20 shadow-lg" : "hover:bg-white/10 hover:translate-x-2"}`
          }>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Öğrenciler
            </span>
          </NavLink>
          <NavLink to="/settings" onClick={() => setIsOpen(false)} className={({ isActive }) =>
            `p-3 rounded-lg text-white transition-all duration-200 ${isActive ? "bg-white/20 shadow-lg" : "hover:bg-white/10 hover:translate-x-2"}`
          }>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ayarlar
            </span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;