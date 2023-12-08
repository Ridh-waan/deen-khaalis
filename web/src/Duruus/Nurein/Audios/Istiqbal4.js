import React, { useState } from 'react';
import AudioPlayer from '../../../components/AudioPlayer'
import '../../../App.css'
import '../../../index.css'

const Istiqbal4 = () => {
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
            <p>Hizi ni audio za kitabu Istqbaal Shahry Ramadha cha Sheikh Amhad Yahya An-Najmy 
            kilichofundishwa na sheikh wetu Abu Uthmaan Nurein</p>
            <div className="audio-container">
                <ol>
                    <li>
                        <a href="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/1-istiqbaal_Shahr_Ramadhan.m4a" download="1-istiqbaal_Shahr_Ramadhan.m4a" onClick={handleAudioClick}>Istiqbaal Shahry Ramadhan</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/2-istiqbaal_Shahr_Ramadhan.m4a" download="2-istiqbaal_Shahr_Ramadhan.m4a" onClick={handleAudioClick}>Istiqbaal Shahry Ramadhan</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/3-istiqbaal_Shahr_Ramadhan.m4a" download="3-istiqbaal_Shahr_Ramadhan.m4a" onClick={handleAudioClick}>Istiqbaal Shahry Ramadhan</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/4-istiqbaal_Shahr_Ramadhan.mp3" download="4-istiqbaal_Shahr_Ramadhan.mp3" onClick={handleAudioClick}>Istiqbaal Shahry Ramadhan</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/5-istiqbaal_Shahr_Ramadhan.m4a" download="5-istiqbaal_Shahr_Ramadhan.m4a" onClick={handleAudioClick}>Istiqbaal Shahry Ramadhan</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/6-istiqbaal_Shahr_Ramadhan.m4a" download="6-istiqbaal_Shahr_Ramadhan.m4a" onClick={handleAudioClick}>Istiqbaal Shahry Ramadhan</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/7-istiqbaal_Shahr_Ramadhan.mp3" download="7-istiqbaal_Shahr_Ramadhan.mp3" onClick={handleAudioClick}>Istiqbaal Shahry Ramadhan</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/8-istiqbaal_Shahr_Ramadhan.m4a" download="8-istiqbaal_Shahr_Ramadhan.m4a" onClick={handleAudioClick}>Istiqbaal Shahry Ramadhan</a>
                    </li>
                    {/* Add more audio files as needed */}
                </ol>
            </div>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/1-istiqbaal_Shahr_Ramadhan.m4a" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/2-istiqbaal_Shahr_Ramadhan.m4a" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/3-istiqbaal_Shahr_Ramadhan.m4a" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/4-istiqbaal_Shahr_Ramadhan.m4a" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/5-istiqbaal_Shahr_Ramadhan.m4a" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/6-istiqbaal_Shahr_Ramadhan.m4a" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/7-istiqbaal_Shahr_Ramadhan.m4a" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/istiqbali-shary-ramadhan-cha-sheikh-ahmad-annajmi/8-istiqbaal_Shahr_Ramadhan.m4a" type="audio/mpeg" />

                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>

    );
}

export default Istiqbal4;
