import { useEffect } from 'react';
import ReactPlayer from 'react-player'
import Fetcher from '../utils/fetcher';

const PlayVideo = () => {
  useEffect(() => {
    // Function to fetch the video URL
    const fetchVideoUrl = async () => {
      try {
        const fetchResponse = await Fetcher("https://pukkaview-backend.onrender.com/videoplayer/1/play/", {
          method: "GET",
          headers: {
            "Content-Type": "video/mp4",
          },
        });
        console.log(fetchResponse);
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    fetchVideoUrl();
  }, []);
  return <div>
    <ReactPlayer url='https://pukkaview-backend.onrender.com/videoplayer/1/play/' />
    <video src="https://youtu.be/pWxDxhWXJos"></video>
  </div>;
};
export default PlayVideo;
