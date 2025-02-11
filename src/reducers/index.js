import { combineReducers } from 'redux';
import preLoaderReducer from './preLoader';

// Assuming you have other existing reducers
import existingReducer1 from './existingReducer1';
import existingReducer2 from './existingReducer2';

/**
 * Root reducer that combines all reducers
 */
const rootReducer = combineReducers({
  preLoader: preLoaderReducer,
  // Add other existing reducers here
  existingReducer1,
  existingReducer2,
});

export default rootReducer;