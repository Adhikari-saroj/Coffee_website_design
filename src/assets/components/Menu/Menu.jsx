import React from 'react';
import { motion } from 'framer-motion';
import coffee1 from "/src/assets/Images/coffee1.png";
import coffee2 from "/src/assets/Images/coffee2.png";
import coffee3 from "/src/assets/Images/coffee3.png";

const menuData = [
  {
    id: 1,
    image: coffee1,
    title: 'Sweet coffee',
    subtitle: 'Life begins after coffee',
  },
  {
    id: 2,
    image: coffee2,
    title: 'Cold coffee',
    subtitle: 'Another day, another cup of coffee',
  },
  {
    id: 3,
    image: coffee3,
    title: 'Hot coffee',
    subtitle: 'Coffee is the best part of waking up',
  },
];

const Menu = () => {
  return (
    <div className="container my-16 space-y-8">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          "Espresso yourself <span className="text-primary">at the cafe"</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-40"
        >
          Have you heard of this new place. A dreamers café, on deep sleep
          corner Peaceful roast is my favorite taste, Its like memories brew
          but a bit warmer They've got personalized booths, So we could choose
          the weather And to tell you the truth You’d choose rain, but I think
          sunny is better
        </motion.p>
      </div>

      <div className="flex justify-center items-center gap-12">
        {menuData.map((menu) => (
          <div key={menu.id} className="text-center space-y-6 p-4">
            <img src={menu.image} alt={menu.title} className='img-shadow2
            max-w-[200px] mx-auto hover:scale-110
            duration-300 cursor-pointer'/>
            <h2 className="text-2xl font-bold text-primary">{menu.title}</h2>
            <p className="text-darkGray opacity-70">{menu.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
