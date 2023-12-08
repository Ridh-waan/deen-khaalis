import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Navbar/Header';
import Home from './Navbar/Home';
import Duruus from './Navbar/Duruus';
import AboutUs from './Navbar/AboutUs';
import Academy from './Navbar/Academy';
import Contacts from './Navbar/Contacts';
import Donate from './Navbar/Donate';
import Rightbar from './Books/Rightbar';
import HamburgerMenu from './Mobile/HamburgerMenu';
import {IbnMajah3} from './Duruus/BinIsa/index'
import {AbuWalidy4, KhutbazaIjumaa4, Qiyaam4, Bayaan4, KuitakasaNafsi4, UjumbeMfupiJuuyaSaum4,
Istiqbal4, Mawaidha4, ZiaraNairobi4, Jawamiualkalim4, Mihadhara4, KhutbaZaIdd4, Nyimbo4
} from './Duruus/Nurein/index'
import Resizing from '../src/components/Resizing'
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
      <Resizing>
      <Header isMobileView={isMobileView} />
      <div className="content">
        <Routes>
            <Route path="/" element={<Home />} />
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
            <Route path="duruus/abu-uthmaan-nurein-uthmaan/khutwab/khutba-za-idd" element={<KhutbaZaIdd4 />} />
            <Route path="/duruus/abu-uthmaan-nurein-uthmaan/khutwab/khutba-za-ijumaa" element={<KhutbazaIjumaa4 />} />
        </Routes>

      </div>
      </Resizing>

    </div>
  );
}

export default App;
