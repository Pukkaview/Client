import { createContext, useReducer} from 'react';
import PropTypes from "prop-types";

// Create a new context
const CommentContext = createContext();

// Define the initial state
const initialState = {
  comments: [],
};

// Define the reducer function
const CommentReducer = (state, action) => {
  switch (action.type) {
    case 'POST_COMMENT':
      localStorage.setItem('comment', [...state.comments, action.payload]);
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case 'LIKE':
      return {
        ...state,
        comments: action.payload,
      };
    case 'GET_COMMENTS':
      localStorage.setItem('comment', action.payload);
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};
// Create a provider component
const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CommentReducer, initialState);

  // Create the context value object
  const contextValue = {
    comments: state.comments,
    dispatch,
  };

  // Provide the context value to the children components
  return (
    <CommentContext.Provider value={contextValue}>
      {children}
    </CommentContext.Provider>
  );
};

CommentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { CommentContext, CommentProvider };
