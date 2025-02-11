```javascript
import { combineReducers } from 'redux';
import preLoaderReducer from './preLoader';
import newPageReducer from './newPage';

// Remove the sample reducer if it's not used elsewhere
// import sampleReducer from './sample';

const rootReducer = combineReducers({
  preLoader: preLoaderReducer,
  newPage: newPageReducer,
  // Add any other reducers you have
});

export default rootReducer;
```