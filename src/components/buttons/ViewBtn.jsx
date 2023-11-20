import arrowW from '../../assets/arrowwhite.svg'
import arrow from '../../assets/arrow.svg'
import './button.css'
export default function ViewBtn() {
  return (
    <button className='viewBtn hover:text-primary text-accent4 flex items-center gap-[5px] transition duration-300 ease-in-out cursor-pointer'>
      <p className='font-[GeneralSans-Medium] sm:text-[16px] text-[14px]'>View More</p>
      <img className='iconlight' src={arrow} alt="info" />
      <img className='icon' src={arrowW} alt="info" />
    </button>
  )
}