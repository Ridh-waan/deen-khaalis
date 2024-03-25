import React, { useRef } from 'react';
import {
    BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill,
    BsFillSkipEndCircleFill} from 'react-icons/bs';
import '../../../../../Duruus/Audio.scss'
import { LuArrowDownToLine } from "react-icons/lu";

const BASE_URL = 'https://www.deenkhaalis.com'; // replace with your actual base URL
const Player = ({ audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs }) => {
    const downloadLink = `${currentSong.url}`;

    const clickRef = useRef();

    const PlayPause = () => {
        setisplaying(!isplaying);

    }


    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;s
        const divprogress = offset / width * 100;
        audioElem.current.currentTime = divprogress / 100 * currentSong.length;

    }

    const skipBack = () => {
        const index = songs.findIndex(x => x.title === currentSong.title);
        if (index === 0) {
            setCurrentSong(songs[songs.length - 1])
        }
        else {
            setCurrentSong(songs[index - 1])
        }
        audioElem.current.currentTime = 0;

    }


    const skiptoNext = () => {
        const index = songs.findIndex(x => x.title === currentSong.title);

        if (index === songs.length - 1) {
            setCurrentSong(songs[0])
        }
        else {
            setCurrentSong(songs[index + 1])
        }
        audioElem.current.currentTime = 0;

    }


const selectSong = (song) => {
    setCurrentSong(song);
    setisplaying(true);
};

    return (
        <div className=''>
            <div className=' flex-col flex-grow overflow-y-auto'>
                <div className=" py-2 px-4 mt-28 cursor-pointer mb-4">
                <h2 className='text-center  text-2xl font-bold mb-5'>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيم</h2>
                    <p className='text-center'>Hizi ni sauti za kitabu Mulakhasatul Fiqh zilizofundishwa na sheikh wetu Abu Uthmaan Nurein, Al-Jabarty</p><br />
                  
                    {songs.map((song, index) => (
    <div className='py-2' key={index} onClick={() => selectSong(song)}>
        <span>{index + 1}.</span> {song.title} 
        {/* <span>{song.duration}</span> */}
    </div>
))}

                </div>
            </div>

        <div className='player_container flex flex-col items-center justify-center 
        bg-black text-white'>
           <div className="title mb-4">
               <p>{currentSong.title}</p>
           </div>

           <div className="navigation w-full mb-4">
               <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
                   <div className="seek_bar" style={{ width: `${currentSong.progress + "%"}` }}></div>
               </div>
           </div>
           <div className="controls flex justify-between">
               <div className="flex px-200">
                   <BsFillSkipStartCircleFill className='btn_action' onClick={skipBack} />
               </div>
               <div className='ml-2'>
                   {isplaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause} /> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause} />}
               </div>
               <div className="flex">
                   <BsFillSkipEndCircleFill className='btn_action' onClick={skiptoNext} />
                   <a href={downloadLink} download className="ml-1">
                       <LuArrowDownToLine className='btn_action' />
                   </a>
               </div>
           </div>
       </div>
       </div>

    )
}

export default Player