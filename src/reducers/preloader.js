/**
 * Preloader Reducer
 *
 * This reducer manages the state of the pre-loader within the application.
 * It handles actions related to showing or hiding the pre-loader.
 */

// Define the initial state for the pre-loader
const initialState = {
  isLoading: false, // Set to true to show the pre-loader, false to hide it
};

/**
 * Preloader reducer function
 *
 * @param {Object} state - The current state of the pre-loader
 * @param {Object} action - The action object containing the action type and payload
 * @returns {Object} The new state after applying the action
 */
const preloaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_PRELOADER':
      return { ...state, isLoading: true };
    case 'HIDE_PRELOADER':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default preloaderReducer;