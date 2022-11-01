import { useNavigate } from "react-router-dom";

const ArtistCard = ({track}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[140px] p-4 bg-white/5 bg-opacity-80  backdrop-blur-sm animate-slideup rounded-lg cursor-pointer "
    onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
    <img alt="artist" src={track?.images?.coverart} 
    className="w-full h-25 rounded-[10px] hover:opacity-30" />
    <p className="mt-4 font-semibold text-base text-[#06b5d49c] truncate">
      {track?.subtitle}
    </p>
    </div>
  )
};

export default ArtistCard;
