import PlayBtn from '../buttons/PlayBtn'
import ShareBtn from '../buttons/ShareBtn'
import WatchBtn from '../buttons/WatchBtn'
import './moviecards.css'
import PropTypes from 'prop-types';


export default function MovieCard({data}) {
  return (
    <div className='sm:w-[290px] w-[150px] sm:h-[199px] h-[229px]'>
      <div style={{
        backgroundImage: `url(${data.coverImage})`,
        backgroundSize: 'cover',

        }} className='moviecard relative sm:w-[290px] w-[150px] sm:h-[199px] h-[229px] hover:h-[392px] hover:w-[517px] duration-300 ease-in-out hover:z-10 rounded-[15px] overflow-hidden'>
        <div className='play absolute top-[40%] left-[40%]'>
          <PlayBtn/>
        </div>
        <div className='details w-full text-text-color px-[18px] py-[33px] flex flex-col gap-[25px]'>
          <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-[5px] w-[30%]'>
              <span><b>Year:</b> {data.year}</span>
              <span><b>Genre:</b> {data.genre}</span>
            </div>
            <div className='flex gap-[5px] w-[60%]'>
              <span> <b>Casts:</b>  </span>
              <div className='flex flex-wrap'>
                {data && data.casts.map(cast => (
                  <span key={cast}>{cast},</span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className='uppercase text-[24px] font-[700]'>{data.title}</h2>
            <p>{data.bio}</p>
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
};