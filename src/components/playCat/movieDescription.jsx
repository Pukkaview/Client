import React from 'react'
import { VideoContext } from '../../context/useVideo'
import { useContext } from 'react'
import Fetcher from '../../utils/fetcher'
import { useState } from 'react'
import like from '../../assets/like-dark.svg'
import ShareBtnV2 from '../buttons/shareBtnV2'
import SharePop from '../cards/sharePop'


export default function MovieDescription({data}) {
  const {video, dispatch} = useContext(VideoContext)
  const [ids, setIds] = useState([])
  const [openShare, setOpenShare] = useState(false)
  const handleCloseShare = () => {
    setOpenShare(false)
  }
  const handleOpenShare = () => {
    setOpenShare(true)
  }
  const handleLike = async(id) => {
    if(ids.includes(id)) return
    setIds((prev) => [...prev, id])
    dispatch({type:"LIKE_VIDEO", payload: id})
    try {
      const fetchResponse = await Fetcher(`https://pukkaview.onrender.com/videoplayer/api/videos/${id}/like/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (fetchResponse.failure) throw new Error(fetchResponse.message);
      console.log(fetchResponse);
    } catch (error) {
      console.error('Error fetching video URL:', error);
    }
  }
  return (
    <div>
    <div className='flex justify-between sm:mt-[30px] mt-[10px] md:px-[59px] px-[20px] max-w-[1400px] mx-auto'>
      <div className="flex flex-col gap-[10px] items-start w-full">
        <div className='flex justify-between w-full'>
          <span className="sm:px-[30px] px-[10px] py-[5px] rounded-[5px] bg-accent3 text-black sm:text-[16px] text-[16px]">{data.genre}</span>
          <div className='flex gap-[20px] items-start'>
          <button className="flex items-center justify-between gap-[10px] p-2 rounded cursor-pointer bg-[#FFEEFF] text-[#180018] font-bold border-0 outline-none rounded-md px-4" onClick={() => handleLike(video.id)}>
            <img src={like}  alt="" className="cursor-pointer h-[24px]"/>
            <span className='text-[#000]'>{video.likes} {video.likes > 1 ? 'likes' : 'like'}</span>
          </button>
      <div>
        <ShareBtnV2 data={data} hideText={true} handleOpen={handleOpenShare}/>
      </div>
      </div>
        </div>
        <h2 className='sm:text-[48px] text-[25px] font-[500] leading-none text-text-color' >{data.title}</h2>
        <span className="text-[14px] text-text-color"><b>Year:</b> {data.year}</span>
        <span className="text-[14px] text-text-color"><b>Cast/Crew:</b> {data.cast}</span>
        <span className="text-[14px] text-text-color"><b>Plot:</b> {data.plot}</span>
      </div>
    </div>
      <SharePop data={data} open={openShare} handleClose={handleCloseShare}/>
    </div>
  )
}
