import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import PlayVideo from "./pages/PlayVideo";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/play" element={<PlayVideo />} />
        {/* <Routes path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
