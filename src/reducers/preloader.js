/**
 * Preloader reducer
 *
 * This reducer manages the state of the preloader in the application.
 * It handles actions related to showing and hiding the preloader.
 */

// Define action types
const SHOW_PRELOADER = 'SHOW_PRELOADER';
const HIDE_PRELOADER = 'HIDE_PRELOADER';

// Define initial state
const initialState = {
  isLoading: false,
  message: null,
};

// Reducer function
const preloaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRELOADER:
      return {
        ...state,
        isLoading: true,
        message: action.payload.message || null,
      };
    case HIDE_PRELOADER:
      return {
        ...state,
        isLoading: false,
        message: null,
      };
    default:
      return state;
  }
};

// Action creators
export const showPreloader = (message) => ({
  type: SHOW_PRELOADER,
  payload: { message },
});

export const hidePreloader = () => ({
  type: HIDE_PRELOADER,
});

export default preloaderReducer;