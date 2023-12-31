import React from 'react'
import { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import cancel from '../../assets/eva_close-outline.svg'
import whatsApp from '../../assets/whatsApp.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import CopyButton from '../buttons/copyBtn';
import Fetcher from '../../utils/fetcher';

export default function ShareCard({ handleClose, data, width}) {
    const url = `https://pukkaview.vercel.app/play/${data.id}-${data.title}`
    const handleShareCount = async(id) => {
      try {
        const fetchResponse = await Fetcher(`https://api.pukkaview.com/videoplayer/api/videos/${id}/shares/`, {
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
    const handleShare = (platform, url, title, imageUrl) => {
      handleShareCount(data.id)
    let shareText = '';

  switch (platform) {
    case 'twitter':
      // Twitter sharing URL with image parameter
      shareText = `${data.title}\n${url}`;
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank');
      break;
    case 'whatsapp':
      // WhatsApp sharing text with embedded image
      shareText = `${data.title}\n${url}\n`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
      break;
    case 'facebook':
      // Facebook sharing URL with image parameter
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(data.classNametitle)}`, '_blank');
      break;
    default:
      break;
  }
}; 
  return (
      <div>
            <div 
            style={{
              width:width,
              maxWidth: '400px',
              margin: "0 auto"
            }}
            className="flex flex-col items-center mx-auto bg-[#FEF] px-[16px] pb-[16px] pt-[35px] rounded-[10px] relative mx-auto">
              <div className='flex flex-col items-center w-full px-[10px]'>
                <div className='flex justify-between w-full'>
                  <h2 className="text-[24px] text-[#000] mb-[22px]">Share</h2>
                  <img src={cancel} onClick={handleClose} alt="" className="h-[25px] cursor-pointer"  />
                </div>
                <div className='flex gap-[15px]'>
                  <div className='flex flex-col gap-[6px] items-center'>
                    <img className='cursor-pointer h-[44px] w-[44px]' src={whatsApp} alt="" onClick={() => handleShare('whatsapp', url)}/>
                    <span className='text-[#000] text-[12px]'>WhatsApp</span>
                  </div>
                  <div className='flex flex-col gap-[6px] items-center'>
                  <img className='cursor-pointer h-[44px] w-[44px]' src={facebook} alt="" onClick={() => handleShare('facebook', url)}/>
                    <span className='text-[#000] text-[12px]'>Facebook</span>
                  </div>
                  <div className='flex flex-col gap-[6px] items-center'>
                    <img className='cursor-pointer h-[44px] w-[44px]' src={twitter} alt="" onClick={() => handleShare('twitter', url)}/>
                    <span className='text-[#000] font-[500] text-[12px]'>Twitter</span>
                  </div>
                </div>

                <div className='mt-[20px] flex justify-between bg-[#FFF] rounded-[10px] px-[23px] py-[10px]'>
                  <span className='text-[#000] sm:text-[14px] text-[12px]'>{url}</span>
                  <CopyButton text={url}/>
                </div>
              </div>
            </div>
    </div>
  )
}
