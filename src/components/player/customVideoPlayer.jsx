import { useState } from "react";


// eslint-disable-next-line react/prop-types
const CustomVideoPlayer = ({ data }) => {
  const [loading, setLoading] = useState(true)
  console.log(loading);
  console.log(data);
  const handleLoad = () => {
    setLoading(false)
  }
  return (
    <div>
    <div
    className={`video_container w-full fixed sm:relative top-[70px] z-[30] flex justify-center flex-col bg-[#000] `} 
    >
        {loading && (
        <div className="absolute md:top-0 sm:top-[40px] left-0 w-full h-full flex justify-center items-center">
          <img src={logo} alt="Zoom In Image" className="zoom-in-out-animation" />
        </div>
      )}
          {data.video_id && <iframe className='sm:h-[400px] h-[200px]' src={`https://iframe.mediadelivery.net/embed/${data.video_library_id}/${data.video_id}?autoplay=true&loop=false&muted=false&preload=true`} loading="lazy" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" onLoad={handleLoad}></iframe>}
    </div>
    </div>
  );
};

export default CustomVideoPlayer;
