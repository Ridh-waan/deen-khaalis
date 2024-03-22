import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Navbar/Header';
import Home from './Navbar/home/Home';
import Duruus from './Navbar/Duruus/Duruus';
import AboutUs from './Navbar/AboutUs';
import Academy from './Navbar/Academy';
import Contacts from './Navbar/Contacts';
import Books from './Books/Books';
import {Mihadhara1, KhutbazaIjumaa1, Shamail1, Hakami2018, QawaidArbaa1, ManhajSalikiin1} from './Duruus/Jilo/index'


import { Mihadhara2, KhutbazaIjumaa2, Ubudiya2, Shurutuswala2, Idd2, Bulughu2, AbuDawd2, Alwasaail2,
Bahjat2, Bukhary2, AqeedatuTawheed2, ArbaunaNawawi2 } from './Duruus/Alamin';


import { MajmuuFatwa3, Akhtwaa3, Raziyein3, KuiadhimishaSwala3, Muharar3, QiswaruSuwar3, AlQabaair3, Wajibuna3,
Hakami2021, Yuusuf3, Eldamaravine3, QashfaShubhaat3, TalkheesSwifatiSwala3, Malindi3, Qaraawi2021, Ankabuut3, 
ArbaunaFiAhkaam3, Usuluthalatha3, QawaidArbaa3, Swaad3, MinAkhlaaq3, Taqreeb3, KitabuIlmu3, Kifaya3, Hujraat3,
FadhlulMadina3, Idd3, Ijumaa3, SwareeheSunnah3, UmdatulMara3, Ubuudiya3, KitabuTawheed3, UsuluSittah3, SuratulMulk3,
 ManhajSalikeen3, FadhluIslaam3, DurusulMuhimmah3, WasaailMufidah3, AdabulMashii3, JuzuuAmma3, Lumua3, Kalima3,
SuratulQalam3} from './Duruus/BinIsa/index'


 import {
  AbuWalidy4, KhutbazaIjumaa4, Qiyaam4, Bayaan4, KuitakasaNafsi4, UjumbeMfupiJuuyaSaum4,
  Istiqbal4, Mawaidha4, ZiaraNairobi4, Jawamiualkalim4, Mihadhara4, KhutbaZaIdd4, Nyimbo4,
  Ruduud4, Aweso4, NawaqdhIslaam4, Usulusitta4, Asmau4,
} from './Duruus/Nurein/index'
import Radio from './Radio/Radio';
import Hadeeth from './Radio/Hadeeth';
import Mawaidha from './Radio/Mawaidha';
import KuitaasaNafsi4 from './Duruus/Nurein/Audios/nafsi/KuitakasaNafsi4';
import QuraanRadio from './Radio/quran/QuraanRadio';
import HadeethRadio from './Radio/hadeeth/HadeethRadio';
import MawaidhaRadio from './Radio/mawaidha/MawaidhaRadio';

