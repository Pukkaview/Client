import share from '../../assets/share.svg'
import './button.css'
export default function ShareBtn() {
  return (
    <div className='text-accent4 flex items-center gap-[5px] cursor-pointer'>
      <img className='iconlight' src={share} alt="share" />
      <span className=''>Share Now</span>
    </div>
  )
}