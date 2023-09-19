import React, { useEffect, useState } from 'react';
import './index.css';
import { motion } from 'framer-motion';
import './App.css';

// Import your specific image files
import image1 from './images/darsa.jpeg';
import image2 from './images/cert.jpeg';
import image3 from './images/kiapo.jpeg';
import image4 from './images/weekly.jpeg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const imageList = [
    { id: 1, text: 'Tunawajulisha Ndugu zetu juu ya uwepo wa Duruus zetu za Online Kila wiki', src: image1 },
    { id: 2, text: 'SHAHADAAT ZA 1ST GRADUATES ZIMESHATOKA', src: image2 },
    {
      id: 3, text: 'Katika somo la taariikh 3 mutawassit zama za khilafa ya abubakar asswiddiiqalipewa kiapo cha utiifu ya kuwa khalifa katika saqiifatu banii saaidah Hadi leo hii imehifadhiwa...', src: image3
    },
    { id: 4, text: 'Shindano la wiki', src: image4 },
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
            initial={{ x: -1000, scale: 0.5 }} // Initial position off-screen to the left and smaller size
            animate={{ x: 0, scale: 1 }} // Animation target position (center) and size
            transition={{ duration: 2, ease: 'easeInOut' }} // Animation duration and easing
          />
          <p className="image-text">{imageList[currentImage - 1].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
