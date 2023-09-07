import { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import screenfull from 'screenfull';
import logo from '../../assets/logo.svg'

import { VideoContext } from '../../context/useVideo';
import { useContext } from 'react';
import Fetcher from '../../utils/fetcher';
import Rate from '../feedback/Rate';
import SharePop from '../cards/sharePop';

// eslint-disable-next-line react/prop-types
const CustomVideoPlayer = ({ data }) => {
  const {video, dispatch} = useContext(VideoContext)
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5); // 0 to 1
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isBuffering, setIsBuffering] = useState(true);
  const controlTimeoutRef = useRef(null);
  const [ids, setIds] = useState([])
  const [open, setOpen] = useState(false)
  const [popped, setPopped] = useState(false)
  const [openShare, setOpenShare] = useState(false)

  const handleClose = () => {
    setOpen(false)
    localStorage.removeItem('open')
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleCloseShare = () => {
    setOpenShare(false)
  }
  const handleOpenShare = () => {
    setOpenShare(true)
  }
  const handleFullscreenChange = () => {
    setIsFullScreen(screenfull.isFullscreen);
  };
  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on('change', handleFullscreenChange);
    }

    return () => {
      if (screenfull.isEnabled) {
        screenfull.off('change', handleFullscreenChange);
      }
    };
  }, []);
    if ('orientation' in screen) {
      // The screen.orientation API is supported
      useEffect(() => {
        if (isFullScreen) {
          // Lock the orientation to landscape when entering fullscreen
          screen.orientation.lock('landscape').catch(console.error);
        } else {
          // If not in fullscreen, unlock the orientation
          screen.orientation.unlock();
        }
      }, [isFullScreen]);
    } else {
      // Fallback behavior for browsers that do not support screen.orientation
      // You can implement an alternative behavior or simply ignore orientation changes
      console.warn('Screen orientation API is not supported.');
    }
    
  // useEffect(() => {
  //   // Retrieve the stored progress from localStorage when the component mounts
  //   const storedProgress = localStorage.getItem('videoProgress');
  //   if (storedProgress !== null) {
  //     setProgress(parseFloat(storedProgress/100));
  //   }
  // }, []);


  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };
