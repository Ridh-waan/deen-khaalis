import React from 'react'

function Quran() {
    return (
        <div>
            Mawaidha
        </div>
    )
}

export default Quran

// import React, { useState, useEffect, useRef } from 'react';
// // import audio1 from '../Radio/Files/Quran/1.mp3'
// // import audio3 from '../Radio/Files/Quran/3.mp3'
// // import audio5 from '../Radio/Files/Quran/5.mp3'
// // import audio6 from '../Radio/Files/Quran/6.mp3'
// // import audio8 from '../Radio/Files/Quran/8.mp3'
// // import audio9 from '../Radio/Files/Quran/9.mp3'
// // import audio10 from '../Radio/Files/Quran/10.mp3'
// // import audio11 from '../Radio/Files/Quran/11.mp3'
// // import audio12 from '../Radio/Files/Quran/12.mp3'
// // import audio13 from '../Radio/Files/Quran/13.mp3'
// // import audio14 from '../Radio/Files/Quran/14.mp3'
// // import audio15 from '../Radio/Files/Quran/15.mp3'
// // import audio16 from '../Radio/Files/Quran/16.mp3'

// // const audioFiles = [audio1, audio3, audio5, audio6, audio8, audio9, audio10, audio11, audio12, audio13, audio14,
// //     audio15, audio16];
// const Quran = ({ isPlaying }) => {
//     const [currentFileIndex, setCurrentFileIndex] = useState(0);
//     const [startPlaying, setStartPlaying] = useState(false);

//     const audioRef = useRef(null);

//     useEffect(() => {
//         audioRef.current.src = audioFiles[currentFileIndex];
//     }, [currentFileIndex, audioFiles]);

//     useEffect(() => {
//         if (!audioRef.current) return;

//         if (isPlaying) {
//             audioRef.current.play().catch(error => {
//                 console.error('Autoplay prevented:', error);
//             });
//         } else {
//             if (audioRef.current) {
//                 audioRef.current.pause();
//             }
//         }

//         return () => {
//             if (audioRef.current) {
//                 audioRef.current.pause();
//                 audioRef.current.currentTime = 0;
//             }
//         };
//     }, [isPlaying]);

//     useEffect(() => {
//         audioRef.current.src = audioFiles[currentFileIndex];
//         audioRef.current.onloadeddata = () => {
//             if (isPlaying || startPlaying) {
//                 audioRef.current.play();
//             }
//         };
//     }, [currentFileIndex, audioFiles, isPlaying, startPlaying]);

//     const togglePlay = () => {
//         setIsPlaying(!isPlaying);
//     };

//     return (
//         <div>
//             <button onClick={togglePlay}>
//                 {isPlaying ? 'Pause' : 'Play'}
//             </button>
//             <audio ref={audioRef} />
//         </div>
//     );
// };

// export default Quran;