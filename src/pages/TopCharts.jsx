
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetTopChartQuery } from "../redux/services/shazamCore";

const TopCharts = () => {


    const {activeSong, isPlaying} = useSelector((state) => state.player)
    const {data, isFetching, error} = useGetTopChartQuery();


    if(isFetching) return <Loader title='Loading Top Charts'/>
    if(error) return <Error/>


    return (
    <div className="flex flex-col">
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
    </div>
    );
};

export default TopCharts;
