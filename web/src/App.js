import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import AboutUs from './AboutUs';
import Academy from './Academy';
import Signup from './Signup';
import Signin from './Signin';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import firebaseConfig from './firebaseConfig';
import Contacts from './Contacts';
import Donate from './Donate';
import Footer from './Footer';
import IbnMajah3 from './IbnMajah3';
import Muslim from './Muslim';
import './index.css'
import './App.css'
import Rightbar from './Rightbar';
import KhutbazaIjumaa4 from './KhutbazaIjumaa4';
import Authentication from './Authentication';
import AcademyLayout from './AcademyLayout';
function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Rightbar />
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/academy/signup" element={<Signup />} />
          <Route path="/academy/signin" element={<Signin />} />
          <Route path="/academy/auth" element={<Authentication />} />
          <Route path="/abu-feiswal-uthmaan-jilo/hadeeth/muslim" element={<Muslim />} />
          <Route path="abu-issa-muhammad-issa/hadeeth/ibn-majah" element={<IbnMajah3 />} />
          <Route path="/abu-uthmaan-nurein-uthmaan/khutwab/khutba-za-ijumaa" element={<KhutbazaIjumaa4 />} />
          </Routes>
      </div>
      <Sidebar />

    </div>
    
  );
}

export default App;
