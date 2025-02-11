/**
 * Reducer for managing the pre-loader state
 */

// Define the initial state
const initialState = {
  isLoading: false,
};

/**
 * Preloader reducer
 * @param {Object} state - The current state
 * @param {Object} action - The action object
 * @returns {Object} The new state
 */
const preloaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'STOP_LOADING':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default preloaderReducer;