import pukka from "../../assets/pukka.png";
import logo from "../../assets/logo2.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
const Footer = () => {
  return (
    <div className="">
      <div class="w-full h-fit p-8 bg-[#180018] justify-center items-center flex flex-col gap-4">
        <div class="pt-12">
          <img src={pukka} alt="" />
        </div>
        <div className="mt-10">
          <img src={logo} alt="" />
        </div>
        <div class="justify-center items-center gap-[45px] flex mt-4">
          <div class="">
            <img src={twitter} alt="" />
          </div>
          <div class="">
            <img src={facebook} alt="" />
          </div>
          <div class="">
            <img src={instagram} alt="" />
          </div>
        </div>
        <div class="flex items-center my-8 gap-4  md:gap-[196px] justify-center">
          <div class=" h-4 text-center text-fuchsia-50 text-[10px] md:text-[14px] font-medium leading-none">
            Cookie Preferences
          </div>
          <div class=" h-4 text-center text-fuchsia-50 text-[10px] md:text-[14px] md:mr-16 font-medium leading-none">
            Terms of Use
          </div>
          <div class=" h-4  text-center text-fuchsia-50 text-[10px] md:text-[14px] font-medium leading-none">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
