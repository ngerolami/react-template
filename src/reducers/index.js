```jsx
import { combineReducers } from 'redux';
// Import other reducers
import preLoaderReducer from './preLoader';

// Combine all reducers
const rootReducer = combineReducers({
  // Add other reducers here
  preLoader: preLoaderReducer, // Add the preloader reducer
});

export default rootReducer;
```