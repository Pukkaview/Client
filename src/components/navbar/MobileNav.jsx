import close from '../../assets/close.svg'
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

export default function MobileNav({isVisible, handleClose}) {
  return (
    <div className={`bg-[#180018] px-[33px] pb-[26px] pt-[58px] w-[337px] absolute top-0 right-0 text-[#fff] flex flex-col gap-[23px] ${
      isVisible ? "" : "transform translate-x-[120%]"
    } transition duration-300 ease-in-out`}>
      <img onClick={handleClose} className='absolute top-[9px] right-[11px] cursor-pointer' src={close} alt="close" />
      <div className="bg-black select relative" style={{ width: "100%" }}>
        <select className="bg-[#FEF] appearance-none cursor-pointer w-full px-[20px] py-[15px] rounded-[5px] bg-[#313131] outline-none font-[700] text-[#000000]" id="csize" style={{ width: "100%" }} name="csize">
          <option value={"new"}>New</option>
          <option value={"action"}>Action</option>
          <option value={"comedy"}>Comedy</option>
          <option value={"sermon"}>Sermon</option>
          <option value={"lifestyle"}>Lifestyle</option>
        </select>
        <div className="pointer-events-none absolute top-[15px] right-[10px] flex items-center px-2 text-white ">
        <svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path fill="#000000" d="M8 6l4 4 4-4h-8z" />
        </svg>
        </div>
      </div>
      <NavLink to='/'>Home</NavLink>
    </div>
  )
}
MobileNav.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};