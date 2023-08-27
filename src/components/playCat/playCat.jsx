import { useState } from "react";
import dummy from "../../assets/categorydummy.png";
import MovieCardPlay from "../MovieCardPlay/MovieCardPlay";
import { useEffect } from "react";
import { Skeleton } from "@mui/material";
import { GenreContext } from "../../context/useGenre";
import { useContext } from "react";

export default function PlayCat() {
  const {genreList, videos} = useContext(GenreContext)
  const [selectedOption, setSelectedOption] = useState(genreList[0]);
  const [data, setData] = useState([])
  console.log(genreList[0]);
  useEffect(() => {
    if(videos.length > 0 ){
      const d = videos.filter(v => v.genre === genreList[0])
      console.log(d);
      setData(d[0].videos)
      console.log(d[0].videos);
    }
  }, [videos])

  const handleSelectChange = (event) => {
    const genre = event.target.value;
    setSelectedOption(genre);
    const d = videos.filter(v => v.genre === genre)
    setData(d[0].videos)
  };
  return (
    <div className="lg:w-[50%] flex flex-col gap-[37px]">
      <div className="flex justify-between items-center">
              <span className="text-[20px] font-bold text-white">Watch More</span>

              <div className="bg-[#FFEEFF] px-4 rounded-md py-2">
                <select
                  name=""
                  id=""
                  className="bg-[#FFEEFF] text-[#180018] font-bold border-0 outline-none rounded-md px-4"
                  onChange={handleSelectChange}
                  value={selectedOption}
                >
                 {genreList.length > 0 && genreList.map(genre => (
                  <option value={genre}>{genre}</option>
                ))}
                </select>
              </div>
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