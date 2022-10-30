
import { useSelector } from "react-redux";
import { useRef } from 'react';
import { BiArrowToTop } from "react-icons/bi";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartQuery } from "../redux/services/shazamCore";

const TopCharts = () => {


    const {activeSong, isPlaying} = useSelector((state) => state.player)
    const {data, isFetching, error} = useGetTopChartQuery();


    if(isFetching) return <Loader title='Loading Top Charts'/>
    if(error) return <Error/>

    const divRef = useRef(null);
    const scrollTop = () =>{
    divRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }

    return (
    <div ref={divRef}  className="flex flex-col">
        <h2 className="font-bold text-3xl text-gray-500 text-left mt-4 mb-10">
            Discover  <span className="font-bold text-[#06B6D4]">Top Charts</span>
        </h2>

        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.map((song, i) => 
              <SongCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              />  
            )}
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

export default TopCharts;
