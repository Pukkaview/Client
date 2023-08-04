import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Comment from '../components/comment/Comment';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/navbar/Navbar';
import PlayCat from '../components/playCat/playCat';
import CustomVideoPlayer from '../components/player/customVideoPlayer';
import Fetcher from '../utils/fetcher';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
  const {id} = useParams()
  const [data, setData] = useState('')
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
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    fetchVideoUrl();
  }, []);
  return (
      <div className='bg-[#180018]'>
        <Navbar/>
        <CustomVideoPlayer videoUrl={data.videolink}/>
        <Marquee style={{width: "100%"}}>
        <div className="flex gap-[20px] items-center w-full mt-[70px]">
          <h2 className='sm:text-[48px] text-[32px] font-[500] leading-normal text-text-color ml-[20px]' >{data.title}</h2>
          <span className="px-[30px] py-[5px] rounded-[5px] bg-accent3 text-black">{data.genre}</span>
          <span className="text-[14px] text-text-color"><b>Year:</b> {data.year}</span>
          <span className="text-[14px] text-text-color"><b>Cast/Crew:</b> {data.cast}</span>
          <span className="text-[14px] text-text-color"><b>Plot:</b> {data.plot}</span>

        </div>
      </Marquee>
        <div className='max-w-[1400px] mx-auto mt-[20px] pt-[100px] md:px-[59px] px-[20px] flex lg:flex-row flex-col justify-between gap-[30px]'>
          <Comment videoId={id}/>
          <PlayCat/>
        </div>
        <Footer/>
      </div>
  )
};
export default PlayVideo;
