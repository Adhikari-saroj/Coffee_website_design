import React from 'react';
import Hero from './assets/components/Hero/Hero';
import Menu from './assets/components/Menu/Menu';
import Banner from './assets/components/Banner/Banner';
import Footer from './assets/components/Footer/Footer';


const App = () => {
  return (
    <div className='overflow-x-hidden'>
  
     <Hero />
     <Menu />
     <Banner />
     <Footer />
    </div>
  )
}

export default App
