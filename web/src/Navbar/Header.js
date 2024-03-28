import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import NavLinks from '../Radio/NavLinks';
import '../../src/App.css'
import { FaMoon } from 'react-icons/fa6';
import { MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from '../context/theme';
import { useContext } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    useEffect(() => {
        const closeMenu = (event) => {
            let element = event.target;

            // Traverse up the DOM tree
            while (element !== null) {
                // If the clicked element is a Link component, stop the propagation
                if (element instanceof HTMLAnchorElement) {
                    event.stopPropagation();
                    break;
                }

                // Move up to the parent element
                element = element.parentNode;
            }

            // Check if the click target is a menu header
            if (event.target.classList.contains('menu-header')) {
                // If it is, toggle the open state of the menu
                setOpen(!open);
            } else if (!containerRef.current.contains(event.target)) {
                // If it isn't, close the menu
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('click', closeMenu);
        }

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [open]);

    const handleIconClick = (e) => {
        e.stopPropagation();
        setOpen(!open);
    };
    const navigate = useNavigate();
    const handleLinkClick = (path) => {
        navigate(path);
        setOpen(false);
    };
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

    return (
        <>
        
<div className={`${open && window.innerWidth <= 768 ? 'green-overlay' : ''}`} style={{backgroundColor: theme.backgroundColor, color: theme.color}}></div>
<div className={`shadow-md w-full flex items-left fixed top-0 transition-colors duration-500 ease-in-out`} style={{ zIndex: 1000, backgroundColor: theme.backgroundColor, color: theme.color }}>
                <div ref={containerRef} className="flex items-center justify-around py-2 md:px-10">
                    <div className="font-bold text-2xl flex gap-2 items-center justify-between">
                        <div className='flex absolute right-2 gap-2'>
                            <a href="https://m.facebook.com/deenkhaalis"> <BsFacebook /></a>
                            <a href="https://www.instagram.com/deenkhaalis"> <BsInstagram /> </a>
                            <a href="https://chat.whatsapp.com/FzGbMympMtoDPWmV9aO3z1"> <BsWhatsapp /> </a>
                            <a href="https://t.me/deenkhaalis"> <BsTelegram /> </a>
                            <a href="mailto:deenkhaalis.ke@gmail.com"> <BsEnvelope /> </a>
                            <a href="https://www.twitter.com/deenkhaalis"> <FaXTwitter /> </a>
                            <a href="https://www.youtube.com/@DeenKhaalis"><BsYoutube /> </a>
                        </div>
                        {window.innerWidth > 768 && (
 <div className="app" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
    <button type="button" onClick={toggleTheme}>
    {isDark ? <MdOutlineLightMode /> : <FaMoon />}
    </button>
 </div>
)}

                        <div className='flext gap-2'>
                            <div className="text-3xl md:hidden" onClick={handleIconClick}>
                                {open ? <HiX /> : <HiMenu />}
                            </div>
                        </div>
                    </div>

                    <ul className="md:flex hidden text-lg font-bold gap-1">
                        <li>
                            <Link to="/" className="nav-link z-50 py-7 px-3 inline-block mt-1">

                                Home
                            </Link>
                            <Link to="/about" className="py-7 px-3 inline-block mt-1">
                                About
                            </Link>
                            <Link to="/duruus" className="py-7 px-3 inline-block mt-1">
                                Duruus
                            </Link>
                            <Link to="/books" className="py-7 px-3 inline-block mt-1">
                                Books
                            </Link>
                            <Link to="/academy" className="py-7 px-3 inline-block mt-1">
                                Academy
                            </Link>
                            {/* <Link to="/contacts" className="py-7 px-3 inline-block mt-1">
                                Contact Us
                            </Link> */}
                        </li>
                        <li >
                            <NavLinks open={open} setIsPlaying={setIsPlaying} />
                        </li>
                    </ul>

                   
                    {/* Mobile View */}
                    {open && (
                        <div className='flex absolute left-8 gap-2'>

                            <ul className="flex-col md:flex-column font-bold gap-1 mt-80">
                                <li>
                                    <Link to="/" className="nav-link z-50 py-7 px-3 inline-block mt-60" onClick={() => handleLinkClick("/")}>
                                        Home
                                    </Link>

                                </li>
                                <li>
                                    <Link to="/about" className="nav-link z-50 py-7 px-3 inline-block mt-2.5" onClick={() => handleLinkClick("/about")}>
                                        Kutuhusu
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/duruus" className="nav-link z-50 py-7 px-3 inline-block mt-1.5" onClick={() => handleLinkClick("/duruus")}>
                                        Duruus
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/books" className="nav-link z-50 py-7 px-3 inline-block mt-1.5" onClick={() => handleLinkClick("/books")}>
                                        Vitabu
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/academy" className="nav-link z-50 py-7 px-3 inline-block mt-1.5" onClick={() => handleLinkClick("/academy")}>
                                        Academy
                                    </Link>
                                </li>
                              
                                <li>
                                    <NavLinks open={open} setIsPlaying={setIsPlaying} />
                                </li>
                                <div className="app" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                         <button type="button" onClick={toggleTheme}>
                         {isDark ? <MdOutlineLightMode /> : <FaMoon />}
                                                 </button>
                                               </div>
                            </ul>

                        </div>
                    )}

                </div>
            </div>
            
        </>
    );
}

export default Header;