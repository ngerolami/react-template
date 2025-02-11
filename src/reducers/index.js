```jsx
import { combineReducers } from 'redux';
import newPageReducer from './newPageReducer'; // Import the new page reducer

// Remove the sample reducer if it's not being used
// import sampleReducer from './sample';

/**
 * Root reducer that combines all reducers in the application.
 */
const rootReducer = combineReducers({
  newPage: newPageReducer, // Add the new page reducer
  // sampleReducer, // Remove this line if the sample reducer is not needed
});

export default rootReducer;
```