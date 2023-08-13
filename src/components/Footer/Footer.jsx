import pukka from "../../assets/pukka.png";
import logo from "../../assets/logo2.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="">
      <div className="w-full h-fit p-8 bg-[#180018] justify-center items-center flex flex-col gap-4">
        <div className="pt-6">
          <img src={pukka} alt="" />
        </div>
        <div className="mt-4">
          <img src={logo} alt="" />
        </div>
        <div className="justify-center items-center gap-[45px] flex mt-4">
          <div className="">
            <img src={twitter} alt="" />
          </div>
          <div className="">
            <img src={facebook} alt="" />
          </div>
          <div className="">
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="flex items-center mt-4 gap-4  md:gap-[196px] justify-center">
          <div className=" h-4 text-center text-fuchsia-50 text-[10px] md:text-[14px] font-medium leading-none">
            <Link to="/contact">Cookie Preferences</Link>
          </div>
          <div className=" h-4 text-center text-fuchsia-50 text-[10px] md:text-[14px] md:mr-16 font-medium leading-none">
            <Link to="/contact">Terms of Use</Link>
          </div>
          <div className="cursor-pointer  h-4  text-center text-fuchsia-50 text-[10px] md:text-[14px] font-medium leading-none">
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
