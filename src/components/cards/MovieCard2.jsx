import { Link } from 'react-router-dom';
import PlayBtn from '../buttons/PlayBtn'
import ShareBtn from '../buttons/ShareBtn'
import WatchBtn from '../buttons/WatchBtn'
import './moviecards.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import dummy2 from "../../assets/dummy.png";
import ShareCard from './shareCard';


export default function MovieCard2({data, isLastActive}) {
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

      if (screenWidth < 768) {
        width = screenWidth / 2;
      } else if (screenWidth >= 769 && screenWidth < 1024) {
        width = screenWidth / 3.1;
      }else if (screenWidth >= 1024) {
        width = screenWidth / 4;
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
    <div className={`sm:h-[199px] phone-sm:h-[180px] h-[140px] flex items-center ${window.innerWidth < 1001 ? 'w-full' : ''}`}>
      <div style={{
        width: hovered ? divWidth + 170 : divWidth - 40,
        transition: 'all 0.3s ease',
      }} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={`moviecard2 relative sm:h-[219px] phone-sm:h-[180px] h-[140px] lg:hover:h-[392px] duration-300 ease-in-out hover:lg:z-[100] rounded-[15px] flex justify-end overflow-hidden`}>
     
          <img className='h-full w-full absolute z-[0]' src={encodeURI(data.thumbnaillink)} alt="" />
          <Link to={`/play/${data.id}`} className='play absolute top-[40%] left-[40%] cursor-pointer z-20 '>
            <PlayBtn/>
          </Link>
          <div className='details z-[10] absolute w-full text-text-color px-[18px] py-[33px] flex flex-col gap-[25px] left-0'>
            <div className='flex justify-between w-full'>
              <div className='flex flex-col gap-[5px] w-[40%]'>
                <span className='sm:text-[16px] text-[12px]'><b>Year:</b> 2019</span>
                <span className='sm:text-[16px] text-[12px]'><b>Genre:</b> {data.genre}</span>
              </div>
              <div className='flex gap-[5px] w-[50%]'>
                <span className='sm:text-[16px] text-[12px]'> <b>Casts:</b>  </span>
                <div className='flex flex-wrap'>
                  
                  <span className='sm:text-[16px] text-[12px]'>{data.cast}</span>
                  {/* {data && data.casts.map(cast => (
                  ))} */}
                </div>
              </div>
            </div>
            <div>
              <h2 className='uppercase sm:text-[24px] text-[16px] font-[700]'>{data.title}</h2>
              <p className='sm:text-[16px] text-[12px]'>{data.plot}</p>
            </div>
            <div className='flex gap-[50px]'>
              <Link to={`/play/${data.id}`}>
                <WatchBtn/>
              </Link>
              <ShareBtn data={data} handleOpen={handleOpen}/>
            </div>
          </div>
          {open &&
          <div className='absolute z-[100] bottom-0 left-0'>
            <ShareCard width={divWidth+170} handleClose={handleClose} data={data}/>
          </div>
          }
      </div>
    </div>
  )
}
MovieCard2.propTypes = {
  data: PropTypes.object.isRequired,
  isLastActive: PropTypes.bool,
};