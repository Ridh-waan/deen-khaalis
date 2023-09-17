import React, { useState } from 'react';
import './App.css';

const IbnMajah3 = () => {
    const [audioPlaying, setAudioPlaying] = useState(false);

    const handleAudioClick = () => {
        // Toggle the audio playing state
        setAudioPlaying(!audioPlaying);
    };

    return (
        <div className="ibnmajah-container">
            <h4>Download Audio Files:</h4>
            <ul>
                <li>
                    <a href="/Audios/bin_isa/kalima/record.ogg" download="record.ogg" onClick={handleAudioClick}>Audio File 1</a>
                </li>
                <li>
                    <a href="/path/to/audio2.mp3" download="Audio_File_2.mp3" onClick={handleAudioClick}>Audio File 2</a>
                </li>
                <li>
                    <a href="/path/to/audio2.mp3" download="Audio_File_2.mp3" onClick={handleAudioClick}>Audio File 2</a>
                </li>
                <li>
                    <a href="/path/to/audio2.mp3" download="Audio_File_2.mp3" onClick={handleAudioClick}>Audio File 2</a>
                </li>
                {/* Add more audio files as needed */}
            </ul>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/bin_isa/kalima/record.ogg" type="audio/ogg" />
                    <source src="/path/to/audio2.mp3" type="audio/mpeg" />
                    <source src="/path/to/audio2.mp3" type="audio/mpeg" />
                    <source src="/path/to/audio2.mp3" type="audio/mpeg" />
                    <source src="/path/to/audio2.mp3" type="audio/mpeg" />

                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>
    );
}

export default IbnMajah3;
