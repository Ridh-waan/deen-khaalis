import React from 'react'
import { categories } from './Data';
import Categories from './Categories';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Events = () => {
  const container = {
    hidden: {
      opacity:0,
      scale:0,
    },
    visible: {
    opacity:1,
    scale:1,
    transition:{
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
    },
  };
  return (
    <div className='section' id='Events'>
    <div className='text-center'>
      <div className='sm:text-3xl text-2xl font-bold mb-5'>
      Khutba, duruus, mihadhara <span className='text-Teal'> 
       na kalimaat mbali mbali zilizotolewa</span>
          </div>

<p className='text-sm leading-7 max-w-[700px] mx-auto'>
   Hapa tumeorodhesha sauti sita pekee za kalima, khutwab, mihaadhara na maelekezo mbali mbali 
   kwa sauti zengine bonyeza <Link to="/duruus" className='text-blue-500'> hapa </Link> Barakallahu feeq
</p>
  </div>
      <motion.div 
      variants={container}
      initial='hidden'
      whileInView='visible'
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 mt-12 gap-8'>
        {categories.map(category => {
          return <Categories key={category.id} {...category}/>;
        })}
      </motion.div>
    
      </div>
  );
};

export default Events