import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
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
  const [showSidebar, setShowSidebar] = useState(true); // Show Sidebar by default on desktop

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`app ${showSidebar ? 'show-sidebar' : ''}`}>
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="content">
        <Rightbar />
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/abu-issa-muhammad-issa/hadeeth/ibn-majah" element={<IbnMajah3 />} />
          <Route path="/abu-uthmaan-nurein-uthmaan/khutwab/khutba-za-ijumaa" element={<KhutbazaIjumaa4 />} />
        </Routes>
      </div>
      {window.innerWidth <= 600 ? ( // Check the window width for mobile view
        <button className="hamburger-button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      ) : (
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      )}
    </div>
  );
}

export default App;
