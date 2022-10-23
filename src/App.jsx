import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';

import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts, Favourite, LoginCom } from './pages';
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";



const App = () => {
  const { activeSong } = useSelector((state) => state.player);

/*   const currentUser = useAuth();

  if (!currentUser) {
    return <Login/>
  } */
  return (
    <div className="relative flex">

      <Sidebar/>
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#171717]">
        <Searchbar  />

        <div className="relative px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists/>} />
              <Route path="/top-charts" element={<TopCharts/>}/>
              <Route path="/around-you" element={<AroundYou/>} />
              <Route path="/favorite" element={<Favourite />} /> 
              <Route path="/artists/:id" element={<ArtistDetails/>} />
              <Route path="/songs/:songid" element={<SongDetails/>} />
              <Route path="/search/:searchTerm" element={<Search />} />
              <Route path="/login" element={<LoginCom/>} />
            </Routes>
          </div>
{/*           <button className='fixed left-[46%] bottom-[1px] opacity-70'>
          <RiArrowUpSLine
        size={30} color="#08d6fac9" className="cursor-pointer" 
        ></RiArrowUpSLine>
          </button> */}


          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>

        </div>
      </div>
    

      {activeSong?.title && (
        <div className="absolute h-19 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#1e1e1f] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer 
          />
        </div>
      )}
    </div>
  );
};

export default App;
