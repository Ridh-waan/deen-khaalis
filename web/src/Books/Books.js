import React from 'react';
import { Link } from 'react-router-dom';
import { covers } from './Covers'
import Cover from './Cover';


function Books() {
    return (
        <div>
            <div className='mt-20 text-center text-xl py-9'>
                Hizi ni Baadhi ya tungo na chapisho za Deen Khaalis
            </div>
            <div className='mt-4 px-4 w-full relative'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full'>
                    {covers.map(cover => {
                        return <Cover key={cover.id} {...cover} />;
                    })}
                </div>
            </div>

        </div>
    );
};


export default Books;
