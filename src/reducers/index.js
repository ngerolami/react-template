import { combineReducers } from 'redux';
import preloaderReducer from './preloader';

/**
 * Combine all reducers into a single root reducer
 *
 * Add your other reducers here as well, if any.
 */
const rootReducer = combineReducers({
  preloader: preloaderReducer,
  // Add other reducers here
});

export default rootReducer;