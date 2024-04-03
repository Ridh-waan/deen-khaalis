import React from 'react';
import Footer from '../components/Footer';
import Programs from '../context/Programs';
import MapChart from '../context/map/Map';
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
        <aside className="py-7 absolute mt-20">
                                <h2 className='text-center  text-2xl font-bold mb-5'>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيم</h2>
        <div className='text-center text-1xl font-bold'> Hizi ni programs za Deen Khaalis Academy chini ya usimamizi
                wa Sheikh Abu Uthmaan Nurein
            </div>
            {/* <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full'> */}
            <div className='mt-4 px-4 w-full relative'>

            <div className='text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full'>

                <div>
                <button className='text-center  hover:scale-105  border-8 border-purple-900 bg-transparent rounded px-20 py-6 w-full h-[17rem] leading-loose' onClick={wageni}>
                        <p className='font-bold'>Arabic Course</p>
                        <p className='font-bold'> For Beginners</p>
                    </button>
                </div>
                <div>
                <button className='text-center  hover:scale-105  border-8 border-purple-900 bg-transparent rounded px-20 py-6 w-full h-[17rem] leading-loose' onClick={wageni}>
                        <h2 className='text-center '>MUTAWASSIT</h2><br />
                        <p className='text-center font-bold'>Intermediate Course </p>
                        {/* <button className='bg-green-500 rounded px-6 py-2 mt-2'> 
                        Apply
                    </button> */}
                    </button>
                </div>
                <div>
                <button className='text-center  hover:scale-105  border-8 border-purple-900 bg-transparent rounded px-20 py-6 w-full h-[17rem] leading-loose' onClick={wageni}>
                        <h2 className='text-center '>THANAWI</h2><br />
                        <p className='text-center font-bold'>Secondary Course</p>
                        {/* <button className='bg-green-500 rounded px-6 py-2 mt-10'> 
                        Apply
                    </button> */}
                    </button>
                    
                </div>
                <div>
    <button className='text-center  hover:scale-105  border-8 border-purple-900 bg-transparent rounded px-20 py-6 w-full h-[17rem] leading-loose' onClick={wageni}>
        <h2 className='text-center '>REVERTS</h2><br />
        <p className='text-center  font-bold'>New Muslims Course</p>
        <p className='text-center  font-bold'>(Coming soon)</p>
    </button>
</div>
</div>

            </div>
            <div className='text-center text-1xl py-10 font-bold '>
                Barnajim ya Thanawi na Mutawassit Zitafunguliwa mwisho wa mwezi wa June Biidhnillah
            </div>
            <Programs />
           
      {/* <div className='mb-0' style={{ width: '100%', height: '100%' }}>
 <MapChart />
</div> */}
            <div className='mt-20'>
            <div style={{ borderTop: '1px solid #000', marginBottom: '5px' }}></div>
                <Footer/>
            </div>
        </aside>
    );
};

export default Academy;
