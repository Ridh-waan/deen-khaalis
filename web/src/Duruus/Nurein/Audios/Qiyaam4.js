import React, { useState } from 'react';
import AudioPlayer from '../../../components/AudioPlayer'
import '../../../App.css'
import '../../../index.css'

const Qiyaam4 = () => {
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
            <p>Hizi ni audio kuhusu <b>Qiyamu Leily</b> zilizotolewa na sheikh wetu Abu Uthmaan Nurein</p>
            <div className="audio-container">
                <ol>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt1-abuNurein.mp3" download="MasailQiyamUlLaylPt1-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt2-abuNurein.mp3" download="MasailQiyamUlLaylPt2-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt3-abuNurein.mp3" download="MasailQiyamUlLaylPt3-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt4-abuNurein.mp3" download="MasailQiyamUlLaylPt4-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt5-abuNurein.mp3" download="MasailQiyamUlLaylPt5-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt6-abuNurein.mp3" download="MasailQiyamUlLaylPt6-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt7-abuNurein.mp3" download="MasailQiyamUlLaylPt7-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt8-abuNurein.mp3" download="MasailQiyamUlLaylPt8-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt9-abuNurein.mp3" download="MasailQiyamUlLaylPt9-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt10-abuNurein.mp3" download="MasailQiyamUlLaylPt10-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt11-abuNurein.mp3" download="MasailQiyamUlLaylPt11-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt12-abuNurein.mp3" download="MasailQiyamUlLaylPt12-abuNurein.mp3" onClick={handleAudioClick}>Qiyamu Leily</a>
                    </li>
                    {/* Add more audio files as needed */}
                </ol>
            </div>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt1-abuNurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt2-abuNurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt3-abuNurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt4-abuNurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt5-abuNurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt6-abuNurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt7-abuNurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt8-abuNurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt9-abuNurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt10-abuNurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt11-abuNurein.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/qiyamulayl/MasailQiyamUlLaylPt12-abuNurein.mp3" type="audio/mpeg" />
                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>

    );
}

export default Qiyaam4;
