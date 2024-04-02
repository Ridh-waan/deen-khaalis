import React from 'react'


const Cover = ({ image, title, downloadLink }) => {
    return (
        <a href={downloadLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
             <div className='p-2 shadow-lg min-w-[10rem] max-w-full bg-green-500 rounded-md transition-transform duration-300 ease-in-out hover:scale-105'>
                <img src={image} alt='kitabu' className='max-w-full h-auto' />
                <div className='text-sm mt-2 font-bold flex justify-center items-center'>
                    {title}
                </div>  
            </div>
        </a>
    )
}


export default Cover