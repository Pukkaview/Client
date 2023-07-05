import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../../assets/menu.svg'
import menuW from '../../assets/menuwhite.svg'
import logo from '../../assets/logo.svg'
import logoW from '../../assets/logowhite.svg'
import search from '../../assets/searchIcon.svg'
import MobileNav from './MobileNav';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <div className={`z-50 flex justify-between items-center py-[18px] md:px-[59px] px-[20px] fixed w-full ${scrolled ? 'bg-[#180018] transition duration-300 ease-in-out' : ''}`}>
      <div className="md:w-[168px] md:h-[22px] w-[102px] h-[18px]">
        {!scrolled && <img src={logo} className="w-full h-full" alt="logo" />}
        {scrolled && <img src={logoW} className="w-full h-full" alt="logo" />}
      </div>
      <div className="flex gap-[18px] items-center">
        <form>
          <label className='relative'>
            <input type="text" placeholder={'Search for title or category'} className={`rounded-[20px] pl-[45px] pr-[10px] py-[8px] border-[0.5px] border-[#FFBDFF] outline-none bg-transparent ${scrolled ? 'w-[30px]' : 'md:w-[300px] sm:w-[169px] w-[150px]'} md:hover:w-[300px] sm:hover:w-[169px] hover:w-[150px] transition duration-300 ease-in-out text-[#fff]`}/>
            <img className='absolute top-[6px] left-[20px]' src={search} alt="search" />
          </label>
        </form>
        <div className="lg:flex hidden gap-[18px] items-center text-[#fff] font-[500]">
          <NavLink to='/'>Home</NavLink>
          <NavLink>New</NavLink>
          <NavLink>Action</NavLink>
          <NavLink>Comedy</NavLink>
          <NavLink>Sermon</NavLink>
          <NavLink>Lifestyle</NavLink>
        </div>
        <div className="lg:hidden flex cursor-pointer" onClick={() => setIsVisible(true)}>
        {!scrolled && <img src={menu} className="w-full h-full" alt="menu" />}
        {scrolled && <img src={menuW} className="w-full h-full" alt="menu" />}
      </div>
      </div>
      <MobileNav isVisible={isVisible} handleClose={handleClose}/>
    </div>
  )
}