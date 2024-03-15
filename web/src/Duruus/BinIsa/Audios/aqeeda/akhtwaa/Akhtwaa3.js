import Player from './Player.jsx';
import { useRef, useState, useEffect } from 'react';
import { Akhtwaa3data } from './Data.js';
import '../../../../../App.css'
const Akhtwaa3 = () => {
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(Akhtwaa3data[0]);
  const [songs, setSongs] = useState(Akhtwaa3data);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }

  const audioElem = useRef(new Audio());

  useEffect(() => {
  
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong]);

  // Add this line inside the Asmau4 component
useEffect(() => {
  const audioElement = audioElem.current;
  const handleAudioEnd = () => {
     const index = songs.findIndex(x => x.title === currentSong.title);
     if (index === songs.length - 1) {
       setCurrentSong(songs[0])
     } else {
       setCurrentSong(songs[index + 1])
     }
     audioElement.currentTime = 0;
  };
 
  audioElement.addEventListener('ended', handleAudioEnd);
 
  // Remember to remove the event listener when the component unmounts
  return () => {
     audioElement.removeEventListener('ended', handleAudioEnd);
  };
 }, [isplaying, currentSong]);
 

  return (
    <div className="">
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default Akhtwaa3 ;