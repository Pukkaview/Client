import close from '../../assets/close.svg'
import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";
import { ActiveContext } from "../../context/useActive";
import { useContext, useEffect, useState } from 'react';
import { GenreContext } from '../../context/useGenre';
import CustomDropdown from '../customDropdown';

export default function MobileNav({isVisible, handleClose}) {
  const {active, dispatch} = useContext(ActiveContext)
  const {genreList} = useContext(GenreContext)
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    setSelectedOption(genreList[0])
  }, [genreList])
  const handleSelectChange = (genre) => {
    // const genre = event.target.value;
    setSelectedOption(genre);
    dispatch({type:'ACTIVE', payload:genre})
    navigate('/')
    handleClose()
  };
  return (
    <div className={`bg-[#180018] px-[33px] pb-[26px] pt-[58px] w-[337px] absolute top-0 right-0 text-[#fff] flex flex-col gap-[23px] ${
      isVisible ? "" : "transform translate-x-[120%]"
    } transition duration-300 ease-in-out`}>
      <img onClick={handleClose} className='absolute top-[9px] right-[11px] cursor-pointer' src={close} alt="close" />
      <div className="bg-black select relative" style={{ width: "100%" }}>
        {selectedOption && <CustomDropdown
          options={genreList}
          selectedOption={selectedOption}
          onSelect={handleSelectChange}
        />}
        <div className="pointer-events-none absolute top-[15px] right-[10px] flex items-center px-2 text-white ">
        <svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path fill="#000000" d="M8 6l4 4 4-4h-8z" />
        </svg>
        </div>
      </div>
      <Link to="/" onClick={() => {dispatch({type: 'ACTIVE', payload: ''}); handleClose()}} className={`${active === '' ? 'active' : ''}`} >Home</Link>
    </div>
  )
}
MobileNav.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};