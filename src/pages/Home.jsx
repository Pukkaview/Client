import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import IntroCard from "../components/cards/IntroCard";
import MovieCard from "../components/cards/MovieCard";
import dummy from "../assets/church.png";
import dummy2 from "../assets/dummy.png";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import ViewBtn from "../components/buttons/ViewBtn";
import MovieDetailCard from "../components/cards/MovieDetailsCard";
import { ActiveContext } from "../context/useActive";
import { useContext } from "react";
import Categories from "./Categories";
import Rate from "../components/feedback/Rate";
import {Skeleton} from '@mui/material'
import Search from "../components/Search";
import { SearchContext } from "../context/useSearch";
// import { action, comedy, drama } from "../utils/cat";


const Home = ({comedy, action, drama}) => {
  const {active, dispatch} = useContext(ActiveContext)
  const {search} = useContext(SearchContext)


  return (
    <div className="bg-background overflow-x-hidden min-h-screen flex flex-col justify-between">
      <Navbar />
      {!search &&<div>
        {!active && 
        <>
        <IntroCard data={action[0]} tag="All" />
        <Rate/>
        <div className="md:px-[59px] px-[20px] pt-[30px] sm:pb-[65px] pb-[10px] text-text-color mx-auto">
          <div className="bg-[#fff]">
            <MovieDetailCard />
          </div>
          <div>
            <div className="w-full flex justify-between">
              <h2 className="text-[24px] font-goemetric font-[400]">Action</h2>
              <div onClick={() => dispatch({type: 'ACTION', payload: 'Action'})}>
                <ViewBtn />
              </div>
            </div>
            {action.length === 0 && 
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-[10px]">
              <div>
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div>
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div className="hidden md:block">
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div className="hidden lg:block">
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
            </div>
            }
            { action.length > 0 && <Carousel>
              {action.length > 0 && action.map(a => (
              <MovieCard key={a.id} data={a} />
              )) }
            </Carousel>}
          </div>
          <div>
          <div className="w-full flex justify-between">
              <h2 className="text-[24px] font-goemetric font-[400]">Comedy</h2>
              <div onClick={() => dispatch({type: 'COMEDY', payload: 'Comedy'})}>
                <ViewBtn />
              </div>
            </div>
            {comedy.length === 0 && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-[10px]">
            <div>
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div>
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div className="hidden md:block">
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div className="hidden lg:block">
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
            </div>}
            {comedy.length > 0 &&<Carousel>
              {comedy.map(c=> (
              <MovieCard key={c.id} data={c} />
              ))}
            </Carousel>}
          </div>
          <div>
          <div className="w-full flex justify-between">
              <h2 className="text-[24px] font-goemetric font-[400]">Drama</h2>
              <div onClick={() => dispatch({type: 'DRAMA', payload: 'Drama'})}>
                <ViewBtn />
              </div>
            </div>
            {drama.length === 0 && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-[10px]">
              <div>
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div>
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div className="hidden md:block">
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div className="hidden lg:block">
              <Skeleton variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
              </div>
            </div>}
            {drama.length > 0 &&<Carousel>
              {drama.map(c=> (
              <MovieCard key={c.id} data={c} />
              ))}
            </Carousel>}
          </div>
        </div>
        </>
        }
        {active && <Categories comedy={comedy} action={action} drama={drama}/>}
      </div>}
      {search && <Search data={drama}/>}
      <Footer />
    </div>
  );
};
export default Home;
