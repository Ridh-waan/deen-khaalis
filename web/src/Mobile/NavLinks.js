import React from 'react';

const NavLinks = ({ open }) => {
    const links = [
        { name: "Kutuhusu" },
        { name: "Duruus" },
        { name: "Vitabu" },
        { name: "Makala" },
        { name: "Academy" },
    ];

    return (
        <>
            {open && (
                <div>
                    {links.map((link, index) => (
                        <div key={index} className='px-2 text-left md:cursor-pointer'>
                            <h1 className='py-7'>{link.name}</h1>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default NavLinks;
