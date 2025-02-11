import { combineReducers } from 'redux';
import preloaderReducer from './preloader'; // Import the new preloader reducer

// Import other reducers as needed

// Combine all reducers
const rootReducer = combineReducers({
  preloader: preloaderReducer, // Add the preloader reducer
  // Add other reducers here
});

export default rootReducer;