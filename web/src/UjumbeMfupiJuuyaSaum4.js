import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import './index.css';
import './App.css';
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
            <p>Huu ni Ujumbe mfupi kuhusu Swaum, <b>Risala ya Sheikh Abdullah ibn Abdulaziz ibn Baaz</b> uliofundishwa na sheikh wetu Abu Uthmaan Nurein</p>
            <div className="audio-container">
                <ol>
                    <li>
                        <a href="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-01-[Nurein_Ibn_Uthman].mp3" download="Ujumbe_mfupi_kuhusu_saum-01-[Nurein_Ibn_Uthman].mp3" onClick={handleAudioClick}>Ujumbe Kuhusu Saum</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-02-[Nurein_Ibn_Uthman].mp3" download="Ujumbe_mfupi_kuhusu_saum-02-[Nurein_Ibn_Uthman].mp3" onClick={handleAudioClick}>Ujumbe Kuhusu Saum</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-03-[Nurein_Ibn_Uthman].mp3" download="Ujumbe_mfupi_kuhusu_saum-03-[Nurein_Ibn_Uthman].mp3" onClick={handleAudioClick}>Ujumbe Kuhusu Saum</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-04-[Nurein_Ibn_Uthman].mp3" download="Ujumbe_mfupi_kuhusu_saum-04-[Nurein_Ibn_Uthman].mp3" onClick={handleAudioClick}>Ujumbe Kuhusu Saum</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-05-[Nurein_Ibn_Uthman].mp3" download="Ujumbe_mfupi_kuhusu_saum-05-[Nurein_Ibn_Uthman].mp3" onClick={handleAudioClick}>Ujumbe Kuhusu Saum</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-06-[Nurein_Ibn_Uthman].mp3" download="Ujumbe_mfupi_kuhusu_saum-06-[Nurein_Ibn_Uthman].mp3" onClick={handleAudioClick}>Ujumbe Kuhusu Saum</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-07-[Nurein_Ibn_Uthman].mp3" download="Ujumbe_mfupi_kuhusu_saum-07-[Nurein_Ibn_Uthman].mp3" onClick={handleAudioClick}>Ujumbe Kuhusu Saum</a>

                    </li>
                    {/* Add more audio files as needed */}
                </ol>
            </div>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-01-[Nurein_Ibn_Uthman].mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-02-[Nurein_Ibn_Uthman].mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-03-[Nurein_Ibn_Uthman].mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-04-[Nurein_Ibn_Uthman].mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-05-[Nurein_Ibn_Uthman].mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-06-[Nurein_Ibn_Uthman].mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/fiqh/ujumbe-mfupi-juu-ya-saum/Ujumbe_mfupi_kuhusu_saum-07-[Nurein_Ibn_Uthman].mp3" type="audio/mpeg" />

                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>

    );
}

export default Qiyaam4;
