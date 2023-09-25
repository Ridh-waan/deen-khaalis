import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import './index.css';
import './App.css';
const AbuWalidy4 = () => {
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
            <p>Huu ni Wasiya wa <b>Imaam Abu Walidy Al-Baajy</b> kwa wanawe, uliofundishwa na sheikh wetu Abu Uthmaan Nurein</p>
            <div className="audio-container">
                <ol>
                    <li>
                        <a href="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_1_12-5-1442,26-12-2020.mp3" download="darsa_1_12-5-1442,26-12-2020.mp3" onClick={handleAudioClick}>Nasaha za Imam Abu Walidy Al-Baajy</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_2,_13-5-1442,_27-12-2020.mp3" download="darsa_2,_13-5-1442,_27-12-2020.mp3" onClick={handleAudioClick}>Nasaha za Imam Abu Walidy Al-Baajy</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_3,_14-5-1442,_28-12-2020.mp3" download="darsa_3,_14-5-1442,_28-12-2020.mp3" onClick={handleAudioClick}>Nasaha za Imam Abu Walidy Al-Baajy</a>

                    </li>
             
                    <li>
                        <a href="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_4,_15-5-1442,_29-12-2020.mp3" download="darsa_4,_15-5-1442,_29-12-2020.mp3" onClick={handleAudioClick}>Nasaha za Imam Abu Walidy Al-Baajy</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_5,_16-5-1442,_30-12-2020.mp3" download="darsa_5,_16-5-1442,_30-12-2020.mp3" onClick={handleAudioClick}>Nasaha za Imam Abu Walidy Al-Baajy</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_6,_19-5-1442,_2-1-2021.mp3" download="darsa_6,_19-5-1442,_2-1-2021.mp3" onClick={handleAudioClick}>Nasaha za Imam Abu Walidy Al-Baajy</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_7,_20-5-1442,_3-1-2021.mp3" download="darsa_7,_20-5-1442,_3-1-2021.mp3" onClick={handleAudioClick}>Nasaha za Imam Abu Walidy Al-Baajy</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_8,_21-5-1442,_4-1-2021.mp3" download="darsa_8,_21-5-1442,_4-1-2021.mp3" onClick={handleAudioClick}>Nasaha za Imam Abu Walidy Al-Baajy</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_9,_22-5-1442,_5-1-2021.mp3" download="darsa_9,_22-5-1442,_5-1-2021.mp3" onClick={handleAudioClick}>Nasaha za Imam Abu Walidy Al-Baajy</a>

                    </li>
                    {/* Add more audio files as needed */}
                </ol>
            </div>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_1_12-5-1442,26-12-2020.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_2,_13-5-1442,_27-12-2020.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_3,_14-5-1442,_28-12-2020.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_4,_15-5-1442,_29-12-2020.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_5,_16-5-1442,_30-12-2020.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_6,_19-5-1442,_2-1-2021.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_7,_20-5-1442,_3-1-2021.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_8,_21-5-1442,_4-1-2021.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/tazkiyatu-nafsu/nasaha-za abu-walidy-al-baajy-kwa-wanawe/darsa_9,_22-5-1442,_5-1-2021.mp3" type="audio/mpeg" />
                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>

    );
}

export default AbuWalidy4;
