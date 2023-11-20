import { useEffect, useState } from 'react';
import info from '../../assets/moreinfo.svg'
import './button.css'
export default function MoreInfoBtn({data, hideText, handleOpen, textSize}) {
  return (
    <div className='flex items-center'>
    <button onClick={handleOpen} className={` flex text-accent4 items-center gap-[5px] cursor-pointer`}>
      <img className={`iconlight ${textSize ? 'h-[12px]' : 'h-[14px]'}`} src={info} alt="share" />
      <span className={`${hideText ? 'sm:flex hidden' : ''} ${textSize ? textSize : 'sm:text-[16px] text-[14px]'} font-[Goemetric-415-Black-BT]`}>More Info</span>
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