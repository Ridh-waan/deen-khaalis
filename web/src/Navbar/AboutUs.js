import React from 'react';
import '../../src/App.css'
import '../../src/index.css'
import { Link } from 'react-router-dom';
function AboutUs() {
    return (
        <div className="pt-20 mt-10 ">
                    <h2 className='text-center  text-2xl font-bold mb-5'>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيم</h2>
            <div className='px-4'>

                Sifa njema zote anastahiki Allah Mola mlezi wa viumbe wote,
                na swala na salamu zimshukie Nabii wetu Muhammad, jamaa zake
                na masahaba wake kwa jumla. Ama bada ya himdi hii: <br />
                <br />
                Deen Khaalis ni mjumuiko wa akauti za Daawah,
                iliaanza mnamo 27/02/2014 kama group ya Daawah
                katika mtandao wa whatsapp kwa jina "Brothers Diiwaan",
                kisha ikabadilishwa jina na kuitwa "Al-Manhaj Kenya",
                na hatimae kuitwa <a href="https://www.deenkhaalis.com" className='text-blue-500'> "Deen Khaalis".</a>
                <br />
                <br />
                Deen Khaalis iko na akauti za Daawah katika mitandao ya
                WhatsApp, X (Twitter hapo awali), Facebook, Instagram na
                pia iko na <a href='https://www.deenkhaalis.com' className='text-blue-500'> Tovuti </a> yake maalum.

                Deen Khaalis inafanya Daawah kutegemea Qur-ani na Sunnah
                kupitia ufahamu wa wema waliotangulia (Salaf Swaleh),
                na kusisitiza zaidi Daawah ya Tawhidi na Manhaj ya Salafu,
                kupitia kunushuru <Link to="/duruus" className='text-blue-500'> Duruus </Link> zinazosajiliwa Misikitini,
                hotuba za ijumaa na idi, mihadhara na kalimati zinazotolewa
                Misikitini na mitandaoni, na makala, fatwa na nasaha
                mbali mbali za ulamaa na mashekhe wa kisunnah.
                <br /><br />
                Kufikia mwaka 2020 (katika kipindi cha corona virus)
                Deen Khaalis ilifanikiwa kufungua <Link to="/academy" className='text-blue-500'> Academy </Link>  inayofunza masomo (online) ya kiwango cha Mutawassit
                (intermediate) na Thanawi (secondary), na kufikia mwaka
                2022 Deen Khaalis Academy ilifanikiwa kufungua masomo ya
                Lugha ya kiarabu (online), yaliogawa katika mihula mitatu.
                <br />

                <br />
                Deen Khaalis Academy imehitimisha wanafunzi zaidi 50
                kufikia mwaka 2023.

                Deen Khaalis Academy inamatumaini ya kufungua
                kitengo cha masomo ya Waisilamu wageni hivi
                karibuni kwa idhini ya Allah Mwenye nguvu na utukufu.
                <br />
                <br />
                Mwisho tunamswalia na kumsalimia Nabii wetu Muhammad,
                watu wa nyumba yake na Masahaba wake.
            </div>
        </div>
    );
}

export default AboutUs;
