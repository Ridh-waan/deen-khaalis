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
            <p>Huu ni <b>Muhadhara</b> uliotolewa na sheikh wetu Abu Uthmaan Nurein</p>
            <div className="audio-container">
                <ol>
<li>
<a href="/Audios/nurein/mihadhara/nyimbo/Nyimbo,_hukmu_na_athari_zake.Mp3" download="Nyimbo,_hukmu_na_athari_zake.Mp3" onClick={handleAudioClick}>Nyimbo, hukmu yake na athari zake</a>
</li>
<li>
<a href="/Audios/nurein/mihadhara/nyimbo/Maswali_katika_mziki_na_athari_zake.mp3" download="Maswali_katika_mziki_na_athari_zake.mp3" onClick={handleAudioClick}>Maswali Kuhusu Mziki na Athari zake</a>
</li>
                  

                    

                    {/* Add more audio files as needed */}
                </ol>
            </div>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/nurein/mihadhara/nyimbo/Nyimbo,_hukmu_na_athari_zake.Mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/mihadhara/nyimbo/Maswali_katika_mziki_na_athari_zake.mp3" type="audio/mpeg" />
                    

                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>

    );
}

export default Mawaidha4;
