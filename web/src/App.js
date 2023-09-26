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
import HamburgerMenu from './HamburgerMenu';
import IbnMajah3 from './IbnMajah3';
import KhutbaZaIdd4 from './KhutbaZaIdd4';
import KhutbazaIjumaa4 from './KhutbazaIjumaa4';
import Bayaan4 from './Bayaan4';
import Istiqbal4 from './Istiqbal4';
import Qiyaam4 from './Qiyaam4';
import UjumbeMfupiJuuyaSaum4 from './UjumbeMfupiJuuyaSaum4'
import AbuWalidy4 from './AbuWalidy4';
import Jawamiualkalim4 from './Jawamiualkalim4';
import Mawaidha4 from './Mawaidha4';
import Nyimbo4 from './Nyimbo4'
import Mihadhara4 from './Mihadhara4';
import ZiaraNairobi4 from './ZiaraNairobi4';
import './index.css';
import './App.css';

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
          <Route path="menu" element={<HamburgerMenu />} />
          <Route path="/duruus/abu-issa-muhammad-issa/hadeeth/ibn-majah" element={<IbnMajah3 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan/bayaan/bayaan" element={<Bayaan4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan/fiqh/istiqbali-shahary-ramadhan" element={<Istiqbal4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan/fiqh/qiyaamu-layl" element={<Qiyaam4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan/fiqh/ujumbe-mfupi-juu-ya-swaum" element={<UjumbeMfupiJuuyaSaum4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan/fiqh/nasaha-za-imaam-abu-walidy-al-baajy-kwa-wanawe" element={<AbuWalidy4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan/hadeeth/hadeeth-za-jawaamiu-al-kalama" element={<Jawamiualkalim4 />} />
          <Route path="duruus/abu-uthmaan-nurein-uthmaan/mawaidha/faaida-mukhtasira" element={<Mawaidha4 />} />
          <Route path="duruus/abu-uthmaan-nurein-uthmaan/mihadhara/huqmu-ya-nyimbo" element={<Nyimbo4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan/mihadhara/mihadhara-mbali-mbali" element={<Mihadhara4 />} />
        
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan/mihadhara/ziara-nairobi" element={<ZiaraNairobi4 />} />

          <Route path="duruus/abu-uthmaan-nurein-uthmaan/khutwab/khutba-za-idd" element={<KhutbaZaIdd4/>} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan/khutwab/khutba-za-ijumaa" element={<KhutbazaIjumaa4 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
