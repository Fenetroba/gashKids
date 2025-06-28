import React from "react";
import "../../app.css";
import ParentHeroImg from '../../assets/Hero2.jpg'
const HeroSection = () => {
  return (
    <div className="ParentHero">
      <div className="h-[91vh] flex ml-10 items-end ">
        <div>
          <img className="lg:w-[600px] rounded-2xl" src={ParentHeroImg} alt="" />
          <h1 className="font-extrabold text-7xl text-[var(--family5)] mb-7">
            Hi family
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
