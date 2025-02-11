```javascript
import { combineReducers } from 'redux';
import newPageReducer from './newPageReducer';
// Import other reducers as needed

/**
 * Root reducer
 * Combines all reducers into a single reducer function.
 */
const rootReducer = combineReducers({
  newPageData: newPageReducer,
  // Add other reducers here
});

export default rootReducer;
```