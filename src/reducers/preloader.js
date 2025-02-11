/**
 * Preloader reducer
 * Manages the state related to the pre-loader
 */

// Define initial state
const initialState = {
  isLoading: true,
};

// Reducer function
const preloaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTENT_LOADED':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default preloaderReducer;