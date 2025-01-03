import React from 'react';
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-stone-500 to-stone-700 pt-12 pb-8'>
        <div className="container">
            <div className="grid grid-cls-1 sm:grid-cols-2
            md:grid-cols-3 gap-8">
          <div className='space-y-6 text-white'>
          <h1 className='text-3xl font-bold uppercase
          '>Coffee Shop</h1>
          <p className='text-sm max-w-[300px] font-semibold'>Coffee is a language in itself</p>
          <div>
            <p className='flex items-center gap-2 font-semibold'>
              <FaPhone />
              +977 98045.....
            </p>
          </div>
          </div>
          <div className='space-y-6'>
              <div>
               <h1 className='text-3xl font-bold text-white' >Buy Coffee</h1>
               <div className='grid grid-cols-2 gap-2 text-white'>
                <div>
                    <ul className='space-y-4'>
                        <li>coffee at home</li>
                        <li>coffee gifts</li>
                        <li>office coffee</li>
                        <li>brewing equipment</li>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-2'>
                        <li>About US</li>
                        <li>Coffee Blog</li>
                        <li>Carrers</li>
                        <li>Press</li>
                    </ul>
                </div>
               </div>
              </div>
          </div>
           <div className='space-y-6 text-white'>
            <h1 className='text-3xl font-bold text'>Follow Us</h1>
            <div className='flex items-center gap-3 cursor-pointer'>
                 <FaFacebook className='text-3xl
                 hover-scale-105 duration-300' />
                 <FaInstagram className='text-3xl
                 hover-scale-105 duration-300' />
                 <FaTelegram className='text-3xl
                 hover-scale-105 duration-300' />
                 <FaGoogle className='text-3xl
                 hover-scale-105 duration-300' />
            </div>
           
           </div>
            </div>
            <p className='text-white text-center mt-8
            pt-8 border-t-2'>Copyright © 2025 Saroj Adhikari ®</p>
        </div> 
    </div>
  )
}

export default Footer