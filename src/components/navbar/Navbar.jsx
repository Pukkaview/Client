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
import { GenreContext } from "../../context/useGenre";

export default function Navbar() {
  const {genreList} = useContext(GenreContext)
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
      dispatch2({type: 'UPDATE_BY_NAME', payload:[]})
      dispatch2({type: 'LOADING', payload:false})
      dispatch2({type: 'ERROR', payload:false})
    }else{
      dispatch2({type: 'SEARCH'})
    }
    try {
      dispatch2({type: 'UPDATE_BY_NAME', payload:[]})
      dispatch2({type: 'LOADING', payload:true})
      dispatch2({type: 'ERROR', payload:false})
      const fetchResponse = await Fetcher(`https://api.pukkaview.com/videoplayer/api/search-videos/?video_name=${e.target.value}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error('No match found');
      if(!fetchResponse.message){
        dispatch2({type: 'UPDATE_BY_NAME', payload:fetchResponse})
        dispatch2({type: 'LOADING', payload:false})
      }
    } catch (error) {
      dispatch2({type: 'UPDATE_BY_NAME', payload:[]})
      dispatch2({type: 'LOADING', payload:false})
      dispatch2({type: 'ERROR', payload:true})

    }
  }

  return (
    <div
      className={`z-50 flex justify-between top-0 items-center py-[18px] md:px-[30px] px-[10px] fixed w-full ${
        scrolled ? "bg-[#0A0A0A] transition duration-300 ease-in-out" : ""
      }`}
    >
      <Link to="/" onClick={() => {dispatch({type: 'ACTIVE', payload: ''})}} className={`${active === '' ? 'active' : ''} md:w-[168px] md:h-[22px] w-[102px] h-[18px]`}>
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
        <div className="nav lg:flex hidden gap-[18px] items-center text-[#fff] font-[500] font-[GeneralSans-Medium] text-[14px]">
          <Link to="/" onClick={() => dispatch({type: 'ACTIVE', payload: ''})} className={`${active === '' ? 'active' : ''} hover:text-[#C423C4]`} >Home</Link>
          {/* <Link to='/' className={`${active === 'New' ? 'active' : ''}`} onClick={() => dispatch({type: 'NEW', payload: 'New'})}>New</Link> */}
          {genreList.length > 1 && genreList.map((genre => (
          <Link key={genre} to='/' className={`${active === genre ? 'active' : ''} hover:text-[#C423C4]`} onClick={() => dispatch({type: 'ACTIVE', payload: genre})}>{genre}</Link>
          )))}
          {/* <Link to='/' className={`${active === 'Comedy' ? 'active' : ''} hover:text-[#C423C4]`} onClick={() => dispatch({type: 'COMEDY', payload: 'Comedy'})}>Comedy</Link>
          <Link to='/' className={`${active === 'Drama' ? 'active' : ''} hover:text-[#C423C4]`} onClick={() => dispatch({type: 'DRAMA', payload: 'Drama'})}>Drama</Link> */}
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
