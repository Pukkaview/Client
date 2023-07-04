
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/Footer/Footer";

import MovieCard from "../components/MovieCard/MovieCard";
const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      {/* <MovieCard
        title="Movie Title"
        content="The Redemption's Path' is a compelling Christian movie that takes viewers on a transformative journey of faith, forgiveness, and spiritual renewal"
        backgroundColor="#FF5AFF"
      />
      <MovieCard
        title="Movie Title"
        content="The Redemption's Path' is a compelling Christian movie that takes viewers on a transformative journey of faith, forgiveness, and spiritual renewal"
        backgroundColor="transparent"
      /> */}

      <Footer />
    </div>
  );
}
export default Home

