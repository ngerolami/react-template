/**
 * Reducer for managing the pre-loader state
 * @param {Object} state - The current state
 * @param {Object} action - The dispatched action
 * @returns {Object} The new state
 */
const preLoaderReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case 'SHOW_PRELOADER':
      return { isLoading: true };
    case 'HIDE_PRELOADER':
      return { isLoading: false };
    default:
      return state;
  }
};

export default preLoaderReducer;