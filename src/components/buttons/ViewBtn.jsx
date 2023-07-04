import arrowW from '../../assets/arrowwhite.svg'
import arrow from '../../assets/arrow.svg'
import './button.css'
export default function ViewBtn() {
  return (
    <div className='viewBtn hover:text-primary text-accent4 flex items-center gap-[5px] transition duration-300 ease-in-out cursor-pointer'>
      <span className=''>View More</span>
      <img className='iconlight' src={arrow} alt="info" />
      <img className='icon' src={arrowW} alt="info" />
    </div>
  )
}