import React from 'react'
import khutba from './Images/khutba.jpg';
const Khutba = () => {
  return (
    <div className='section' id='Khutba'>
 <div className='sm:text-3xl text-2xl font-bold mb-5 text-center'>
      Khutba, duruus, mihadhara <span className='text-Teal'> 
       na kalimaat zilizotolewa karibuni</span>
          </div>
      <div className='grid sm:grid-cols-2 place-items-center gap-4'>
      <div className='pl-5'>
          <div className='font-bold sm:text-[1.6rem] text-[1.2rem] mb-2 text-center'>
            Khutba ya   <span className='text-lime-500'>ijumaa ya hivi karibuni</span><br/>  
          </div>
          <p className='text-sm leading-7 mb-5'>
          ...anatuelezea Ubaadah Radhia Allahu anhu kwamba Mtume ﷺ alilala akaota akaonyeshwa Laylatul Qadr akaamka
          akatoka nje kwenda kuwaambia watu Laylatul qadr ni siku fulani.....

<br/>
<br/>
<b>Tarehe:</b> ilitolewa siku ya ijumaa 19/09/1445 sawia na 29/03/2024

 <br/>
 <br/>

 <b>Mahali:</b> Masjid Khairaat Kiziwi, Tudor, mjini Mombasa, Kenya
<br/>
 <br/>
<b>Anwani ya Khutba:</b> Kujitahidi kwenye kumi la mwisho la Ramadhan
<br/>
 <br/>
<b>Khatwiib:</b> Sheikh Abu Issa Muhammad Issah Hafidhahu Allah war'aah
 </p>
  {/* <button className='py-3 px-4 bg-lime-500 rounded-lg text-sm font-bold'>
     <a href='https://www.mchanga.africa/fundraiser/96144' target="_blank">Listen Now</a>  
          </button> */}
          <audio controls>
     <source src='https://archive.org/download/mafunzo-kwenye-tukio-la-new-zealand/kujitahidi_kwenye_kumi_la_mwisho_la_ramadhan.mp3' /> 
          </audio>
        </div>
        <div className='p-4 md:w-0.75'>
        <div className='border-[6px] border-solid border-yellow-900 rounded-lg'>
          <img src={khutba} alt="khutba"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Khutba