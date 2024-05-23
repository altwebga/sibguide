"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header className="bg-slate-950 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl">
          <Link href="/" className="text-white hover:text-gray-400">
            MyLogo
          </Link>
        </div>
        <button onClick={toggleMenu} className="block md:hidden">
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <nav className={`hidden md:flex md:items-center md:space-x-4`}>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Мобильное меню */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-800 text-white z-50 transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-4 text-center">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-400"
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white hover:text-gray-400"
                onClick={() => handleLinkClick("/about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-gray-400"
                onClick={() => handleLinkClick("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
