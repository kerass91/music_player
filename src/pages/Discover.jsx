import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from "../assets/constants";
import { useRef } from 'react';
import { useGetTopChartQuery } from '../redux/services/shazamCore';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { BiArrowToTop } from "react-icons/bi";

const Discover = () => {

const dispatch = useDispatch();
const {activeSong, isPlaying, genreListId} = useSelector((state)=>state.player);

const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

const divRef = useRef(null);
const scrollTop = () =>{
    divRef.current.scrollIntoView({
        behavior: 'smooth'
      })
}
/* useEffect(()=> {
  divRef.current.scrollIntoView({
    behavior: 'smooth'
  })
}) */



if (isFetching) return <Loader title='Loading songs...'/>;
if (error) return <Error/>

const genreTitle = genres.find(({value})=>value === genreListId)?.title;


return (
    <div ref={divRef} className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>   
            <h2 className='font-bold text-3xl text-yellow-50 text-left'>Discover  <span className="font-bold text-[#06B6D4]">{genreTitle}</span></h2>
            <select
            onChange={(e) => dispatch(selectGenreListId(e.target.value))}
            value={genreListId || 'pop'}
            className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
            </select>
        </div>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.map((song, i) => (
                <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i= {i}
                />
            ))}
        </div>
        <button className='fixed opacity-40 right-[8px] bottom-[5px]'         
          onClick={() => scrollTop()}>
          <BiArrowToTop
        size={35} color="white" className="cursor-pointer opacity-70" 
        ></BiArrowToTop>
          </button>

    </div>
    
  );
};

export default Discover;
