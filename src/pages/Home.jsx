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
const Home = ({comedy, action}) => {
  const {active, dispatch} = useContext(ActiveContext)

  return (
    <div className="bg-background overflow-x-hidden">
      <Navbar />
      {!active && 
      <>
      <IntroCard data={data} />
      <Rate/>
      <div className="md:px-[59px] px-[20px] pt-[107px] pb-[65px] text-text-color mx-auto">
        <div className="bg-[#fff]">
          <MovieDetailCard />
        </div>
        <div>
          <h2 className="text-[24px] font-[400]">Watch More</h2>
          <Carousel>
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
          </Carousel>
        </div>
        <div>
          <div className="w-full flex justify-between">
            <h2 className="text-[24px] font-goemetric font-[400]">Action</h2>
            <Link to="/categories" onClick={() => dispatch({type: 'ACTION', payload: 'Action'})}>
              <ViewBtn />
            </Link>
          </div>
          { action.length > 0 && <Carousel>
            {action.length > 0 && action.map(a => (
            <MovieCard key={a.id} data={a} />
            )) }
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
          </Carousel>}
        </div>
        <div>
        <div className="w-full flex justify-between">
            <h2 className="text-[24px] font-goemetric font-[400]">Comedy</h2>
            <Link to="/categories" onClick={() => dispatch({type: 'SERMON', payload: 'Sermon'})}>
              <ViewBtn />
            </Link>
          </div>
          {comedy.length > 0 &&<Carousel>
            {comedy.map(c=> (
            <MovieCard key={c.id} data={c} />
            ))}
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
            <MovieCard data={movie_data} />
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
