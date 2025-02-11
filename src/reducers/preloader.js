// Initial state for the preloader
const initialState = {
  isLoading: false, // Set to true when preloader should be displayed
};

// Preloader reducer
const preloaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_PRELOADER':
      return {
        ...state,
        isLoading: true,
      };
    case 'HIDE_PRELOADER':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default preloaderReducer;