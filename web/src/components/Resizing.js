// TextResizer.js
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Resizing = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 }); // Adjust breakpoint as needed

  const textStyle = {
    fontSize: isMobile ? '11px' : '18px', // Adjust font sizes as needed
    // Add other styles here
  };

  return <div style={textStyle}>{children}</div>;
};

export default Resizing
