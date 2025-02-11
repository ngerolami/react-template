/**
 * PreloaderPageReducer
 *
 * This reducer manages the state related to the pre-loader page.
 * It handles actions to show or hide the pre-loader, as well as set the optional message to display.
 */

// Action types
const SHOW_PRELOADER = 'SHOW_PRELOADER';
const HIDE_PRELOADER = 'HIDE_PRELOADER';
const SET_PRELOADER_MESSAGE = 'SET_PRELOADER_MESSAGE';

// Initial state
const initialState = {
  isPreloaderShown: false,
  message: '',
};

/**
 * PreloaderPageReducer
 *
 * Reducer function that handles actions related to the pre-loader page.
 *
 * @param {Object} state - The current state of the reducer
 * @param {Object} action - The action object containing the type and payload
 * @returns {Object} The new state after applying the action
 */
const preloaderPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRELOADER:
      return {
        ...state,
        isPreloaderShown: true,
      };
    case HIDE_PRELOADER:
      return {
        ...state,
        isPreloaderShown: false,
        message: '',
      };
    case SET_PRELOADER_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

// Action creators
export const showPreloader = () => ({ type: SHOW_PRELOADER });
export const hidePreloader = () => ({ type: HIDE_PRELOADER });
export const setPreloaderMessage = (message) => ({
  type: SET_PRELOADER_MESSAGE,
  payload: message,
});

// Export the reducer
export default preloaderPageReducer;