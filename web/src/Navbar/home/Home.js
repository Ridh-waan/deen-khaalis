import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Slide_DeenKhaalis_Binisa from './Images/Hero1.jpg'
import Slide_DeenKhaalis_Nurein from './Images/Hero2.jpg'
import academyprograms from './Images/Hero3.png'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import FAQs from '../../components/faq/FAQs';
import Footer from '../../components/Footer';
import { faqs } from '../../components/faq/Data';
const Home = () => {
  const [curr, setCurr] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const imageList = [
    { id: 1, text: 'Barnamaj ya Duruus za Sheikh Muhhamad Issa, gusa hii link ugiunge na telegram channel yake', image: Slide_DeenKhaalis_Binisa },
    { id: 2, text: 'Barnamaj ya Duruus za Sheikh Nurein, Abu Uthmaan, gusa hii link ugiunge na telegram channel yake', image: Slide_DeenKhaalis_Nurein },
    { id: 3, text: 'Barnamaj ya Masomo katika DeenKhaalis Academy, gusa hii link ugiunge na masomo', image: academyprograms },
  ];

  const isMobileView = useMediaQuery({ maxWidth: 600 });

  const prev = () => setCurr((curr) => (curr === 0 ? imageList.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === imageList.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const id = setInterval(next, 9000); // Change slide every 3 seconds
    setIntervalId(id);

    return () => clearInterval(id); // Clear interval on component unmount
  }, []);

  return (
    <>

<aside className="py-7 relative mt-20">
      <div className="flex transition-transform ease-out duration-9000 border-[5px] border-solid border-green-500 rounded-lg">
        <motion.img
          key={imageList[curr].id}
          src={imageList[curr].image}
          className="w-full h-full object-cover transition-transform duration-9000 ease-in-out"
          alt='logo'
        />
      </div>
      <div className="inset-0 flex items-center justify-between p-2 mt-16">
 <button
    onClick={prev}
    className="p-2 rounded-full shadow bg-green-500 text-gray-800 hover:bg-maroon flex items-center justify-center"
 >
    <BsChevronLeft size={30} />
 </button>
 <button
    onClick={next}
    className="p-2 rounded-full shadow bg-green-500 text-gray-800 hover:bg-maroon flex items-center justify-center"
 >
    <BsChevronRight size={30} />
 </button>
</div>

      <div>
      <p className="image-text text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" style={{ fontSize: isMobileView ? '16px' : '24px' }}>
        {imageList[curr].text}
      </p>
      </div>

      <div className='mt-40 text-center my-8 sm:text-[1.9rem] text-[1.4rem] '>
        Maswali yanayoulizwa <span className='text-Teal'>kwa wingi</span>
      </div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {faqs.map(faq => {
          return <FAQs key={faq.id} {...faq} />;
        })}
      </div>
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
