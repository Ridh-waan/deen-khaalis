import { BsFillMortarboardFill  } from 'react-icons/bs';
import { AiFillAudio } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { BsMusicNoteList } from "react-icons/bs";
import { BsFileEarmarkMusic } from "react-icons/bs";
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { BsEarbuds } from "react-icons/bs";

export const categories = [
  {
    id: 2,
    icon: <BiSolidMicrophoneAlt/>,
    category: "Kuchagua marafiki, Muhadhara  wa Sheikh Abu Ibraheem Alamin Saeed",
    audio: 'https://ia800204.us.archive.org/19/items/manhaj-ya-ahlus-sunnah-wal-jamma-ah/Kuchagua%20Marafiki.mp3',
  },
    {
      id: 1,
      icon: <AiFillAudio/>,
      category: "Kujitahidi kwenye kumi la mwisho la Ramadhan, Khutba ya Sheikh Abu Issa Muhammad",
      audio: 'https://archive.org/download/mafunzo-kwenye-tukio-la-new-zealand/kujitahidi_kwenye_kumi_la_mwisho_la_ramadhan.mp3',
    },
    {
      id: 2,
      icon: <BsEarbuds/>,
      category: "Dharura ya kutafuta Hidaya Khutba ya Sheikh Abu Feiswal Uthmaan Jilo iliyotolewa Masjid Mariam Kisauni Mombasa",
      audio: 'https://ia601307.us.archive.org/32/items/msimamo-wa-twalib-ilm-panapo-ikhtilafu-kati-ya-mashekhe/Dharura%20ya%20Kutefuta%20Hidaya.mp3',
    },
    {
      id: 5,
      icon: <BsMusicNoteList/>,
      category: "Hukmu za furaha, Khutba iliyotolewa siku ya idd na Sheikh Abu Uthmaan Nurein mjini Lamu",
      audio: 'https://ia600201.us.archive.org/35/items/hukmu-za-furaha/hukmu-za-furaha.mp3',
    },
     
      
    {
      id: 4,
      icon: <BsFileEarmarkMusic/>,
      category: "Ukweli na kushikamana na ukweli, Khutba iliyotolewa siku ya idd na Sheikh Abu Ibraheem Alamin Saeed",
      audio: 'https://ia800201.us.archive.org/31/items/ukweli-na-kushikamana-na-ukweli/UKWELI%20NA%20KUSHIKAMANA%20NA%20UKWELI.mp3',
    },
      
    {
      id: 6,
      icon: <BsMusicNoteBeamed/>,
      category: "Kaburi la Mtume صلى الله عليه وسلم, kalima  ya Sheikh Abu Issa Muhammad Issa",
      audio: 'https://archive.org/download/20240315_20240315_1247/Jibu_Kwa_Wanaosema_Kaburi_La_Mtume_Lipo_Ndani_Ya_Msikiti_Wake.mp3',
    },
  ];