import React, { useState } from "react";
import Logo from "../../assets/G.webp";
import {
  Baby,
  EqualApproximately,
  House,
  Moon,
  Phone,
  User,
  Menu,
  X
} from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ParentPage = [
  {
    pageName: "Home",
    Icon: House,
    Url: "/",
    id: 1,
  },
  {
    pageName: "About",
    Icon: EqualApproximately,
    Url: "/about",
    id: 2,
  },
  {
    pageName: "Contact Us",
    Icon: Phone,
    Url: "/contact",
    id: 3,
  },
];

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("darkP");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="w-full z-40 bg-[var(--parent4)] shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-32 h-16 object-contain" />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-[16px] items-center font-bold">
          {ParentPage.map((Page) => (
            <Link
              key={Page.id}
              to={Page.Url}
              className="flex items-center gap-1 hover:text-[var(--parent2)] transition-colors"
            >
              <Page.Icon className="w-5 h-5" />
              <span>{Page.pageName}</span>
            </Link>
          ))}
        </nav>
        {/* Desktop Login Button */}
        <div className="hidden md:flex items-center space-x-2">
          <Button className="bg-[var(--parent1)] text-[var(--parent4)] rounded-2xl text-[16px] hover:bg-[var(--parent2)] px-6 py-2">
            <Link to="/auth/login">Login</Link>
          </Button>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[var(--parent4)] px-4 pb-4">
          <div className="flex flex-col gap-4 mt-2">
            {ParentPage.map((Page) => (
              <Link
                key={Page.id}
                to={Page.Url}
                className="flex items-center gap-2 font-bold text-[16px] hover:text-[var(--parent2)]"
                onClick={() => setMenuOpen(false)}
              >
                <Page.Icon className="w-5 h-5" />
                <span>{Page.pageName}</span>
              </Link>
            ))}
            <Button className="bg-[var(--parent1)] text-[var(--parent4)] rounded-2xl text-[16px] hover:bg-[var(--parent2)] px-6 py-2 mt-2">
              <Link to="/auth/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
