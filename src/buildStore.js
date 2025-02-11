```jsx
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Assuming you have a root reducer

// Import any necessary middleware
// ...

const store = createStore(
  rootReducer,
  applyMiddleware(
    // Apply any necessary middleware here
    // ...
  )
);

export default store;
```