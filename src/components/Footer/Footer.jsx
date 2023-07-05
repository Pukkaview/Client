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
        <div className="pt-12">
          <img src={pukka} alt="" />
        </div>
        <div className="mt-10">
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
        <div className="flex items-center my-8 gap-4  md:gap-[196px] justify-center">
          <div className=" h-4 text-center text-fuchsia-50 text-[10px] md:text-[14px] font-medium leading-none">
            Cookie Preferences
          </div>
          <div className=" h-4 text-center text-fuchsia-50 text-[10px] md:text-[14px] md:mr-16 font-medium leading-none">
            Terms of Use
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
