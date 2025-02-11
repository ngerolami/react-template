```jsx
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

/**
 * Configure and create the Redux store.
 */
const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  );

  return store;
};

export default configureStore;
```