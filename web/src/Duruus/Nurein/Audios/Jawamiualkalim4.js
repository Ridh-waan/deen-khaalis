import React, { useState } from 'react';
import AudioPlayer from '../../../components/AudioPlayer'
import '../../../App.css'
import '../../../index.css'

const Jawamiualkalim4 = () => {
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
            <p>Hizi ni <b>Hadith za Jawamiu Al-Qalim</b> zilizochaguliwa na kufundishwa na sheikh wetu Abu Uthmaan Nurein</p>
            <div className="audio-container">
                <ol>
                    <li>
                        <a href="/Audios/nurein/hadeeth/jawamiu-al-kalim/1_niyyah,_22-3-1442_8-11-2020.mp3" download="1_niyyah,_22-3-1442_8-11-2020.mp3" onClick={handleAudioClick}>Niyyah</a>
                    </li>
                    <li>
                        <a href="/Audios/nurein/hadeeth/jawamiu-al-kalim/2_mutaba3a,_ 24-3-1442_10-11-2020.mp3" download="2_mutaba3a,_ 24-3-1442_10-11-2020.mp3" onClick={handleAudioClick}>Mutaba'a</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/hadeeth/jawamiu-al-kalim/3_Dini_ni_nasiha,_29-3-1442,_15-11-2020.mp3" onClick={handleAudioClick}>Dini ni Nasiha</a>

                    </li>

                    <li>
                        <a href="/Audios/nurein/hadeeth/jawamiu-al-kalim/4_imanina_istiqama,_1-4-1442,_17-11-2020.mp3" download="4_imanina_istiqama,_1-4-1442,_17-11-2020.mp3" onClick={handleAudioClick}>Imani na Istiqama</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/hadeeth/jawamiu-al-kalim/6-Maana_ya_Muslim,_Mu'min_na_Muhajir_Mujahid,_7_4_1442,_22_11_2020.mp3" download="6-Maana_ya_Muslim,_Mu'min_na_Muhajir_Mujahid,_7_4_1442,_22_11_2020.mp3" onClick={handleAudioClick}>Maana ya Muisilamu, Mu'min, Muhaajir na Mujahid</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/hadeeth/jawamiu-al-kalim/7-Kujikinga_na_wasiwasi,_9-4-1442,_24-11-2020.mp3" download="7-Kujikinga_na_wasiwasi,_9-4-1442,_24-11-2020.mp3" onClick={handleAudioClick}>Kujikinga na Wasiwasi</a>

                    </li>
                    <li>
                        <a href="/Audios/nurein/hadeeth/jawamiu-al-kalim/8_mlinganizi_wa_uongofu_na_wa_upotevu_6-5-1442,_20-12-2020.mp3" download="8_mlinganizi_wa_uongofu_na_wa_upotevu_6-5-1442,_20-12-2020.mp3" onClick={handleAudioClick}>Mlinganizi wa Uongofu na Mlinganizi wa Upotevu</a>

                    </li>
 
                    <li>
                        <a href="/Audios/nurein/hadeeth/jawamiu-al-kalim/9_kupewa_ufahamu_wa_dini,_13-5-1442,_27-12-2020.mp3" download="9_kupewa_ufahamu_wa_dini,_13-5-1442,_27-12-2020.mp3" onClick={handleAudioClick}>Kupewa Ufahamu wa Dini</a>

                    </li>
                    {/* Add more audio files as needed */}
                </ol>
            </div>
            {audioPlaying && (
                <audio controls autoPlay>
                    <source src="/Audios/nurein/hadeeth/jawamiu-al-kalim/1_niyyah,_22-3-1442_8-11-2020.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/hadeeth/jawamiu-al-kalim/2_mutaba3a,_ 24-3-1442_10-11-2020.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/hadeeth/jawamiu-al-kalim/3_Dini_ni_nasiha,_29-3-1442,_15-11-2020.mp3" type="audio/mpeg" />
                    <source src="//Audios/nurein/hadeeth/jawamiu-al-kalim/4_imanina_istiqama,_1-4-1442,_17-11-2020.mp3" type="audio/mpeg" />
                    <source src="//Audios/nurein/hadeeth/jawamiu-al-kalim/6-Maana_ya_Muslim,_Mu'min_na_Muhajir_Mujahid,_7_4_1442,_22_11_2020.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/hadeeth/jawamiu-al-kalim/7-Kujikinga_na_wasiwasi,_9-4-1442,_24-11-2020.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/hadeeth/jawamiu-al-kalim/8_mlinganizi_wa_uongofu_na_wa_upotevu_6-5-1442,_20-12-2020.mp3" type="audio/mpeg" />
                    <source src="/Audios/nurein/hadeeth/jawamiu-al-kalim/9_kupewa_ufahamu_wa_dini,_13-5-1442,_27-12-2020.mp3" type="audio/mpeg" />
                    {/* Add more audio sources if needed */}
                    Your browser does not support the audio element.
                </audio>
            )}
        </div>

    );
}

export default Jawamiualkalim4;
