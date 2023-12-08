import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from '../Mobile/HamburgerMenu';
import {faFacebook, faInstagram, faWhatsapp, faTelegram, faTwitter, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../../src/App.css'

function Header({ isMobileView }) {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        // Function to close the menu when a click occurs outside
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        // Add a click event listener to the entire document when the menu is open
        if (showMenu) {
            document.addEventListener('click', handleOutsideClick);
        }

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [showMenu]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="header">
            <div className="social-icons">
                {/* Add your social icons here */}
                    <a href="https://www.facebook.com/dnkacademy"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.instagram.com/dnkacademy"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://wa.me/254703409248"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href="https://t.me/dnk_courses"><FontAwesomeIcon icon={faTelegram} /></a>
                    <a href="mailto:deenkhaalis.ke@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="https://www.twitter.com/dnkacademy"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.youtube.com/@DeenKhaalis"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
                {/* ... (social icons) */}

            {isMobileView ? (
                <HamburgerMenu />
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

            {/* Rest of your header content */}
        </header>
    );
}

export default Header;
