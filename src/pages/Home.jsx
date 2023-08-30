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
import { GenreContext } from "../context/useGenre";
// import { action, comedy, drama } from "../utils/cat";


const Home = () => {
  const {active, dispatch} = useContext(ActiveContext)
  // const [active, setActive] = useState(localStorage.getItem('active'))
  const {genreList, videos} = useContext(GenreContext)
  const {search} = useContext(SearchContext)

  return (
    <div className="bg-background overflow-x-hidden min-h-screen flex flex-col justify-between">
      <Navbar />

      {!search &&<div>
        {!active && 
        <>
        {videos.length === 0 && <Skeleton animation="wave" variant="rectangular" className="" width={'100%'} height={'100vh'} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }} />}
        {videos.length === 0 && <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-[50px] md:px-[59px] px-[20px] text-text-color mx-auto">
            <div>
              <Skeleton animation="wave" variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div>
              <Skeleton animation="wave" variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div className="hidden md:block">
              <Skeleton animation="wave" variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', borderRadius: '15px' }} />
              </div>
              <div className="hidden lg:block">
              <Skeleton animation="wave" variant="rectangular"  height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', borderRadius: '15px' }} />
              </div>
            </div>}
        { videos.length > 0 &&<IntroCard data={videos[0].videos[0]} tag="All" />}
        <Rate/>
        <div className="md:px-[59px] px-[20px] pt-[30px] sm:pb-[65px] pb-[10px] text-text-color mx-auto">
          <div className="bg-[#fff]">
            <MovieDetailCard />
          </div>
          {videos.length > 0 && videos.map((v, i) => (
          <div>
            <div className="w-full flex justify-between">
              <h2 className="sm:text-[24px] text-[16px] font-goemetric font-[400]">{v.genre}</h2>
              <div onClick={() => dispatch({type:'ACTIVE', payload:v.genre})}>
                <ViewBtn />
              </div>
            </div>
            { v.videos.length > 0 && <Carousel>
              {v.videos.length > 0 && v.videos.map(a => (
              <MovieCard key={a.id} data={a} playIcon={i === 0 ? true : false} />
              )) }
            </Carousel>}
          </div>
          ))}
          {/* <div>
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
          </div> */}
        </div>
        </>
        }
        {active && <Categories/>}
      </div>}
      {search && <Search/>}
      <Footer />
    </div>
  );
};
export default Home;
