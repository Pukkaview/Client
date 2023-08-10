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
function App() {
    const [comedy, setComedy] = useState([])
    const [action, setAction] = useState([])
    const [drama, setDrama] = useState([])

    const [open, setOpen] = useState(false);

    // const handleClickOpen = (id) => {
    //   setOpen(true);
    // };
  
    const handleClose = () => {
      setOpen(false);
    };
    console.log(comedy, action);

    useEffect(() => {
      // Function to fetch the video URL
      const fetchComedy = async () => {
        try {
          const fetchResponse = await Fetcher("https://pukkaview.onrender.com/videoplayer/api/search-videos/?genre=Comedy", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          // console.log(fetchResponse);
          if (fetchResponse.failure) throw new Error(fetchResponse.message);
          setComedy(fetchResponse)
        } catch (error) {
          console.error('Error fetching video URL:', error);
        }
      };
      const fetchAction = async () => {
        try {
          const fetchResponse = await Fetcher("https://pukkaview.onrender.com/videoplayer/api/search-videos/?genre=Action", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          // console.log(fetchResponse);
          if (fetchResponse.failure) throw new Error(fetchResponse.message);
          setAction(fetchResponse)
        } catch (error) {
          console.error('Error fetching video URL:', error);
        }
      };
      const fetchDrama = async () => {
        try {
          const fetchResponse = await Fetcher("https://pukkaview.onrender.com/videoplayer/api/search-videos/?genre=Drama", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          // console.log(fetchResponse);
          if (fetchResponse.failure) throw new Error(fetchResponse.message);
          setDrama(fetchResponse)
        } catch (error) {
          console.error('Error fetching video URL:', error);
        }
      };
      fetchComedy();
      fetchAction();
      fetchDrama();
    }, []);
  return (
    <div className="overflow-x-hiddeen">
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
