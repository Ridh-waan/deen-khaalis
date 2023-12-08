import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function HamburgerMenu() {
    const [isActive, setIsActive] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        // Function to close the menu when a click occurs outside
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };

        // Add a click event listener to the entire document when the menu is open
        if (isActive) {
            document.addEventListener('click', handleOutsideClick);
        }

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isActive]);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div ref={menuRef}>
            <button
                className={`hamburger-button ${isActive ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            {isActive && (
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/duruus">Duruus</Link></li>
                    <li><Link to="/rightbar">Books</Link></li>
                    <li><Link to="/academy">Academy</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/donate">Donate</Link></li>
                </ul>
            )}
            {isActive && <div className="overlay"></div>}
        </div>
    );
}

export default HamburgerMenu;
