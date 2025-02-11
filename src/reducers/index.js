import { combineReducers } from 'redux';
import preloaderReducer from './preloader'; // Import the new preloader reducer

// Remove the sample reducer if it's not being used
// import sampleReducer from './sample';

/**
 * Combine all reducers into a single root reducer
 */
const rootReducer = combineReducers({
  preloader: preloaderReducer, // Add the preloader reducer to the combined reducers
  // sample: sampleReducer, // Uncomment if the sample reducer is needed
});

export default rootReducer;