import { useState } from 'react';
import share from '../../assets/share.svg'
import ShareCard from '../cards/shareCard';
import './button.css'
export default function ShareBtn({data, hideText}) {
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log('yes');
  };
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
    <div className='flex items-center'>
    <button onClick={handleShare} className='flex sm:hidden text-accent4 items-center gap-[5px] cursor-pointer'>
      <img className='iconlight' src={share} alt="share" />
      <span className={`${hideText ? 'sm:flex hidden' : ''} font-[Goemetric-415-Black-BT] sm:text-[16px] text-[14px]`}>Share Now</span>
    </button>
    <button onClick={handleClickOpen} className='hidden sm:flex text-accent4 items-center gap-[5px] cursor-pointer'>
      <img className='iconlight' src={share} alt="share" />
      <span className={`${hideText ? 'sm:flex hidden' : ''} font-[Goemetric-415-Black-BT] sm:text-[16px] text-[14px]`}>Share Now</span>
    </button>
    <ShareCard open={open} handleClose={handleClose} data={data}/>
    </div>
  )
}