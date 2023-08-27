import WatchBtn from '../buttons/WatchBtn'
import InfoBtn from '../buttons/InfoBtn'
import PropTypes from 'prop-types';
import { useState } from 'react';
import './moviecards.css'
import MovieDetailCard from './MovieDetailsCard';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';

export default function IntroCard({data, tag}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if(!data){
    return <Skeleton variant="rectangular" width={'100%'} height={'100vh'} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }} />
  }
  return (
    <div className="contain sm:pt-[250px] pt-[100px] md:px-[59px] px-[10px] sm:pb-[95px] pb-[30px] text-text-color z-10 relative">
        <img className='h-full w-full absolute top-0 left-0 z-[-2]' src={encodeURI(data.thumbnaillink)} alt="" />
        <div className='sm:max-w-[615px] max-w-[349px] flex flex-col sm:gap-[18px] gap-[5px] z-10'>
          <div className='flex gap-[18px] items-center'>
            <span className='bg-accent3 py-[7px] text-center rounded-[4px] text-[#000] w-[71px] font-bold text-[12px] sm:text-[14px] font-[Goemetric-415-Black-BT]'>{tag}</span>
            <span className='text-[14px] sm:text-[16px] font-[Goemetric-415-Black-BT]'><b>Time:</b> {data.time}</span>
          </div>
          <h1 className='sm:text-[48px] text-[32px] font-[500] leading-normal'>{data.title}</h1>
          <p className='text-[14px] sm:text-[18px]'>{data.plot}</p>
          <div className='flex gap-[10px] mt-[22px]'>
            <Link to={`/play/${data.id}`}>
              <WatchBtn/>
            </Link>
              <div onClick={handleClickOpen}>
                <InfoBtn />
              </div>
          </div>
        </div>
        <MovieDetailCard open={open} handleClose={handleClose} data={data}/>
    </div>
  )
}

IntroCard.propTypes = {
  data: PropTypes.object.isRequired,
};