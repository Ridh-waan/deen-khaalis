import React, { useState, useEffect, useRef } from 'react';
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
import NavLinks from '../Mobile/NavLinks';
import Quran from '../Mobile/Quran';

const Header = () => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const closeMenu = (event) => {
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


    return (
        <div className={`shadow-md w-full flex items-left fixed top-0 bg-${open ? 'white' : 'white'}`}>
            <div ref={containerRef} className="flex items-center justify-around py-2 md:px-10 px-7">
                <div className="font-bold text-2xl flex gap-2 items-center justify-between">
                    <div className='flex absolute right-2 gap-2'>
                        <a href="https://www.facebook.com/dnkacademy"> <BsFacebook /></a>
                        <a href="https://www.instagram.com/dnkacademy"> <BsInstagram /> </a>
                        <a href="https://wa.me/254703409248"> <BsWhatsapp /> </a>
                        <a href="https://t.me/dnk_courses"> <BsTelegram /> </a>
                        <a href="mailto:deenkhaalis.ke@gmail.com"> <BsEnvelope /> </a>
                        <a href="https://www.twitter.com/dnkacademy"> <FaXTwitter /> </a>
                        <a href="https://www.youtube.com/@DeenKhaalis"><BsYoutube /> </a>
                    </div>
                    <div className='flext gap-2'>
                        <div className="text-3xl md:hidden" onClick={handleIconClick}>
                            {open ? <HiX /> : <HiMenu />}
                        </div>
                    </div>
                </div>

                <ul className="md:flex hidden uppercase font-bold gap-2">
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block mt-1.5">
                            Mwanzo
                        </Link>
                    </li>
                    <NavLinks open={open} />
                </ul>
                <div className='px-6 md:block hidden  '>
                    <Quran />
                </div>

                {/* Mobile View */}
                {open && (
                    <ul
                        className={`md:hidden absolute font-bold w-full h-full bottom-0 py-1 pl-4 gap-3 font-Poppin
                            duration-500 ${open ? "left-0" : "left-[-100%]"}`}
                    >
                        <li className='py-20'>
                            <Link to="/" className="py-7 px-3 inline-block absolute mt-1">
                                Mwanzo
                            </Link>
                        </li>
                        <div className='py-1'>
                            <NavLinks open={open} />
                        </div>
                        <li className='py-9'>
                            <Link to="/quran" className="py-1 px-2 inline-block">
                                <Quran />
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Header;
