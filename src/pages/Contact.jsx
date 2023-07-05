import Form from "../components/Form/Form";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="bg-[#180018]">
      <Navbar />
      <div className="text-center text-white text-[48px] py-32 font-normal ">
        CONTACT US
      </div>
      <Form />
      <Footer />
    </div>
  );
};
export default Contact;
