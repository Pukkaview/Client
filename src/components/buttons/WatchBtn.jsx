import play from '../../assets/playwhite.svg'
export default function WatchBtn() {
  return (
    <button className='px-[18px] sm:px-[29px] py-[18px] border-[1px] border-accent4 bg-primary hover:bg-accent2 transition duration-300 ease-in-out cursor-pointer flex sm:gap-[19px] gap-[10px] justify-center rounded-[10px]'>
    <img className='' src={play} alt="play" />
    <span className='text-text-color sm:text-[16px] text-[14px] font-[Goemetric-415-Black-BT]'>Watch now</span>
    </button>
  )
}