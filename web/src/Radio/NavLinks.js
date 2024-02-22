import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { links } from './MyLinks';

const NavLinks = ({ open, setIsPlaying }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const [currentUrl, setCurrentUrl] = useState(location.pathname);

    useEffect(() => {
        setCurrentUrl(location.pathname);
    }, [location]);

    const handleMainLinkClick = (link) => {
        setHeading(heading !== link.name ? link.name : "");
        navigate(link.link);
    };

    const handleSubLinkClick = (link, sublink) => {
        setSubHeading(subHeading !== sublink.Head ? sublink.Head : "");
        navigate(`${link.link}${sublink.link}`);

        // Toggle isPlaying state when "Qur'aan" link is clicked
        if (sublink.Head === "Qur'aan") {
            setIsPlaying(prevIsPlaying => !prevIsPlaying);
        }
    };

    return (
        <>
            {links.map((link) => (
                <div key={link.id}>
                    <div className='px-2 text-center md:cursor-pointer group'>
                        <h1 className='menu-header py-7 flex justify-between mt-0.7 items-center md:pr-0 pr-5 group'
                            onClick={() => handleMainLinkClick(link)}>
                            {link.name}
                            <span className='text-xl md:hidden inline'>
                                <ion-icon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
                            </span>
                            <span className='text-xl md:mt-1 md:ml-2 inline md:block hidden group-hover:rotate-180 '>
                                <ion-icon name="chevron-down" ></ion-icon>
                            </span>
                        </h1>
                        {link.submenu && (
                            <div>
                                <div className='absolute top-20 hidden group-hover:md:block hover:md:block '>
                                    <div className='py-4'>
                                    </div>
                                    <div className='bg-green-500 p-4 grid grid-cols-3 gap-5 overflow-y-auto max-h-[400px]'>
                                        {
                                            link.sublinks.map((mysublinks) => (
                                                <div key={`${link.id}-${mysublinks.id}`}>
                                                    <button className='bg-white text-black hover:bg-gray-200 hover:text-black py-2 px-4 rounded' onClick={() => handleSubLinkClick(link, mysublinks)}> {mysublinks.Head} </button>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
                        {/* sublink */}
                        {link.sublinks.map((slinks) => (
                            <div>
                                <div>
                                    <h1 onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")}
                                        className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center'> {slinks.Head}
                                        <span className='text-xl md:mt-1 md:ml-2 inline'>
                                            <ion-icon name={`${subHeading === slinks.Head ? "chevron-up" : "chevron-down"}`}></ion-icon>
                                        </span>
                                    </h1>
                                    <div className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"}`}>
                                        <Link to={slinks.link} className="hover:text-blue-500"> {slinks.Head} </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
export default NavLinks;
