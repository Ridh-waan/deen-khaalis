import React, { useState } from 'react';
import AudioPlayer from '../../../components/AudioPlayer'
import '../../../App.css'

const KhutbazaIjumaa4 = () => {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [currentAudioSrc, setCurrentAudioSrc] = useState('');

    const handleAudioClick = (audioSrc) => {
        // Set the audio source and show the audio player
        setCurrentAudioSrc(audioSrc);
        setAudioPlaying(true);
    };

    const handleCloseAudioPlayer = () => {
        // Close the audio player and reset the audio source
        setCurrentAudioSrc('');
        setAudioPlaying(false);
    };

    return (
        <div className="khutbazaijumaa4-container">
            <p>Hizi ni Khutba za Ijumaa zilizotolewa na sheikh wetu Abu Uthmaan Nurein</p>
            <div className="audio-container">
            <ol>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/imani.mp3" download="imani.mp3" onClick={handleAudioClick}>Imani</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/Arafa-Idi-na-Siku-za-Tashriiq.mp3" download="Arafa-Idi-na-Siku-za-Tashriiq.mp3" onClick={handleAudioClick}>Arafa Idd na Siku za Tashriq</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/FADHILA-ZA-RAMADHANI-NA-KUIKARIBISHA.mp3" download="FADHILA-ZA-RAMADHANI-NA-KUIKARIBISHA.mp3" onClick={handleAudioClick}>Fadhila za Ramadhan na Kuikarinisha</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/hali-ya-muisilamu-na-Qur-ani.mp3" download="hali-ya-muisilamu-na-Qur-ani.mp3" onClick={handleAudioClick}>Hali ya Muisiliamu na Qura'an</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/ISTIGHFAAR(KUOMBA-MSAMAHA-KWA-ALLAH).mp3" download="ISTIGHFAAR(KUOMBA-MSAMAHA-KWA-ALLAH).mp3" onClick={handleAudioClick}>Kumuomba Allah Msamaha (Istighfaar)</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/kaburi-ndio-mashukio-ya-kwanza-ya-akhera.mp3" download="kaburi-ndio-mashukio-ya-kwanza-ya-akhera.mp3" onClick={handleAudioClick}>Kaburi ndio Mashukio ya Kwanza ya Akhera</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/kisimamo-cha-siku-ya-mwisho-mbele-ya-Allah.mp3" download="kisimamo-cha-siku-ya-mwisho-mbele-ya-Allah.mp3" onClick={handleAudioClick}>Kisimamo cha siku ya Mwisho mbele ya Allah</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/Kuamini-Ghaib.mp3" download="Kuamini-Ghaib.mp3" onClick={handleAudioClick}>Kuamini Ghaib</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/KUMTUKUZA-MTUME-1-2-1442-18-9-2020.mp3" download="KUMTUKUZA-MTUME-1-2-1442-18-9-2020.mp3" onClick={handleAudioClick}>Kumtukuza Mtume</a>
                </li>
                        <li>
                            <a href="/Audios/nurein/khutbazaijumaa/Kusuluhisha-na-Uovu-wa-Kufisidi.mp3" download="Kusuluhisha-na-Uovu-wa-Kufisidi.mp3" onClick={handleAudioClick}>Kusuluhisha na Uovu wa Kufisidisha</a>
                        </li>
                        <li>
                            <a href="/Audios/nurein/khutbazaijumaa/kuwa-wema-kwa-watoto.mp3" download="kuwa-wema-kwa-watoto.mp3" onClick={handleAudioClick}>Kuwa Wema Kwa Watoto</a>
                        </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/KUWATENDA-WEMA-WAZAZI.mp3" download="KUWATENDA-WEMA-WAZAZI.mp3" onClick={handleAudioClick}>Kuwatenda Wema Wazazi</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/mafunzo-suratu-yusuf-6-8-1442-28-3-2021.mp3" download="mafunzo-suratu-yusuf-6-8-1442-28-3-2021.mp3" onClick={handleAudioClick}>Baadhi ya Mafunzo katika Suratu Yussuf</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/Matunda-ya-ramadhani-10-shawwaal-1437.mp3" download="Matunda-ya-ramadhani-10-shawwaal-1437.mp3" onClick={handleAudioClick}>Matunda ya Ramadhan</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/mazingatio-ya-ramadhani-2019-05-10-1440-09-05.mp3" download="mazingatio-ya-ramadhani-2019-05-10-1440-09-05.mp3" onClick={handleAudioClick}>Mazingatio ya Ramadhan</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/MCHENI-ALLAHmp3" download="MCHENI-ALLAH.mp3" onClick={handleAudioClick}>Mecheni Allah</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/MILANGO-YA-DUA-NA-KUWAOMBEA-FALASTINA.mp3" download="MILANGO-YA-DUA-NA-KUWAOMBEA-FALASTINA.mp3" onClick={handleAudioClick}>Milango ya Dua na Kuwaombea Falastina</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/neema-ya-akili.mp3" download="neema-ya-akili.mp3" onClick={handleAudioClick}>Neema ya Akili</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/neema-ya-misikiti.mp3" download="neema-ya-misikiti.mp3" onClick={handleAudioClick}>Neema ya Misikiti</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/NEEMA-YA-MVUA-NA-HUKMU-ZAKE.mp3" download="NEEMA-YA-MVUA-NA-HUKMU-ZAKE.mp3" onClick={handleAudioClick}>Neema ya Mvua na Hukmu zake</a>
                </li>
                <li>
                    <a href="/Audios/nurein/khutbazaijumaa/Ubora-wa-mwezi-wa-Muharam.mp3" download="Ubora-wa-mwezi-wa-Muharam.mp3" onClick={handleAudioClick}>Ubora wa Mwezi wa Muharram</a>
                </li>
                
                
                {/* Add more audio files as needed */}
            </ol>
          </div>
            {audioPlaying && (
                    <audio controls autoPlay>
                        <source src="/Audios/nurein/khutbazaijumaa/imani.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/khutbazaijumaa/Arafa-Idi-na-Siku-za-Tashriiq.mp3" type="audio/mpeg" />

                        <source src="/Audios/nurein/khutbazaijumaa/Ubora-wa-mwezi-wa-Muharam.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/khutbazaijumaa/FADHILA-ZA-RAMADHANI-NA-KUIKARIBISHA.mp3" type="audio/mpeg" />
                        <source src="/path/to/audio2.mp3" type="audio/mpeg" />

                        {/* Add more audio sources if needed */}
                        Your browser does not support the audio element.
                    </audio>
            )}
        </div>
    
    );
}

export default KhutbazaIjumaa4;
