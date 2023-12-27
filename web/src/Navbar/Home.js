import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Slide_DeenKhaalis_Binisa from '../Images/Hero1.jpg'
import Slide_DeenKhaalis_Nurein from '../Images/Hero2.jpg'
import academyprograms from '../Images/Hero3.png'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Home = () => {
  const [curr, setCurr] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const imageList = [
    { id: 1, text: 'Barnamaj ya Duruus za Sheikh Muhhamad Issa, gusa hii link ugiunge na telegram channel yake', image: Slide_DeenKhaalis_Binisa },
    { id: 2, text: 'Barnamaj ya Duruus za Sheikh Nurein, Abu Uthmaan, gusa hii link ugiunge na telegram channel yake', image: Slide_DeenKhaalis_Nurein },
    { id: 3, text: 'Barnamaj ya Masomo katika DeenKhaalis Academy, gusa hii link ugiunge na masomo', image: academyprograms },
  ];

  const isMobileView = useMediaQuery({ maxWidth: 600 });

  const prev = () => setCurr((curr) => (curr === 0 ? imageList.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === imageList.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const id = setInterval(next, 9000); // Change slide every 3 seconds
    setIntervalId(id);

    return () => clearInterval(id); // Clear interval on component unmount
  }, []);

  return (
    <div className="overflow-hidden  max-h-screen pt-20 mt-6">
      <div className="flex transition-transform ease-out duration-9000">
        <motion.img
          key={imageList[curr].id}
          src={imageList[curr].image}
          className="w-full h-full object-cover transition-transform duration-9000 ease-in-out"
          alt='logo'
        />
      </div>
      <div className=" absolute inset-0 flex items-center justify-between p-2 mt-16">
        <button
          onClick={prev}
          className="p-2 rounded-full shadow bg-green-500 text-gray-800 
         hover:bg-maroon md:top-1/2 md:transform md:translate-y-1/2 md:flex hidden"
        >
          <BsChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full shadow bg-green-500 text-gray-800 
         hover:bg-maroon md:top-1/2 md:transform md:translate-y-1/2 md:flex hidden"
        >
          <BsChevronRight size={30} />
        </button>
      </div>
      <p className="image-text text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" style={{ fontSize: isMobileView ? '16px' : '24px' }}>
        {imageList[curr].text}
      </p>
    </div>
  );
};

export default Home;
