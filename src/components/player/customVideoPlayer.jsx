import { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import screenfull from 'screenfull';

import logo from '../../assets/logo.svg'

// eslint-disable-next-line react/prop-types
const CustomVideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0); // 0 to 1
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isBuffering, setIsBuffering] = useState(true);
  const controlTimeoutRef = useRef(null);
  // useEffect(() => {
  //   if(currentTime > 1){
  //     setIsMuted(false)
  //     setVolume(1)
  //   }
  // }, [currentTime])
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
  // useEffect(() => {
  //   // Retrieve the stored progress from localStorage when the component mounts
  //   const storedProgress = localStorage.getItem('videoProgress');
  //   if (storedProgress !== null) {
  //     setProgress(parseFloat(storedProgress/100));
  //   }
  // }, []);

  const handleFullscreenChange = () => {
    setIsFullScreen(screenfull.isFullscreen);
  };

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };
 // Event listener for space key press
 useEffect(() => {
  const handleKeyPress = (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      setIsPlaying((prevIsPlaying) => !prevIsPlaying); // Toggle play/pause on space key press
    }
  };

  window.addEventListener('keydown', handleKeyPress);

  return () => {
    window.removeEventListener('keydown', handleKeyPress);
  };
}, []);

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
    // localStorage.setItem('videoProgress', playedProgress);
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
    }, 3000); // Set the desired time (in milliseconds) for controls to disappear after inactivity
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

  return (
    <div 
    className="relative" 
    ref={containerRef}
    onMouseEnter={showControlsOnHover}
    onMouseMove={showControlsOnHover}
    onMouseLeave={hideControls}
    >
    {isBuffering && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          {/* Replace zoomInImage with the URL of your zooming in image */}
          <img src={logo} alt="Zoom In Image" className="zoom-in-out-animation" />
        </div>
      )}
      <div>
        <ReactPlayer
          ref={videoRef}
          url={videoUrl}
          playing={isPlaying}
          muted={isMuted}
          volume={volume}
          controls={false} // Hide the default controls
          width="100%"
          height="100vh"
          preload="auto"
          onProgress={handleProgress}
          onDuration={handleDuration}
          // onBufferEnd={handleOnBufferEnd}
          onReady={handleOnReady}
          onBuffer={handleOnBuffer}
        />
      </div>

      {showControls && <div className="absolute bottom-4 left-4 right-4 flex flex-col">
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
            className="text-white mr-4"
            onClick={handlePlayPause}
          >
            {isPlaying ? <FontAwesomeIcon icon="pause" /> : <FontAwesomeIcon icon="play" />}
          </button>

          <button
            className="text-white mr-4"
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
            className="w-16 mr-4 bg-primary"
          />

          <div className="text-white mx-4">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          </div>
          <div>

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


        {/* Add the previous and next buttons here */}

      </div>}
    </div>
  );
};

export default CustomVideoPlayer;
