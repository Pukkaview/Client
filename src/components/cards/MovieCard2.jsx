import { Link } from 'react-router-dom';
import PlayBtn from '../buttons/PlayBtn'
import ShareBtn from '../buttons/ShareBtn'
import WatchBtn from '../buttons/WatchBtn'
import './moviecards.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import logo from "../../assets/logoP.svg";
import ShareCard from './shareCard';
import MoreInfoBtn from '../buttons/moreInfo';


export default function MovieCard2({data, playIcon}) {
  const [divWidth, setDivWidth] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false)

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
    <div className={` flex items-center ${window.innerWidth < 1001 ? 'w-full' : ''}`}>
      <div style={{
        width: divWidth - 25,
        height: divWidth - 20,
        transition: 'all 0.3s ease',
      }} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={`moviecard2 relative duration-300 ease-in-out hover:lg:z-[100] rounded-[5px] flex justify-end items-center overflow-hidden`}>
     
          <img className='h-full w-full absolute z-[0]' src={encodeURI(data.thumbnaillink)} alt="" />
          <img className='absolute z-[2] top-[10px] left-[10px] h-[20px]' src={logo} alt="" />
          {hovered && 
        <div className='w-full flex flex-col justify-center items-center gap-[10px] z-[10]'>
          <div>
            <span>{data.genre}</span>
          </div>
          <div className='flex justify-between w-full px-[10px]'>
              <Link to={`/play/${data.id}-${data.title}`}>
                <WatchBtn className='py-[5px] px-[8px] rounded-[5px] gap-[5px]' textSize='text-[12px]'/>
              </Link>
              <ShareBtn data={data} handleOpen={handleOpen} textSize='text-[12px]'/>
            </div>
            <MoreInfoBtn textSize='text-[12px]'/>
        </div>}
          {open &&
          <div className='absolute z-[100] bottom-0 left-0 mx-auto w-full'>
            <ShareCard width={divWidth+80} handleClose={handleClose} data={data}/>
          </div>
          }
      </div>
    </div>
    </>
  )
}
MovieCard2.propTypes = {
  data: PropTypes.object.isRequired,
  isLastActive: PropTypes.bool,
};