import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Duruus from './Duruus';
import AboutUs from './AboutUs';
import Academy from './Academy';
import Contacts from './Contacts';
import Donate from './Donate';
import Rightbar from './Rightbar';
import IbnMajah3 from './IbnMajah3';
import KhutbazaIjumaa4 from './KhutbazaIjumaa4';
import './index.css';
import './App.css';
import './styles.css';

function App() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 600);

  useEffect(() => {
    // Update isMobileView when the window is resized
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app">
      <Header isMobileView={isMobileView} />
      <div className="content">
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/duruus" element={<Duruus />} />
          <Route path="/rightbar" element={<Rightbar />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/duruus/abu-issa-muhammad-issa/hadeeth/ibn-majah" element={<IbnMajah3 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan/khutwab/khutba-za-ijumaa" element={<KhutbazaIjumaa4 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
