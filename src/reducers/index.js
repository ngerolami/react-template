```jsx
import { combineReducers } from 'redux';
import newPageReducer from './newPageReducer'; // Import the new page reducer

// Import other existing reducers
// ...

const rootReducer = combineReducers({
  newPage: newPageReducer, // Add the new page reducer
  // Add other existing reducers
  // ...
});

export default rootReducer;
```