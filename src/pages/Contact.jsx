import Form from "../components/Form/Form";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search";
import { useContext } from "react";
import { SearchContext } from "../context/useSearch";

const Contact = () => {
  const {search} = useContext(SearchContext)
  return (
    <div className="bg-[#180018] bg-contactPattern h-fit  font-[Futura]">
      <Navbar />
      {!search && <>
        <div className="text-center text-white text-[48px] py-32">CONTACT US</div>
        <Form />
      </>}
      {search && <Search/>}
      <Footer />
    </div>
  );
};
export default Contact;
