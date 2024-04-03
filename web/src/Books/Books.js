import React from 'react';
import { Link } from 'react-router-dom';
import { covers } from './Covers'
import Cover from './Cover';
import Footer from '../components/Footer';


function Books() {
    return (
        <aside className="py-7 absolute mt-20">
                                <h2 className='text-center  text-2xl font-bold mb-5'>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيم</h2>
        <div className='text-center text-xl py-9'>
                Hizi ni Baadhi ya tungo na chapisho za Deen Khaalis
            </div>
            <div className='mt-4 px-4 w-full relative'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-6 w-full'>
                    {covers.map(cover => {
                        return <Cover key={cover.id} {...cover} />;
                    })}
                </div>
            </div>
            <div className='mt-20'>
            <div style={{ borderTop: '1px solid #000', marginBottom: '5px' }}></div>

                <Footer/>

            </div>
        </aside>
    );
};


export default Books;
