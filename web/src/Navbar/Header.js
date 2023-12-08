import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import {
 BsFacebook,
 BsInstagram,
 BsWhatsapp,
 BsEnvelope,
 BsYoutube,
 BsTelegram
} from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

function Header({ isMobileView }) {
   const [showMenu, setShowMenu] = useState(false);
   const menuRef = useRef(null);
   const [active, setActive] = useState(false);

   useEffect(() => {
       const handleScroll = () => {
           setActive(window.scrollY > 20);
       };

       window.addEventListener("scroll", handleScroll);

       return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   useEffect(() => {
       const handleOutsideClick = (event) => {
           if (menuRef.current && !menuRef.current.contains(event.target)) {
               setShowMenu(false);
           }
       };

       if (showMenu) {
           document.addEventListener('click', handleOutsideClick);
       }

       return () => {
           document.removeEventListener('click', handleOutsideClick);
       };
   }, [showMenu]);

   const toggleMenu = () => {
       setShowMenu(!showMenu);
   };

   return (
       <header className={`header ${active ? "shadow-lg bg-Solitude" : ""}`}>
           <div className="social-icons">
               {/* section of social icons here */}
               <a href="https://www.facebook.com/dnkacademy"> <BsFacebook /></a>
               <a href="https://www.instagram.com/dnkacademy"> <BsInstagram /> </a>
               <a href="https://wa.me/254703409248"> <BsWhatsapp /> </a>
               <a href="https://t.me/dnk_courses"> <BsTelegram /> </a>
               <a href="mailto:deenkhaalis.ke@gmail.com"> <BsEnvelope /> </a>
               <a href="https://www.twitter.com/dnkacademy"> <FaXTwitter /> </a>
               <a href="https://www.youtube.com/@DeenKhaalis"><BsYoutube /> </a>
           </div>

           {isMobileView ? (
               <HiMenu onClick={toggleMenu} />
           ) : (
               <nav className="navbar">
                  <ul className="nav-list">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/duruus">Duruus</Link></li>
                      <li><Link to="/rightbar">Books</Link></li>
                      <li><Link to="/academy">Academy</Link></li>
                      <li><Link to="/contacts">Contacts</Link></li>
                      <li><Link to="/donate">Donate</Link></li>
                  </ul>
               </nav>
           )}

           {showMenu && (
               <div className="mobile-nav" ref={menuRef}>
                  <ul className="nav-list">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/duruus">Duruus</Link></li>
                      <li><Link to="/rightbar">Books</Link></li>
                      <li><Link to="/academy">Academy</Link></li>
                      <li><Link to="/contacts">Contacts</Link></li>
                      <li><Link to="/donate">Donate</Link></li>
                  </ul>
               </div>
           )}

           {/* Rest of your header content */}
       </header>
   );
}

export default Header;
