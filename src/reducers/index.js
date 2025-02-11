import { combineReducers } from 'redux';
import preloaderReducer from './preloader';

// Delete the sample reducer if it's not used elsewhere
// import sampleReducer from './sample';

// Combine all reducers
const rootReducer = combineReducers({
  preloader: preloaderReducer,
  // Add other reducers here
});

export default rootReducer;