import React from 'react';
import { Link } from 'react-router-dom';

const Academy = () => {
    const Arabic = () => {
        alert("Kwa sasa hatupokei Maombi ya kitengo hiki, ufunguzi ukifanywa ujumbe utatumwa katika social handle zetu");
    };

    const Mutawassit = () => {
        // window.open('https://forms.gle/KC4Ng9o3SUYR5pHL9', '_blank');
        alert("Kwa sasa hatupokei Maombi ya kitengo hiki, ufunguzi ukifanywa ujumbe utatumwa katika social handle zetu");
     };
     

     const Thanawi = () => {
        // window.open('https://forms.gle/KC4Ng9o3SUYR5pHL9', '_blank');
        alert("Kwa sasa hatupokei Maombi ya kitengo hiki, ufunguzi ukifanywa ujumbe utatumwa katika social handle zetu");

     };
     
     
    const wageni = () => {
        alert("Kwa sasa hatupkei Maombi ya kitengo hiki, ufunguzi ukifanywa ujumbe utatumwa katika social handle zetu");
    };

    return (
        <div className='py-10 absolute h-full mt-20 bg-red-100'>
            <div className='text-center text-1xl font-bold'> Hizi ni programs za Deen Khaalis Academy chini ya usimamizi
                wa Sheikh Abu Uthmaan Nurein
            </div>
            <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full'>
                <div>
                    <button className='bg-purple-900	 rounded px-20 py-2 w-full h-[17rem] leading-loose' onClick={Arabic}>
                        <h2 className='text-white'> BARNAMIJ YA LUGHA YA KIARABU KWA WANAO ANZA</h2>
                        <br />
                        <p className='text-center font-bold'>Arabic Course</p>
                        <p className='font-bold'> For Beginners</p>
                    </button>
                </div>
                <div>
                    <button className='bg-purple-900 rounded px-20 py-6 w-full h-[17rem] leading-loose' onClick={Mutawassit}>
                        <h2 className='text-white'>BARNAMIJ YA MUTAWASSIT</h2><br />
                        <p className='font-bold'>Intermediate Course </p>
                        {/* <button className='bg-green-500 rounded px-6 py-2 mt-2'> 
                        Apply
                    </button> */}
                    </button>
                </div>
                <div>
                    <button className='bg-purple-900 rounded px-20 py-6 w-full h-[17rem] leading-loose' onClick={Thanawi}>
                        <h2 className='text-white'>BARNAMIJ YA THANAWI</h2><br />
                        <p className='font-bold'>Secondary Course</p>
                        {/* <button className='bg-green-500 rounded px-6 py-2 mt-10'> 
                        Apply
                    </button> */}
                    </button>
                    
                </div>
                <div>
                    <button className='bg-purple-900 rounded px-20 py-6 w-full h-[17rem] leading-loose' onClick={wageni}>
                        <h2 className='text-white'>BARNAMIJ YA WAISILAMU WAGENI</h2><br />
                        <p className='font-bold'>New Muslims Course</p>
                        <p className='font-bold'>(Coming soon)</p>
                    </button>
                    
                </div>
            </div>
            <div className='text-center text-1xl py-10 font-bold '>Barnajim ya Thanawi na Mutawassit zimefunguliwa, gusa mojawapo ya barnamij hapo juu ili ujisajili kwa
                ajili ya masomo katika Deen Khaalis Academy
            </div>
        </div>
    );
};

export default Academy;
