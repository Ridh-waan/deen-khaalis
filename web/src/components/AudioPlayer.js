import React from 'react';
import '../../src/index.css'
import '../../src/App.css'

const AudioPlayer = ({ audioSrc, onClose }) => {
    return (
        <div className="audio-player">
            <audio controls autoPlay>
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default AudioPlayer;
