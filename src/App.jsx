import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import PlayVideo from "./pages/PlayVideo";
import ScrollToTop from "./ScrollToTop";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Fetcher from "./utils/fetcher";
import Rate from "./components/feedback/Rate";
import { useContext } from "react";
import { GenreContext } from "./context/useGenre";
function App() {
    const {dispatch, genreList, videos} = useContext(GenreContext)
    // const [genres, setGenres] = useState([]);
    // const [videos, setVideos] = useState({});
    const [comedy, setComedy] = useState([])
    const [action, setAction] = useState([])
    const [drama, setDrama] = useState([])

    const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false);
    };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("https://api.pukkaview.com/api/get-distinct-genres");
        const data = await response.json();
        dispatch({type: 'GET_GENRE_LIST', payload: data.genres})
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const genreVideosPromises = genreList.map(async genre => {
          const videoResponse = await fetch(`https://api.pukkaview.com/videoplayer/api/search-videos/?genre=${genre}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
          });
          const videoData = await videoResponse.json();
          console.log(videoData);
          const filteredVideos = videoData.filter(video => video.is_published);
          return { genre, videos: filteredVideos };
        });

        // const genreVideos = await Promise.all(genreVideosPromises);
        // const videosByGenre = {};
        // genreVideos.forEach(item => {
        //   videosByGenre[item.genre] = item.videos;
        // });
        const allGenreVideos = await Promise.all(genreVideosPromises);
        dispatch({type: 'GET_VIDEOS', payload: allGenreVideos})

        // setVideos(allGenreVideos);

        // setVideos(videosByGenre);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    if (genreList.length > 0) {
      fetchVideos();
    }
  }, [genreList]);


  return (
    <div className="overflow-x-hidden min-h-screen bg-[#180018]">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      {" "}
      <Rate open={open} handleClose={handleClose}/>
      {/* the min-h-[1000px] was used just to show how the navbar react on scroll. When there are contents available on each pages, it will be removed */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home comedy={comedy} action={action} drama={drama}  />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories comedy={comedy} action={action} drama={drama}  />} />

        <Route path="/play/:id" element={<PlayVideo comedy={comedy} action={action} drama={drama} />} />
        {/* <Routes path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
