import { combineReducers } from 'redux';
import preloaderReducer from './preloader';

// Remove the sample reducer if not used
// import sampleReducer from './sample';

/**
 * Combine all reducers into a single root reducer
 */
const rootReducer = combineReducers({
  preloader: preloaderReducer,
  // sample: sampleReducer,
});

export default rootReducer;