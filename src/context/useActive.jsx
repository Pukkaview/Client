import { createContext, useReducer} from 'react';
import PropTypes from "prop-types";

// Create a new context
const ActiveContext = createContext();

// Define the initial state
const initialState = {
  active: localStorage.getItem('active'),
};

// Define the reducer function
const activeReducer = (state, action) => {
  switch (action.type) {
    case 'ACTIVE':
      localStorage.setItem('active', action.payload);
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
// Create a provider component
const ActiveProvider = ({ children }) => {
  const [state, dispatch] = useReducer(activeReducer, initialState);

  // Create the context value object
  const contextValue = {
    active: state.active,
    dispatch,
  };

  // Provide the context value to the children components
  return (
    <ActiveContext.Provider value={contextValue}>
      {children}
    </ActiveContext.Provider>
  );
};

ActiveProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { ActiveContext, ActiveProvider };
