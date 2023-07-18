import PlayBtn from '../buttons/PlayBtn'
import ShareBtn from '../buttons/ShareBtn'
import WatchBtn from '../buttons/WatchBtn'
import './moviecards.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


export default function MovieCard({data, isLastActive}) {
  const [divWidth, setDivWidth] = useState(0);
  const [hovered, setHovered] = useState(false);

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
  };
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let width = 0;

      if (screenWidth < 760) {
        width = screenWidth / 2;
      } else if (screenWidth >= 761 && screenWidth < 1001) {
        width = screenWidth / 2.2;
      }else if (screenWidth >= 1001 && screenWidth < 1280) {
        width = screenWidth / 3.1;
      } else {
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
  return (
    <div className={`sm:h-[199px] h-[229px] z-[5px] flex items-center ${isLastActive ? 'last' : ''}`}>
      <div style={{
        backgroundImage: `url(${data.coverImage})`,
        backgroundSize: 'cover',
        width: hovered ? divWidth + 170 : divWidth - 40,
        transition: 'all 0.3s ease',
      }} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        className={`moviecard relative sm:h-[219px] h-[229px] lg:hover:h-[392px] duration-300 ease-in-out hover:z-10 rounded-[15px] flex justify-end overflow-hidden`}>
        <div className='play absolute top-[40%] left-[40%]'>
          <PlayBtn/>
        </div>
        <div className='details absolute w-full text-text-color px-[18px] py-[33px] flex flex-col gap-[25px] left-0'>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-[5px] w-[30%]'>
              <span className='sm:text-[16px] text-[12px]'><b>Year:</b> {data.year}</span>
              <span className='sm:text-[16px] text-[12px]'><b>Genre:</b> {data.genre}</span>
            </div>
            <div className='flex gap-[5px] w-[60%]'>
              <span className='sm:text-[16px] text-[12px]'> <b>Casts:</b>  </span>
              <div className='flex flex-wrap'>
                {data && data.casts.map(cast => (
                  <span className='sm:text-[16px] text-[12px]' key={cast}>{cast},</span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className='uppercase sm:text-[24px] text-[16px] font-[700]'>{data.title}</h2>
            <p className='sm:text-[16px] text-[12px]'>{data.bio}</p>
          </div>
          <div className='flex gap-[50px]'>
            <WatchBtn/>
            <ShareBtn/>
          </div>
        </div>
      </div>
    </div>
  )
}
MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
  isLastActive: PropTypes.bool,
};