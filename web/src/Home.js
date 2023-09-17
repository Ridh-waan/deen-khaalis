import React, { useEffect, useState } from 'react';
import './index.css';
import { motion } from 'framer-motion';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const imageList = [
    { id: 1, text: 'Text for Image 1', src: '/images/darsa.jpeg' },
    { id: 2, text: 'SHAHADAAT ZA 1ST GRADUATES ZIMESHATOKA', src: '/images/cert.jpeg' },
    { id: 3, text: 'Katika somo la taariikh 3 mutawassit zama za khilafa ya abubakar asswiddiiqalipewa kiapo cha utiifu ya kuwa khalifa katika saqiifatu banii saaidah Hadi leo hii imehifadhiwa...', src: '/images/kiapo.jpeg' },
    { id: 4, text: 'Text for Image 4', src: '/images/weekly.jpeg' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageIndex = (currentImage % 4) + 1;
      setCurrentImage(nextImageIndex);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div className='container'>
      <div className='image-container'>
        <div className='image-text-container'>
          <motion.img
            src={imageList[currentImage - 1].src}
            alt='logo'
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <p className="image-text">{imageList[currentImage - 1].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
