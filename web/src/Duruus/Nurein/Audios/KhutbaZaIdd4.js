import React, { useState } from 'react';
import AudioPlayer from '../../../components/AudioPlayer'
import '../../../App.css'
import '../../../index.css'

const KhutbaZaIdd4 = () => {
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
            <p>Hizi ni <b>Khutba za Idd</b> zilizotolewa na sheikh wetu Abu Uthmaan Nurein</p>
            <div className="audio-container">
                <ol>
                    <li>
                        <a href="/Audios/nurein/khutbazaidd/hukmu-za-furaha.mp3" download="hukmu-za-furaha.mp3" onClick={handleAudioClick}>Hukmu za Furaha</a>
                    </li>
                    <li>
                    <a href="/Audios/nurein/khutbazaidd/jamatul_muslimiin,_1-10-1442,_13-52021.mp3" download="jamatul_muslimiin,_1-10-1442,_13-52021.mp3" onClick={handleAudioClick}>Jama'a ya Waisilamu</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/khutbazaidd/Khutba_ya_eidul_adh-haa_1438.mp3" download="Khutba_ya_eidul_adh-haa_1438.mp3"onClick={handleAudioClick}>Khutba ya Iddul Adh'ha</a>

                    </li>


                    
                    {/* Add more audio files as needed */}
                </ol>
            </div>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/nurein/khutbazaidd/hukmu-za-furaha.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/hadeeth/jawamiu-al-kalim/2_mutaba3a,_ 24-3-1442_10-11-2020.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/khutbazaidd/Khutba_ya_eidul_adh-haa_1438.mp3" type="audio/mpeg" />
                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>

    );
}

export default KhutbaZaIdd4;
