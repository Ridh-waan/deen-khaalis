import React from 'react'
import { motion } from 'framer-motion';

const Categories = ({icon, category, number}) => {
  const item = {
   hidden: {y:2, opacity: 0},
      visible: {y:0, opacity: 1},
  };
  return (
<motion.div 
variants={item}
whileHover={{scale: 1.1}}
className='py-4 flex items-center flex-col gap-6 p-8 rounded-md flex-wrap'>
<div className='text-5xl text-Teal'> {icon} </div>
<div>{category}</div>
<div>{number}</div>
<p className='text-sm text-gray'>
View more
</p>
    </motion.div>
  );
};

export default Categories