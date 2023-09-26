import React, { useEffect, useState } from 'react';
import './index.css';
import { motion } from 'framer-motion';
import './App.css';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0); // Initialize with 0
  const imageList = [
    { id: 1, text: '', imageName: 'Slide_DeenKhaalis_Binisa.jpg' },
    { id: 2, text: '', imageName: 'Slide_DeenKhaalis_Nurein.jpg' },
    { id: 3, text: '', imageName: 'academyprograms.png' },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next image index in a cyclic manner
      const nextImageIndex = (currentImage + 1) % imageList.length;
      setCurrentImage(nextImageIndex);
    }, 20000); // Change images every 2 minutes (120,000 milliseconds)

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [currentImage, imageList]);

  return (
    <div className='container'>
      {/* Animated Image */}
      <div className='image-container'>
        <div className='image-text-container'>
          <motion.img
            src={`/images/${imageList[currentImage].imageName}`} // Use currentImage directly
            alt='logo'
            initial={{ x: -1000, scale: 0.5 }} // Initial position off-screen to the left and smaller size
            animate={{ x: 0, scale: 1 }} // Animation target position (center) and size
            transition={{ duration: 2, ease: 'easeInOut' }} // Animation duration and easing
          />
          <p className="image-text">{imageList[currentImage].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
