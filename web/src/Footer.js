import React from 'react';
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
import './index.css'


function Footer() {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://www.facebook.com/dnkacademy"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/dnkacademy"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://wa.me/254703409248"><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href="https://t.me/dnk_courses"><FontAwesomeIcon icon={faTelegram} /></a>
                <a href="mailto:deenkhaalis.ke@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://www.twitter.com/dnkacademy"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.youtube.com/dnkacademy"><FontAwesomeIcon icon={faYoutube} /></a>
                <div className='footer-content'>
                    <p>&copy; {new Date().getFullYear()} Deen Khaalis, All rights reserved.</p>
                    {/* Other footer content */}
                </div>
            </div>
           
        </footer>
    );
}

export default Footer;
