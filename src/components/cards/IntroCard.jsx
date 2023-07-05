import WatchBtn from '../buttons/WatchBtn'
import InfoBtn from '../buttons/InfoBtn'
import PropTypes from 'prop-types';

export default function IntroCard({data}) {
  return (
    <div style={{
      backgroundImage: `url(${data.coverImage})`,
      backgroundSize: 'cover',

      }} className="pt-[250px] md:px-[59px] px-[20px] pb-[95px] text-text-color">
        <div className='sm:max-w-[615px] max-w-[349px] flex flex-col gap-[18px]'>
          <div className='flex gap-[18px] items-center'>
            <span className='bg-accent3 py-[7px] text-center rounded-[4px] text-[#000] w-[71px] font-bold text-[12px] sm:text-[14px]'>All</span>
            <span className='text-[14px] sm:text-[16px]'><b>Time:</b> {data.time}</span>
          </div>
          <h1 className='text-[48px] font-[500]'>{data.title}</h1>
          <p className='text-[14px] sm:text-[16px]'>{data.bio}</p>
          <div className='flex gap-[50px]'>
              <WatchBtn/>
              <InfoBtn/>
          </div>
        </div>
    </div>
  )
}

IntroCard.propTypes = {
  data: PropTypes.object.isRequired,
};