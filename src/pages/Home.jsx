
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/Footer/Footer";
import MovieCard from "../components/cards/MovieCard";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="py-[100px] flex gap-[40px] bg-blue-400 overflow-scroll">
        
          <MovieCard/>
          <MovieCard/>
      </div>
      <Footer />
    </div>
  )
}
export default Home

