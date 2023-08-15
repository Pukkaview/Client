import { useContext, useEffect, useState } from "react";
import IntroCard from "../components/cards/IntroCard";
import dummy from "../assets/categorydummy.png";
import MovieDetailCard from "../components/cards/MovieDetailsCard";
import { movieDataOptions } from "../../src/movieDataOptions";
import { ActiveContext } from "../context/useActive";
import MovieCard2 from "../components/cards/MovieCard2";
import { Skeleton } from "@mui/material";


const Categories = ({comedy, action, drama}) => {
  const {active, dispatch} = useContext(ActiveContext)
  const [selectedOption, setSelectedOption] = useState("Action");
  const [data, setData] = useState([])
  useEffect(() => {
    setSelectedOption(active)
    if(active === 'Drama'){
      setData(drama)
    }
    if(active === 'Comedy'){
      setData(comedy)
    }
    if(active === 'Action'){
      setData(action)
    }
  }, [active, action, drama, comedy])
  console.log(data);

  const handleSelectChange = (event) => {
    const genre = event.target.value;
    setSelectedOption(genre);
    if(genre === 'New'){
      dispatch({type:'NEW', payload:genre})
    }
    if(genre === 'Action'){
      dispatch({type:'ACTION', payload:genre})
    }
    if(genre === 'Comedy'){
      dispatch({type:'COMEDY', payload:genre})
    }
    if(genre === 'Lifestyle'){
      dispatch({type:'LIFESTYLE', payload:genre})
    }
    if(genre === 'Sermon'){
      dispatch({type:'SERMON', payload:genre})
    }
    if(genre === 'Drama'){
      dispatch({type:'DRAMA', payload:genre})
    }
  };

  return (
    <div className="">
      {active && 
      <>      
        <IntroCard data={data[0]} tag={selectedOption} />
        <div className="md:px-[40px] px-[20px] pt-[30px] pb-[65px] text-text-color">
          <div className="bg-[#fff]">
            <MovieDetailCard data={data} />
          </div>
          <div>
            <div className="flex justify-between items-center max-w-[1440px] mx-auto">
              <span className="text-[20px] font-bold">{selectedOption}</span>

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
                  {/* <option value="Lifestyle">Lifestyle</option> */}
                  {/* <option value="New">New</option> */}
                </select>
              </div>
            </div>
            {data.length === 0 && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10 pt-10 max-w-[1440px] mx-auto">
            <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>}
              {data.length > 0 && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10 pt-10 max-w-[1440px] mx-auto">
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
