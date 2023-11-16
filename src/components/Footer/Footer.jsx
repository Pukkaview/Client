import pukka from "../../assets/pukka.png";
import logo from "../../assets/pukkaviewlogo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/X.svg";
import tiktok from "../../assets/tiktok.svg";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="">
      <div className="w-full h-fit p-8 bg-[#0A0A0A] justify-center items-center flex flex-col gap-[16px]">
        <div className="flex h-[50px] gap-[5px]">
          <img className="md:h-[60px] h-[35px]" src={logo} alt="" />
        </div>
        <div className="justify-center items-center gap-[45px] flex sm:mt-4 mt-2">
          <a
            href="https://www.tiktok.com/@pukkaview"
            className=""
            target="_blank">
            <img src={tiktok} alt="" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61550654324608"
            target="_blank">
            <img src={facebook} alt="" />
          </a>
          <a href="https://twitter.com/pukkaview" className="">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.instagram.com/pukkaview/" className="">
            <img src={instagram} alt="" />
          </a>
        </div>
        <div className="flex items-center mt-4 gap-4  md:gap-[196px] justify-center">
          <div className=" h-4 text-center text-fuchsia-50 text-[10px] md:text-[14px] font-medium leading-none">
            <Link to="/privacy">Privacy policy</Link>
          </div>
          <div className=" h-4 text-center text-fuchsia-50 text-[10px] md:text-[14px] md:mr-16 font-medium leading-none">
            <Link to="/terms">Terms of Use</Link>
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
