import { Link } from 'react-router-dom';
import PlayBtn from '../buttons/PlayBtn'
import ShareBtn from '../buttons/ShareBtn'
import WatchBtn from '../buttons/WatchBtn'
import './moviecards.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import logo from "../../assets/logoP.svg";
import placeholder from "../../assets/placeholder.png";
import ShareCard from './shareCard';
import MoreInfoBtn from '../buttons/moreInfo';
import MovieDetailCard from './MovieDetailsCard';
import ShareCardModal from './shareCardModal';


export default function MovieCard({data, playIcon}) {
  const [divWidth, setDivWidth] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false)

  const handleOpenDetails = () => {
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };
  const handleMouseEnter = () => {
    const screenWidth = window.innerWidth;
    if(screenWidth < 1024){
    setHovered(false);
    }else{
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setOpen(false)

  };
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let width = 0;

      if (screenWidth < 760) {
        width = screenWidth / 3;
      } else if (screenWidth >= 761 && screenWidth < 1001) {
        width = screenWidth / 4.6;
      }else if (screenWidth >= 1001 && screenWidth < 1280) {
        width = screenWidth / 5.1;
      } else {
        width = screenWidth / 6;
      }

      setDivWidth(width);
    };

    // Initial width calculation
    handleResize();

    // Event listener for screen size changes
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
    <Link to={`/play/${data.id}-${data.title}`} className={`lg:hidden flex items-center ${window.innerWidth < 1001 ? 'w-full' : ''}`}>
    <div style={{
        width: divWidth -25,
        height: divWidth - 20,
        transition: 'all 0.3s ease',
      }} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={`moviecard relative duration-300 ease-in-out hover:lg:z-20 rounded-[5px] flex  items-center overflow-hidden`}>
        <img className='h-full w-full absolute z-[-2]' src={encodeURI(data.thumbnaillink)} alt="" />
        <img className='h-full w-full absolute z-[-3]' src={placeholder} alt="" />
        <img className='absolute z-[0] top-[10px] left-[10px] h-[20px]' src={logo} alt="" />
      </div>
    </Link>
    <div className={`lg:flex hidden items-center ${window.innerWidth < 1001 ? 'w-full' : ''}`}>
      <div style={{
        width: divWidth -25,
        height: divWidth - 20,
        transition: 'all 0.3s ease',
      }} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={`moviecard relative duration-300 ease-in-out hover:lg:z-20 rounded-[5px] flex  items-center overflow-hidden`}>
        <img className='h-full w-full absolute z-[-2]' src={encodeURI(data.thumbnaillink)} alt="" />
        <img className='h-full w-full absolute z-[-3]' src={placeholder} alt="" />
        <img className='absolute z-[0] top-[10px] left-[10px] h-[20px]' src={logo} alt="" />
        {hovered && 
        <div className='w-full flex flex-col justify-center items-center gap-[10px]'>
          <div>
            <span>{data.genre}</span>
          </div>
          <div className='flex justify-between w-full px-[10px]'>
              <Link to={`/play/${data.id}-${data.title}`}>
                <WatchBtn className='py-[5px] px-[8px] rounded-[5px] gap-[5px]' textSize='text-[12px]'/>
              </Link>
              <ShareBtn data={data} handleOpen={handleOpen} open={open} textSize='text-[12px]' width={divWidth+80} handleClose={handleClose}/>
            </div>
            <div onClick={() => handleOpenDetails()}>
            <MoreInfoBtn textSize='text-[12px]' />
            </div>
        </div>
        }
      </div>
      <MovieDetailCard open={openDetails} handleClose={handleCloseDetails} data={data}/>
    </div>
    </>
  )
}
MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
  isLastActive: PropTypes.bool,
};