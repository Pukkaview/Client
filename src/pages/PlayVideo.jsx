import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Comment from '../components/comment/Comment';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/navbar/Navbar';
import PlayCat from '../components/playCat/playCat';
import CustomVideoPlayer from '../components/player/customVideoPlayer';
import Fetcher from '../utils/fetcher';

const PlayVideo = () => {
  const [link, setLink] = useState('')
  useEffect(() => {
    // Function to fetch the video URL
    const fetchVideoUrl = async () => {
      try {
        const fetchResponse = await Fetcher("https://pukkaview.onrender.com/videoplayer/11/play/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(fetchResponse.video_link);
        setLink(fetchResponse.video_link)
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    fetchVideoUrl();
  }, []);
  return (
      <div className='bg-[#180018]'>
        <Navbar/>
        <CustomVideoPlayer videoUrl={link}/>
        <Marquee style={{width: "100%"}}>
        <div className="flex gap-[20px] items-center w-full mt-[70px]">
          <h2 className='sm:text-[48px] text-[32px] font-[500] leading-normal text-text-color ml-[20px]' >Interview with God</h2>
          <span className="px-[30px] py-[5px] rounded-[5px] bg-accent3 text-black">Action</span>
          <span className="text-[14px] text-text-color"><b>Year:</b> 2022</span>
          <span className="text-[14px] text-text-color"><b>Cast/Crew:</b> Segun Jackob, Segun Daniel, Oguntedo Aremu, Segun Gabriel, Oguntedo Aremu, Jesus Caleb.</span>
        </div>
      </Marquee>
        <div className='max-w-[1400px] mx-auto mt-[20px] pt-[100px] md:px-[59px] px-[20px] flex lg:flex-row flex-col justify-between gap-[30px]'>
          <Comment/>
          <PlayCat/>
        </div>
        <Footer/>
      </div>
  )
};
export default PlayVideo;
