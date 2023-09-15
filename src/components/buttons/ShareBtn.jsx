import { useEffect, useState } from 'react';
import share from '../../assets/share.svg'
import ShareCard from '../cards/shareCard';
import './button.css'
import { Menu } from '@mui/material';
import Fetcher from '../../utils/fetcher';
export default function ShareBtn({data, hideText, handleOpen}) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [supported, setSupported] = useState(true) 

  // useEffect(() => {
  //   if(!navigator.canShare){
  //     setSupported(false)
  //   }
  // }, [])
  const handleShare = async () => {
    handleShareCount(data.id)
    try {
      if (navigator.share) {
        setSupported(true)
        await navigator.share({
          title: data.title,
          text: data.plot,
          url: `https://pukkaview.vercel.app/play/${data.id}-${data.title}`,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        setSupported(false)
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  const handleShareCount = async(id) => {
    try {
      const fetchResponse = await Fetcher(`https://pukkaview.onrender.com/videoplayer/api/videos/${id}/shares/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  }
  return (
    <div className='flex items-center'>
    <button onClick={handleShare} className={`${supported ? 'flex lg:hidden' : 'hidden'} text-accent4 items-center gap-[5px] cursor-pointer`}>
      <img className='iconlight' src={share} alt="share" />
      <span className={`${hideText ? 'sm:flex hidden' : ''} font-[Goemetric-415-Black-BT] sm:text-[16px] text-[14px]`}>Share Now</span>
    </button>
    <button onClick={handleOpen} className={`${supported ? 'hidden lg:flex' : 'flex'} text-accent4 items-center gap-[5px] cursor-pointer`}>
      <img className='iconlight' src={share} alt="share" />
      <span className={`${hideText ? 'sm:flex hidden' : ''} font-[Goemetric-415-Black-BT] sm:text-[16px] text-[14px]`}>Share Now</span>
    </button>
    {/* <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
      </Menu> */}
    </div>
  )
}