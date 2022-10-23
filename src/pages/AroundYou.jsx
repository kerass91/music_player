import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRef } from 'react';
import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";
import { BiArrowToTop } from "react-icons/bi";


const AroundYou = () => {

    const [country, setCountry] = useState('UA');
 
    const [loading, senLoading]= useState(true);
    const {activeSong, isPlaying} = useSelector((state) => state.player)
    const {data, isFetching, error} = useGetSongsByCountryQuery(country);
    const divRef = useRef(null);

    
/*  console.log(country)
 console.log(data) */

    useEffect(()=>{
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_jDvJDH9NmOGjASMcWbLpolhLSNgMC`)
    .then((res) => setCountry(res?.data?.location?.country))
    .catch((err) => console.log(err))
    .finally(()=> senLoading(false))
//at_jDvJDH9NmOGjASMcWbLpolhLSNgMC
    }, [country]);

    if(isFetching && loading) return <Loader title='Loading songs around you'/>

    if(error && country) return <Error/>

  
    const scrollTop = () =>{
    divRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }

    return (
    <div ref={divRef} className="flex flex-col">
        <h2 className="font-bold text-3xl text-gray-500 text-left mt-4 mb-10">
            Around you <span className="font-bold text-[#06B6D4]">{country}</span>
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

export default AroundYou;
