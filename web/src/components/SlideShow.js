import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const SlideShow = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const id = setInterval(next, 3000); // Change slide every 3 seconds
    setIntervalId(id);

    return () => clearInterval(id); // Clear interval on component unmount
  }, []);

  return (
    <div className="overflow-hidden relative max-h-screen">
      <div className="flex transition-transform ease-out duration-9000">
        {slides.map((slide, index) => (
          <div
            key={`${slide.id}-${index}`}
            className={`w-full h-full ${
              curr === index ? 'block' : 'hidden'
            } transition-opacity duration-9000`}
          >
            <img
              src={slide.src}
              className="w-full h-full object-cover transition-transform duration-9000 ease-in-out"
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-5">
        <button
          onClick={prev}
          className="p-2 rounded-full text-gray-800 
          hover:bg-white md:top-1/2 md:transform md:translate-y-1/2"
        >
          <BsChevronLeft color='black' size={30} />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full  text-gray-800 
          hover:bg-white md:top-1/2 md:transform md:translate-y-1/2"
        >
          <BsChevronRight color='black' size={30} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-gray rounded-full ${
                curr === i ? 'p-2' : 'bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
