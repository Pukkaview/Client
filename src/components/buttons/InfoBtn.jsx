import infoW from '../../assets/infowhite.svg'
import info from '../../assets/info.svg'
import './button.css'

export default function InfoBtn() {
  return (
    <button className='infoBtn px-[18px] sm:px-[29px] sm:py-[18px] py-[14px] border-[1px] border-primary hover:border-accent2 hover:bg-accent2  transition duration-300 ease-in-out cursor-pointer flex sm:gap-[19px] gap-[10px] justify-center rounded-[10px]'>
    <img className='icon sm:flex hidden' src={info} alt="info" />
    <img className='iconlight sm:flex hidden' src={infoW} alt="info" />
    <span className='sm:text-[16px] text-[14px] font-[400] font-[Goemetric-415-Black-BT]'>About Movie</span>
    </button>
  )
}