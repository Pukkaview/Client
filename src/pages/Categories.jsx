import { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import IntroCard from "../components/cards/IntroCard";
import MovieCard from "../components/cards/MovieCard";
import dummy from "../assets/categorydummy.png";
import MovieDetailCard from "../components/cards/MovieDetailsCard";
import { movieDataOptions } from "../../src/movieDataOptions";
import { ActiveContext } from "../context/useActive";

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

const Categories = () => {
  const {active, dispatch} = useContext(ActiveContext)
  const [selectedOption, setSelectedOption] = useState("Action");
  const [data, setData] = useState(defaultData);
  console.log(active);
  useEffect(() => {
    setSelectedOption(active)
    const movieData = movieDataOptions[active];
    const updatedData = movieData || defaultData;
    setData(updatedData);
  }, [active])

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
  };

  return (
    <div className="bg-background overflow-x-hidden">
      {active && 
      <>      
        <Navbar />
        <IntroCard data={data} />
        <div className="md:px-[40px] px-[20px] pt-[107px] pb-[65px] text-text-color">
          <div className="bg-[#fff]">
            <MovieDetailCard data={data} />
          </div>
          <div>
            <div className="flex justify-between items-center mx-4 md:mx-9">
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
                  <option value="Sermon">Sermon</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="New">New</option>
                </select>
              </div>
            </div>
              <div className="flex items-center justify-center flex-wrap gap-10 pb-10 pt-10 max-w-[1300px] mx-auto">
                <div className=" flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px]">
                  <MovieCard data={data} />
                </div>
                <div className=" flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px] justify-center">
                  <MovieCard data={data} />
                </div>
                <div className="flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px] justify-center">
                  <MovieCard data={data} />
                </div>
                <div className="flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px] justify-end">
                  <MovieCard data={data} />
                </div>
                <div className=" flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px]">
                  <MovieCard data={data} />
                </div>
                <div className=" flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px] justify-center">
                  <MovieCard data={data} />
                </div>
                <div className="flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px] justify-center">
                  <MovieCard data={data} />
                </div>
                <div className="flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px] justify-end">
                  <MovieCard data={data} />
                </div>
                <div className=" flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px]">
                  <MovieCard data={data} />
                </div>
                <div className=" flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px] justify-center">
                  <MovieCard data={data} />
                </div>
                <div className="flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px] justify-center">
                  <MovieCard data={data} />
                </div>
                <div className="flex sm:w-[290px] md:w-[330px] lg:w-[340px] xl:w-[290px] phone-lg:w-[180px] w-[150px] justify-end">
                  <MovieCard data={data} />
                </div>
              </div>
          </div>
        </div>
      </>
      }
      <Footer />
    </div>
  );
};

export default Categories;
