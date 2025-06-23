import React, { useState } from "react";
import Logo from "../../assets/G.webp";

const ParentPage = [
  {
    pageName: "Home",
    Icon: House,
    Url: "#",
    id: 1,
  },
  {
    pageName: "About",
    Icon: EqualApproximately,
    Url: "#",
    id: 2,
  },
  {
    pageName: "Contact Us",
    Icon: Phone,
    Url: "#",
    id: 3,
  },
];
import {
  Baby,
  EqualApproximately,
  House,
  Moon,
  Phone,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("darkP");
  };

  return (
    <section>
      <div className="z-40 bg-[var(--parent4)] flex  justify-between px-10 items-center">
        <div className="relative">
          <img src={Logo} alt="Logo" className="w-38 h-20 " />
        </div>
        <div className="flex space-x-6 text-[16px] items-center font-bold cursor-pointer">
          {ParentPage.map((Page) => (
            <div key={Page.id} className="flex">
              <p className=" hover:text-[var(--parent2)] mx-1">
                {Page.pageName}
              </p>
              <Page.Icon />
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-1">
          <Button className="cursor-pointer bg-[var(--parent1)] w-30 text-[var(--parent4)] rounded-2xl text-[16px] hover:bg-[var(--parent2)] ">
          {/* <Link to="/login" >Login</Link>  */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
