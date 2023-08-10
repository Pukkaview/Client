import { useContext, useEffect, useState } from "react";
import IntroCard from "../components/cards/IntroCard";
import dummy from "../assets/categorydummy.png";
import MovieDetailCard from "../components/cards/MovieDetailsCard";
import { movieDataOptions } from "../../src/movieDataOptions";
import { ActiveContext } from "../context/useActive";
import MovieCard2 from "../components/cards/MovieCard2";
import { Skeleton } from "@mui/material";

const defaultData = {
  title: "Interview with God",
  coverImage: dummy,
  bio: "The Redemption's Path is a compelling Christian movie that takes viewers on a transformative journey of faith, forgiveness, and spiritual renewal. Set in a small town struggling with personal struggles and a loss of hope, the film centers around the lives of three main characters whose paths intersect in unexpected ways.",
  time: "1hr 20min",
  year: 2019,
  genre: "Action",
  casts: [
    "Segun Jackob",
    "Segun Daniel",
    "Oguntedo Aremu",
    "Segun Gabriel",
    "Jesus Caleb",
  ],
};

const Categories = ({comedy, action, drama}) => {
  const {active, dispatch} = useContext(ActiveContext)
  const [selectedOption, setSelectedOption] = useState("Action");
  const [data, setData] = useState([])
  console.log(active);
  console.log(action, drama, comedy);
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
        <IntroCard data={data[0]} />
        <div className="md:px-[40px] px-[20px] pt-[107px] pb-[65px] text-text-color">
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
            {data.length === 0 && <div className="flex items-center justify-between flex-wrap pb-10 pt-10 max-w-[1440px] mx-auto">
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>}
              {data.length > 0 && <div className="flex items-center flex-wrap gap-[10px] pb-10 pt-10 max-w-[1440px] mx-auto">
              {data.map((c,i)=> (
                <div className={`flex sm:w-[49%] md:w-[32%] lg:w-[24%] mb-[20px]  w-[100%] ${(i + 4)%4 === 0 ? 'justify-start': i %3 === 0 & i !== 0 ? 'justify-end': 'justify-center'}`}>
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
