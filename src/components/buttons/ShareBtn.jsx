import share from '../../assets/share.svg'
import './button.css'
export default function ShareBtn() {
  return (
    <button className='text-accent4 flex items-center gap-[5px] cursor-pointer'>
      <img className='iconlight' src={share} alt="share" />
      <span className='font-[Goemetric-415-Black-BT]'>Share Now</span>
    </button>
  )
}