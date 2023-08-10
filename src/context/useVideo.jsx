import { createContext, useReducer} from 'react';
import PropTypes from "prop-types";

// Create a new context
const VideoContext = createContext();

// Define the initial state
const initialState = {}

// Define the reducer function
const VideoReducer = (state, action) => {
  switch (action.type) {
      case 'GET_VIDEO':
      return {
        ...action.payload,
      };
    case 'LIKE_VIDEO':
      return {
        ...state,
        likes: state.likes++
      };
    default:
      return state;
  }
};
// Create a provider component
const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(VideoReducer, initialState);

  // Create the context value object
  const contextValue = {
    video:state,
    dispatch,
  };

  // Provide the context value to the children components
  return (
    <VideoContext.Provider value={contextValue}>
      {children}
    </VideoContext.Provider>
  );
};

VideoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { VideoContext, VideoProvider };
