import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Home", to: "/parent/home" },
  { name: "Child Controllers", to: "/parent/controllers" },
  { name: "Resources", to: "/parent/resources" },
  { name: "Events", to: "/parent/events" },
  { name: "Support", to: "/parent/support" },
  { name: "Community Forum", to: "/parent/community" },
  { name: "Contact Us", to: "/parent/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[var(--family1)] text-[17px] text-[var(--family5)] shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 md:px-10">
        <h2 className="font-bold text-xl">Logo</h2>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-9 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="hover:text-[var(--family2)] transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Desktop User Dropdown */}
        <div className="hidden md:flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <User />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-0 bg-[var(--family4)] rounded-2xl">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/profile" className="hover:text-[var(--family2)] font-bold">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="bg-[var(--family1)] text-[var(--family5)] hover:bg-[var(--family2)] cursor-pointer rounded-2xl w-full">
                  LOGOUT
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center p-2 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[var(--family1)] px-4 pb-4">
          <div className="flex flex-col gap-4 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="font-bold text-[17px] hover:text-[var(--family2)]"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer flex items-center mt-2">
                <User />
                <span className="ml-2">Account</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-0 bg-[var(--family4)] rounded-2xl">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile" className="hover:text-[var(--family2)] font-bold">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button className="bg-[var(--family1)] text-[var(--family5)] hover:bg-[var(--family2)] cursor-pointer rounded-2xl w-full">
                    LOGOUT
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
