import React, { useState } from 'react';
import AudioPlayer from '../../../components/AudioPlayer'
import '../../../App.css'
import '../../../index.css'

const Mawaidha4 = () => {
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
            <p>Haya ni <b>Mawaidha</b> yaliyotolewa na sheikh wetu Abu Uthmaan Nurein</p>
            <div className="audio-container">
                <ol>
                    <li>
                        <a href="/Audios/nurein/mawaidha/DUA_YA_KULALA.mp3" download="DUA_YA_KULALA.mp3" onClick={handleAudioClick}>Dua ya Kulala</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/mawaidha/faida-ya-swala-ya-mtume.mp4" download="faida-ya-swala-ya-mtume.mp4" onClick={handleAudioClick}>Faida ya Swala ya Mtume</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/mawaidha/faida-mukhtasira/Ni_Yapi_ya_Kufanywa_Katika_Mwezi_wa_Shaabān.mp3" download="Ni_Yapi_ya_Kufanywa_Katika_Mwezi_wa_Shaabān.mp3" onClick={handleAudioClick}>Ni yapi ya kufanywa katika mwezi wa Sha'baan</a>

                    </li>

                    <li>
                        <a href="/Audios/nurein/mawaidha/faida-mukhtasira/Yasiostahili_Kufanywa_Katika_Shaabān.mp3" download="Yasiostahili_Kufanywa_Katika_Shaabān.mp3" onClick={handleAudioClick}>Yasiyo Stahili Kufanywa Katika Sha'baan</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/mawaidha/kukmbuka_mauti.mp3" download="kukmbuka_mauti.mp3" onClick={handleAudioClick}>Kukumbuka Mauti</a>

                    </li>
                  
                    <li>
                        <a href="/Audios/nurein/mawaidha/siri-ya-adhkaar.mp4" download="" onClick={handleAudioClick}>Siri ya Adhqaar</a>

                    </li>

                    {/* Add more audio files as needed */}
                </ol>
            </div>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/nurein/mawaidha/DUA_YA_KULALA.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mawaidha/faida-ya-swala-ya-mtume.mp4" type="audio/mpeg" />
                    <source src="/Audios/nurein/mawaidha/faida-mukhtasira/Ni_Yapi_ya_Kufanywa_Katika_Mwezi_wa_Shaabān.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mawaidha/faida-mukhtasira/Yasiostahili_Kufanywa_Katika_Shaabān.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mawaidha/kukmbuka_mauti.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mawaidha/kukmbuka_mauti.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mawaidha/siri-ya-adhkaar.mp4" type="audio/mpeg" />

                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>

    );
}

export default Mawaidha4;
