import { combineReducers } from 'redux';
import preloaderPageReducer from './preloaderPageReducer';

// Remove the sample reducer import if not used elsewhere
// import sampleReducer from './sample';

/**
 * rootReducer
 *
 * The root reducer that combines all the reducers in the application.
 * Add new reducers to the combineReducers function as needed.
 */
const rootReducer = combineReducers({
  // Add your existing reducers here
  preloaderPage: preloaderPageReducer,
});

export default rootReducer;