import React, { useState, useEffect } from 'react';
import Slide_DeenKhaalis_Binisa from './Images/Hero1.jpg'
import Slide_DeenKhaalis_Nurein from './Images/Hero2.jpg'
import academyprograms from './Images/Hero3.png'
import SlideShow from '../../components/SlideShow';
import FAQs from '../../components/faq/FAQs';
import Footer from '../../components/Footer';
import { faqs } from '../../components/faq/Data';
const Home = () => {
  const slides = [
    { id: 1, src: Slide_DeenKhaalis_Binisa },
    { id: 2, src: Slide_DeenKhaalis_Nurein },
    { id: 3, src: academyprograms },
  ];

  return (
    <>

<aside className="py-7 relative mt-20">
<div className="max-w-screen-xl mx-auto">
        <SlideShow>
          {slides}
        </SlideShow>
      </div>
      {/* <div className='mt-40 text-center my-8 sm:text-[1.9rem] text-[1.4rem] '>
        Maswali yanayoulizwa <span className='text-Teal'>kwa wingi</span>
      </div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {faqs.map(faq => {
          return <FAQs key={faq.id} {...faq} />;
        })}
      </div> */}
      <div className='mt-20'>
            <div style={{ borderTop: '1px solid #000', marginBottom: '5px' }}></div>

                <Footer/>

            </div>
    </aside>
    
    {/* <div className='grid md:grid-cols-2 gap-8 place-items-center mt-20'>
    <div className='left-4 border-[3px] border-solid border-Teal rounded-lg'>
    <img src={academy} alt='' style={{width: '800px', height: '500px'}} className='p-4'/>
    </div>
    <div className='font-bold sm:text -[1.9rem] text-[1.3rem]'>
    DeenKhaalis Academy inawatangazia <br/> Waisilamu  wote ufunguzi  wa <span className='text-Teal'> 
      masomo ya Thanawi na Mutawassit</span>
    
    <h2>Gender</h2>
    <p className='text-sm text-gray leading-7 mb-4'>
      Masomo ni kwa wananawake na wanaume na njia ya masomo yatakuwa Online
    </p>
    <h2>Deadline</h2>
    <p className='text-sm text-gray leading-7 mb-4'>
     Mwisho wa usajili ni tarehe 20/01/2024
    </p>
    <button className='py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold'>
    <Link to="/academy" className='text-black'> Apply Now </Link>    </button>
    </div>
    </div> */}
     </>
  );
};
export default Home;