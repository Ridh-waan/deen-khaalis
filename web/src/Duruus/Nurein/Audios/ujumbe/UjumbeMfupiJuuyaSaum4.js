import React, { useState, useRef, useEffect } from 'react';
import '../../../../App.css'
import {
    BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill,
    BsFillSkipEndCircleFill, BsDownload
} from 'react-icons/bs';
import '../../../../Duruus/Audio.scss'
import { ujumbedata } from './Data';

const BASE_URL = 'www.deenkhaalis.com'; // replace with your actual base URL
const UjumbeMfupiJuuyaSaum4 = () => {
    const [isplaying, setisplaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(ujumbedata[0]);
    const [songs, setSongs] = useState(ujumbedata);
    const onPlaying = () => {
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;

        setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration });
    };
    const audioElem = useRef(new Audio());

    useEffect(() => {
        audioElem.current.src = currentSong.url;
        audioElem.current.onTimeUpdate = onPlaying;
        audioElem.current.onended = skiptoNext;
        if (isplaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    }, [isplaying, currentSong]);




    const downloadLink = `${currentSong.url}`;

    const clickRef = useRef();

    const PlayPause = () => {
        setisplaying(!isplaying);

    }


    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = Math.min(Math.max(offset / width, 0), 1) * 100;
        audioElem.currentTime = divprogress / 100 * currentSong.length;

    }

    const skipBack = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);
        if (index == 0) {
            setCurrentSong(songs[songs.length - 1])
        }
        else {
            setCurrentSong(songs[index - 1])
        }
        audioElem.currentTime = 0;
    }

    const skiptoNext = () => {
        const index = songs.findIndex(x => x.title == currentSong.title);

        if (index == songs.length - 1) {
            setCurrentSong(songs[0])
        }
        else {
            setCurrentSong(songs[index + 1])
        }
        audioElem.currentTime = 0;
    }

    const selectSong = (song) => {
        setCurrentSong(song);
        setisplaying(true);
    };

    return (
        <div className=''>
            <div className=' flex-col flex-grow overflow-y-auto'>
                <div className=" py-7 px-8 mt-20 cursor-pointer mb-4">
                    <h2 className='text-center  text-2xl font-bold mb-5'>ï·½</h2>
                    <p className='text-center'>Huu ni Ujumbe mfupi kuhusu Swaum,
                        <b> Risala ya Sheikh Abdullah ibn Abdulaziz ibn Baaz </b>
                        uliofundishwa na sheikh wetu Abu Uthmaan Nurein Al-Jabarty</p><br />
                    {songs.map((song, index) => (
                        <div className='py-4' key={index} onClick={() => selectSong(song)}>
                            <span>{index + 1}.</span> {song.title}
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
                            <BsDownload className='btn_action' />
                        </a>
                    </div>
                </div>
            </div >
        </div>

    )


}

export default UjumbeMfupiJuuyaSaum4;
