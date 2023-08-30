import { useState } from "react";
import dummy from "../../assets/categorydummy.png";
import MovieCardPlay from "../MovieCardPlay/MovieCardPlay";
import { useEffect } from "react";
import { Skeleton } from "@mui/material";
import { GenreContext } from "../../context/useGenre";
import { useContext } from "react";
import CustomDropdown from "../customDropdown";

export default function PlayCat({current}) {
  const {genreList, videos} = useContext(GenreContext)
  const [selectedOption, setSelectedOption] = useState('');
  const [data, setData] = useState([])
  useEffect(() => {
    if(videos.length > 0 && current ){
      const d = videos.filter(v => v.genre === current)
      console.log(d);
      setData(d[0].videos)
      console.log(d[0].videos);
    }
  }, [videos, current])
  useEffect(() => {
    setSelectedOption(current)
  }, [current])

  const handleSelectChange = (genre) => {
    // const genre = event.target.value;
    setSelectedOption(genre);
    const d = videos.filter(v => v.genre === genre)
    setData(d[0].videos)
  };
  return (
    <div className="lg:w-[50%] flex flex-col gap-[37px]">
      <div className="flex justify-between items-center">
        <span className="text-[20px] font-bold text-white">Watch More</span>
        {selectedOption && <CustomDropdown
          options={genreList}
          selectedOption={selectedOption}
          onSelect={handleSelectChange}
        />}
      </div>
      {data.length === 0 && <div className="flex flex-col gap-[20px]">
      <Skeleton variant="rectangular" width={'100%'} height={77} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }} />
      <Skeleton variant="rectangular" width={'100%'} height={77} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }} />
      <Skeleton variant="rectangular" width={'100%'} height={77} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }} />
      <Skeleton variant="rectangular" width={'100%'} height={77} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }} />
        
      </div>}
      {data.length > 0 && <div className="flex flex-col gap-[20px]">
        {data.map(c=> (
        <MovieCardPlay id={c.id} title={c.title} content={c.plot} img={c.thumbnaillink} />
        ))}
      </div>}
    </div>
  )
}