import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './MyLinks';
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const NavLinks = ({ open }) => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
        <>
            {links.map((link) => (
                <div>
                    <div className='px-2 text-center md:cursor-pointer group'>
                        <h1 className='menu-header py-7 flex justify-between items-center md:pr-0 pr-5 group'
                            onClick={() => heading !== link.name ? setHeading(link.name) : setHeading("")}>
                            {link.name}
                            <span className='text-xl md:hidden inline'>
                                <ion-icon name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
                            </span>
                            <span className='text-xl md:mt-1 md:ml-2 inline md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                                <ion-icon name="chevron-down" ></ion-icon>
                            </span>
                        </h1>
                        {link.submenu && (
                            <div>
                                <div className='absolute top-20 hidden group-hover:md:block hover:md:block '>
                                    <div className='py-3'>
                                        <div className='w-50 h-10 left-3 absolute mt-20 bg-white rotate-45'>
                                        </div>
                                    </div>
                                    <div className='bg-green-500 p-4 grid grid-cols-3 gap-10 overflow-y-auto max-h-[500px]'>
                                        {
                                            link.sublinks.map((mysublinks) => (
                                                <div>
                                                    <button className={`text-lg font-semibold bg-indigo-500 uppercase text-white rounded px-4 py-2`}>{mysublinks.Head}</button>
                                                    {mysublinks.sublink.map(slink => (
                                                        <li className='text-sm text-gray-500 my-2.5'>
                                                            <Link to={slink.link} className='hover:text-blue-500'> {slink.name} </Link>
                                                        </li>
                                                    ))}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/*Mobile menus */}
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
                                        {slinks.sublink.map((slink) => (
                                            <li className='py-3 pl-14'>
                                                <Link to={slink.link} className="hover:text-blue-500">  {slink.name} </Link>
                                            </li>
                                        ))}
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