function App() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 600);

  useEffect(() => {
    // Update isMobileView when the window is resized
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="bg-white ">
      <Header />
      <div className="h-screen w-full font-Poppins pt-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/duruus" element={<Duruus />} />
          <Route path="/books" element={<Books />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/radio" element={<Radio />} />
          {/* <Route path="/radio/quran" element={<QuraanRadio />} />
          <Route path="/radio/hadeeth" element={<Hadeeth />} />
          <Route path="/radio/mawaidha" element={<Mawaidha />} /> */}
          {/* <Route path="/radio/hadeeth" element={<HadeethRadio />} />
          <Route path="/radio/mawaidha" element={<MawaidhaRadio />} /> */}

                  {/**Duruus za Sheikh Jilo */}
         <Route path="/duruus/abu-feiswal-uthmaan-jilo/mihadhara/mihadhara" element={<Mihadhara1 />} />
         <Route path="/duruus/abu-feiswal-uthmaan-jilo/khutwab/khuta-za-ijumaa" element={<KhutbazaIjumaa1 />} />
         <Route path="/duruus/abu-feiswal-uthmaan-jilo/hadeeth/shamaail-muhammadiyah" element={<Shamail1 />} />
         <Route path="/duruus/abu-feiswal-uthmaan-jilo/dawrah/3-al-haafidh-hakamy" element={<Hakami2018 />} />
         <Route path="/duruus/abu-feiswal-uthmaan-jilo/tawheed/qawaid-arbaa" element={<QawaidArbaa1 />} />
         <Route path="/duruus/abu-feiswal-uthmaan-jilo/dawrah/6-al-haafidh-hakamy" element={<ManhajSalikiin1 />} />

         
         
         {/**Duruus za Sheikh Alamin */}
         <Route path="/duruus/abu-ibraheem-alamin-saeed/mihadhara/mihadhara" element={<Mihadhara2 />} />
         <Route path="/duruus/abu-ibraheem-alamin-saeed/khutwab/khutba-za-ijumaa" element={<KhutbazaIjumaa2 />} />
         <Route path="/duruus/abu-ibraheem-alamin-saeed/aqeedah/ubuudiyah" element={<Ubudiya2 />} />
         <Route path="/duruus/abu-ibraheem-alamin-saeed/fiqh/shuruutu-swalah" element={<Shurutuswala2 />} />
         <Route path="/duruus/abu-ibraheem-alamin-saeed/khutwab/khutba-za-idd" element={<Idd2 />} />
         <Route path="/duruus/abu-ibraheem-alamin-saeed/hadeeth/bulughul-maraam" element={<Bulughu2 />} />
         <Route path="/duruus/abu-ibraheem-alamin-saeed/hadeeth/abu-daud" element={<AbuDawd2 />} />
         <Route path="/duruus/abu-ibraheem-alamin-saeed/tazkiyatu-nafs/al-wasaail-al-mufidah" element={<Alwasaail2 />} />
         <Route path="/duruus/abu-ibraheem-alamin-saeed/dawrah/6-al-haafidh-hakamy" element={<Bahjat2 />} />
         <Route path="/duruus/abu-ibraheem-alamin-saeed/dawrah/3-al-haafidh-hakamy" element={<Bukhary2 />} />
         <Route path="/duruus/abu-ibraheem-alamin-saeed/aqeedah/aqeedatuh-tawheed" element={<AqeedatuTawheed2 />} />
         <Route path="/duruus/abu-ibraheem-alamin-saeed/hadeeth/arbauna-nawawi" element={<ArbaunaNawawi2 />} />

          {/**Duruus za Sheikh Bin Isa */}
          <Route path="/duruus/abu-issa-muhammad-issa/aqeedah/akhtwaat-fil-aqeedah" element={<Akhtwaa3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/aqeedah/aqeedatu-arraziyain" element={<Raziyein3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/fiqh/kuiadhimisha-swalah" element={<KuiadhimishaSwala3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/fiqh/majmuu-fatawa" element={<MajmuuFatwa3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/hadeeth/al-muharar-fil-hadeeth" element={<Muharar3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tafseer/qiswaaru-suwar" element={<QiswaruSuwar3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/dawrah/6-sheikh-al-haafidh-al-hakamy" element={<Hakami2021 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/hadeeth/arbauna-fil-ahkaam" element={<ArbaunaFiAhkaam3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tafseer/suratu-ankabuut" element={<Ankabuut3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/dawrah/eldama-ravine" element={<Eldamaravine3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/dawrah/malindi" element={<Malindi3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/dawrah/6-sheikh-abdallah-al-qar'aawi" element={<Qaraawi2021 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/fiqh/talkhees-sifatiswalah" element={<TalkheesSwifatiSwala3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/aqeedah/al-qabaair" element={<AlQabaair3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tawheed/wajibuna" element={<Wajibuna3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tawheed/usulu-thalatha" element={<Usuluthalatha3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tawheed/qawaeed-arba" element={<QawaidArbaa3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tawheed/qashf-shubhaat" element={<QashfaShubhaat3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tafseer/suratul-swaad" element={<Swaad3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tafseer/faidah-min-qiswatu-yuusu" element={<Yuusuf3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/seera/taqreeb" element={<Taqreeb3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/seera/min-akhlaaq" element={<MinAkhlaaq3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/hadeeth/kitaab-ilmu" element={<KitabuIlmu3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/hadeeth/al-kifayah" element={<Kifaya3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tafseer/suratu-hujraat" element={<Hujraat3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tazkiyatu-nafsi/fadhlul-al-madina" element={<FadhlulMadina3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/khutwab/khutba-za-idd" element={<Idd3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/khutwab/khutba-za-ijumaa" element={<Ijumaa3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/aqeedah/akhtwaa-fil-aqeedah" element={<Akhtwaa3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/aqeedah/swareehi-sunnah" element={<SwareeheSunnah3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/hadeeth/umdatul-mar'a" element={<UmdatulMara3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/aqeedah/al-ubuudiyah" element={<Ubuudiya3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tawheed/kitabu-tawheed" element={<KitabuTawheed3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tawheed/usulu-sittah" element={<UsuluSittah3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tafseer/suratul-mulk" element={<SuratulMulk3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/fiqh/manhaj-salikeen" element={<ManhajSalikeen3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/aqeedah/fadhlul-islaam" element={<FadhluIslaam3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tazkiyatu-nafsi/adurusul-muhimmah" element={<DurusulMuhimmah3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tazkiyatu-nafsi/al-wasaail-mufidah" element={<WasaailMufidah3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/fiqh/adabul-mashiy" element={<AdabulMashii3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tafseer/juzuu-amma" element={<JuzuuAmma3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/aqeedah/lumuat-itqaad" element={<Lumua3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tazkiyatu-nafsi/kalima" element={<Kalima3 />} />
          <Route path="/duruus/abu-issa-muhammad-issa/tafseer/suratul-qalam" element={<SuratulQalam3 />} />


          {/**Duruus za Sheikh Nurein */}
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/bayaan/bayaan" element={<Bayaan4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/fiqh/istiqbali-shahary-ramadhan" element={<Istiqbal4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/fiqh/qiyaamu-layl" element={<Qiyaam4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/fiqh/ujumbe-mfupi-juu-ya-swaum" element={<UjumbeMfupiJuuyaSaum4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/fiqh/imaam-abu-walidy-al-baajy" element={<AbuWalidy4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/hadeeth/jawaamiu-al-kalim" element={<Jawamiualkalim4 />} />
          <Route path="duruus/abu-uthmaan-nurein-uthmaan-/mawaidha/faaida-mukhtasira" element={<Mawaidha4 />} />
          <Route path="duruus/abu-uthmaan-nurein-uthmaan-/mihadhara/huqmu-ya-nyimbo" element={<Nyimbo4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/mihadhara/mihadhara-mbali-mbali" element={<Mihadhara4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/mihadhara/ziara-nairobi" element={<ZiaraNairobi4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/khutwab/khutba-za-idd" element={<KhutbaZaIdd4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/khutwab/khutba-za-ijumaa" element={<KhutbazaIjumaa4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/mihadhara/misingi-kumi-ya-kuitakasa-nafsi" element={<KuitaasaNafsi4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/ruduud/ruduud" element={<Ruduud4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/ruduud/majibu-kwa-aweso" element={<Aweso4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/tawheed/nawaqidh-islaam" element={<NawaqdhIslaam4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/tawheed/usulu-sittah" element={<Usulusitta4 />} />
          <Route path="/duruus/abu-uthmaan-nurein-uthmaan-/tawheed/sharh-asmau-al-husna" element={<Asmau4 />} />

        </Routes>
      </div>
    </section>
  );
}

export default App;