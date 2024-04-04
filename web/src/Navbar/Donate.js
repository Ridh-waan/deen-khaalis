import React from 'react'
import donation from './home/Images/bursary.png';
const Donate = () => {
  return (
    <div className='section' id='Donate'>
      <div className='grid sm:grid-cols-2 place-items-center gap-4'>
      <div className='pl-5'>
          <div className='font-bold sm:text-[1.6rem] text-[1.2rem] mb-2'>
            Ndugu zetu  <span className='text-lime-500'>wenyekupenda heri</span><br/>  
          </div>
          <p className='text-sm leading-7 mb-5'>
Kwa minajili ya mahitaji ya wengi kujiunga na masomo ya Arabic, 
idara ya Deen Khaalis Online Academy imefungua mchango huu, ili kudhamini nafasi
 50 za ziada katika usajili unaofuata, hivyo tunatarajia kuongeza nafasi kutokea 100 hadi kufikia 150.
 <br/>
Mradi huu ni sadaka yenye kudumu thawabu zake, iliyoashiriwa na kauli ya Nabii swala na salamu za 
Allah zimshukie: (Mtu anapokufa amali zake hukatika ila kupitia matatu: ..., au elimu yenye kunufaisha...) 
[Muslim: 1631], Sheikh ibnu Baaz na Ulamaa wengineo wamesema: "Na kila aliyechangia katika kuitoa elimu hii 
yenye manufaa atapata thawabu hii adhimu", [Allajnatu ddaaimah 11/17].
<br/>
Mpesa:
<br/>
Paybill no. 891300
<br/>
Account no. 96144
<br/>
Jazakallahu khaira!
 </p>
  <button className='py-3 px-4 bg-lime-500 rounded-lg text-sm font-bold'>
     <a href='https://www.mchanga.africa/fundraiser/96144' target="_blank">Maendeleo ya mchango</a>  
          </button>
        </div>
        <div className='p-4 md:w-0.75'>
        <div className='border-[6px] border-solid border-lime-500 rounded-lg'>
          <img src={donation} alt="mchago"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Donate