//  Event listener for space key press
 useEffect(() => {
  const handleKeyPress = (event) => {
    if (event.code === 'Space' && !localStorage.getItem('open') && isFullScreen) {
      event.preventDefault();
      setIsPlaying((prevIsPlaying) => !prevIsPlaying); // Toggle play/pause on space key press
    }
  };

  window.addEventListener('keydown', handleKeyPress);

  return () => {
    window.removeEventListener('keydown', handleKeyPress);
  };
}, [isFullScreen]);

  const handleMute = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
    if (videoRef.current) {
      videoRef.current.volume = isMuted ? volume : 0;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const handleProgress = (state) => {
    const playedProgress = state.played * 100;
    setProgress(playedProgress);
    setCurrentTime(state.playedSeconds);
    if (state.played >= 0.5 && !popped && !localStorage.getItem('filled')) {
        localStorage.setItem('filled', true)
        localStorage.setItem('open', true)
        setPopped(true)
        handleOpen()
        handleVideoHalfway();
      // Call your function here
    }
    // localStorage.setItem('videoProgress', playedProgress);
  };
  const handleVideoHalfway = () => {
    // Your function to be executed when the video is 50% complete
    setIsPlaying(false)
  };
  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(containerRef.current);
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  };

  const handleMovieRangeChange = (e) => {
    const played = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.seekTo(played);
    }
    setProgress(played * 100);
    setCurrentTime(played * duration);
    localStorage.setItem('videoProgress', played * 100);
  };

  const hideControls = () => {
    setShowControls(false);
  };

  const showControlsOnHover = () => {
    clearTimeout(controlTimeoutRef.current);
    setShowControls(true);
    controlTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 5000); // Set the desired time (in milliseconds) for controls to disappear after inactivity
  };
    // Clear the timeout when the component unmounts
    useEffect(() => {
      return () => {
        clearTimeout(controlTimeoutRef.current);
      };
    }, []);
    const handleOnReady = () => {
      setIsBuffering(false);
      setIsPlaying(true); // Auto-play the video when it's ready
      setTimeout(() => {setIsPlaying(true)}, 100)
      
      // if (videoRef.current) {
      //   // Retrieve the stored progress from localStorage and convert it back to seconds
      //   const storedProgressSeconds = parseFloat(localStorage.getItem('videoProgress')) || 0;
      //   videoRef.current.seekTo(storedProgressSeconds);
      // }
    };
  
    // useEffect(() => {
    //   // Seek to the stored progress when the component mounts
    //   if (videoRef.current ) {
    //     const storedProgressSeconds = parseFloat(localStorage.getItem('videoProgress')) || 0;
    //     videoRef.current.seekTo(storedProgressSeconds);
    //   }
    // }, []);
  
    // const handleOnBufferEnd = () => {
    //   setIsPlaying(true); // Start playing once buffering is complete
    // };
    // const handleOnBufferEnd = () => {
    //   setIsBuffering(false); // Video buffering is complete, update state
    //   if (videoRef.current) {
    //     setIsPlaying(true); // Set isPlaying to true only when the video is ready to play
    //   }
    // };
  
    const handleOnBuffer = () => {
      setIsBuffering(true);
      setIsPlaying(false);
    };

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
    const handleRewind = () => {
      videoRef.current.seekTo(videoRef.current.getCurrentTime() - 10, 'seconds')
    }
   const handleFastForward = () => {
    videoRef.current.seekTo(videoRef.current.getCurrentTime() + 10, 'seconds')
    }
  return (
    <div
    className="video_container relative md:min-h-[400px] min-h-[300px] flex justify-center flex-col" 
    ref={containerRef}
    onMouseEnter={showControlsOnHover}
    onMouseMove={showControlsOnHover}
    onMouseLeave={hideControls}
    >
    {isBuffering && (
        <div className="absolute md:top-0 sm:top-[40px] left-0 w-full h-full flex justify-center items-center">
          {/* Replace zoomInImage with the URL of your zooming in image */}
          <img src={logo} alt="Zoom In Image" className="zoom-in-out-animation" />
        </div>
      )}
      {showControls && <div className="flex justify-between play_btn absolute md:top-0 sm:top-[40px] z-10 left-0 w-full h-full flex justify-center items-center px-[50px]">
          {/* Replace zoomInImage with the URL of your zooming in image */}
          <button
            className="text-white rounded-[50%]"
            onClick={handleRewind}
          >
            {/* <FontAwesomeIcon icon="pause" size={`${window.innerWidth>500? '3x' : '2x'}`} /> */}
            <i className={`fa-solid fa-backward fa-2x lg:fa-3x `}></i>

          </button>
          <button
            className="text-white rounded-[50%]"
            onClick={handlePlayPause}
          >
            {isPlaying ? <FontAwesomeIcon icon="pause" size={`${window.innerWidth>1024? '3x' : '2x'}`} /> : <FontAwesomeIcon icon="play" size={`${window.innerWidth>1024? '3x' : '2x'}`} />}
          </button>
          <button
            className="text-white rounded-[50%] flex"
            onClick={handleFastForward}
          >
            <i className={`fa-solid fa-forward fa-2x lg:fa-3x`}></i>
            {/* <FontAwesomeIcon icon="forward" size={`${window.innerWidth>500? '3x' : '2x'}`} /> */}
          </button>
        </div>}
      {showControls && <div className="absolute inset-0 bg-black opacity-50"></div>}
      <div className='flex items-center'>
        <ReactPlayer
          ref={videoRef}
          url={data.videolink}
          playing={isPlaying}
          muted={isMuted}
          volume={volume}
          controls={false} // Hide the default controls
          width="100%"
          height={`${window.innerWidth < 1000 ? 'auto': '80vh'}`}
          preload="auto"
          onProgress={handleProgress}
          onDuration={handleDuration}
          // onBufferEnd={handleOnBufferEnd}
          onReady={handleOnReady}
          onBuffer={handleOnBuffer}
        />
      </div>

      {showControls && <div className="sm:w-[90%] mx-auto absolute sm:bottom-10 bottom-6 left-4 right-4 z-20 flex flex-col">
        <div>
        <input
            type="range"
            min={0}
            max={1}
            step={0.0001}
            value={progress / 100}
            onChange={handleMovieRangeChange}
            style={{
              width: '100%',
              height: '100%',
              opacity: 1,
              cursor: 'pointer'
            }}
            className="bg-primary"
          />
        </div>
        <div className='flex justify-between'>
          <div className='flex'>

          <button
            className="text-white sm:mr-4 mr-2 sm:block hidden"
            onClick={handlePlayPause}
          >
            {isPlaying ? <FontAwesomeIcon icon="pause" /> : <FontAwesomeIcon icon="play" />}
          </button>

          <button
            className="text-white sm:mr-4 mr-2"
            onClick={handleMute}
          >
            {isMuted ? <FontAwesomeIcon icon="volume-mute" /> : <FontAwesomeIcon icon="volume-up" />}
          </button>

          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="sm:w-16 w-12 sm:mr-4 mr-2 bg-primary sm:block hidden"
          />

          <div className="text-white mx-4">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          </div>
          <div className='flex gap-[10px]'>
            <button
              className="text-white mx-4"
              onClick={handleFullscreen}
            >
              {isFullScreen ? (
                <FontAwesomeIcon icon="compress" />
              ) : (
                <FontAwesomeIcon icon="expand" />
              )}
            </button>
          </div>
        </div>
      </div>}
      <Rate handleClose={handleClose} open={open}/>
      <SharePop data={data} open={openShare} handleClose={handleCloseShare}/>
    </div>
  );
};

export default CustomVideoPlayer;
