import { useState } from 'react';
import share from '../../assets/mdi_share.svg'
import './button.css'
export default function ShareBtnV2({data, hideText, handleOpen}) {

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: data.title,
          text: data.plot,
          url: `https://pukkaview.vercel.app/play/${data.id}`,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        console.log("Web Share API not supported");
        alert("Web Share API not supported")
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className='flex items-center justify-between gap-[10px] p-2 rounded cursor-pointer bg-[#FFEEFF] text-[#180018] font-bold border-0 outline-none rounded-md px-4'>
        <button onClick={handleShare} className='flex lg:hidden text-[#000] items-center gap-[5px] cursor-pointer'>
        <img className='iconlight' src={share} alt="share" />
        <span className={`${hideText ? 'sm:flex hidden' : ''} font-[Goemetric-415-Black-BT] sm:text-[16px] text-[14px]`}>Share Now</span>
        </button>
        <button onClick={handleOpen} className='hidden lg:flex text-[#000] items-center gap-[5px] cursor-pointer'>
        <img className='iconlight' src={share} alt="share" />
        <span className={`${hideText ? 'sm:flex hidden' : ''} font-[Goemetric-415-Black-BT] sm:text-[16px] text-[14px]`}>Share Now</span>
        </button>
    </div>
  )
}