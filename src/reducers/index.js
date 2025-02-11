import { combineReducers } from 'redux';
import preloaderReducer from './preloader';

// Combine all reducers
const rootReducer = combineReducers({
  preloader: preloaderReducer,
  // Add other reducers here
});

export default rootReducer;