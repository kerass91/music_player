
import { ArtistCard, Error, Loader} from "../components";
import { useGetTopChartQuery } from "../redux/services/shazamCore";

const TopArtists = () => {

    const {data, isFetching, error} = useGetTopChartQuery();
    console.log(data)


    if(isFetching) return <Loader title='Loading Top Artists'/>
    if(error) return <Error/>


    return (
    <div className="flex flex-col">
        <h2 className="font-bold text-3xl  text-gray-500 text-left mt-4 mb-10">
        Discover  <span className="font-bold text-[#06B6D4]">Top Artists</span>
        </h2>

        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.map((track) => 
              <ArtistCard
              key={track.key}
              track={track}
/*               i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data} */
              />  
            )}
        </div>
    </div>
    );
};

export default TopArtists;
