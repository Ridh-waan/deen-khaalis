import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import './index.css';
import './App.css';
const Bayaan4 = () => {
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
            <p>Hizi ni Bayaan zilizotolewa na sheikh wetu Abu Uthmaan Nurein</p>
            <div className="audio-container">
                <ol>
                    <li>
                        <a href="/Audios/nurein/bayaan/JE_KUSWALI_TARAWEHE_KWA_JAMAA_NI_BIDAH.mp3" download="JE_KUSWALI_TARAWEHE_KWA_JAMAA_NI_BIDAH.mp3" onClick={handleAudioClick}>Je Kuswali Tarawehe Kwa Jamaa ni Bid'ah?</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/bayaan/kwa-wasio-ijua-jamia-islamia/JAMIA_ISLAMIA.mp3" download="JAMIA_ISLAMIA.mp3" onClick={handleAudioClick}>Kwa wasioijua Jamia Islamiya</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/bayaan/shubha-za-vitabu-vymaulid/shub-ha_ya_vitabu_vya_maulidi.mp3" download="shub-ha_ya_vitabu_vya_maulidi.mp3" onClick={handleAudioClick}>Shubha ya Vitabu vy Maulidi</a>
                    </li>
                    {/* Add more audio files as needed */}
                </ol>
            </div>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/nurein/bayaan/JE_KUSWALI_TARAWEHE_KWA_JAMAA_NI_BIDAH.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/bayaan/kwa-wasio-ijua-jamia-islamia/JAMIA_ISLAMIA.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/bayaan/shubha-za-vitabu-vymaulid/shub-ha_ya_vitabu_vya_maulidi.mp3" type="audio/mpeg" />
                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>

    );
}

export default Bayaan4;
