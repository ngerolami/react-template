/**
 * Reducer for managing the pre-loader state
 */

// Define initial state
const initialState = {
  isPreloaderVisible: false, // Initial state for the pre-loader visibility
};

/**
 * Reducer function for handling pre-loader actions
 * @param {Object} state - Current state
 * @param {Object} action - Dispatched action
 * @returns {Object} - New state
 */
const preloaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_PRELOADER':
      return {
        ...state,
        isPreloaderVisible: true,
      };
    case 'HIDE_PRELOADER':
      return {
        ...state,
        isPreloaderVisible: false,
      };
    default:
      return state;
  }
};

export default preloaderReducer;