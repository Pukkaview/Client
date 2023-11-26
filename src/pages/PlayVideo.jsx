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
import Search from '../components/Search';
import { SearchContext } from '../context/useSearch';
import MovieDescription from '../components/playCat/movieDescription';
import Disclaimer from '../components/Disclaimer/Disclaimer';
const PlayVideo = () => {
  const {search} = useContext(SearchContext)
  const {id: slug} = useParams()
  const [data, setData] = useState('')
  const {video, dispatch} = useContext(VideoContext)
  const divRef = useRef(null); // Step 1: Create a ref
  const [marquee, setMarquee] = useState(false)
  const parts = slug.split("-");
  const id = parts[0];


  useEffect(() => { 
    setTimeout(() =>{
      if (divRef.current) {
        const width = divRef.current.offsetWidth; // Step 3: Access the width
        const screenWidth = window.innerWidth
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
        const fetchResponse = await Fetcher(`https://api.pukkaview.com/videoplayer/${id}/stream/`, {
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
  const [divHeight, setDivHeight] = useState(0);

  const updateDivHeight = () => {
    if (divRef.current) {
      const height = divRef.current.offsetHeight;
      setDivHeight(height);
    }
  };

  useEffect(() => {
    updateDivHeight();
    window.addEventListener('resize', updateDivHeight);

    return () => {
      window.removeEventListener('resize', updateDivHeight);
    };
  }, [data]);
  return (
      <div className={`${marquee ? '' : 'play_page'} bg-background`}>
        <Navbar/>
        {!search && <>
          <CustomVideoPlayer data={data}/>
          <div className='sm:mt-[75px] mt-[300px]'>
          <Disclaimer/>
          </div>
          <MovieDescription data={data}/>
          <div className='mx-auto mt-[10px] sm:mt-[30px] md:px-[30px] px-[20px] flex lg:flex-row flex-col justify-between gap-[50px]'>
            <Comment videoId={id}/>
            <PlayCat current={data.genre}/>
          </div>
        </>}
        {search && <Search/>}
        <Footer/>
      </div>
  )
};
export default PlayVideo;
