import { useState } from "react";
import dummy from "../../assets/categorydummy.png";
import MovieCardPlay from "../MovieCardPlay/MovieCardPlay";
import { useEffect } from "react";
import { Skeleton } from "@mui/material";

export default function PlayCat({comedy, action, drama}) {
  const [selectedOption, setSelectedOption] = useState("Action");
  const [data, setData] = useState([])
  console.log(action, drama, comedy);
  useEffect(() => {
    setData(action)
  }, [action])
  const handleSelectChange = (event) => {
    const genre = event.target.value;
    setSelectedOption(genre);
    if(genre === 'Drama'){
      setData(drama)
    }
    if(genre === 'Comedy'){
      setData(comedy)
    }
    if(genre === 'Action'){
      setData(action)
    }
  };
  console.log(data);
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
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
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