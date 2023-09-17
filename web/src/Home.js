import React, { useEffect, useState } from 'react';
import './index.css';
import { motion } from 'framer-motion';

// Import your specific image files
import image1 from './images/darsa.jpeg';
import image2 from './images/cert.jpeg';
import image3 from './images/kiapo.jpeg';
import image4 from './images/weekly.jpeg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const imageList = [
    { id: 1, text: 'Text for Image 1', src: image1 },
    { id: 2, text: 'SHAHADAAT ZA 1ST GRADUATES ZIMESHATOKA', src: image2 },
    {
      id: 3, text: 'Katika somo la taariikh 3 mutawassit zama za khilafa ya abubakar asswiddiiqalipewa kiapo cha utiifu ya kuwa khalifa katika saqiifatu banii saaidah Hadi leo hii imehifadhiwa...', src: image3
    },
    { id: 4, text: 'Text for Image 4', src: image4 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next image index in a cyclic manner
      const nextImageIndex = (currentImage % 4) + 1;
      setCurrentImage(nextImageIndex);
    }, 5000); // Change images every 5 seconds (5000 milliseconds)

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [currentImage]);

  return (
    <div className='container'>
      {/* Animated Image */}
      <div className='image-container'>
        <div className='image-text-container'>
          <motion.img
            src={imageList[currentImage - 1].src}
            alt='logo'
            initial={{ x: -1000 }} // Initial position off-screen to the left
            animate={{ x: 0 }} // Animation target position (center)
            transition={{ duration: 2, ease: 'easeInOut' }} // Animation duration and easing
          />
          <p className="image-text">{imageList[currentImage - 1].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;