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
import Visits from "./Visits";
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
                    <div className="font-bold mb-6">Kuanza</div>
                    <p className="text-sm leading-9">
                    <a href="https://www.deenkhaalis.com" className="text-sm hover:underline">www.deenkhaalis.com  </a>                         ni tovuti

                        <br/> iliyoandaliwa kwa ajili ya kueneze
                        <br/> manhaj ya wema waliotangulia
                        <Visits/>
                    </p>
                </div>
            
                <div>
                    <div className="font-bold mb-6">Malengo yetu</div>
                    <div className="flex flex-col gap-4">
                        <div className="text-sm hover:underline">
                            Kunushuru mafunzo sahihi ya Uisilamu
                        </div>
                        <div className="text-sm hover:underline">
                        Kusahihisha sintofahamu juu ya Uisilamu
                        </div>
                        <div className="text-sm hover:underline">
                            Kunyanyua ufahamu na elimu ya Dini kwa watu
                        </div>
                        <div className="text-sm hover:underline">
                        Kuchangia katika kudumisha amani kwa kurakibisha fikra kali kwa vijana
                        zinazoenda kinyume na mafunzo halisi ya Uisilamu
                        </div>
                        <div className="text-sm hover:underline">
                            Kuhamasisha jamii katika mikakati ya kimaendeleo
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-bold mb-6">Yaliyomo</div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="text-sm hover:underline">
                        <Link to="/duruus"> Duruus </Link> </a>
                        <a href="" className="text-sm hover:underline">
                        <Link to="/academy"> Academy </Link></a>
                        <a href="" className="text-sm hover:underline">
                            <Link to="/books"> Vitabu </Link></a>
                            <a href="" className="text-sm hover:underline">
                            <Link to="/"> Makala </Link></a>
                            <a href="" className="text-sm hover:underline">
                            <Link to="/radio"> Radio </Link></a>
                    </div>
                </div>
                <div>
                    <div className="font-bold mb-6">Mitandao ya kijamii</div>
                    <div className="text-sm mb-4 hover:underline">Kufikisha rai yako, 
                    wasiliana nasi kupitia:</div>
                    <div className="text-sm mb-4 hover:underline">deenkhaalis.ke@gmail.com</div>
                    <div className="text-sm mb-4 hover:underline">+254 703 409248</div>
                    <div className="flex gap-4 mb-2">
                    <a href="https://m.facebook.com/deenkhaalis"> <BsFacebook /></a>
                            <a href="https://www.instagram.com/deenkhaalis"> <BsInstagram /> </a>
                            <a href="https://chat.whatsapp.com/FzGbMympMtoDPWmV9aO3z1"> <BsWhatsapp /> </a>
                            <a href="https://t.me/deenkhaalis"> <BsTelegram /> </a>
                        <a href="mailto:deenkhaalis.ke@gmail.com"> <BsEnvelope /> </a>
                        <a href="https://www.twitter.com/deenkhaalis"> <FaXTwitter /> </a>
                            <a href="https://www.youtube.com/@DeenKhaalis"><BsYoutube /> </a>
                    </div>
                    <div className="text-sm">     </div>

                </div>
            </div>
        </motion.div>

    );
};

export default Footer;