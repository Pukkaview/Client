import play from '../../assets/playwhite.svg'
export default function WatchBtn() {
  return (
    <div className='sm:w-[182px] w-[142px] py-[18px] border-[1px] border-accent4 bg-primary hover:bg-accent2 transition duration-300 ease-in-out cursor-pointer flex gap-[19px] justify-center rounded-[10px]'>
    <img className='' src={play} alt="play" />
    <span className='text-text-color sm:text-[16px] text-[14px]'>Watch now</span>
    </div>
  )
}