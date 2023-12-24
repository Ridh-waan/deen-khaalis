import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Slide_DeenKhaalis_Binisa from '../Images/Hero1.jpg'
import Slide_DeenKhaalis_Nurein from '../Images/Hero2.jpg'
import academyprograms from '../Images/Hero3.png'

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageList = [
    { id: 1, text: '', image: Slide_DeenKhaalis_Binisa },
    { id: 2, text: '', image: Slide_DeenKhaalis_Nurein },
    { id: 3, text: '', image: academyprograms },
  ];


  const isMobileView = useMediaQuery({ maxWidth: 600 });

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = (currentImage + 1) % imageList.length;
      setCurrentImage(nextImageIndex);
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage, imageList]);

  return (
    <div className='container'>
      {/* Animated Image */}
      <div className='image-container'>
        <div className='image-text-container'>
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden'>
            <motion.img
              src={imageList[currentImage].image}
              alt='logo'
              initial={{ x: -1000, scale: 0.5 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </div>


          <p className="image-text" style={{ fontSize: isMobileView ? '16px' : '24px' }}>
            {imageList[currentImage].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;






