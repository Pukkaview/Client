import PlayBtn from '../buttons/PlayBtn'
import ShareBtn from '../buttons/ShareBtn'
import WatchBtn from '../buttons/WatchBtn'
import './moviecards.css'
import PropTypes from 'prop-types';


export default function MovieCard2({data}) {
  return (
    <div className={`sm:h-[199px] h-[229px] z-[5px] flex items-center`}>
      <div style={{
        backgroundImage: `url(${data.coverImage})`,
        backgroundSize: 'cover',

        }} className='moviecard relative sm:w-[290px] md:w-[330px] desktop-lg:w-[310px] lg:w-[340px] xl:w-[260px] phone-lg:w-[180px] w-[150px] sm:h-[199px] h-[229px] lg:hover:h-[392px] lg:hover:w-[517px] duration-300 ease-in-out hover:z-10 rounded-[15px] flex justify-end overflow-hidden'>
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
MovieCard2.propTypes = {
  data: PropTypes.object.isRequired,
};