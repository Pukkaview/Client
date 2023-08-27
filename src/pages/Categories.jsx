import { useContext, useEffect, useState } from "react";
import IntroCard from "../components/cards/IntroCard";
import dummy from "../assets/categorydummy.png";
import MovieDetailCard from "../components/cards/MovieDetailsCard";
import { movieDataOptions } from "../../src/movieDataOptions";
import { ActiveContext } from "../context/useActive";
import MovieCard2 from "../components/cards/MovieCard2";
import { Skeleton } from "@mui/material";
import { GenreContext } from "../context/useGenre";


const Categories = () => {
  const {active, dispatch} = useContext(ActiveContext)
  const {genreList, videos} = useContext(GenreContext)
  const [selectedOption, setSelectedOption] = useState(active);
  const [data, setData] = useState([])
  console.log(data);
  console.log(active);
  useEffect(() => {
    if(videos.length > 0){
      const d = videos.filter(v => v.genre === active)
      setData(d[0].videos)
      console.log(d[0].videos);
    }
  }, [active, videos])

  const handleSelectChange = (event) => {
    const genre = event.target.value;
    setSelectedOption(genre);
    dispatch({type:'ACTIVE', payload:genre})
  };

  return (
    <div className="">
      {active  && 
      <>      
        {data && <IntroCard data={data[0]} tag={selectedOption} />}
        <div className="md:px-[40px] px-[20px] pt-[30px] sm:pb-[65px] pb-[10px] text-text-color">
          <div className="bg-[#fff]">
            <MovieDetailCard data={data} />
          </div>
          <div>
            <div className="flex justify-between items-center mx-auto">
              <span className="text-[20px] font-bold">{selectedOption}</span>

              <div className="bg-[#FFEEFF] px-4 rounded-md py-2">
                <select
                  name=""
                  id=""
                  className="bg-[#FFEEFF] text-[#180018] font-bold border-0 outline-none rounded-md px-4"
                  onChange={handleSelectChange}
                  value={selectedOption}
                >{genreList.length > 0 && genreList.map(genre => (
                  <option value={genre}>{genre}</option>
                ))}
                  {/* <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option> */}
                  {/* <option value="Lifestyle">Lifestyle</option> */}
                  {/* <option value="New">New</option> */}
                </select>
              </div>
            </div>
            {data.length === 0 && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 mx-auto">
            <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>}
              {data.length > 0 && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 mx-auto">
              {data.map((c,i)=> (
                <div className={`flex mb-[20px] ${(i + 4)%4 === 0 ? 'lg:justify-start': (i + 1)%4 === 0 ? 'lg:justify-end': 'lg:justify-center'}`}>
                  <MovieCard2 key={c.id} data={c} />
                </div>
                ))}
                
              </div>}
          </div>
        </div>
      </>
      }
    </div>
  );
};

export default Categories;
