import React, { useEffect, useState } from 'react';
import './index.css';
import { motion } from 'framer-motion';
import './App.css';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageList = [
    { id: 1, text: '', imageName: 'Slide_DeenKhaalis_Binisa.jpg' },
    { id: 2, text: '', imageName: 'Slide_DeenKhaalis_Nurein.jpg' },
    { id: 3, text: '', imageName: 'academyprograms.png' },
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
          <motion.img
            src={`/images/${imageList[currentImage].imageName}`}
            alt='logo'
            initial={{ x: -1000, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{ width: isMobileView ? '100%' : '1250px' }}
          />
          <p className="image-text" style={{ fontSize: isMobileView ? '16px' : '24px' }}>
            {imageList[currentImage].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;






