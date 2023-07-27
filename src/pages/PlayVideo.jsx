// import { useEffect } from 'react';
import ReactPlayer from 'react-player'
// import Fetcher from '../utils/fetcher';

const PlayVideo = () => {
  // useEffect(() => {
  //   // Function to fetch the video URL
  //   const fetchVideoUrl = async () => {
  //     try {
  //       const fetchResponse = await Fetcher("http://34.205.31.29:8000/videoplayer/1/play/", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       console.log(fetchResponse);
  //     } catch (error) {
  //       console.error('Error fetching video URL:', error);
  //     }
  //   };

  //   fetchVideoUrl();
  // }, []);
  return <div>
    <ReactPlayer url='https://admin.pukkaview.com/dashboard/Videos/Boruto%20Episode%20197.mp4' />
    <video src="http://34.205.31.29:8000/videoplayer/1/play/"></video>
  </div>;
};
export default PlayVideo;
