import React, { useState } from 'react';
import AudioPlayer from '../../../components/AudioPlayer'
import '../../../App.css'
import '../../../index.css'

const Mihadhara4 = () => {
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
            <p>Huu ni <b>Mihadhara</b> mbali mbali iliyotolewa na sheikh wetu Abu Uthmaan Nurein</p>
            <div className="audio-container">
                <ol>
                    <li>
                        <a href="/Audios/nurein/mihadhara/kuhalalisha_na_kuharamaisha_Nurein.mp3" download="kuhalalisha_na_kuharamaisha_Nurein.mp3" onClick={handleAudioClick}>Kuhalalisha na Na kuharamisha</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/mihadhara/kuwatendea-wema-wazazi.mp3" download="kuwatendea-wema-wazazi.mp3" onClick={handleAudioClick}>Kuwatendea wema Wazazi</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/mihadhara/Misingi_tatu_kwa_wenye_kutafuta_Elimu_[Nurein].mp3" download="Misingi_tatu_kwa_wenye_kutafuta_Elimu_[Nurein].mp3" onClick={handleAudioClick}>Misingi mitatu kwa mwenye kuitafuta elimu</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/mihadhara/Umuhimu_wa_kujifunza_Aqeeda.mp3" download="Umuhimu_wa_kujifunza_Aqeeda.mp3" onClick={handleAudioClick}>Umuhimu wa kujifunza <b>Aqeedah</b> </a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/mihadhara/Wasia muhimu_sana_kutoka_kwa_Mtume.mp3" download="Wasia muhimu_sana_kutoka_kwa_Mtume.mp3" onClick={handleAudioClick}>Wasia muhimu sana kutoka kwa <b>Mutme</b></a>
                    </li>



                    {/* Add more audio files as needed */}
                </ol>
            </div>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/nurein/mihadhara/kuhalalisha_na_kuharamaisha_Nurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mihadhara/kuwatendea-wema-wazazi.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mihadhara/Misingi_tatu_kwa_wenye_kutafuta_Elimu_[Nurein].mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mihadhara/Umuhimu_wa_kujifunza_Aqeeda.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mihadhara/Wasia muhimu_sana_kutoka_kwa_Mtume.mp3" type="audio/mpeg" />
                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>

    );
}

export default Mihadhara4;
