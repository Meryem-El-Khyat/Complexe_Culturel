import React from 'react';

export default function Header() {
  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-[#824B26] text-xl font-bold">
          <a href="/Acceuil">Logo</a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-[#824B26] text-sm font-medium">
          <li><a href="/Acceuil">Acceuil</a></li>
          <li><a href="/CCO">CCO</a></li>
          <li><a href="/Evenements">Evenements</a></li>
          <li><a href="/Ateliers">Ateliers</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>

        {/* Flags and Buttons */}
        <div className="flex items-center space-x-4">
          <img src="/assets/morocco.png" alt="flag morocco" className="w-6 h-4" />
          <img src="./assets/france.png" alt="flag france" className="w-6 h-4" />
          <button className="bg-[#824B26] text-white font-semibold py-1 px-3 rounded-md hover:bg-[#6e3d20]">
            <a href="">Connexion</a>
          </button>
          <button className="bg-[#f5f5f5] text-[#824B26] font-semibold py-1 px-3 rounded-md hover:bg-[#eaeaea]">
            <a href="">Réserver</a>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-[#824B26]">
          <button id="menu-toggle" aria-label="Open Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18m-9 6h9"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden bg-white text-[#824B26] space-y-4 p-4 shadow-md">
        <ul className="flex flex-col space-y-2">
          <li><a href="/Acceuil">Acceuil</a></li>
          <li><a href="/CCO">CCO</a></li>
          <li><a href="/Evenements">Evenements</a></li>
          <li><a href="/Ateliers">Ateliers</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
