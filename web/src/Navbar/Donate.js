import React from 'react'
import donation from './home/Images/bursary.png';
const Donate = () => {
  return (
    <div className='section' id='Donate'>
      <div className='grid sm:grid-cols-2 place-items-center gap-4'>
      <div className='pl-5'>
          <div className='font-bold sm:text-[1.6rem] text-[1.2rem] mb-5'>
            Message from the  <span className='text-Teal'>Early Years</span><br/>  
          </div>
          <p className='text-sm leading-7 text-gray mb-5'>
Dear Parents and Guardians,
Welcome to Manarat International School of Kenya, 
a hub of holistic and lifelong learning. Our distinctive approach, 
merging British and Islamic education, nurtures spiritual growth, 
intellectual curiosity, and self-discovery, ensuring students excel 
academically, socially, physically, and emotionally. Upholding values of 
respect, compassion, excellence, and piety, we prepare students for global 
challenges while embracing their unique potential. Come witness our motivated 
students in our purposeful learning environment. We look forward to a fulfilling, 
enduring partnership with your family.
Warm regards,

 </p>
  <button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold'>
     Miss Ruth,

Early Years   
          </button>
        </div>
        <div className='p-4 md:w-0.75'>
          <img src={donation} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Donate