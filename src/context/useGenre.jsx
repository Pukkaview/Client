import { createContext, useReducer} from 'react';
import PropTypes from "prop-types";

// Create a new context
const GenreContext = createContext();

// Define the initial state
const initialState = {
    genreList: [],
    videos: []

}

// Define the reducer function
const GenreReducer = (state, action) => {
  switch (action.type) {
      case 'GET_GENRE_LIST':
      return {
        ...state,
        genreList: action.payload
      };
    case 'GET_VIDEOS':
      return {
        ...state,
        videos: action.payload
      };
    default:
      return state;
  }
};
// Create a provider component
const GenreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GenreReducer, initialState);

  // Create the context value object
  const contextValue = {
    genreList: state.genreList,
    videos:state.videos,
    dispatch,
  };

  // Provide the context value to the children components
  return (
    <GenreContext.Provider value={contextValue}>
      {children}
    </GenreContext.Provider>
  );
};

GenreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { GenreContext, GenreProvider };
