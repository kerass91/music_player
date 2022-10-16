import { Link } from "react-router-dom";


const DetailsHeader = ({artistId, artistData, songData}) => {
  const artist = artistData?.artists[artistId].attributes;
  
  console.log(artistData, artistId)
  return (
  <div className="relative w-full flex flex-col ">
    <div className="w-full bg-gradient-to-l from-transparent to-gray-700 sm:h-48 h-28 rounded-[20px]"/>
    <div className="absolute inset-0 flex items-center">
      <img className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl border-gray-300 shadow-black ml-2"
      alt="art"
      src={artistId? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500'): songData?.images?.coverart}
      />
      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-gray-300">
          {artistId? artist?.name : songData?.title}</p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
          <p className="text-base text-gray-400 mt-2">
            {songData?.subtitle}
          </p>
          </Link>
        )}

        <p className="text-base text-gray-500 mt-2">
            {artistId? artist?.genreNames[0]: songData?.genres?.primary }
        </p>
      </div>
    </div>
    <div className="w-full sm:h-18 h-6
    "/>

  </div>
)
}
export default DetailsHeader;
