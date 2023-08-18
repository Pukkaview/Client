import { createContext, useReducer} from 'react';
import PropTypes from "prop-types";

// Create a new context
const  SearchContext = createContext();

// Define the initial state
const initialState = {
  search: false,
  byName: [],
  byCat: [],
  byCast: [],
  loading: false,
  error: false,
};

// Define the reducer function
const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        search: true
      };
    case 'UPDATE_BY_NAME':
      return {
        ...state,
        byName : action.payload
      };
    case 'UPDATE_BY_CAT':
    return {
        ...state,
        byCat : action.payload
    };
    case 'UPDATE_BY_CAST':
        return {
          ...state,
          byCast : action.payload
    };
    case 'CANCEL_SEARCH':
    return {
        ...state,
        search: false
    };
    case 'LOADING':
      console.log('loading', action.payload);
    return {
        ...state,
        loading: action.payload
    };
    case 'ERROR':
      console.log('error', action.payload);
    return {
        ...state,
        error: action.payload
    };
    default:
      return state;
  }
};
// Create a provider component
const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  // Create the context value object
  const contextValue = {
    byName: state.byName,
    byCat: state.byCat,
    byCast: state.byCast,
    search: state.search,
    loading: state.loading,
    error: state.error,

    dispatch,
  };

  // Provide the context value to the children components
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { SearchContext, SearchProvider };
