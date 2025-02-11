/**
 * Reducer for managing pre-loader state
 * @param {Object} state - Current state
 * @param {Object} action - Action object
 * @returns {Object} New state
 */
const preloaderReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default preloaderReducer;