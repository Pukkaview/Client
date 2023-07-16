import play from '../../assets/play.svg'

export default function PlayBtn() {
  return (
    <div className='sm:h-[54px] sm:w-[54px] h-[34.462px] w-[34.462px] rounded-[50%] border-[1px] border-accent4 bg-primary hover:bg-accent2 transition duration-300 ease-in-out cursor-pointer flex items-center justify-center'>
      <img className='h-[15.317px] w-[15.317px] sm:h-[24px] sm:w-[24px]' src={play} alt="play" />
    </div>
  )
}