import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import PlayVideo from "./pages/PlayVideo";
import ScrollToTop from "./ScrollToTop";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
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
      {/* the min-h-[1000px] was used just to show how the navbar react on scroll. When there are contents available on each pages, it will be removed */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="/play" element={<PlayVideo />} />
        {/* <Routes path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
