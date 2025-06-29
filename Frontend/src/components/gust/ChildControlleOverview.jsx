import React from "react";
import Overviwe from '../../assets/Hero2.jpg'
const ChildControlleOverview = () => {
  return (
    <div className="  bg-[var(--parent4)]">
    <div className="mx-17 py-29">
    <h1 className="text-4xl font-bold pt-9">Overview</h1>
      <div className="flex items-center justify-center text-[17px]">
 <p>       Child controllers, also known as parental controls, are tools and
        software designed to help parents manage and monitor their children's
        online activities. They allow parents to set restrictions on content,
        screen time, and access to various applications and websites, ensuring a
        safer digital environment for their children.</p>
        <div className="rounded-2xl">
          <img src={Overviwe} alt="Overviwe"  className="rounded-2xl" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChildControlleOverview;
