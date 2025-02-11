/**
 * PreLoader reducer
 *
 * This reducer manages the state for the preloader.
 * It handles the following actions:
 *
 * - SET_PRELOADER: Sets the preloader state to the provided value.
 *
 * @param {boolean} state - The current state of the preloader.
 * @param {Object} action - The action object.
 * @param {boolean} action.payload - The new value for the preloader state.
 * @returns {boolean} The new state of the preloader.
 */
const preLoaderReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_PRELOADER':
      return action.payload;
    default:
      return state;
  }
};

export default preLoaderReducer;