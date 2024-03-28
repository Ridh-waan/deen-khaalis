import React, {useContext} from "react";
import {
    BsFacebook,
    BsInstagram,
    BsWhatsapp,
    BsEnvelope,
    BsTelegram,
    BsYoutube,  
} from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion";
import { ThemeContext } from "../context/theme";
import { Link } from 'react-router-dom';

const Footer = () => {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

    return (

        <motion.div
             initial={{ height: 0 }}
             transition={{ duration: 1 }}
             className="p-10 bottom-0 w-full">
             <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 
             grid-cols-1 place-items-start gap-8 " style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <div>
              
                    <div className="font-bold mb-6">Getting Started</div>
                    <p className="text-sm leading-9">
                    <a href="https://www.deenkhaalis.com" className="text-sm hover:underline">www.deenkhaalis.com  </a>                         ni tovuti

                        <br/> iliyoandaliwa kwa ajili ya kueneze
                        <br/> manhaj ya wema waliotangulia
                         
                    </p>
                </div>
                <div>
                    <div className="font-bold mb-6">Services</div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="text-sm hover:underline">
                        <Link to="/duruus"> Duruus </Link> </a>
                        <a href="" className="text-sm hover:underline">
                        <Link to="/academy"> Academy </Link></a>
                        <a href="" className="text-sm hover:underline">
                            <Link to="/books"> Vitabu </Link></a>
                            <a href="" className="text-sm hover:underline">
                            <Link to="/radio"> Radio </Link></a>
                    </div>
                </div>
                <div>
                    <div className="font-bold mb-6">Our Goals</div>
                    <div className="flex flex-col gap-4">
                        <div className="text-sm hover:underline">
                            Kueneza Tawheed
                        </div>
                        <div className="text-sm hover:underline">
                        Kueneza Sunnah
                        </div>
                        <div className="text-sm hover:underline">
                            Kujiepusha na kufru na kufaar
                        </div>
                        <div className="text-sm hover:underline">
                        Kujieka mbali na makundi na watu wake
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-bold mb-6">Follow us</div>
                    <div className="text-sm mb-4 hover:underline">deenkhaalis.ke@gmail.com</div>
                    <div className="text-sm hover:underline">+254 703 409248</div>
                    <div className="flex gap-4 mt-4">
                    <a href="https://m.facebook.com/deenkhaalis"> <BsFacebook /></a>
                            <a href="https://www.instagram.com/deenkhaalis"> <BsInstagram /> </a>
                            <a href="https://chat.whatsapp.com/FzGbMympMtoDPWmV9aO3z1"> <BsWhatsapp /> </a>
                            <a href="https://t.me/deenkhaalis"> <BsTelegram /> </a>
                        <a href="mailto:deenkhaalis.ke@gmail.com"> <BsEnvelope /> </a>
                        <a href="https://www.twitter.com/deenkhaalis"> <FaXTwitter /> </a>
                            <a href="https://www.youtube.com/@DeenKhaalis"><BsYoutube /> </a>
                    </div>
                </div>
            </div>
        </motion.div>

    );
};

export default Footer;