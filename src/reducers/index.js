import { combineReducers } from 'redux';
import preloaderReducer from './preloader';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  preloader: preloaderReducer,
  // Add other reducers here
});

export default rootReducer;