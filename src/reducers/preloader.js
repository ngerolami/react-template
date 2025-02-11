/**
 * Preloader reducer
 *
 * This reducer manages the state for the pre-loader.
 * It handles actions to show or hide the pre-loader.
 */

// Define the initial state
const initialState = {
  show: false, // Initial state for the pre-loader
};

// Preloader reducer function
const preloaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_PRELOADER':
      return {
        ...state,
        show: true,
      };
    case 'HIDE_PRELOADER':
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default preloaderReducer;