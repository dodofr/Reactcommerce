// 
import { Link } from "react-router-dom";
import React, { useState } from "react";

function HeaderSmall() {
  const [isOpen, setIsOpen] = useState(false);
  const isConnected = localStorage.getItem("jwt");

  const navLinks = [
    { to: "/", text: "Acceuil" },
    { to: "/categorie", text: "Prestations" },
    { to: "/photos", text: "Galerie" },
    { to: isConnected ? "/deconnection" : "/connection", text: "Se Déconnecter" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-evenly bg-marbre bg-cover h-[10vh]">
      <div className="md:hidden flex items-center justify-between px-5 w-full">
        
          <Link  className="text-white font-semibold" to="/">
            Acceuil
          </Link>
        
        <button
          className="text-white font-semibold p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        }   w-screen h-screen flex-col z-10 fixed top-0 left-0 bg-burger bg-cover bg-no-repeat`}
        //md:flex md:items-center, enleve le bug du responsive
      >
        <button
          className="font-semibold p-2 focus:outline-none flex justify-end mr-4 mt-4"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="rgb(202 138 4)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="rgb(202 138 4)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {navLinks.map((link, index) => (
          <Link
            key={index}
            className="text-yellow-600 font-semibold p-2 mt-20 hover:text-yellow-600 text-center"
            to={link.to}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default HeaderSmall;

