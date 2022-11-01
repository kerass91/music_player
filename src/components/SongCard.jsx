import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { BsHeart } from 'react-icons/bs';


const SongCard = ({song, isPlaying, activeSong, data, i,}) => {

  const [favorite, setFavorite] = useState([])
  const dispatch = useDispatch(() => {
  })

  const handleFavorite = (song) => {
      console.log(song.key)
    }

  const handlePauseClick = () => {
  dispatch(playPause(false));
  }

  const handlePlayClick  =() =>{
  dispatch(setActiveSong({song, data, i}));
  dispatch(playPause(true))

  }
  return (
  <div className="flex flex-col w-[140px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer" >
    <div className="relative w-full h-21 group">
      <div className={`absolute inset-0  justify-center items-center bg-black bg-opacity-80 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-90' : 'hidden'} `}>
        <PlayPause
        isPlaying= {isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
        />
      </div>
      <button className='absolute top-[4px] right-[4px]'
      > 
      <BsHeart 
      size={25} color="#08d6fac9" className="cursor-pointer"
      song= {song}
      key={song.key}
      onClick={handleFavorite(song)}
      />
      </button>
      <img alt="song_img" src={song.images?.coverart} className='rounded-[10px]'/>
    </div>
    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-base text-[#06b5d4c9] truncate">
        <Link to={`/songs/${song?.key}`}>
        {song.title}
        </Link>
      </p>
      <p className="text-sm truncate text-gray-400 mt-1">
        <Link to={song.artists? `/artists/${song?.artists[0]?.adamid}`: '/top-artists'}>
        {song.subtitle}
        </Link>
      </p>
    </div>
  </div>
)
  };

export default SongCard;
