import React from 'react';
import BgImage from "/src/assets/Images/bg-slate.png";
import WhiteCoffee from  "/src/assets/Images/big-coffee.png";
import Navbar from '../Navbar/Navbar';
import {motion} from 'framer-motion'

const bgImage ={
    backgroundImage :`url(${BgImage})`,
    backgroundSize :'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className='min-h-[750px] w-full'>
        <div className="container">
             
             <Navbar />

            <div className='grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
                <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                    <motion.h1 
                    initial={{opacity:0, y:-100}}
                    animate={{opacity:1, y:0}}
                    transition={{
                      type:'spring',
                      stiffness:100,
                      damping:10,
                      delay:1,
                    }}
                    className='text-7xl font-bold
                    leading-tight ml-14'>Coffee Lovers
                    </motion.h1>
                    <motion.div 
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{
                      type:'spring',
                      stiffness:100,
                      damping:10,
                      delay:1.2,
                    }}
                    className='relative'>
                        <div className='relative z-10 space-y-4'>
                            <h1 className='text-2xl'>Cup of joy in hand, ready to slay,</h1>
                            <h1 className='text-sm opacity-55 leading-loose '>You can't buy happiness, but you can buy coffee, and that's pretty close.
                            Coffee is the best part of waking up
                            Another day, another cup of coffee
                            </h1>
                        </div>
                                    
                        <div className='absolute -top-6 -left-10
                        w-[250px] h-[190px] bg-gray-700/25'></div>
                    </motion.div>
         
                </div>
                               
                <div className='relative'>
                    <motion.img
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                      type:'spring',
                      stiffness:100,
                      damping:10,
                      delay:0.4,
                    }}
                     src={WhiteCoffee} alt=""
                    className='relative z-40 h-[400px] md:h-[700px]'/>
                
                </div>

                <motion.div 
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{
                      type:'spring',
                      stiffness:100,
                      damping:10,
                      delay:1.2,
                    }}
                    className='relative'>
                        <div className='relative z-10 space-y-4'>
                            <h1 className='text-2xl text-white'>Cup of joy in hand, ready to slay,</h1>
                            <h1 className='text-sm opacity-55 leading-loose text-white'>You can't buy happiness, but you can buy coffee, and that's pretty close.
                            Coffee is the best part of waking up
                            Another day, another cup of coffee
                            </h1>
                        </div>
                        

                        
                        <div className='absolute -top-6 right-30
                        w-[250px] h-[190px] bg-gray-700/25'></div>
                    </motion.div>
                   
                

            </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
