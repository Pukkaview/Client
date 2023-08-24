import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Comment from '../components/comment/Comment';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/navbar/Navbar';
import PlayCat from '../components/playCat/playCat';
import CustomVideoPlayer from '../components/player/customVideoPlayer';
import Fetcher from '../utils/fetcher';
import { useParams } from 'react-router-dom';
import { VideoContext } from '../context/useVideo';
import { useContext } from 'react';
import { Skeleton } from '@mui/material';
import { useRef } from 'react';
const PlayVideo = ({comedy, action, drama}) => {
  const {id} = useParams()
  const [data, setData] = useState('')
  const {video, dispatch} = useContext(VideoContext)
  const divRef = useRef(null); // Step 1: Create a ref
  const [marquee, setMarquee] = useState(false)

  useEffect(() => { 
    setTimeout(() =>{
      if (divRef.current) {
        const width = divRef.current.offsetWidth; // Step 3: Access the width
        const screenWidth = window.innerWidth
        console.log('Div width:', width);
        console.log('Screen width:', screenWidth);
        if(screenWidth-20 > width ){
          setMarquee(false)
        }else{
          setMarquee(true)
        }
  
      }
    }, 500) 
  }, [data]);
  useEffect(() => {
    // Function to fetch the video URL
    const fetchVideoUrl = async () => {
      try {
        const fetchResponse = await Fetcher(`https://pukkaview.onrender.com/videoplayer/${id}/play/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (fetchResponse.failure) throw new Error(fetchResponse.message);

        setData(fetchResponse)
        dispatch({type: 'GET_VIDEO', payload:fetchResponse})
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    fetchVideoUrl();
  }, [id]);
  return (
      <div className={`${marquee ? '' : 'play_page'} bg-[#180018]`}>
        <Navbar/>
        <CustomVideoPlayer data={data}/>
        {data && <Marquee play={marquee} style={{width: "100%"}}>
        <div id='marquee-text' ref={divRef} className="flex gap-[20px] items-center mt-[30px] ml-[30px]">
          <h2 className='sm:text-[48px] text-[25px] font-[500] leading-normal text-text-color ml-[20px]' >{data.title}</h2>
          <span className="px-[30px] py-[5px] rounded-[5px] bg-accent3 text-black sm:text-[16px] text-[16px]">{data.genre}</span>
          <span className="text-[14px] text-text-color"><b>Year:</b> {data.year}</span>
          <span className="text-[14px] text-text-color"><b>Cast/Crew:</b> {data.cast}</span>
          <span className="text-[14px] text-text-color"><b>Plot:</b> {data.plot}</span>

        </div>
      </Marquee>}
      {/* {data && !isTextLong &&
        <div id='marquee-text' ref={marqueeTextRef} className="flex gap-[20px] items-center justify-center w-full mt-[70px]">
          <h2 className='sm:text-[48px] text-[32px] font-[500] leading-normal text-text-color ml-[20px]' >{data.title}</h2>
          <span className="px-[30px] py-[5px] rounded-[5px] bg-accent3 text-black">{data.genre}</span>
          <span className="text-[14px] text-text-color"><b>Year:</b> {data.year}</span>
          <span className="text-[14px] text-text-color"><b>Cast/Crew:</b> {data.cast}</span>
          <span className="text-[14px] text-text-color"><b>Plot:</b> {data.plot}</span>

        </div>} */}
        <div className='max-w-[1400px] mx-auto mt-[30px] md:px-[59px] px-[20px] flex lg:flex-row flex-col justify-between gap-[50px]'>
          <Comment videoId={id}/>
          <PlayCat comedy={comedy} action={action} drama={drama}/>
        </div>
        <Footer/>
      </div>
  )
};
export default PlayVideo;
