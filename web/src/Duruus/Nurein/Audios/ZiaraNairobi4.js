import React, { useState } from 'react';
import AudioPlayer from '../../../components/AudioPlayer'
import '../../../App.css'
import '../../../index.css'

const ZiaraNairobi4 = () => {
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
            <p>Hii ni <b>Mihadhara</b> mbali mbali iliyotolewa na sheikh wetu Abu Uthmaan Nurein alipoenda kufanya ziara Nairobi</p>
            <div className="audio-container">
                <ol>
                    <li>
                        <a href="/Audios/nurein/mihadhara/ziara-nairobi/Fadhla_ya_Uislamu_na_sunnah.mp3" download="Fadhla_ya_Uislamu_na_sunnah.mp3" onClick={handleAudioClick}>Fadhila ya Uisilamu</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/mihadhara/ziara-nairobi/Kumfuata_mtume_kuliko_kamilika.mp3" download="Kumfuata_mtume_kuliko_kamilika.mp3" onClick={handleAudioClick}>Kumfuata mtume kuliko kamilika</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/mihadhara/ziara-nairobi/Manhaj_salaf_na_misingi_zake.mp3" download="Manhaj_salaf_na_misingi_zake.mp3" onClick={handleAudioClick}>Manhajj Salaf na Misingi yake</a>
                    </li>
                



                    {/* Add more audio files as needed */}
                </ol>
            </div>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/nurein/mihadhara/ziara-nairobi/Fadhla_ya_Uislamu_na_sunnah.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mihadhara/ziara-nairobi/Kumfuata_mtume_kuliko_kamilika.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mihadhara/ziara-nairobi/Manhaj_salaf_na_misingi_zake.mp3" type="audio/mpeg" />
                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>

    );
}

export default ZiaraNairobi4;
