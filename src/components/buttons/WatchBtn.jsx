import play from '../../assets/playwhite.svg'
export default function WatchBtn({className,textSize}) {
  return (
    <button className={`${className ? className : 'px-[18px] sm:px-[20px] sm:py-[14px] py-[14px]  sm:gap-[19px] gap-[10px] rounded-[10px]'} bg-primary hover:bg-accent2 transition duration-300 ease-in-out cursor-pointer flex justify-center items-center `}>
    <img className={`sm:flex hidden ${ textSize ? 'h-[12px]' : ''}`} src={play} alt="play" />
    <span className={`${textSize ? textSize : 'sm:text-[14px] text-[12px]'} text-text-color  font-[GeneralSans-Regular]`}>Watch now</span>
    </button>
  )
}