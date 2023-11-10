

// eslint-disable-next-line react/prop-types
const CustomVideoPlayer = ({ data }) => {
  return (
    <div>
    <div
    className={`video_container w-full fixed sm:relative top-[70px] z-[30] flex justify-center flex-col bg-[#000] `} 
    >
            <iframe className='sm:h-[400px] h-[200px]' src="https://iframe.mediadelivery.net/embed/171948/8393ff90-a20e-4eb1-88c1-39ef8fdd752e?autoplay=true&loop=false&muted=false&preload=true" loading="lazy" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe>
    </div>
    </div>
  );
};

export default CustomVideoPlayer;
