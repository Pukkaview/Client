import WatchBtn from '../buttons/WatchBtn'
import InfoBtn from '../buttons/InfoBtn'
import PropTypes from 'prop-types';
import { useState } from 'react';
import MovieDetailCard from './MovieDetailsCard';

export default function IntroCard({data}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{
      backgroundImage: `url(${data.coverImage})`,
      backgroundSize: 'cover',

      }} className="pt-[250px] md:px-[59px] px-[20px] pb-[95px] text-text-color">
        <div className='sm:max-w-[615px] max-w-[349px] flex flex-col gap-[18px]'>
          <div className='flex gap-[18px] items-center'>
            <span className='bg-accent3 py-[7px] text-center rounded-[4px] text-[#000] w-[71px] font-bold text-[12px] sm:text-[14px] font-[Goemetric-415-Black-BT]'>All</span>
            <span className='text-[14px] sm:text-[16px] font-[Goemetric-415-Black-BT]'><b>Time:</b> {data.time}</span>
          </div>
          <h1 className='sm:text-[48px] text-[32px] font-[500] leading-normal'>{data.title}</h1>
          <p className='text-[14px] sm:text-[18px]'>{data.bio}</p>
          <div className='flex gap-[10px] mt-[22px]'>
              <WatchBtn/>
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