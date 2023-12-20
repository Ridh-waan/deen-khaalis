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
import { motion } from 'framer-motion';
import NavLinks from '../Mobile/NavLinks';
import Quran from '../Mobile/Quran';
const Header = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const closeMenu = () => {
            setOpen(false);
        };

        if (open) {
            document.addEventListener('click', closeMenu);
        }

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [open]);
    return (
        <div className="shadow-md w-full fixed top-0 bg-white">
            <div className="flex items-center  justify-around py-2 md:px-10 px-7">
                <div className="font-bold text-2xl flex gap-4 items-center justify-between">
                    <a href="https://www.facebook.com/dnkacademy"> <BsFacebook /></a>
                    <a href="https://www.instagram.com/dnkacademy"> <BsInstagram /> </a>
                    <a href="https://wa.me/254703409248"> <BsWhatsapp /> </a>
                    <a href="https://t.me/dnk_courses"> <BsTelegram /> </a>
                    <a href="mailto:deenkhaalis.ke@gmail.com"> <BsEnvelope /> </a>
                    <a href="https://www.twitter.com/dnkacademy"> <FaXTwitter /> </a>
                    <a href="https://www.youtube.com/@DeenKhaalis"><BsYoutube /> </a>
                    {open ? (
                        <div className='text-3xl md:hidden' onClick={() => setOpen(false)}>
                            <HiX />
                        </div>
                    ) : (
                        <div className='text-3xl md:hidden' onClick={() => setOpen(true)}>
                            <HiMenu />
                        </div>
                    )}
                </div>

                <ul className="md:flex hidden uppercase font-bold items-center right-0">
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Mwanzo
                        </Link>
                    </li>
                    <NavLinks />
                </ul>
                <div className='px-6 md:block hidden'>
                    <Quran />
                </div>

                {/*Mobile View*/}
                {open && (
                    <ul className={`md:hidden absolute font-bold w-full h-full bottom-0 py-24 pl-4
                    duration-500 ${open ? "left-0" : "left-[-100%]"} bg-green-500`}
                        onClick={(e) => e.stopPropagation()}>
                        <li className='py-20'>
                            <Link to="/" className="py-7 px-3 inline-block">
                                Mwanzo
                            </Link>
                        </li>
                        {/* Pass the open state to NavLinks */}
                        <NavLinks open={open} />
                        <li className='py-20'>
                            <Link to="/quran" className="py-7 px-3 inline-block">
                                Qur'an
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>

    );
}

export default Header;
