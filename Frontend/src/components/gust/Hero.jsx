import React, { useState, useEffect } from "react";
import Heroimg1 from "../../assets/Hero1.jpg";
import Heroimg2 from "../../assets/Hero2.jpg";

import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: Heroimg1,
    alt: "Heroimg1",
    desc: "Description for Heroimg1",
  },
  {
    src: Heroimg2,
    alt: "Heroimg2",
    desc: "Description for Heroimg2",
  },
  
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000); // 10 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[100vh] fixed w-full overflow-hidden mr-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2 }}
        >
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="w-full h-[100vh] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
              {images[index].desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};  

export default Hero;
