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


// Sample data. To be replaced by data coming from the backend
const data = {
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
// Sample data. To be replaced by data coming from the backend
const movie_data = {
  title: "Rapture",
  coverImage: dummy2,
  year: 2019,
  genre: "Action",
  casts: [
    "Segun Jackob",
    "Segun Daniel",
    "Oguntedo Aremu",
    "Segun Gabriel",
    "Jesus Caleb",
  ],
  bio: "The Redemption's Path is a compelling Christian movie that takes viewers on a transformative journey of faith, forgiveness, and spiritual renewal. Set in a small town struggling with personal struggles and a loss of hope, the film centers around the lives of three main characters whose paths intersect in unexpected ways.",
};
const Home = ({comedy, action, drama}) => {
  const {active, dispatch} = useContext(ActiveContext)

  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />
      {!active && 
      <>
      <IntroCard data={action[0]} />
      <Rate/>
      <div className="md:px-[59px] px-[20px] pt-[107px] pb-[65px] text-text-color mx-auto">
        <div className="bg-[#fff]">
          <MovieDetailCard />
        </div>
        <div>
          <div className="w-full flex justify-between">
            <h2 className="text-[24px] font-goemetric font-[400]">Action</h2>
            <Link to="/categories" onClick={() => dispatch({type: 'ACTION', payload: 'Action'})}>
              <ViewBtn />
            </Link>
          </div>
          {action.length === 0 && 
          <div className="flex justify-between my-[10px]">
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
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
            <Link to="/categories" onClick={() => dispatch({type: 'SERMON', payload: 'Sermon'})}>
              <ViewBtn />
            </Link>
          </div>
          {comedy.length === 0 && <div className="flex justify-between my-[10px]">
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
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
            <Link to="/categories" onClick={() => dispatch({type: 'DRAMA', payload: 'Drama'})}>
              <ViewBtn />
            </Link>
          </div>
          {drama.length === 0 && <div className="flex justify-between my-[10px]">
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
            <Skeleton variant="rectangular" width={'24%'} height={199} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '15px' }} />
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
      {active && <Categories/>}
      <Footer />
    </div>
  );
};
export default Home;
