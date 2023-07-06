
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/Footer/Footer";
import IntroCard from "../components/cards/IntroCard";
import MovieCard from "../components/cards/MovieCard";
import dummy from '../assets/church.png'
import dummy2 from '../assets/dummy.png'

import Carousel from "../components/carousel/Carousel";
import ViewBtn from "../components/buttons/ViewBtn";
import MovieDetailCard from "../components/cards/MovieDetailsCard";

// Sample data. To be replaced by data coming from the backend
const data = {
  title: 'Interview with God',
  coverImage:dummy,
  bio: "The Redemption's Path is a compelling Christian movie that takes viewers on a transformative journey of faith, forgiveness, and spiritual renewal. Set in a small town struggling with personal struggles and a loss of hope, the film centers around the lives of three main characters whose paths intersect in unexpected ways.",
  time: "1hr 20min",
  year: 2019,
  genre: 'Action',
  casts: ['Segun Jackob', "Segun Daniel", "Oguntedo Aremu", "Segun Gabriel", "Jesus Caleb"],
}
// Sample data. To be replaced by data coming from the backend
const movie_data = {
  title: 'Rapture',
  coverImage:dummy2,
  year: 2019,
  genre: 'Action',
  casts: ['Segun Jackob', "Segun Daniel", "Oguntedo Aremu", "Segun Gabriel", "Jesus Caleb"],
  bio: "The Redemption's Path is a compelling Christian movie that takes viewers on a transformative journey of faith, forgiveness, and spiritual renewal. Set in a small town struggling with personal struggles and a loss of hope, the film centers around the lives of three main characters whose paths intersect in unexpected ways."
}
const Home = () => {
  return (
    <div className="bg-background overflow-x-hidden ">
      <Navbar />
      <IntroCard data={data}/>
      <div className="md:px-[59px] px-[20px] pt-[107px] pb-[65px] text-text-color">
        <div className="bg-[#fff]">
          <MovieDetailCard/>
        </div>
        <div>
          <span className="text-[20px]">Watch more</span>
          <Carousel>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
          </Carousel>
        </div>
        <div>
          <div className="w-full flex justify-between">
          <span className="text-[20px]">Action</span>
          <ViewBtn/>
          </div>
          <Carousel>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
          </Carousel>
        </div>
        <div>
          <span className="text-[20px]">Sermon</span>
          <Carousel>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
            <MovieCard data={movie_data}/>
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home

