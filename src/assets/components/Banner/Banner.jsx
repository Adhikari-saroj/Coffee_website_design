import React from 'react';
import bannerImg from "../../Images/coffee-banner.jpg";
import smallBannerImg from "../../Images/small-banner.png";
import { motion } from 'framer-motion';

const BannerStyle = {
    backgroundImage : `url(${bannerImg})`,
    backgroundSize :'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    height :'100%',
    width:'100%',
}

const Banner = () => {
  return (
    <div className='container my-14'>
        <div style={BannerStyle}
        className='sm:min-h-[400px] sm:flex sm:justify-end
        sm:items-center '>

            <div className='space-y-6 max-w-xl mx-auto'>
          <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
           className='text-center text-2xl sm:px-20 font-semibold'>
            <span className='text-white'>A bad day with coffee</span> is better than a <span className='text-white'>good day</span> without it
          </motion.p>
        </div>
        </div>
    </div>
  )
}

export default Banner