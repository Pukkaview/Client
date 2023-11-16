import infoW from '../../assets/infowhite.svg'
import info from '../../assets/info.svg'
import './button.css'

export default function InfoBtn() {
  return (
    <button className='infoBtn px-[18px] sm:px-[20px] sm:py-[14px] py-[14px] border-[1px] border-primary hover:border-accent2 hover:bg-accent2  transition duration-300 ease-in-out cursor-pointer flex sm:gap-[19px] gap-[10px] justify-center items-center rounded-[10px]'>
    <img className='icon sm:flex hidden h-[14px]' src={info} alt="info" />
    <img className='iconlight sm:flex hidden h-[14px]' src={infoW} alt="info" />
    <span className='sm:text-[14px] text-[12px] font-[400] font-[GeneralSans-Medium]'>About Movie</span>
    </button>
  )
}