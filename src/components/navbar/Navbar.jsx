import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.svg";
import menuW from "../../assets/menuWhite.svg";
import logo from "../../assets/logo.svg";
import logoW from "../../assets/logowhite.svg";
import search from "../../assets/searchIcon.svg";
import MobileNav from "./MobileNav";
import { ActiveContext } from "../../context/useActive";
import Fetcher from "../../utils/fetcher";
import { SearchContext } from "../../context/useSearch";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const {active, dispatch} = useContext(ActiveContext)
  const {dispatch:dispatch2} = useContext(SearchContext)
  


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleChange = async(e) => {
    if(e.target.value === ''){
      dispatch2({type: 'CANCEL_SEARCH'})
      dispatch2({type: 'UPDATE_BY_CAT', payload:[]})
      dispatch2({type: 'UPDATE_BY_NAME', payload:[]})
      dispatch2({type: 'UPDATE_BY_CAST', payload:[]})
    }else{
      dispatch2({type: 'SEARCH'})
    }
    try {
      const fetchResponse = await Fetcher(`https://pukkaview.onrender.com/videoplayer/api/search-videos/?genre=${e.target.value}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(fetchResponse);
      if (fetchResponse.failure) throw new Error('No match found');
      if(!fetchResponse.message){
        dispatch2({type: 'UPDATE_BY_CAT', payload:fetchResponse})
      }
    } catch (error) {
      console.log(error.message);
      dispatch2({type: 'UPDATE_BY_CAT', payload:[]})
    }
    try {
      const fetchResponse = await Fetcher(`https://pukkaview.onrender.com/videoplayer/api/search-videos/?video_name=${e.target.value}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(fetchResponse);
      if (fetchResponse.failure) throw new Error('No match found');
      if(!fetchResponse.message){
        dispatch2({type: 'UPDATE_BY_NAME', payload:fetchResponse})
      }
    } catch (error) {
      console.log(error.message);
      dispatch2({type: 'UPDATE_BY_NAME', payload:[]})
    }
    try {
      const fetchResponse = await Fetcher(`https://pukkaview.onrender.com/videoplayer/api/search-videos/?cast=${e.target.value}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(fetchResponse);
      if (fetchResponse.failure) throw new Error('No match found');
      if(!fetchResponse.message){
        dispatch2({type: 'UPDATE_BY_CAST', payload:fetchResponse})
      }
    } catch (error) {
      console.log(error.message);
      dispatch2({type: 'UPDATE_BY_CAST', payload:[]})
    }
  }

  return (
    <div
      className={`z-50 flex justify-between items-center py-[18px] md:px-[59px] px-[10px] fixed w-full ${
        scrolled ? "bg-[#180018] transition duration-300 ease-in-out" : ""
      }`}
    >
      <Link to="/" onClick={() => dispatch({type: 'NULL', payload: ''})} className={`${active === '' ? 'active' : ''} md:w-[168px] md:h-[22px] w-[102px] h-[18px]`}>
        {!scrolled && <img src={logo} className="w-full h-full" alt="logo" />}
        {scrolled && <img src={logoW} className="w-full h-full" alt="logo" />}
      </Link>
      <div className="flex gap-[18px] items-center">
        <form>
          <label className={`block rounded-[20px] pr-[10px] py-[8px] border-[0.5px] border-[#FFBDFF] outline-none bg-transparent ${
                scrolled ? "w-[60px] pl-[15px]" : "md:w-[300px] sm:w-[169px] w-[150px] pl-[25px]"
              } md:hover:w-[300px] hover:pl-[25px] sm:hover:w-[169px] hover:w-[150px] transition duration-300 ease-in-out text-[#fff] overflow-hidden flex items-center gap-[15px]`}>
            <img
              className="w-[18px] h-[18px]"
              src={search}
              alt="search"
            />
            <input
              type="text"
              placeholder={`Search for title or category`}
              className={` outline-none bg-transparent pr-[10px] w-[85%]`}
              onChange={handleChange}
            />
          </label>
        </form>
        <div className="nav lg:flex hidden gap-[18px] items-center text-[#fff] font-[500] font-[Futura] text-[14px]">
          <Link to="/" onClick={() => dispatch({type: 'NULL', payload: ''})} className={`${active === '' ? 'active' : ''}`} >Home</Link>
          {/* <Link to='/' className={`${active === 'New' ? 'active' : ''}`} onClick={() => dispatch({type: 'NEW', payload: 'New'})}>New</Link> */}
          <Link to='/' className={`${active === 'Action' ? 'active' : ''}`} onClick={() => dispatch({type: 'ACTION', payload: 'Action'})}>Action</Link>
          <Link to='/' className={`${active === 'Comedy' ? 'active' : ''}`} onClick={() => dispatch({type: 'COMEDY', payload: 'Comedy'})}>Comedy</Link>
          <Link to='/' className={`${active === 'Drama' ? 'active' : ''}`} onClick={() => dispatch({type: 'DRAMA', payload: 'Drama'})}>Drama</Link>
          {/* <Link to='/' className={`${active === 'Lifestyle' ? 'active' : ''}`} onClick={() => dispatch({type: 'LIFESTYLE', payload: 'Lifestyle'})}>Lifestyle</Link> */}
        </div>
        <div
          className="lg:hidden flex cursor-pointer"
          onClick={() => setIsVisible(true)}
        >
          {!scrolled && <img src={menu} className="w-full h-full" alt="menu" />}
          {scrolled && <img src={menuW} className="w-full h-full" alt="menu" />}
        </div>
      </div>
      <MobileNav isVisible={isVisible} handleClose={handleClose} />
    </div>
  );
}
