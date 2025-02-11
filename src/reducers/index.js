import { combineReducers } from 'redux';
import preloaderReducer from './preloader';

// Import other reducers as needed

/**
 * Root reducer combining all reducers
 */
const rootReducer = combineReducers({
  preloader: preloaderReducer,
  // Add other reducers
});

export default rootReducer;