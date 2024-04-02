import React from 'react'
import { categories } from './Data';
import Categories from './Categories';
import { motion } from 'framer-motion';

const Programs = () => {
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
    <div className='section' id='programs'>
    <div className='text-center'>
      <div className='sm:text-3xl text-2xl font-bold mb-5'>
      Takwimu za Deen Khaalis Academy <span className='text-Teal'> 
       tangu kuanzishwa kwake</span>
          </div>

<p className='text-sm leading-7 max-w-[700px] mx-auto'>
   Deen Khaalis Academy ilianzishwa mwaka wa 2020 kipindi cha korona
 kwa malengo ya kuelimisha jamii dini hasa hasa watu ambao hawakupata fursa ya kusoma udogoni
</p>
  </div>
      <motion.div 
      variants={container}
      initial='hidden'
      whileInView='visible'
      className='grid md:grid-cols-5 sm:grid-cols-2 mt-12 gap-8'>
        {categories.map(category => {
          return <Categories key={category.id} {...category}/>;
        })}
      </motion.div>
      {/* <div className='text-xl font-bold mt-32'>
      Description of just a few of activities conducted at school
      </div>
      <div className='mt-12 overflow-x-hidden w-full relative'>
      <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide'>
{programs.map(program =>{
  return <Program key={program.id} {...program}/>;
})}
      </div>
      </div> */}
      </div>
  );
};

export default Programs