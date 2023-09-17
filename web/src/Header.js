import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faWhatsapp,
    faTelegram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <header className="header">
            <div className="social-icons">
                <a href="https://www.facebook.com/dnkacademy"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/dnkacademy"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://wa.me/254703409248"><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href="https://t.me/dnk_courses"><FontAwesomeIcon icon={faTelegram} /></a>
                <a href="mailto:deenkhaalis.ke@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://www.twitter.com/dnkacademy"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.youtube.com/dnkacademy"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
            <h1 className="title">Da'watu      T'tawheed</h1>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/academy">Academy</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/donate">Donate</Link></li>
                </ul>
                
            </nav>
        </header>
        
    );
    <p>fukdshfksahfdkjsahfkjsahfffffjdsalkdlkajdlksadjsakdal</p>
}

export default Header;
